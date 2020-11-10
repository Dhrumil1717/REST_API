//import { addNewPatient,getPatient,getPatientWithId,updatePatient,deletePatient} from '../contorllers/patientControllers'
const { addNewPatient,getPatient,getPatientWithId, updatePatientCondition,updatePatient,deletePatient,getAccessCode,addNewAccessCode, getPatientWithName} = require('../contorllers/patientControllers');
const routes = (app) => 
{
        app.route('/patients')
            .get(getPatient)        //calling the methods to add or fetch a patient
            .post(addNewPatient),

        app.route('/accesscode')
            .get(getAccessCode)
            .post(addNewAccessCode),
            

        app.route('/patients/:firstName')  //calling the methods to fetch/update/delete a patient with a name
            
            .get(getPatientWithName)
           
            .put(updatePatientCondition) 
            .delete(deletePatient)

        app.route('/patientss/:firstName')
            .put(updatePatient)
            .get(getPatientWithId)
}

//export default routes
module.exports=routes