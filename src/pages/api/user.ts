import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json({
      id: "user_123",
      name: "FE SKILL TEST",
      email: "test@gmail.com",
      publicKey: "ssh-rsa AAAAB3Nza...userKey",
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
