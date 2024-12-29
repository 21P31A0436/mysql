import { toast } from 'react-toastify'

export const handlsuccess = (msg)=>{
    toast.success(msg,{
        position:'top-right'
    })
}

export const handleerror = (msg)=>{
    toast.error(msg,{
        position:'top-right'
    })
}