const { header } = require("express/lib/request");

exports.create =  (req, res) => {
    res.send({message:"create header"});
};

exports.findAll = async (req, res) => {

    res.send({message: "findAll handler"});
};

exports.findOne = (req, res) => {
   
    res.send({message: "findOne handler"});
};

exports.update = (req, res) => {

    res.send({message: "update handler"});

};

exports.delete = (req, res) => {
    res.send({message: "delete handler"});

};

exports.deleteAll = (_req, res) => {
    res.send({message: "deleteAll handler"});
}
exports.findAllFavorite = (req, res) => {
    res.send({message: "findAllFavorite handler"});
};