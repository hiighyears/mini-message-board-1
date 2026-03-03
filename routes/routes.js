const express = require('express');
const router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


router.get('/',(req,res)=>{
    res.render('index' , {messages,title: "Mini Messageboard"});
})


router.get('/new',(req,res)=>{
    res.render('form');
})

router.post('/new',(req,res)=>{
    messages.push({ text: req.body.message, user: req.body.username, added: new Date() });
    res.redirect('/');
})

router.get("/new/messages", (req, res) => {
  const index = Number(req.query.index);
  const message = messages[index];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { message, title: "Message Details" });
});


module.exports = router; 