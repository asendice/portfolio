const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const techSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "skills",
  }
);

module.exports = mongoose.model("Tech", techSchema);
