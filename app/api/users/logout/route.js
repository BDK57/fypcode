const { NextResponse } = require("next/server");

export async function GET() {

    try {

        const response = NextResponse.json({
            message: "Log Out successfully",
            success: true,
        })
        response.cookies.set("token", "")
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, {
            status: 500
        })
    }
} 