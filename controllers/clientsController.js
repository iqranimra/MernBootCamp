const clientModel = require('../models/client');

const addClient = (body) =>{
    const doc = new clientModel(body);
    const querry = {_id: doc._id};
    return clientModel.findOneAndUpdate(querry, doc, {
        upsert: true,
        new: true
    });
};

const updateClient = (body) =>{
    const querry = {_id: body._id};
    return clientModel.findOneAndUpdate(querry, {
        new:true
    });
};

const delClient = (filter) => {
    return clientModel.findOneAndDelete(filter);
};

const getClient = (filter) => {
    return clientModel.findOne(filter);
};

const getAllClients = () => {
    return clientModel.find();
};

module.exports = {
    addClient,
    updateClient,
    delClient,
    getAllClients,
    getClient
};