import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import { sendMessage } from "../services/api";

type Message = {
  sender: "user" | "bot";
  text: string;
};

// ⏳ Helper to enforce minimum typing delay
function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! I’m the Kenmark ITan virtual assistant. How can I help you?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // ⭐ Suggested Questions
  const suggestedQuestions = [
    "What services do you offer?",
    "Tell me about Kenmark ITan Solutions",
    "How can I contact the company?",
  ];

  // Core send logic (reusable)
  async function handleSendWithText(text: string) {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const [reply] = await Promise.all([
        sendMessage(text),
        delay(500), // ⏳ minimum typing indicator duration
      ]);

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  // For input box send
  function handleSend() {
    handleSendWithText(input);
  }

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-primary p-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          <MessageCircle />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 h-[450px] bg-white dark:bg-[#121212] text-black dark:text-white rounded-xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-3 bg-primary rounded-t-xl">
            <span className="font-semibold">Kenmark Assistant</span>
            <X className="cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {/* ⭐ Suggested Questions (only at start) */}
            {messages.length === 1 && (
              <div className="space-y-2 mb-3">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendWithText(q)}
                    className="block w-full text-left text-sm bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Chat Messages */}
            {messages.map((msg, index) => (
              <ChatBubble key={index} sender={msg.sender} text={msg.text} />
            ))}

            {loading && <TypingIndicator />}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-700 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-primary px-3 py-1 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
