const adminModel = require('../models/admin');
const { findOneAndDelete, findOne } = require('../models/user');

const addAdmin = (body) => {
    const doc = new adminModel(body);
    const querry = {_id: doc._id};
    return adminModel.findOneAndUpdate(querry, doc,{
        upsert: true,
        new:true
    });
};

const updateAdmin = (body) =>{
    const querry = {_id: body._id};
    return adminModel.findOneAndUpdate(querry, {
        new:true
    });
};

const delAdmin = (filter) => {
    return adminModel.findOneAndDelete(filter);
};

const getAdmin = (filter) =>{
    return adminModel.findOne(filter);
};

const getAllAdmins = () =>{
    return adminModel.find();
};

module.exports = {
    addAdmin, 
    updateAdmin,
    delAdmin,
    getAdmin,
    getAllAdmins
};