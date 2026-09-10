export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.MISTRAL_API_KEY || process.env.mistral_api_key;
    if (!apiKey) {
        return res.status(500).json({ error: 'MISTRAL_API_KEY is not configured on the server.' });
    }

    const { prompt, userMessage, model = 'mistral-small-latest' } = req.body || {};
    if (!prompt || !userMessage) {
        return res.status(400).json({ error: 'Missing prompt or userMessage in request body.' });
    }

    async function queryMistral(targetModel) {
        return fetch('https://api.mistral.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: targetModel,
                temperature: 0.1,
                max_tokens: 180,
                messages: [
                    { role: 'system', content: prompt },
                    { role: 'user', content: userMessage }
                ]
            })
        });
    }

    try {
        let response = await queryMistral(model);
        let usedModel = model;

        // Fallback gracefully if primary model experiences 429 quota or rate limits
        if (!response.ok) {
            console.warn(`[Vercel Serverless] Primary model ${model} failed with ${response.status}. Retrying ministral-8b-latest...`);
            usedModel = 'ministral-8b-latest';
            response = await queryMistral('ministral-8b-latest');
        }

        if (!response.ok) {
            console.warn(`[Vercel Serverless] ministral-8b-latest failed with ${response.status}. Retrying open-mistral-7b...`);
            usedModel = 'open-mistral-7b';
            response = await queryMistral('open-mistral-7b');
        }

        const data = await response.json();
        return res.status(response.status).json({
            ...data,
            _modelUsed: usedModel
        });
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Internal server error' });
    }
}
