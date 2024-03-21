const angel = require('../models/other').angel;

exports.getInvestmentHistory = (req, res) => {
  angel.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const invreq = require('../models/other').invreq;

exports.getInvestmentRequests = (req, res) => {
  invreq.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

const pitch = require('../models/other').pitch;

exports.getPitchEvents = (req, res) => {
  pitch.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
};

exports.updateInvestmentRequestById = async (req, res) => {
  try {
    const updatedIdea = await invreq.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedIdea);
  } catch (err) {
    res.status(500).send(err);
  }
};