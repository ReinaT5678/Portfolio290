// Controllers for the Contact Collection

import 'dotenv/config';
import express from 'express';
import * as contacts from './contacts-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

app.get('/api/activity', async (req, res) => {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity/');
      res.json(response.data);
    } catch (error) {
      res.status(500).send('Error fetching data');
    }
  });

  
// CREATE controller ******************************************
app.post ('/contacts', (req,res) => { 
    contacts.createContact(
        req.body.name, 
        req.body.address, 
        req.body.number,
        req.body.birthday
        )
        .then(contact => {
            console.log(`"${contact.name}" was added to the collection.`);
            res.status(201).json(contact);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Error: the contact name could not be added to the collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/contacts', (req, res) => {
    contacts.retrieveContacts()
        .then(contacts => { 
            if (contacts !== null) {
                console.log(`All contacts were retrieved from the collection.`);
                res.json(contacts);
            } else {
                res.status(404).json({ Error: 'There were no contacts found from the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Error: there is difficulty retrieving contacts from the database.' });
        });
});


// RETRIEVE by ID controller
app.get('/contacts/:_id', (req, res) => {
    contacts.retrieveContactByID(req.params._id)
    .then(contact => { 
        if (contact !== null) {
            console.log(`"${contact.name}" was retrieved, based on its ID.`);
            res.json(contact);
        } else {
            res.status(404).json({ Error: `"${contact.name}" could not be found.`});
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error: there is difficulty retrieving the specified contact name from the database' });
    });

});


// UPDATE controller ************************************
app.put('/contacts/:_id', (req, res) => {
    contacts.updateContact(
        req.params._id, 
        req.body.name, 
        req.body.address, 
        req.body.number,
        req.body.birthday
    )
    .then(contact => {
        console.log(`"${contact.name}" was updated.`);
        res.json(contact);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error: there is difficulty updating the specified contact name from the database' });
    });
});


// DELETE Controller ******************************
app.delete('/contacts/:_id', (req, res) => {
    contacts.deleteContactById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} contact was deleted.`);
                res.status(200).send({ Success: 'The specified contact was found.' });
            } else {
                res.status(404).json({ Error: 'The specified contact could not be found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'An error occurred while attempting to delete the contact from the database.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});