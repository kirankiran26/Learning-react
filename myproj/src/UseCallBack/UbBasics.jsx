import React, { useCallback, useState } from 'react';

const UbBasics = () => {
  const [age, setAge] = useState(100);
  const [salary, setSalary] = useState(7000);

  const Title = ({ compname }) => {
    return (
      <div>
        <h1>This is learning of {compname}</h1>
      </div>
    );
  };

  const handleAge = useCallback(() => {
    console.log("Age is rendered");
    setAge(prevAge => prevAge + 1);
  }, [age]);

  const handleSalary = useCallback(() => {
    console.log("Salary is rendered");
    setSalary(prevSalary => prevSalary + 1000);
  }, [salary]);

  return (
    <div>
      <Title compname={"Call Back"} />
      <h1>The Age {age}</h1>
      <button type="button" onClick={handleAge}>Increment age</button>
      <h1>The Salary {salary}</h1>
      <button type="button" onClick={handleSalary}>Salary increment</button>
    </div>
  );
}

export default UbBasics;
