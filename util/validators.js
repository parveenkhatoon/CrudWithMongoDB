// validators.js

function validateRegistration(data) {
    const { Name, Email, Password } = data;
    let errors = {};

    if (!Name || Name.trim() === '') {
        errors.Name = 'Username is required';
    }

    if (!Email || Email.trim() === '') {
        errors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
        errors.Email = 'Email is invalid';
    }

    if (!Password || Password.trim() === '') {
        errors.Password = 'Password is required';
    } else if (Password.length < 8) {
        errors.Password = 'Password must be at least 8 characters';
    }

   
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}

function validateLogin(data) {
    const { Email, Password } = data;
   
    let errors = {};

    if (!Email || Email.trim() === '') {
        errors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
        errors.Email = 'Email is invalid';
    }

    if (!Password || Password.trim() === '') {
        errors.Password = 'Password is required';
    }

    return {
        errors,
        valid: Object.keys(errors).length === 0
    };
}

export{
    validateRegistration,
    validateLogin
};