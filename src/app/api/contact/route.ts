import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Contact Form Data:", body);

    return NextResponse.json({
      success: true,
      message: "Contact enquiry received successfully",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to submit contact enquiry" },
      { status: 500 }
    );
  }
}