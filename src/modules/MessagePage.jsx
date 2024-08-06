// MessagePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MessagePage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: '',
        referrer: '',
        visit: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/results', { state: formData });
    };

    return (
        <>
            <h2>Get in contact with me!</h2>
            <article>
                <form onSubmit={handleSubmit} name="messageMe" id="messageMe">
                    <fieldset>
                        <legend>Who are you?</legend>
                        <label htmlFor="name">First and Last name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            maxLength="50"
                            required
                            placeholder="Enter full name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            maxLength="50"
                            required
                            placeholder="Enter email here"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="reason">Message</label>
                        <textarea
                            name="reason"
                            id="reason"
                            minLength="5"
                            maxLength="300"
                            required
                            placeholder="Please enter a message between 5-300 characters!"
                            value={formData.reason}
                            onChange={handleChange}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>More information...</legend>
                        <label>Why do you want to contact me?</label>
                        <select
                            name="referrer"
                            id="how"
                            value={formData.referrer}
                            onChange={handleChange}
                        >
                            <option value="Software Engineering Position">Software Engineering Position</option>
                            <option value="Full Stack Developer Position">Full Stack Developer Position</option>
                            <option value="Internship Opportunity">Internship Opportunity</option>
                            <option value="Mentorship">Mentorship</option>
                            <option value="Networking">Networking</option>
                        </select>
                        <label>What's the purpose of your inquiry?</label>
                        <label htmlFor="general">
                            <input
                                type="radio"
                                name="visit"
                                id="general"
                                value="General Inquiry"
                                onChange={handleChange}
                            />
                            General Inquiry
                        </label>
                        <label htmlFor="project">
                            <input
                                type="radio"
                                name="visit"
                                id="project"
                                value="Project Collaboration"
                                onChange={handleChange}
                            />
                            Project Collaboration
                        </label>
                        <label htmlFor="job">
                            <input
                                type="radio"
                                name="visit"
                                id="job"
                                value="Job Opportunity"
                                onChange={handleChange}
                            />
                            Job Opportunity
                        </label>
                        <label htmlFor="other">
                            <input
                                type="radio"
                                name="visit"
                                id="other"
                                value="Other"
                                onChange={handleChange}
                            />
                            Other
                        </label>
                        <button type="submit" id="submit" name="results">Submit review</button>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default MessagePage;
