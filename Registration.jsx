import React, { useState } from "react";
import useFormValidation from "./useFormValidation";

function RegistrationForm() {
  const { errors, validate } = useFormValidation();

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    town: "",
    country: "United Kingdom",
    region: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setValues({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        town: "",
        country: "United Kingdom",
        region: "",
        postalCode: "",
      });
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Retype Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          )}
        </div>

        <div>
          <label>Town:</label>
          <input
            type="text"
            name="town"
            value={values.town}
            onChange={handleChange}
          />
          {errors.town && <p style={{ color: "red" }}>{errors.town}</p>}
        </div>

        <div>
          <label>Region:</label>
          <input
            type="text"
            name="region"
            value={values.region}
            onChange={handleChange}
          />
          {errors.region && <p style={{ color: "red" }}>{errors.region}</p>}
        </div>

        <div>
          <label>Postcode / Zip:</label>
          <input
            type="text"
            name="postalCode"
            value={values.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && (
            <p style={{ color: "red" }}>{errors.postalCode}</p>
          )}
        </div>

        <div>
          <label>Country:</label>
          <select name="country" value={values.country} onChange={handleChange}>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
