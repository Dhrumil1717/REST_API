import express from 'express'
import routes from './src/routes/patientRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();
const PORT = 40004;

//Mongoose connection
mongoose.Promise=global.Promise  //we are going to wait for result when we are connecting to mongo db
//mongoose.connect('mongodb://localhost/PatientsDB', //conneting a DB with name "PatientsDB"
mongoose.connect('mongodb+srv://Dhrumil:12345@cluster0.oxuv1.mongodb.net/PatientsDB?retryWrites=true&w=majority',
{
    useNewUrlParser : true,
    useUnifiedTopology: true
});

//body parser setup
app.use(bodyParser.urlencoded({extended:true})); //Parsing the string in URLencoded form
app.use(bodyParser.json()); //Parsing the string in JSON format


routes(app);

app.get( '/',(req,res) => res.send(`Node and express running at port ${PORT}`));

app.listen(PORT,() => 
console.log(`server is running at port ${PORT}`));