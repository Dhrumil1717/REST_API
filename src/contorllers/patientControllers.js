const mongoose = require('mongoose');
const addNewPatientSchema = require('../models/patientModels');
const addNewAccessCodeSchema = require('../models/patientModels')
// import {addNewPatientSchema} from '../models/patientModels';

const Patient = mongoose.model('Patient',addNewPatientSchema);
const AccessCode= mongoose.model('AccessCode',addNewAccessCodeSchema);

 const addNewPatient = (req,res) => 
{
    let newPatient = new Patient(req.body)
    newPatient.save((err,patient)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json(patient);
        console.log("POST request :Entry created in database ")
    });
}

const getPatient = (req,res) => 
{
    Patient.find({},(err,patient)=>
        {
            if(err)
            {
                res.send(err);
            }
            res.json(patient);
            console.log("GET request :Found all Patients")
        });  
}


const addNewAccessCode = (req,res) => 
{
    let newAccessCode = new AccessCode(req.body)
    newAccessCode.save((err,accessCode)=>
    {
        if(err)
        {
            res.send(err);
        }
        res.json(accessCode);
        console.log("POST request :Entry created in database ")
    });
}

 const getAccessCode = (req,res) => 
{
    AccessCode.find({},(err,accessCode)=>
        {
            if(err)
            {
                res.send(err);
            }
            res.json(accessCode);
            console.log("GET request :Found all accessCode")
        });  
}

 const getPatientWithId = (req,res) => 
{
    Patient.findById(req.params.patientID,(err,patient)=>
        {
            if(err)
            {
                res.send(err);
            }
            res.json(patient);
            console.log("GET request :Found patient by id ");
        });  
}

 const updatePatient= (req,res) => 
{
    Patient.findOneAndUpdate({_id:req.params.patientID},req.body,{new:true , useFindAndModify:false},(err,patient)=>
        {
            if(err)
            {
                res.send(err);
            }
            res.json(patient);
            console.log("PUT request :Update patient by id ");
        });  
}

 const deletePatient = (req,res) => 
{
    Patient.remove({_id:req.params.patientID},(err,patient)=>
        {
            if(err)
            {
                res.send(err);
            }
            res.json({message :'Successfully deleted patient record'});
            console.log("DELETE request :Delete patient by id ")
        });  
}
module.exports = {addNewPatient,getPatient,getPatientWithId,updatePatient,deletePatient,addNewAccessCode,getAccessCode}