import { ApplicationCreation, Json } from "../../lib/api-types";
import { applications } from "../../lib/server/models";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body: Json<ApplicationCreation> = req.body;
  await (await applications).insertOne(body);
  res.status(201).end();
}
