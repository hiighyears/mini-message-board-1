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

const getmessageindex = (req,res) =>{
    res.render('index' , {messages,title: "Mini Messageboard"});
}

const getmessageform = (req,res)=>{
    res.render('form'); }

const submitmessageform = (req,res)=>{
    messages.push({ text: req.body.message, user: req.body.username, added: new Date() });
    res.redirect('/');
}
 
const getmessagedetails =  (req, res) => {
  const index = Number(req.query.index);
  const message = messages[index];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { message, title: "Message Details" });
}


module.exports = {getmessageindex,getmessageform,submitmessageform,getmessagedetails};