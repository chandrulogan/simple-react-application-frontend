import React, { useState } from 'react';

function Home() {
    const [segmentName, setSegmentName] = useState('');
    const [selectedSchemas, setSelectedSchemas] = useState([]);
    const [newSchema, setNewSchema] = useState('');
    const [schemas, setSchemas] = useState([
        { label: 'First Name', value: 'first_name' },
        { label: 'Last Name', value: 'last_name' },
        { label: 'Gender', value: 'gender' },
        { label: 'Age', value: 'age' },
        { label: 'Account Name', value: 'account_name' },
        { label: 'City', value: 'city' },
        { label: 'State', value: 'state' },
    ]);

    const handleAddNewSchema = () => {
        if (newSchema) {
            setSelectedSchemas([...selectedSchemas, newSchema]);
            setNewSchema('');
        }
    };

    const handleSaveSegment = () => {
        const data = {
            segmentName,
            selectedSchemas,
        };
        console.log(data);
        // Send data to server here
    };

    return (
        <div>
            <h1>Save Segment</h1>
            <button onClick={() => handleSaveSegment()}>Save segment</button>
            <br />
            <br />
            <input
                type="text"
                placeholder="Enter segment name"
                value={segmentName}
                onChange={(e) => setSegmentName(e.target.value)}
            />
            <br />
            <br />
            <select
                value={newSchema}
                onChange={(e) => setNewSchema(e.target.value)}
            >
                <option value="">Select schema to add</option>
                {schemas.map((schema) => (
                    <option key={schema.value} value={schema.value}>
                        {schema.label}
                    </option>
                ))}
            </select>
            <button onClick={() => handleAddNewSchema()}>+ Add new schema</button>
            <br />
            <br />
            <div style={{ backgroundColor: 'lightblue', padding: '10px', margin: '10px', width: 'fit-content' }}>
                {selectedSchemas.map((schema) => (
                    <select key={schema} value={schema} onChange={(e) => console.log(e.target.value)}>
                        <option value="">Select new schema</option>
                        {schemas.map((s) => {
                            if (!selectedSchemas.includes(s.value)) {
                                return (
                                    <option key={s.value} value={s.value}>
                                        {s.label}
                                    </option>
                                );
                            }
                            return null;
                        })}
                    </select>
                ))}
            </div>
        </div>
    );
}

export default Home;
