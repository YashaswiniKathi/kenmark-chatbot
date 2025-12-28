import XLSX from "xlsx";
import path from "path";

export type FAQ = {
  Category: string;
  Question: string;
  Answer: string;
};

const excelPath = path.join(__dirname, "../data/faq.xlsx");

export function loadExcelFAQs(): FAQ[] {
  const workbook = XLSX.readFile(excelPath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet) as FAQ[];
}
