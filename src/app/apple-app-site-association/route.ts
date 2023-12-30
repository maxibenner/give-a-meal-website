import { NextApiRequest, NextApiResponse } from "next"

const association = {
    webcredentials: {
        apps: [
            "6449883589.com.fotura.giveamealbusiness"
        ]
    }
}

export async function GET(request: Request) {
    return new Response(JSON.stringify(association), {
        headers: {
            "Content-Type": "application/json"
        }
    })

}