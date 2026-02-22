import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import Chat from "./Chat";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  return (
    <> 
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
      >
        <MessageCircle size={28}/>
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-[350px] h-[500px] bg-white border border-gray-300 rounded-lg shadow-xl flex flex-col z-50">
          <div className="flex justify-between items-center p-3 bg-blue-600 text-white rounded-t-lg">
            <span className="font-semibold">
              AI Resume Assistant
            </span>
            <button onClick={() => setOpen(false)}>
              <X size={20}/>
            </button>

          </div>

          {/* Chat */}
          <div className="flex-1 overflow-hidden">
            <Chat/>
          </div>

        </div>
      )}

    </>
  );
}