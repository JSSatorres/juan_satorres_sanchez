import { NextResponse } from "next/server";

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

console.log( "GITHUB_USERNAME aaaaaaa:", process.env.NEXT_PUBLIC_GITHUB_USERNAME, "GITHUB_TOKEN:aaaaaaa", process.env.NEXT_PUBLIC_GITHUB_TOKEN)


  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: token ? { Authorization: `token ${token}` } : undefined,
    }
  );
   
  if (!response.ok) {
    return NextResponse.error();
  }

  const repos = await response.json();

  return NextResponse.json(repos);
}
