import axios from "axios";

export async function sendMessage(message: string) {
  const res = await axios.post("http://localhost:5000/chat", {
    message,
  });
  return res.data.reply;
}
