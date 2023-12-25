import toast, { Toaster } from 'react-hot-toast';

export const ToastSuccess = (title) => {

    toast.success(`${title}`, {
        style: {
            // border: '1px solid #F48CAD',
            padding: '16px',
            color: '#d5af80',
            backgroundColor: '#fff',
        },
        iconTheme: {
            primary: '#d5af80',
            secondary: '#FFFAEE',
        },
    })
}
export const ToastError = (title) => {

    toast.error(`${title}`, {
        style: {
            // border: '1px solid #F48CAD',
            padding: '16px',
            color: '#d5af80',
            backgroundColor: '#fff',
        },
        iconTheme: {
            primary: '#d5af80',
            secondary: '#FFFAEE',
        },
    })
}