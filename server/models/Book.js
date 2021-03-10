const mongoose = require('mongoose');
const slugify = require('slugify');

const Bookschema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: [50, "Book title can't be more than 50 characters"],
  },
  slug: String,
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  published: { type: Boolean, default: false },
  subtitle: {
    type: String,
    required: [true, "Please add a subtitle"],
    trim: true,
    maxlength: [50, "Book subtitle can't be more than 50 characters"],
  },
  author: {
    type: String,
    required: [true, "Please add an author"],
    trim: true,
  },
  ISBN: {
    type: String,
    required: [true, "Please add an ISBN number"],
    trim: true,
    maxlength: [13, "ISBN number can't be more than 13 characters"]
  }
}, {
  timestamps: true,
});

Bookschema.pre("create", async (next) => {
  console.log(this.title);
  this.slug = await slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model('Book', Bookschema);
