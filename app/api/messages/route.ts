import { auth } from "@/auth";
import { db } from "@/lib/db";
// import { pusherServer } from "@/lib/pusher";
// import { toPusherKey } from "@/lib/utils";
import { NextResponse } from "next/server";
// import MindsDB from "mindsdb-js-sdk";
// import connect from "@/lib/create-mind";
import { getUserById, getUserByUsername } from "@/data/user";
import { pusherServer } from "@/lib/pusher";
import { toPusherKey } from "@/lib/utils";

export async function POST (req: Request) {
    try {
        const session = await auth();
        const currentUser = session?.user as any;
        
        if(!currentUser) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { values, chatId } = body;

        const content = values.content;

        if(!content || !chatId) {
            return new NextResponse("Invalid message details!", { status: 400 });
        }

        const chat = await db.chat.findUnique({
            where: {
                id: chatId
            }
        });

        if(!chat) {
            return new NextResponse("Invalid chat!", { status: 400 });
        }

        const user = await getUserById(currentUser.id);

        if(!user) {
            return new NextResponse("Invalid user!", { status: 400 });
        }

        const chatMessage = await db.message.create({
            data: {
                content,
                chatId,
                userId: user.id
            }
        });

        await pusherServer.trigger(toPusherKey(chatId), "therabot", chatMessage);

        // get response from mindsdb

        // send response to pusher

        return new NextResponse("Message sent successfully!", { status: 200 });
    }

    catch(e) {
        console.log(e);
        return new NextResponse("An error occurred!", { status: 500 });
    }
}