const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://blogPost:blogPost@cluster0.ilquw.gcp.mongodb.net/testDatas?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
}).then(() => {
    console.log("Mongodb is connected");
}).catch((e) => {
    console.log("Mongodb is not connected");
});