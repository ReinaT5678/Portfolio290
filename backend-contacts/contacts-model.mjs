
// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'The contacts database could not be connected to the server.' });
    } else  {
        console.log('Success: The contacts database is successfully connected!');
    }
});

// SCHEMA: Define the collection's schema.
const contactSchema = mongoose.Schema({
	name:    { type: String, required: true },
	address:     { type: String, required: true },
	number: { type: Number, required: true },
    birthday: { type: Date, required: true, default: Date.now}
});


const contacts = mongoose.model('Contacts', contactSchema);


// CREATE model *****************************************
const createContact = async (name, address, number, birthday) => {
    const contact = new contacts({ 
        name: name, 
        address: address, 
        number: number,
        birthday: birthday
    });
    return contact.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveContacts = async () => {
    const query = contacts.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveContactByID = async (_id) => {
    const query = contacts.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteContactById = async (_id) => {
    const result = await contacts.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateContact = async (_id, name, address, number, birthday) => {
    const result = await contacts.replaceOne({_id: _id }, {
        name: name,
        address: address,
        number: number,
        birthday: birthday
    });
    return { 
        _id: _id, 
        name: name,
        address: address,
        number: number,
        birthday: birthday 
    }
}

// EXPORT the variables for use in the controller file.
export { createContact, retrieveContacts, retrieveContactByID, updateContact, deleteContactById }