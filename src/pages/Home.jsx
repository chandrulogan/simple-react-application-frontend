import React, { useState } from 'react'
import Modal from 'react-modal';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [segmentName, setSegmentName] = useState('');
    const [selectedSchemas, setSelectedSchemas] = useState([]);
    const [availableSchemas, setAvailableSchemas] = useState([
        { label: 'First Name', value: 'first_name' },
        { label: 'Last Name', value: 'last_name' },
        { label: 'Gender', value: 'gender' },
        { label: 'Age', value: 'age' },
        { label: 'Account Name', value: 'account_name' },
        { label: 'City', value: 'city' },
        { label: 'State', value: 'state' },
    ]);
    const [newSchemas, setNewSchemas] = useState([]);

    const handleSaveSegment = () => {
        const data = {
            segmentName,
            schemas: [...selectedSchemas, ...newSchemas],
        };
        console.log('Sending data to server:', data);
        setIsOpen(false);
        setSegmentName('');
        setSelectedSchemas([]);
        setAvailableSchemas([
            { label: 'First Name', value: 'first_name' },
            { label: 'Last Name', value: 'last_name' },
            { label: 'Gender', value: 'gender' },
            { label: 'Age', value: 'age' },
            { label: 'Account Name', value: 'account_name' },
            { label: 'City', value: 'city' },
            { label: 'State', value: 'state' },
        ]);
        setNewSchemas([]);
    };

    const handleModalClose = () => {
        setIsOpen(false);
    };

    const handleSegmentNameChange = (e) => {
        setSegmentName(e.target.value);
    };

    const handleSchemaChange = (e) => {
        const selectedSchemaValue = e.target.value;
        const selectedSchema = availableSchemas.find((schema) => schema.value === selectedSchemaValue);

        setSelectedSchemas([...selectedSchemas, selectedSchema]);
        setAvailableSchemas(availableSchemas.filter((schema) => schema.value !== selectedSchemaValue));
    };

    const handleAddNewSchema = () => {
        setNewSchemas([...newSchemas, { label: 'New Schema', value: 'new_schema' }]);
    };

  return (
      <div>
          <button onClick={() => setIsOpen(true)}>Save Segment</button>
          <Modal isOpen={isOpen} onRequestClose={handleModalClose} className='homePage_Modal'>
              <h2>Save Segment</h2>
              <label>
                  Segment Name:
                  <input type="text" value={segmentName} onChange={handleSegmentNameChange} />
              </label>
              <br />
              <label>
                  Add schema to segment:
                  <select value="" onChange={handleSchemaChange}>
                      <option value="">Select Schema</option>
                      {availableSchemas.map((schema) => (
                          <option key={schema.value} value={schema.value}>
                              {schema.label}
                          </option>
                      ))}
                  </select>
                  <a href="#" onClick={handleAddNewSchema}>+Add new schema</a>
              </label>
              {newSchemas.map((schema, index) => (
                  <select key={index} value="" onChange={handleSchemaChange}>
                      <option value="">Select Schema</option>
                      {availableSchemas.map((availableSchema) => (
                          <option key={availableSchema.value} value={availableSchema.value}>
                              {availableSchema.label}
                          </option>
                      ))}
                  </select>
              ))}
              <br />
              <button onClick={handleModalClose}>Cancel</button>
              <button onClick={handleSaveSegment}>Save</button>
          </Modal>
      </div>
  )
}

export default Home