import axios from "axios";

export async function askOllama(prompt: string): Promise<string> {
  const response = await axios.post("http://localhost:11434/api/generate", {
    model: "mistral",
    prompt,
    stream: false,
  });

  return response.data.response;
}
