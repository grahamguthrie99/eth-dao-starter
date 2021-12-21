import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import dotenv from "dotenv";
dotenv.config();

const bundleDrop = sdk.getBundleDropModule(
    process.env.BUNDLE_DROP_ADDRESS,
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The Eternal Supplement",
        description: "This NFT will give you access to FitDAO!",
        image: readFileSync("scripts/assets/fitDAO.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()