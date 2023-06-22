import { toast } from 'react-toastify';

export const showErrorMessage = (message: string) => {
    toast.error(message);
}