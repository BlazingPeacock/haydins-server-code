import React, { useState } from 'react';

const LogbookForm = ({ onAddEntry }) => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/logbook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, company }),
        })
            .then((res) => res.json())
            .then((newEntry) => {
                onAddEntry(newEntry);
                setName('');
                setCompany('');
            });
    };

    return (
        <form onSubmit={handleSubmit} className="logbook-form">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
		className="form-input"
            />
            <input
                type="text"
                placeholder="Company (optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
		className="form-inpput"
            />
            <button type="submit">Sign Logbook</button>
        </form>
    );
};

export default LogbookForm;
