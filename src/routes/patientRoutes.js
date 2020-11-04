//import { addNewPatient,getPatient,getPatientWithId,updatePatient,deletePatient} from '../contorllers/patientControllers'
const { addNewPatient,getPatient,getPatientWithId,updatePatient,deletePatient,getAccessCode,addNewAccessCode} = require('../contorllers/patientControllers');
const routes = (app) => 
{
        app.route('/patients')
            .get(getPatient)        //calling the methods to add or fetch a patient
            .post(addNewPatient),

        app.route('/accesscode')
            .get(getAccessCode)
            .post(addNewAccessCode),
            

        app.route('/patients/:patientID')  //calling the methods to fetch/update/delete a patient with a particular id
            .get(getPatientWithId)
            .put(updatePatient)  
            .delete(deletePatient)
}

//export default routes
module.exports=routes