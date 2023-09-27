const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const News = model("News", newsSchema);

module.exports = News;
