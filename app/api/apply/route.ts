import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Set file path in a data directory
    const filePath = path.join(process.cwd(), "data", "applications.json");

    // Ensure the data directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Read existing applications or create a new array
    const existing = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : [];

    // Add new application with timestamp
    existing.push({ ...data, createdAt: new Date().toISOString() });

    // Save back to JSON file
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

    return NextResponse.json({ message: "Application received successfully" });
  } catch (error) {
    console.error("Error saving application:", error);
    return NextResponse.json({ error: "Failed to save application" }, { status: 500 });
  }
}

