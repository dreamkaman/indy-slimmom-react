import { FieldValues } from 'react-hook-form/dist/types';
import { toast } from 'react-toastify';

export const showErrorMessage = (message: string | FieldValues) => {
    toast.error(message as string);
}