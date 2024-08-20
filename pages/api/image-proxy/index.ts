import { ApiRequestGetImage, ApiResponseGetImage } from "@/shared/types/api";

import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: ApiRequestGetImage,
  res: ApiResponseGetImage
) {
  try {
    const { url } = req.query;

    if (!url) {
      res.status(200).json({ error: "Error url" });
      return;
    }
    const responseImage = await axios.get(url, {
      responseType: "stream",
    });

    if (
      responseImage.status !== 200 ||
      !responseImage.headers["content-type"].includes("image")
    ) {
      res.status(400).json({ error: "Error image" });
      return;
    }
    res.setHeader("Content-Type", responseImage.headers["content-type"]);

    responseImage.data.pipe(res);
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).json({ error: "Error server" });
  }
}
