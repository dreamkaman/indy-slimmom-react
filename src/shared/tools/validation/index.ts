import { FieldErrors, FieldValues } from 'react-hook-form';
import { showErrorMessage } from '../showMessages';


export const validation = (errors: FieldErrors<FieldValues>) => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length) {
        errorKeys.forEach(key => {
            let message: string | FieldValues = '';

            switch (errors[key].type) {
                case 'required':
                    message = errors[key]?.message || `The value of the field "${key.toUpperCase()}" is required!`;
                    break;
                case 'minLength':
                    message = errors[key]?.message || `The value of the field "${key.toUpperCase()}" is too short!`;
                    break;
                case 'maxLength':
                    message = errors[key]?.message || `The value of the field "${key.toUpperCase()}" is too long!`;
                    break;
                case 'pattern':
                    message = errors[key]?.message || `The value of the field "${key.toUpperCase()} is wrong!"`;
                    break;
                default:
                    message = `Unexpected error!`;
                    break;
            }

            showErrorMessage(message);
        });
    }
}