from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from database import engine, SessionLocal
from models import Chat, Base
from chat import ask_ai

Base.metadata.create_all(bind=engine)
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str

@app.api_route("/", methods=["GET", "HEAD"])
def home():
    return {"message": "Backend running"}

@app.post("/chat")
def chat(request: ChatRequest):
    db = SessionLocal()
    try:
        user_message = request.message
        ai_response = ask_ai(user_message)
        user_chat = Chat(
            sender="user",
            message=user_message
        )
        db.add(user_chat) 
        ai_chat = Chat(
            sender="ai",
            message=ai_response
        )
        db.add(ai_chat)
        db.commit()
        return {
            "response": ai_response
        }
    finally:
        db.close()

@app.get("/chat-history")
def get_chat_history():
    db = SessionLocal()
    try:
        chats = db.query(Chat).all()
        return chats
    finally:
        db.close()

@app.delete("/clear-chat")
def clear_chat():
    db = SessionLocal()
    try:
        db.query(Chat).delete()
        db.commit()
        return {
            "message": "Chat history cleared"
        }
    finally:
        db.close()