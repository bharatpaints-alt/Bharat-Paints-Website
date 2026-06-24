import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Paint Expert - Bharat Paints",
  description:
    "Free AI-powered paint consultation. Get instant product recommendations, pricing, and expert advice 24/7.",
};

export default function ChatbotPage() {
  return (
    <div className="w-full min-h-screen bg-cream">
      {/* Chatbot embedded as iframe */}
      <div className="w-full h-screen">
        <iframe
          src="/chatbot/index.html"
          title="Bharat Paints AI Paint Expert"
          className="w-full h-full border-0"
          style={{ minHeight: "100vh" }}
        />
      </div>
    </div>
  );
}
