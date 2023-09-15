require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
//const cors = require('cors')({ origin: true });
// const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cors())
app.use(cors(corsOptions));

app.use((req, res, next) => {
  // Set CORS headers
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend URL
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })


// routes
// app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

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
  title:String,
  my_idea:String,
  name:String,
  overview: String,
  img:String,
  status: {
    type: String,
    default: 'pending'
  }});

const stu = mongoose.model("stu_idea", stuidea);

const angelmain = mongoose.Schema({
  projectName:String,
  entrepreneur:String,
  investor:String,
  amount: {
    type: String,
    default: '0'
  },
  status: {
    type: String,
    default: 'pending'
  }});

const angel = mongoose.model("investor_history", angelmain);

const inv_req = mongoose.Schema({
  projectName:String,
  name:String,
  investor:String,
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
  title:String,
  start:String,
  end:String,
  description: String,
 });

const pitch = mongoose.model("pitch_events", pitch_evt);

app.get("/", (req, res) => {
  res.send("express is here");
});


app.post("/create", (req, res) => {
  const newPost = new Post({
    img: req.body.img,
    p1: req.body.p1,
    p2: req.body.p2,
    p3: req.body.p3,
    sub: req.body.sub,
    text: req.body.text,
    title: req.body.title,
    header:req.body.header,
    description: req.body.description,
    overview: req.body.overview,
    start: req.body.start,
    end: req.body.end,
    name:req.body.name,
  });
  newPost
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.post("/prop", (req, res) => {
  const newPost = new invreq({
    projectName: req.body.projectName,
    message: req.body.message,
    // p2: req.body.p2,
    // p3: req.body.p3,
    // sub: req.body.sub,
    // text: req.body.text,
    // title: req.body.title,
    // header:req.body.header,
    // description: req.body.description,
    // overview: req.body.overview,
    // start: req.body.start,
    // end: req.body.end,
    name:req.body.name,
  });
  newPost
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.get("/posts", (req, res) => {
  Post.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.post("/stu_km", (req, res) => {
  console.log("hey in stu km");
  const newPost = new stu({
    title: req.body.title,
    my_idea: req.body.my_idea,
    name: req.body.name,
    img:req.body.img,
    // image:req.body.name,
    // status: req.body.status,
    // description: eq.body.description,
    // my_idea:req.body.my_idea,
    // myidea:req.body.myidea,

  });

  newPost
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.post("/create_main", (req, res) => {
  const newPost = new Post1({
    img: req.body.img,
    title: req.body.title,
    sub: req.body.sub,
  });

  newPost
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.get(`/posts/:title`, (req, res) => {
  // const {title} = useParams()
  Post.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});
app.get("/posts", (req, res) => {
  // const {title} = useParams()
  Post.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get("/posts_main", (req, res) => {
  Post1.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get("/stu_id", (req, res) => {
  stu.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get("/stu_ideas", (req, res) => {
  stu.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

// app.post("/create", (req, res) => {
//   const newPost = new Post({
//     img: req.body.img,
//     p1: req.body.p1,
//     p2: req.body.p2,
//     p3: req.body.p3,
//     sub: req.body.sub,
//     text: req.body.text,
//     title: req.body.title,
//     description: req.body.description,
//     overview: req.body.overview,
//     start: req.body.start,
//     end: req.body.end,
//     name:req.body.name,
//   });
//   newPost
//     .save()
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err));
// });

app.delete("/delete/:id", (req, res) => {
  console.log(req.params);
  Post.findByIdAndDelete({ _id: req.params.id })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      description: req.body.description,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

// app.post(`/stu_ideas/:id`, (req,res) =>{
//   // const id = req.params.id;
//   // const result =  Idea.findOneAndUpdate({_id:id}, {status:'Accepted'}, {new:true});    if(!result){
//   //   if(!result){
//   //     res.status(404).send('Idea not found');
//   //   }
//   //   else{
//   //     res.status(200).json(result);
//   //   }
//   // }
//   try {
//     const { id } = req.params;
//     const idea = await Idea.findByIdAndUpdate(id, { status: 'accepted' }, { new: true });
//     if (!idea) {
//       return res.status(404).send({ error: 'Idea not found' });
//     }
//     res.send(idea);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Server error' });
//   }
// });

// app.put('/stu_ideas/:id', (req, res) => {
//   stu.findByIdAndUpdate(
//     { _id: req.params.id },
//     {
//       status: req.body.status,
//       my_idea: req.body.my_idea,
//     }
//   )
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err));
// });

app.put('/stu_ideas/:id', async (req, res) => {
  try {
    const updatedIdea = await stu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedIdea);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put('/api/investment-requests/:id', async (req, res) => {
  try {
    const updatedIdea = await invreq.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedIdea);
  } catch (err) {
    res.status(500).send(err);
  }
});

// app.put('/stu_ideas/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;

//     // Validate input
//     if (!status) {
//       return res.status(400).json({ message: 'Status is required' });
//     }

//     // Find student's idea by ID and update status
//     const updatedIdea = await stu.findByIdAndUpdate(id, { status }, { new: true });

//     if (!updatedIdea) {
//       return res.status(404).json({ message: 'Student idea not found' });
//     }

//     res.json(updatedIdea);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.put('/stu_ideas/:id', (req, res) => {
//   // console.log("hi");

//   const id = req.params.id;
//   const { status } = req.body;

//   // Find the student idea by ID and update its status
//   stu.findByIdAndUpdate(id, { status }, { new: true })
//     .then((updatedIdea) => {
//       console.log("hi");
//       res.json(updatedIdea);
//     })
//     .catch((err) => {
//       console.log("hiiii");
//       res.status(500).json({ error: err.message });
//     });
// });
// stu.updateMany({}, { $set: { "status": "pending" }}, { multi: true }, function(err, numAffected) {
//   console.log("Number of documents updated: " + numAffected.nModified);
// });
// stu.updateMany({ "status": { "$ne": "pending" } }, { "$set": { "status": "pending" }}, function(err, numAffected) {
//   console.log("Number of documents updated: " + numAffected.nModified);
// });
// stu.updateMany({ "status": { "$exists": false, "$ne": "pending" } }, { "$set": { "status": "pending" }}, function(err, numAffected) {
//   console.log("Number of documents updated: " + numAffected.nModified);
// });
stu.updateMany({ $or: [ { "status": { $exists: false } }, { "status": null }, { "status": "" } ] }, { $set: { "status": "pending" } }, function(err, numAffected) {
  console.log("Number of documents updated: " + numAffected.nModified);
});

invreq.updateMany({ $or: [ { "status": { $exists: false } }, { "status": null }, { "status": "" } ] }, { $set: { "status": "pending" } }, function(err, numAffected) {
  console.log("Number of documents updated: " + numAffected.nModified);
});

invreq.updateMany({ $or: [ { "amount": { $exists: false } }, { "amount": null }, { "amount": "" } ] }, { $set: { "amount": "0" } }, function(err, numAffected) {
  console.log("Number of documents updated: " + numAffected.nModified);
});

//angel investors

app.get("/api/investment-history", (req, res) => {
  angel.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get("/api/investment-requests", (req, res) => {
  invreq.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

app.get("/api/pitch-events", (req, res) => {
  pitch.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT || 4000, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

