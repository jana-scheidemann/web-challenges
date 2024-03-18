import mongoose from "mongoose";

const { Schema } = mongoose;

const sightSchema = new Schema({
  name: { type: String },
  location: { type: String },
  image: { type: String },
  mapURL: { type: String },
  description: { type: String },
});

const Sight = mongoose.models.Sight || mongoose.model("Sight", sightSchema);

export default Sight;
