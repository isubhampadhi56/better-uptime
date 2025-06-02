import { z } from "zod";
import { websiteRepo } from "db/client";

const addWebsiteSchema = z.object({
  url: z.string().url()
});
export async function addWebsite(addWebsite:any) {
    const addWebsiteReq = await addWebsiteSchema.parseAsync(addWebsite);
    const newWebsite = websiteRepo.create ({
        url: addWebsiteReq.url,
    });
    const website = await websiteRepo.save(newWebsite);
    return website;
}
