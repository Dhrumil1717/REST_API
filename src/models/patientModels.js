//import mongoose, { mongo } from 'mongoose'
const mongoose = require ('mongoose')
const Schema = mongoose.Schema;



const addNewPatientSchema = new Schema ({
    firstName : 
    {
        type: String,
        required: 'Enter name'
    },
    lastName : 
    {
        type: String,
        required: 'Enter name'
    },
    dateOfBirth : 
    {
        type: String
    },

    dateOfAdmission : 
    {
        type: Date,
        default: Date.now
    },
    gender: 
    {
        type: String,
    },

    address: 
    {
        type: String
    },

    patientContact: 
    {
        type: Number
    },

    height: 
    {
        type: Number
    },
    weight: 
    {
        type: Number
    },
    currentlyOnMedication: 
    {
        type: Boolean
    },
    emergencyContact: 
    {
        type: Number
    },

    emergencyFirstName : 
    {
        type: String
    },
    emergencyLastName : 
    {
        type: String
    },
    Relationship : 
    {
        type: String
    },

    diseases : 
    {
        type: String
    },
    symptoms : 
    {
        type: String,
    },
    medicalAllergies : 
    {
        type: String
    },

    consumeAlcohol: 
    {
        type: Boolean
        
    },
    consumeTobaccoOrSmoke: 
    {
        type: Boolean
    },
    condition:
    {
        type: String
    },
    bloodPressure:
    {
        type:String
    },
    respiratoryRate:
    {
        type:String
    },
    bloodOxygenLevel:
    {
        type:String
    },
    heartbeatRate :
    {
        type:String
    }
    

});


module.exports = addNewPatientSchema;

