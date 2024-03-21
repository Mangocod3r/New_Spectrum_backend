const stu = require('../models/other').stu;

// Create a new stu entry
exports.createStu = (req, res) => {
  const newStu = new stu({
    title: req.body.title,
    my_idea: req.body.my_idea,
    name: req.body.name,
    img: req.body.img,
  });

  newStu
    .save()
    .then((doc) => res.json(doc))
    .catch((err) => res.status(500).json({ error: err.message }));
};

// Get all stu entries
exports.getAllStu = (req, res) => {
  stu.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(500).json({ error: err.message }));
};

// Get all stu ideas
exports.getAllStuIdeas = (req, res) => {
  stu.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(500).json({ error: err.message }));
};


// Get all stu ideas// Get all stu ideas by header
exports.getAllStuIdeasByHeader = (req, res) => {
  const header = req.params.header;

  stu.find({ title: header })
    .then((items) => {
      res.json(items);
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};


// Update a stu idea by ID
exports.updateStuIdea = async (req, res) => {
  try {
    const updatedIdea = await stu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedIdea);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Set status to "pending" for stu entries with missing or empty status
exports.updateStuStatus = (req, res) => {
  stu.updateMany(
    { $or: [{ "status": { $exists: false } }, { "status": null }, { "status": "" }] },
    { $set: { "status": "pending" } },
    (err, numAffected) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while updating stu status" });
      } else {
        console.log("Number of documents updated: " + numAffected.nModified);
        res.json({ message: "Stu status updated successfully" });
      }
    }
  );
};