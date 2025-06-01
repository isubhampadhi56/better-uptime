// index.ts or main.ts
import { prismaClient } from "db/client";
import {app} from "./app"
const PORT = process.env.PORT || 3000;
async function main() {
  try {
    await prismaClient.$connect(); 
    console.log("✅ Connected to database");

    // Now start the server
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to database", error);
    process.exit(1); 
  }
}

main();
