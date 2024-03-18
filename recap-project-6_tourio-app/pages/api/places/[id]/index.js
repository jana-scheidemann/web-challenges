import dbConnect from "@/pages/db/connect";
import Sight from "@/pages/db/models/Sight";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const place = await Sight.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not found" });
    }
    response.status(200).json(place);
  }

  if (request.method === "PUT") {
    const updatedSight = request.body;
    await Sight.findByIdAndUpdate(id, updatedSight);

    return response.status(200).json({ status: "Sight successfully updated." });
  }
}
