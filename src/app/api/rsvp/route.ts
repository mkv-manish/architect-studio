import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("RSVP Form Data:", body);

    return NextResponse.json({
      success: true,
      message: "RSVP submitted successfully",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to submit RSVP" },
      { status: 500 }
    );
  }
}