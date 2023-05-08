import { Button, Input } from '@mui/material';
import React, { useState } from 'react';

function İnputApp() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length < 5 || /^[A-Za-z]+$/.test(inputValue)) {
      setError('Failed');
    } else {
      setError('');
    }
    setValue(inputValue);
  };

  const handleAddButtonClick = () => {
    if (value.length < 5 || /^[A-Za-z]+$/.test(value)) {
      setError('Failed');
      return;
    }
    setListItems([...listItems, value]);
    setValue('');
  };

  return (
    <div>
      <Input style={{height:"3rem"}} type="text" value={value} onChange={handleInputChange} />
      {error && <p>{error}</p>}
      <Button style={{height:"3rem",width:"2rem"}} onClick={handleAddButtonClick} variant="contained" disableElevation>
      Click Button
  </Button>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default İnputApp;