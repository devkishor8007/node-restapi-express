const express = require('express');
// const data = require('/model/data');
const route = express.Router();
const data = require('../model/data');

route.get('/', async (req, res) => {
    var getData = await data.find();
    if (getData) return res.status(200).send(getData);
    return res.status(400).send("error");
});

route.post('/post/', async (req, res) => {
    var postData = data({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        laptop: req.body.laptop,
        gender: req.body.gender
    });

    var finalData = await postData.save();
    if (finalData) return res.status(200).send(postData);
    return res.status(400).send("error");
});

route.put('/put/:id', async (req, res) => {
    var id = req.params.id;
    var updateData = await data.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        laptop: req.body.laptop,
        gender: req.body.gender
    }, { new: true });

    if (updateData) return res.status(200).send(updateData);
    return res.status(400).send("error");
});

route.delete('/delete/:id', async (req, res) => {
    var id = req.params.id;
    var deleteData = await data.findByIdAndDelete(id);
    if (!deleteData) return res.json({ msg: "error" });
    return res.status(200).send(deleteData);
});

module.exports = route;