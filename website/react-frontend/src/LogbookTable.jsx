import React from 'react';

const LogbookTable = ({ entries }) => (
    <div className="logbook-table-container">
        <table className="logbook-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry) => (
                    <tr key={entry.id}>
                        <td>{entry.name}</td>
                        <td>{entry.company || 'N/A'}</td>
                        <td>{new Date(entry.signed_at).toLocaleDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default LogbookTable;
