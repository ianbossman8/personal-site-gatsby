import React from 'react'
import { useFormik } from 'formik'
import encode from '../../util/encode'
import TextArea from '../TextArea/TextArea'
import Input from '../Input/Input'
import ContactFormSchema from '../../schema/contactFormSchema'
import { Form } from './styles'
import { MainButton } from '../../styles/buttons'

const initialState = {
  name: '',
  email: '',
  message: ''
}

export default function ContactForm() {
  const formik = useFormik({
    initialValues: initialState,
    validateOnBlur: true,
    validationSchema: ContactFormSchema,
    onSubmit: (values, { resetForm }) => {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...values
        })
      })
        .then((res) => {
          const { status, statusText, ok } = res

          if (ok && status === 200) {
            resetForm()
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  })

  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={formik.handleSubmit}
      noValidate>
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
      <MainButton type="submit" disabled={formik.isSubmitting}>
        send
      </MainButton>
    </Form>
  )
}
