import os
import requests
from dotenv import load_dotenv
from resume_context import resume_context

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")


def ask_ai(question):

    try:

        if not OPENROUTER_API_KEY:
            print("ERROR: API key not found")
            return "AI service not configured."

        prompt = f"""
You are an AI assistant for my portfolio.

IMPORTANT RULES:
- Answer ONLY using the resume information provided.
- Format lists using newline characters.
- Each item MUST be on a new line.

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
                "messages": [
                    {"role": "user", "content": prompt}
                ]
            },
            timeout=30
        )

        print("STATUS:", response.status_code)
        print("RESPONSE:", response.text)

        if response.status_code != 200:
            return "AI service error."

        result = response.json()

        return result["choices"][0]["message"]["content"]

    except Exception as e:

        print("AI ERROR:", str(e))

        return "Error connecting to AI."