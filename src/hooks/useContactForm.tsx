import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


export default function useContactForm(){
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const sendEmailPromise = () => {
            if(form.current){
                return emailjs.sendForm('service_p3jomqp', 'template_6p2hgtw', form.current, 'Q32UD-EI332qaDF1p')
                .then((result) => {
                    console.log(result.text);
                    setContactForm({
                        name: '',
                        email: '',
                        message: ''
                    })
                }, (error) => {
                    console.log(error.text);
                })
            }else{
                return Promise.reject(new Error('Form reference is not available'));
            }
        }
        toast.promise(
            sendEmailPromise(),
             {
               loading: 'Sending...',
               success: <b>Email sent!</b>,
               error: <b>Could not send email.</b>,
             }
           )
       
    }

    return { sendEmail, contactForm, setContactForm, form }
}