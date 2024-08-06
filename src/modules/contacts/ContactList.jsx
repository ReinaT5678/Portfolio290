import React from 'react';
import Contact from './Contact.jsx';

function ContactList({ contacts, onEdit, onDelete }) {
    return (
        <table>
            <thead>
                <tr>
                    <th className="name-contact">Name</th>
                    <th>Address</th>
                    <th>Number</th>
                    <th>Birthday</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, i) => 
                    <Contact 
                        key={i} 
                        contact={contact} 
                        onEdit={onEdit}  
                        onDelete={onDelete} 
                    />
                )}
            </tbody>
        </table>
    );
}

export default ContactList;
