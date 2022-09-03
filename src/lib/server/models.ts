import { MongoClient } from "mongodb";

const clientPromise = new MongoClient(process.env.DB_URI).connect();

export interface Application {
  name: string;
  email: string;
  resume: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
}

export const applications = clientPromise.then((client) =>
  client.db("bitshift").collection<Application>("applications")
);
