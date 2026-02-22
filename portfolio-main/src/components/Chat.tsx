import { useState, useEffect } from "react";
import axios from "axios";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { sender: string; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false); 
  useEffect(() => {
    axios.get("http://localhost:8000/chat-history")
    .then(res => {
      const formatted = res.data.map((msg:any) => ({
        sender: msg.sender,
        text: msg.message
      }));
      setMessages(formatted);
    })
    .catch(err => {
      console.error("Error loading chat history:", err);
    });
  }, []);
   

useEffect(() => {
  axios.get("http://localhost:8000/chat-history")
  .then(res => {
    const formattedMessages = res.data.map((msg:any) => ({
      sender: msg.sender,
      text: msg.message
    }));
    setMessages(formattedMessages);
  });
}, []);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMessage = {
      sender: "user",
      text: message
    };
    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/chat",
        { message }
      );

      const aiMessage = {
        sender: "ai",
        text: response.data.response
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          text: "Error connecting to AI."
        }
      ]);
    }
    setLoading(false);
  };


  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-gray-200 text-black"
            }`}
          >
            <pre className="whitespace-pre-wrap">
              {msg.text || ""}
            </pre>
          </div>
        ))}
        {loading && (
          <div className="text-gray-500">
            AI is typing...
          </div>
        )}

      </div>
      <div className="border-t p-3 flex gap-2">
        <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter") sendMessage();
          }}
          className="flex-1 border px-3 py-2 rounded"
          placeholder="Ask about my resume..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>

      </div>
    </div>
  );
}