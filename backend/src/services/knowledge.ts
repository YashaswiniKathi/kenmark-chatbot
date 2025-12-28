import fs from "fs";
import path from "path";
import { loadExcelFAQs } from "./excel";

const sitePath = path.join(__dirname, "../data/siteContent.json");

export function getKnowledge() {
  const site = JSON.parse(fs.readFileSync(sitePath, "utf-8"));
  const faqs = loadExcelFAQs();

  return { site, faqs };
}
