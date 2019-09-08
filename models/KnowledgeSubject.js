const mongoose = require("mongoose");
const { Schema } = mongoose;

const knowledgeModuleSchema = new Schema({
  name: String,
  catalogNumber: String,
  subjectId: {
    type: Schema.Types.ObjectId,
    ref: "KnowledgeSubject"
  },
  topics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Topic"
    }
  ],
  dateAdded: Date,
  lastUpdated: Date
});

const knowledgeSubjectSchema = new Schema({
  name: String,
  catalogNumber: String,
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "KnowledgeCategory"
  },
  modules: [knowledgeModuleSchema],
  dateAdded: Date,
  lastUpdated: Date
});

mongoose.model("knowledge-subjects", knowledgeSubjectSchema);
