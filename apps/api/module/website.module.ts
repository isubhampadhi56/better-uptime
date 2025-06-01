import { z } from "zod";
import { prismaClient } from "db/client";

const addWebsiteSchema = z.object({
  url: z.string().url()
});
export async function addWebsite(addWebsite:any) {
    const addWebsiteReq = await addWebsiteSchema.parseAsync(addWebsite);
    const website = await prismaClient.website.create({
        data: {
            url: addWebsite.url,
            timeAdded: new Date()
        }
    });

    return {
        id: website.id
    };
}
