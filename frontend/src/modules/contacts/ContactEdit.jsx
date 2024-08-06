import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const ContactEdit = ({ contactToEdit }) => {
    const [name, setName] = useState(contactToEdit ? contactToEdit.name : '');
    const [address, setAddress] = useState(contactToEdit ? contactToEdit.address : '');
    const [number, setNumber] = useState(contactToEdit ? contactToEdit.number : '');
    const [birthday, setBirthday] = useState(contactToEdit ? contactToEdit.birthday : '');
    const redirect = useNavigate();

    const editContact = async () => {
        const response = await fetch(`/contacts/${contactToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                address: address, 
                number: number,
                birthday:birthday
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            alert(`Contact successfully edited!`);
            redirect("/contactsPage");
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit contact. Status: ${response.status}. Error: ${errMessage.error}`);
        }
    }

    return (
        <>
            <h2>Edit a Contact</h2>
            <article>
                <p>Edit contact details:</p>
                <table>
                    <caption>Edit Contact:</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Number</th>
                            <th>Birthday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Name of the contact"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </td>
                            <td>
                                <label htmlFor="address">Address:</label>
                                <input
                                    type="text"
                                    id="address"
                                    placeholder="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </td>
                            <td>
                                <label htmlFor="number">Number:</label>
                                <input
                                    type="text"
                                    id="number"
                                    placeholder="Number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </td>
                            <td>
                                <label htmlFor="birthday">Birthday:</label>
                                <input 
                                    type="date" 
                                    id="birthday"
                                    placeholder="Birthday"
                                    value={birthday}
                                    onChange={e => setBirthday(e.target.value)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" onClick={editContact}>Save Edit</button>
            </article>
        </>
    );
}

export default ContactEdit;
