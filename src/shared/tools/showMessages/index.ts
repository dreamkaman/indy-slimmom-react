import { FieldValues } from 'react-hook-form/dist/types';
import { toast } from 'react-toastify';

export const showMessage = (message: string | FieldValues, type: string = 'error') => {
    switch (type) {
        case 'error':
            toast.error(message as string);
            break;
        case 'success':
            toast.success(message as string);
            break;
        default:
            break;
    }

}