const Post1 = require('../models/other').post1;

exports.createPost = (req, res) => {
  const newPost = new Post1({
    img: req.body.img,
    title: req.body.title,
    sub: req.body.sub,
  });

  newPost.save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};

const invreq = require('../models/other').invreq;

exports.createProp = (req, res) => {
  const newPost = new invreq({
    projectName: req.body.projectName,
    message: req.body.message,
    name: req.body.name,
    amount: req.body.amount
  });

  newPost.save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
};

