import * as Yup from 'yup'

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z]+(\s[a-zA-Z]+)?$/, 'should only container alphabets and one space')
    .max(20, 'cannot exceed 20 characters')
    .lowercase()
    .trim(),
  email: Yup.string().email('invalid email').required('required'),
  message: Yup.string().max(75, 'cannot exceed 75 characters').lowercase().trim()
})

export default ContactFormSchema
