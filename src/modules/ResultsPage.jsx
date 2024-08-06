// ResultsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function ResultsPage() {
    const location = useLocation();
    const { name, email, reason, referrer, visit } = location.state || {};

    return (
        <div>
            <h2>Thank you, {name}! </h2>
            
            <p>To verify, you sent us this email: <strong>{email}</strong> and stated the reason for contact is <strong>{referrer}</strong>. I'm super excited to discuss <strong>{visit}</strong>with you as well as your message: 
        
            </p>
            <p><strong>{reason}</strong></p>
        </div>
    );
}

export default ResultsPage;
