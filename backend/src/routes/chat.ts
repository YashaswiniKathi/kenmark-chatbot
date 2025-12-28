import express from "express";
import { getKnowledge } from "../services/knowledge";

const router = express.Router();
const knowledge = getKnowledge();

/**
 * Normalize text: lowercase + remove special chars
 */
function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, "");
}

/**
 * Keyword overlap matching for FAQs (fallback only)
 */
function hasKeywordOverlap(query: string, question: string): boolean {
  const queryWords = normalize(query).split(" ");
  const questionWords = normalize(question).split(" ");

  return queryWords.some(word => questionWords.includes(word));
}

router.post("/", (req, res) => {
  const { message } = req.body;
  const query = normalize(message);

  // 1️⃣ SERVICES (highest priority, explicit intent)
  if (query.includes("service") || query.includes("services")) {
    return res.json({
      reply: knowledge.site.services.join(", "),
    });
  }

  // 2️⃣ CONTACT
  if (query.includes("contact") || query.includes("reach")) {
    return res.json({
      reply: knowledge.site.contact,
    });
  }

  // 3️⃣ ABOUT
  if (query.includes("about") || query.includes("company")) {
    return res.json({
      reply: knowledge.site.about,
    });
  }

  // 4️⃣ Excel FAQs (fallback, fuzzy match)
  const faqMatch = knowledge.faqs.find(f =>
    hasKeywordOverlap(query, f.Question)
  );

  if (faqMatch) {
    return res.json({
      reply: faqMatch.Answer,
    });
  }

  // 5️⃣ Unknown
  return res.json({
    reply: "I don’t have that information yet.",
  });
});

export default router;
