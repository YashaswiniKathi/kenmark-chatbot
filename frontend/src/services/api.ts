import axios from "axios";

export async function sendMessage(message: string) {
  const res = await axios.post("https://kenmark-chatbot-backend.onrender.com/chat", {
    message,
  });
  return res.data.reply;
}
