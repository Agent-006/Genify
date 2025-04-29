import { createUploadthing, type FileRouter } from "uploadthing/server";
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

const authenticateUser = () => {
    const user = auth();
    console.log("User from core.ts: ",user);

    if (!user) {
        throw new Error("Unauthorized");
    }

    return user;
};

export const ourFileRouter = {
    subaccountLogo: f({
        image: { maxFileSize: "4MB", maxFileCount: 1 },
    })
    .middleware(authenticateUser)
    .onUploadComplete(()=>{}),

    avatar: f({
        image: { maxFileSize: "4MB", maxFileCount: 1 },
    })
    .middleware(authenticateUser)
    .onUploadComplete(()=>{}),

    agencyLogo: f({
        image: { maxFileSize: "4MB", maxFileCount: 1 },
    })
    .middleware(authenticateUser)
    .onUploadComplete(()=>{}),

    media: f({
        image: { maxFileSize: "4MB", maxFileCount: 1 },
    })
    .middleware(authenticateUser)
    .onUploadComplete(()=>{}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;