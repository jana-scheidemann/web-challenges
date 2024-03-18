import dbConnect from "@/pages/db/connect";
import Sight from "@/pages/db/models/Sight";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Sight.find();
    return response.status(200).json(places);
  }

  if (request.method === "POST") {
    try {
      await Sight.create(request.body);
      return response.status(201).json({ message: "Sight created." });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
