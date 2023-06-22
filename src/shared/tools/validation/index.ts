import { FieldErrors, FieldValues } from 'react-hook-form';
import { showErrorMessage } from '../showMessages';


export const validation = (errors: FieldErrors<FieldValues>) => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length) {
        errorKeys.forEach(key => {
            let message = '';

            switch (errors[key].type) {
                case 'required':
                    message = `The value of the field "${key.toUpperCase()}" is required!`
                    break;
                case 'minLength':
                    message = `The value of the field "${key.toUpperCase()}" is too short!`;
                    break;
                case 'maxLength':
                    message = `The value of the field "${key.toUpperCase()}" is too long!`;
                    break;
                case 'pattern':
                    message = `The value of the field "${key.toUpperCase()} is wrong!"`;
                    if (key === 'password') {
                        message += ` The password should includes at least 1 capital latter, 1 number and 1 special symbol!`;
                    }
                    break;
                default:
                    message = `The form field "${key}" doesn't meet requirements!`;
                    break;
            }

            showErrorMessage(message);
        });
    }
}