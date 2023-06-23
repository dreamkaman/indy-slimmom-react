export const nameRules = {
    required: 'The value of the "Name" field is required!',
    minLength: {
        value: 2,
        message: 'The minimum length of the "Name" field must be 2 characters!'
    }
    ,
    maxLength: {
        value: 8,
        message: 'The maximum length of the "Name" field must be 8 characters!'
    }
}

export const emailRules = {
    required: 'The value of the "Email" field is required!',
    pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: 'The email you entered does not meet the email requirements!'
    }
}

export const passwordRules = {
    required: 'The value of the "Password" field is required!',
    minLength: {
        value: 8,
        message: 'The minimum length of the "Password" field must be 8 characters!'
    },
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
        message: 'The password you entered does not meet the password requirements! Password must contain at least 1 capital letter, 1 number and 1 special character!'
    }
}