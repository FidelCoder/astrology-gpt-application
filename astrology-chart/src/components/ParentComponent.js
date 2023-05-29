import React, { useState } from 'react';
import BirthDetailsForm from '../components/FormInput';

const ParentComponent = () => {
  const [formData, setFormData] = useState({});

  console.log(formData);

  return <BirthDetailsForm setFormData={setFormData} />;
}

export default ParentComponent;
