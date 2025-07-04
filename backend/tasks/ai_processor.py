from datetime import datetime, timedelta
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:1234/v1",
    api_key="lm-studio",
)


class TaskAIProcessor:
    def __init__(self, context_entries):
        self.context_entries = context_entries

    def generate_prompt(self, task_title, description):
        context_text = "\n".join(
            [
                f"[{entry['source_type']}] {entry['content']}"
                for entry in self.context_entries
            ]
        )
        prompt = f"""
You are an intelligent productivity assistant. Analyze the following context and improve the task below.

Context:
{context_text}

Task:
Title: {task_title}
Description: {description}

Output JSON:
{{
  "priority_score": (0 to 100),
  "suggested_deadline": "YYYY-MM-DD",
  "category": "One-word category suggestion",
  "enhanced_description": "Improved task description"
}}
"""
        return prompt

    def analyze_task(self, task_title, description):
        prompt = self.generate_prompt(task_title, description)

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
        )

        content = response.choices[0].message.content

        import json

        try:
            result = json.loads(content)
        except json.JSONDecodeError:
            result = {
                "priority_score": 50,
                "suggested_deadline": (datetime.today() + timedelta(days=2)).strftime(
                    "%Y-%m-%d"
                ),
                "category": "General",
                "enhanced_description": description,
            }

        return result
