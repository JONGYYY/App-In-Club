import { NextResponse } from "next/server";

export function GET() {
	return NextResponse.redirect(new URL("/programs/lectures-and-conferences", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
}


