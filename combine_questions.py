#!/usr/bin/env python3
"""
VGU Cypher — Question Combiner Script
Combines questions_en.csv and questions_vi.csv into a unified main_questions.csv
"""

import csv
import os
import sys

def combine_questions(en_path='questions_en.csv', vi_path='questions_vi.csv', out_path='main_questions.csv'):
    if not os.path.exists(en_path):
        print(f"Error: {en_path} not found.")
        sys.exit(1)
    if not os.path.exists(vi_path):
        print(f"Error: {vi_path} not found.")
        sys.exit(1)

    with open(en_path, mode='r', encoding='utf-8') as f_en:
        reader_en = list(csv.reader(f_en))
    with open(vi_path, mode='r', encoding='utf-8') as f_vi:
        reader_vi = list(csv.reader(f_vi))

    if len(reader_en) != len(reader_vi):
        print(f"Warning: Row count mismatch! EN has {len(reader_en)} rows, VI has {len(reader_vi)} rows.")

    header_out = [
        'question_title_en',
        'question_title_vi',
        'image',
        'type',
        'choice_1_en',
        'choice_1_vi',
        'choice_2_en',
        'choice_2_vi',
        'choice_3_en',
        'choice_3_vi',
        'choice_4_en',
        'choice_4_vi',
        'correct_answer_en',
        'correct_answer_vi',
        'ignore_ai'
    ]

    combined_rows = [header_out]
    total_questions = min(len(reader_en), len(reader_vi)) - 1

    for i in range(1, total_questions + 1):
        row_en = reader_en[i]
        row_vi = reader_vi[i]

        title_en = row_en[0] if len(row_en) > 0 else ''
        title_vi = row_vi[0] if len(row_vi) > 0 else ''

        image = (row_en[1] if len(row_en) > 1 else '') or (row_vi[1] if len(row_vi) > 1 else '')
        q_type = (row_en[2] if len(row_en) > 2 else '') or (row_vi[2] if len(row_vi) > 2 else '')

        c1_en = row_en[3] if len(row_en) > 3 else ''
        c1_vi = row_vi[3] if len(row_vi) > 3 else ''

        c2_en = row_en[4] if len(row_en) > 4 else ''
        c2_vi = row_vi[4] if len(row_vi) > 4 else ''

        c3_en = row_en[5] if len(row_en) > 5 else ''
        c3_vi = row_vi[5] if len(row_vi) > 5 else ''

        c4_en = row_en[6] if len(row_en) > 6 else ''
        c4_vi = row_vi[6] if len(row_vi) > 6 else ''

        ans_en = row_en[7] if len(row_en) > 7 else ''
        ans_vi = row_vi[7] if len(row_vi) > 7 else ''

        ignore_ai = (row_en[8] if len(row_en) > 8 else '') or (row_vi[8] if len(row_vi) > 8 else '')

        combined_rows.append([
            title_en,
            title_vi,
            image,
            q_type,
            c1_en,
            c1_vi,
            c2_en,
            c2_vi,
            c3_en,
            c3_vi,
            c4_en,
            c4_vi,
            ans_en,
            ans_vi,
            ignore_ai
        ])

    with open(out_path, mode='w', encoding='utf-8', newline='') as f_out:
        writer = csv.writer(f_out, quoting=csv.QUOTE_MINIMAL)
        writer.writerows(combined_rows)

    print(f"Successfully generated {out_path} with {total_questions} questions.")

if __name__ == '__main__':
    combine_questions()
