import React from 'react'
import { useFormik } from 'formik'
import encode from '../../util/encode'
import ContactFormSchema from '../../schema/contactFormSchema'
import { Form } from './styles'
import Input from '../Input/Input'
import TextArea from '../TextArea/TextArea'

interface Props {
  reverse: boolean
}

export default function ContactForm(props: Props) {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validateOnBlur: true,
    validationSchema: ContactFormSchema,
    onSubmit: (values) => {
      console.log(values)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({})
      })
        .then((e) => console.log(e))
        .catch((error) => alert(error))
    }
  })

  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={formik.handleSubmit}
      noValidate
      reverse={props.reverse}>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Input
        type="text"
        name="name"
        handleChange={formik.handleChange}
        value={formik.values.name}
        error={formik.errors.name}
      />
      <Input
        type="email"
        name="email"
        handleChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
        required
      />
      <TextArea
        name="message"
        handleChange={formik.handleChange}
        value={formik.values.message}
        error={formik.errors.message}
      />
      <button type="submit">send</button>
    </Form>
  )
}
