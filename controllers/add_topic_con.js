const topic_model = require("../models/topic_model.js");


const addToPic =  async (req, res) => {
    
    const topic = await topic_model.find({});

    console.log("topicAdd", topic);
    
    res.render("topices_Page", {topic});
}

const addTopic_Con = async (req, res) => {

    const newTopicAdd = new topic_model({
        topicName : req.body.topicName,
        userId : req.user._id
    })

    try{
        const newTopic = await newTopicAdd.save();
        console.log("newTopic", newTopic);
        res.redirect("/add_TopicForm");
    }catch(error){
        console.log(error);
    }
}


module.exports = { addToPic, addTopic_Con }