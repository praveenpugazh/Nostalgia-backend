import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  selectedFile: String,
  linkCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
