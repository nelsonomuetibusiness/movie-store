import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GEt") {
    return res.end();
  }

  try {
    const currentUser = await serverAuth(req, res);

    return res.json(currentUser);
  } catch (error) {
    console.log(error);
    return res.end();
  }
}
