/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ContactList from './ContactList';

function ContactsPage({ setContact }) {
    const redirect = useNavigate();
    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        const response = await fetch('/contacts');
        const contacts = await response.json();
        setContacts(contacts);
    }

    const onEditContact = async (contact) => {
        setContact(contact); 
        console.log(contact);
        redirect("/edit-contact");
    }

    const onDeleteContact = async _id => {
        const response = await fetch(`/contacts/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/contacts');
            const contacts = await getResponse.json();
            setContacts(contacts);
        } else {
            console.error(`Failed to delete contact with ID: ${_id}. Status code: ${response.status}`);
        }
    }

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <>
            <h2>List of Contacts</h2>
            <article>
                <p>Meet someone new? Add them to your digital address book below! </p>

                <Link to="/create" className="button-link">Add Contact</Link>

                <ContactList
                    contacts={contacts}
                    onEdit={onEditContact}
                    onDelete={onDeleteContact}
                />
            </article>
        </>
    );
}

export default ContactsPage;
