const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: String,
  options: [
    {
      option: String,
      // Explanation/more details for a particular option. Used to explain why
      // a particular answer is right or wrong.
      explanation: String
    }
  ],
  correctAnswer: String,
  // Array of topic ids that the question pertains to.
  topics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Topic"
    }
  ]
});

const quizSchema = new Schema({
  contentId: {
    type: Schema.Types.ObjectId,
    ref: "Content"
  },
  questions: [questionSchema]
});

mongoose.model("quizzes", quizSchema);
