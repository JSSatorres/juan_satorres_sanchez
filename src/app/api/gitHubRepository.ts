// app/api/github/route.ts (si usas el app directory)
import { NextResponse } from "next/server";

export async function GET() {
  const username = "TU_GITHUB_USERNAME";
  const token = process.env.GITHUB_TOKEN;

  // Llamada a la API de GitHub
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: token ? `token ${token}` : undefined,
      },
    }
  );

  if (!response.ok) {
    return NextResponse.error();
  }

  const repos = await response.json();

  return NextResponse.json(repos);
}
