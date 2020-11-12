//import mongoose, { mongo } from 'mongoose'
const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const addNewAccessCodeSchema = new Schema({
    accessCode : 
    {
        type: String
    }
})

module.exports = addNewAccessCodeSchema;