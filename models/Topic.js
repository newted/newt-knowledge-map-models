const mongoose = require("mongoose");
const { Schema } = mongoose;

const topicSchema = new Schema({
  name: String,
  category: {
    type: String,
    enum: ["concept, entity, person"],
    default: "entity"
  }
});

mongooose.model("topics", topicSchema);
