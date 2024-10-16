const mongoose = require("mongoose");

const subTopicSchema = mongoose.Schema({
    subTopicName : {
        type: String,
        required: true,
    },
    topicId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "topics",
        required : true,
    },
});

const subTopic_model = mongoose.model("subTopics", subTopicSchema);

module.exports = subTopic_model;
