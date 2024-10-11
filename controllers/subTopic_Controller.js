const subTopic_model = require("../models/subTopic_model");

const addToPicForm = async (req, res) => {

    const subTopic = await subTopic_model.find({});

    console.log("addToPicForm", subTopic);

    res.render("subTopic", { subTopic });
}

const addSubTopic_Con = async (req, res) => {

    const subTopic = new subTopic_model({
        subTopicName : req.body.subTopicName,
        topic : req.body.topic
    })

    try{
        const newSubTopic = await subTopic.save();
        console.log(newSubTopic);
        res.redirect("/add_TopicForm");
    }catch(error){
        console.log(error);
    }
}

const deleteSubTopic_Con = async (req, res) => {

    const { id } = req.params;

    try{
        const deleteSubTopic = await subTopic_model.deleteOne({ _id : id });
        console.log("deleteSubTopic_Con", deleteSubTopic);
        res.redirect("/add_TopicForm");
    }catch(error){
        console.log("deleteSubTopic error found", error);
    }
}
module.exports = { addToPicForm, addSubTopic_Con, deleteSubTopic_Con }