import mongoose from'mongoose';
import {addNewPatientSchema} from '../models/patientModels';

const Patient = mongoose.model('Patient',addNewPatientSchema);

export const addNewPatient = (req,res) => 
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

export const getPatient = (req,res) => 
{
    Patient.find({},(err,patient)=>
        {
            if(err)
            {
                res.send(err);
            }
            res.json(patient);
            console.log("GET request :Found all patients")
        });  
}

export const getPatientWithId = (req,res) => 
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

export const updatePatient= (req,res) => 
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

export const deletePatient = (req,res) => 
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