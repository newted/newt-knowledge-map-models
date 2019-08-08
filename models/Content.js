const mongoose = require("mongoose");
const { Schema } = mongoose;

// Name + category denormalized because very unlikely to change
const denormalizedTopicSchema = new Schema(
  {
    name: String,
    category: {
      type: String,
      enum: ["concept", "entity", "person"]
    },
    topicId: {
      type: Schema.Types.ObjectId,
      ref: "Topic"
    }
  },
  { _id: false }
);

const contentSchema = new Schema({
  name: String,
  url: String,
  partOfSeries: Boolean,
  // Name + url field denormalized because very unlikely to change
  contentSeries: {
    name: String,
    url: String,
    contentSeriesId: {
      type: Schema.Types.ObjectId,
      ref: "ContentSeries"
    }
  },
  // Name + url denormalized because very unlikely to change
  contentCreator: {
    name: String,
    url: String,
    contentCreatorId: {
      type: Schema.Types.ObjectId,
      ref: "ContentCreator"
    }
  },
  // Name denormalized because very unlikely to change
  source: {
    name: String,
    mediaId: String,
    sourceId: {
      type: Schema.Types.ObjectId,
      ref: "Source"
    }
  },
  // Name denormalized because very unlikely to change
  knowledgeSubject: {
    name: String,
    knowledgeSubjectId: {
      type: Schema.Types.ObjectId,
      ref: "KnowledgeSubject"
    }
  },
  // Name denormalized because very unlikely to change
  knowledgeModule: {
    name: String,
    knowledgeModuleId: {
      type: Schema.Types.ObjectId,
      ref: "KnowledgeSubject.modules"
    }
  },
  level: Number,
  primaryTopics: [denormalizedTopicSchema],
  secondaryTopics: [denormalizedTopicSchema],
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("content", contentSchema);
