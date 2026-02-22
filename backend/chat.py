
import requests
from resume_context import resume_context

OPENROUTER_API_KEY = "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"

def ask_ai(question):

    prompt = f"""
You are an AI assistant for my portfolio.

IMPORTANT RULES:
- Answer ONLY using the resume information provided.
- Format lists using newline characters.
- Each item MUST be on a new line.
- Do NOT return everything in one line.
- Example format:

Full-stack development
Artificial Intelligence
Backend development

RESUME:
{resume_context}

QUESTION:
{question}

ANSWER:
"""

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "mistralai/mistral-7b-instruct",
            "messages": [{"role": "user", "content": prompt}]
        }
    )

    return response.json()["choices"][0]["message"]["content"]