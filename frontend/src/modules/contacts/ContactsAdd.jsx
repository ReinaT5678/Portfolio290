import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const ContactAdd = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [birthday, setBirthday] = useState(''); 

    const redirect = useNavigate();

    const addContact = async () => {
        const newContact = { name, address, number, birthday: new Date(birthday) }; 
        const response = await fetch('/contacts', {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert(`Contact added successfully!`);
        } else {
            alert(`Failed to add contact: ${response.status}`);
        }
        redirect("/contactsPage");
    };

    return (
        <>
            <h2>Add a contact</h2>
            <article>
                <p>Use this form to add a new contact to the collection.</p>
                <table>
                    <caption>Which contact are you adding?</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Number</th>
                            <th>Birthday</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="name"></label>
                                <input type="text" placeholder="Name of the contact" id="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </td>
                            <td>
                                <label htmlFor="address"></label>
                                <input type="text" placeholder="Address of the contact" id="address"
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </td>
                            <td>
                                <label htmlFor="number"></label>
                                <input type="tel" placeholder="Number of the contact" id="number"
                                    value={number}
                                    onChange={e => setNumber(e.target.value)}
                                />
                            </td>
                            <td>
                                <label htmlFor="birthday"></label>
                                <input type="date" id="birthday"
                                    value={birthday}
                                    onChange={e => setBirthday(e.target.value)}
                                />
                            </td>
                            <td>
                                <button type="submit" onClick={addContact}>Add Contact</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default ContactAdd;
