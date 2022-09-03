import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import { ApplicationCreation, Json } from "../lib/api-types";
import { applications } from "../lib/server/models";

export default async function handler(
  req: GatsbyFunctionRequest<Json<ApplicationCreation>>,
  res: GatsbyFunctionResponse
) {
  await (await applications).insertOne(req.body);
  res.status(201).end();
}
