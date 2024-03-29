import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getFollowingPostsOf } from "@/service/posts";
import { authOptions } from "@/app/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Authentication Error", { status: 401 });
  }

  return getFollowingPostsOf(user.username).then((data) =>
    NextResponse.json(data)
  );
}
