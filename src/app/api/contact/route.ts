import { NextResponse } from "next/server";

export async function POST() {
	// Stub handler: In production, forward to email/service provider
	return NextResponse.json({ ok: true });
}


