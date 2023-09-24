import React, { useState } from 'react';

function TextInput() {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedText(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Masukkan teks"
        value={text}
        onChange={handleChange}
        style={{
            backgroundColor: 'white', 
            border: '1px solid #ccc', 
            padding: '10px', 
            borderRadius: '5px', 
            fontSize: '16px', 
            width: '300px', 
            color: '#121212',
            marginRight:16,
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      {submittedText && <p> Teks yang anda masukan adalah {submittedText}</p>}
    </div>
  );
}

export default TextInput;