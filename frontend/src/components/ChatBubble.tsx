type Props = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatBubble({ sender, text }: Props) {
  const isUser = sender === "user";

  return (
    <div
      className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
        isUser
          ? "ml-auto bg-accent text-white"
          : "mr-auto bg-gray-700 text-white"
      }`}
    >
      {text}
    </div>
  );
}
