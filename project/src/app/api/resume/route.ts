import { NextResponse } from "next/server";
import { readdirSync, readFileSync } from "fs";
import path from "path";

export async function GET() {
  const resumeDir = path.join(process.cwd(), "public", "resume");
  const files = readdirSync(resumeDir);
  const resumeFile = files[0];
  const filePath = path.join(resumeDir, resumeFile);

  const fileBuffer = readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${resumeFile}"`,
    },
  });
}
