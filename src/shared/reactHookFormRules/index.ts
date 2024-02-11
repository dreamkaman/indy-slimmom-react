export const nameRegisterRules = {
    required: 'The value of the "Name" field is required!',
    minLength: {
        value: 2,
        message: 'The length of the name you entered must be more than or equal 2 characters!'
    },
    maxLength: {
        value: 25,
        message: 'The length of the name you entered must be less than or equal 25 characters!'
    }
}

export const emailLoginRules = {
    required: 'The value of the "Email" field is required!',
}

export const emailRegisterRules = {
    required: 'The value of the "Email" field is required!',
    pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        message: 'The email you entered does not meet requirements!'
    }
}

export const passwordLoginRules = {
    required: 'The value of the "Password" field is required!',
}

export const passwordRegisterRules = {
    required: 'The value of the "Password" field is required!',
    minLength: {
        value: 8,
        message: 'The length of the password you entered must be more than or equal 8 characters!'
    },
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,20}$/,
        message: 'The password you entered must contain at least 1 capital letter, 1 number and 1 special character!'
    }
}

export const heightRules = {
    required: true,
    min: {
        value: 100,
        message: 'The height you entered must be more than or equal 100 centimeters!'
    },
    max: {
        value: 250,
        message: 'The height you entered must be less than or equal 250 centimeters!'
    },
    pattern: {
        value: /^[0-9]*$/,
        message: 'The height you entered must be the number!'
    }
}

export const ageRules = {
    required: true,
    min: {
        value: 18,
        message: `The age must be more than or equal 18 years!`
    },
    max: {
        value: 100,
        message: 'The age must be less than or equal 100 years!'
    },
    pattern: {
        value: /^[0-9]*$/,
        message: 'The age you entered must be the number!'
    }
}

export const currentWeightRules = {
    required: true,
    min: {
        value: 20,
        message: 'The current weight must be more than or equal 20 kilograms!'
    },
    max: {
        value: 500,
        message: 'The current weight must be less than or equal 500 kilograms!'
    },
    pattern: {
        value: /^[0-9]*$/,
        message: 'The weight you entered must be the number!'
    }
}

export const desiredWeightRules = {
    required: true,
    min: {
        value: 20,
        message: 'The desired weight must be more than or equal 20 kilograms!'
    },
    max: {
        value: 500,
        message: 'The desired weight must be less than or equal 500 kilograms!'
    },
    pattern: {
        value: /^[0-9]*$/,
        message: 'The weight you entered must be the number!'
    }
}

export const bloodRules = {
    required: true,
}

export const productNameRules = {
    required: 'The value of the "Product name" field is required!',
}

export const productWeightRules = {
    required: 'The value of the "Weight" field is required!',
}