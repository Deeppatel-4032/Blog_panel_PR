const subTopic_model = require("../models/subTopic_model");
const topic_model = require("../models/topic_model.js")

const addSubToPicForm = async (req, res) => {

    try {
        const topics = await topic_model.find({});
        console.log("addSubToPicForm topics", topics);

        const subTopics = await subTopic_model.find({}).populate("topicId");
        console.log("addSubToPicForm subTopics", subTopics);

        res.render("subTopic", { topics, subTopics });
    } catch (error) {
        console.log("Error subtopics:", error);
    }
}


const addSubTopic_Con = async (req, res) => {
    try {
        const { topicName, subTopicName } = req.body;
        
        const topic = await topic_model.findById(topicName);
        console.log("addSubTopic_Con topic", topic);
        
        console.log("Topic ID:>>>>>>>>", topic._id);
        const subTopic = new subTopic_model({
            subTopicName: subTopicName,
            topicId : topic._id,    

        });
        const newSubTopic = await subTopic.save();
        console.log("New SubTopic:", newSubTopic);

        res.redirect("/show_TopicseForm");

        
    } catch (error) {
        
        console.log("Error saving addSubTopic_Cona:", error);
    }
};

const showTopics = async (req, res) => {
   try {
     const topics = await topic_model.find({});
     console.log("addSubTopic_Con topics", topics);
 
     const subTopics = await subTopic_model.find({}).populate("topicId");
     console.log("addSubTopic_Con subTopics", subTopics);
 
     res.render("show_Topicse", {topics, subTopics});
   } catch (error) {
     console.log("Error subtopics:", error);
   }
}
const deleteSubTopic_Con = async (req, res) => {
    const { id } = req.params;  
    try {
        const deleteSubTopic = await subTopic_model.deleteOne({ _id: id });

        console.log("Deleted SubTopic:", deleteSubTopic);

        res.redirect("/show_TopicseForm"); 
    } catch (error) {
        
        console.log("Error deleting subtopic:", error);
    }
};

module.exports = { addSubToPicForm, addSubTopic_Con, showTopics, deleteSubTopic_Con };
