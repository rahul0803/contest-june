import React, { useState } from 'react';
import "./App.css"


function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    };

    let hasErrors = false;

    if (!formData.email) {
      newErrors.email = 'Email is required.';
      hasErrors = true;
    }

    if (!formData.name) {
      newErrors.name = 'Name is required.';
      hasErrors = true;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
      hasErrors = true;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required.';
      hasErrors = true;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
    } else {
      alert('Form submitted successfully!');
      setErrors({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
      });
      setFormData({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Full Name </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}

export default App;
