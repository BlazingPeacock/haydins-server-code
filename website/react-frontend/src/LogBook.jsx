import React, { useState, useEffect } from 'react';
import LogbookTable from './LogbookTable';
import LogbookForm from './LogbookForm';
import './Logbook.css';

const LogBook = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetch('/api/logbook')
            .then((res) => res.json())
            .then((data) => setEntries(data));
    }, []);

    const addEntry = (entry) => {
        setEntries([entry, ...entries]);
    };

    return (
        <div>
            <h1>Logbook</h1>
            <LogbookForm onAddEntry={addEntry} />
            <LogbookTable entries={entries} />
        </div>
    );
};

export default LogBook;
