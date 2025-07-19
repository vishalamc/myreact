import React, { useState } from 'react';
import '../pages/page1.css'; 
function App() {
  // State variables for numbers and result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState('');

  // Function to calculate the sum
  const handleAddition = () => {
    const total = Number(num1) + Number(num2);
    setSum(total);
  };

  return (
    <div>
      <h2 className='heading'>Addition of Two Numbers</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAddition}>Add</button>

      <h3>Result: {sum}</h3>
    </div>
  );
}

export default App;

