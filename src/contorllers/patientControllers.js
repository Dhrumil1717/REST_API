const mongoose = require('mongoose');
const addNewPatientSchema = require('../models/patientModels');
const addNewAccessCodeSchema = require('../models/AcccessCodeModel')


const Patient = mongoose.model('Patient',addNewPatientSchema);
const AccessCode= mongoose.model('AccessCode',addNewAccessCodeSchema);

 const addNewPatient = (req,res) => 
{
    console.log(req.body);
    let newPatient = new Patient(req.body)
    newPatient.save((err,patient)=>
    {
        if(err)
        {
            res.send(err);
        }
        console.log(patient);
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

const getPatientWithName = (req,res) => 
{
    console.log('getname api called =+++>')
    Patient.find({firstName: req.params.firstName},(err,patient)=>
        {
            if(err)
            {
                res.send(err);
            }
            res.json(patient);
            console.log("GET request :Found patient by name");
        });  
}

 const updatePatientCondition= (req,res) => 
{
    Patient.findOneAndUpdate({firstName:req.params.firstName},{$set: {condition: req.body.condition}},{new:true , useFindAndModify:false},(err,patient)=>
        {
            if(err)
            {
                res.send(err);
            }
            res.json(patient);
            console.log("PUT request :Update patient by Name ");
        });  
}

const updatePatient= (req,res) => 
{
    Patient.findOneAndUpdate({firstName:req.params.firstName},req.body,{new:true , useFindAndModify:false},(err,patient)=>
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
    Patient.remove({firstName:req.params.firstName},(err,patient)=>
        {
            if(err)
            {
                res.send(err);
            }
            res.json({message :'Successfully deleted patient record'});
            console.log("DELETE request :Delete patient by name")
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
module.exports = {addNewPatient,getPatient,getPatientWithId,getPatientWithName,updatePatientCondition,updatePatient,deletePatient,addNewAccessCode,getAccessCode}