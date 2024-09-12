import React, { useState } from 'react';

function useFormValidation() {
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const { email, password, confirmPassword, firstName, town, country, region, postalCode } = values;
    let validationErrors = {};

    if (firstName.length < 4) {
      validationErrors.firstName = "First name must be at least 4 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (password !== confirmPassword) {
      validationErrors.password = "Passwords do not match.";
    }

    if (!town) {
      validationErrors.town = "Town is required.";
    }

    if (!country) {
      validationErrors.country = "Country is required.";
    }

    if (!region) {
      validationErrors.region = "Region is required.";
    }

    if (!postalCode) {
      validationErrors.postalCode = "Postal Code is required.";
    }

    setErrors(validationErrors);
    return validationErrors;
  };

  return { validate, errors };
}

export default useFormValidation;
