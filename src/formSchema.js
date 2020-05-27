import * as yup from 'yup'
import { useForm } from "react-hook-form";

const formSchema = yup.object().shape({
    username: yup.string()
      .trim()
      .min(2, 'The username must be at least three characters long')
      .required('The username is a required field'),
    email: yup.string()
      .email('The email must be a valid email address')
      .required('The email is a required field'),
    password: yup.string()
    .trim()
    .min(5, 'The password must be at least five characters long')
    .required('The password is a required field'),
      
    
  })
  
  export default formSchema