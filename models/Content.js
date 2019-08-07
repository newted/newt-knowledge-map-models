const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentSchema = new Schema({
  name: String,
  url: String,
  partOfSeries: Boolean,
  contentSeriesId: {
    type: Schema.Types.ObjectId,
    ref: "ContentSeries"
  },
  contentCreatorId: {
    type: Schema.Types.ObjectId,
    ref: "ContentCreator"
  },
  sourceId: {
    type: Schema.Types.ObjectId,
    ref: "Source"
  },
  knowledgeSubjectId: {
    type: Schema.Types.ObjectId,
    ref: "KnowledgeSubject"
  },
  knowledgeModuleId: {
    type: Schema.Types.ObjectId,
    ref: "KnowledgeSubject.modules"
  },
  level: Number,
  primaryTopics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Topic"
    }
  ],
  secondaryTopics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Topic"
    }
  ],
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("content", contentSchema);
