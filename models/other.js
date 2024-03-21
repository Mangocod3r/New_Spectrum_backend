const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  img: String,
  p1: String,
  p2: String,
  p3: String,
  sub: String,
  text: String,
  title: String,
  header: String,
  description: String,
  overview: String,
  start: String,
  end: String,
  name: String,
});

const Post = mongoose.model("Post", postSchema);

const postSchema1 = mongoose.Schema({
  img: String,
  title: String,
  sub: String,
});

const Post1 = mongoose.model("Post1", postSchema1);

const stuidea = mongoose.Schema({
  title: String,
  my_idea: String,
  name: String,
  overview: String,
  img: String,
  status: {
    type: String,
    default: 'pending'
  }
});

const stu = mongoose.model("stu_idea", stuidea);

const angelmain = mongoose.Schema({
  projectName: String,
  entrepreneur: String,
  investor: String,
  amount: {
    type: String,
    default: '0'
  },
  status: {
    type: String,
    default: 'pending'
  }
});

const angel = mongoose.model("investor_history", angelmain);

const inv_req = mongoose.Schema({
  projectName: String,
  name: String,
  investor: String,
  message: String,
  amount: {
    type: String,
    default: '0'
  },
  status: {
    type: String,
    default: 'pending'
  }
});

const invreq = mongoose.model("investor_requests", inv_req);

const pitch_evt = mongoose.Schema({
  title: String,
  start: String,
  end: String,
  description: String,
});

const pitch = mongoose.model("pitch_events", pitch_evt);

module.exports = {
  Post,
  Post1,
  stu,
  angel,
  invreq,
  pitch
};
