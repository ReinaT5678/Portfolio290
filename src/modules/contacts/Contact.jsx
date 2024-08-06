import React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { RiDeleteBin7Fill } from 'react-icons/ri';

function Contact({ contact, onEdit, onDelete }) {
    return (
        <>
        <tr>
            <td>{contact.name}</td>
            <td>{contact.address}</td>
            <td>{contact.number}</td>
            <td>{new Date(contact.birthday).toLocaleDateString()}</td>
            <td><RiDeleteBin7Fill onClick={() => onDelete(contact._id)} /></td>
            <td><MdModeEdit onClick={() => onEdit(contact)} /></td>
        </tr>
        
        </>
        
        
    );
}

export default Contact;
