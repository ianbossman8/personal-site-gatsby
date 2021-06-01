import React, { useState } from 'react'
import { useFormik } from 'formik'
import encode from '../../util/encode'
import TextArea from '../TextArea/TextArea'
import Input from '../Input/Input'
import MessageBox from '../MessageBox/MessageBox'
import ContactFormSchema from '../../schema/contactFormSchema'
import { Form } from './styles'
import { MainButton } from '../../styles/buttons'

const initialState = {
  name: '',
  email: '',
  message: ''
}

const FORM_STATE = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
}

export default React.memo(function ContactForm() {
  const [formMessage, setFormMessage] = useState('')

  const formik = useFormik({
    initialValues: initialState,
    validateOnBlur: true,
    validationSchema: ContactFormSchema,
    onSubmit: async (values, { resetForm, setStatus }) => {
      try {
        const url = '/'
        const reqInit = {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...values
          })
        }

        const res = await fetch(url, reqInit)
        const { status, statusText, ok } = res

        if (statusText === 'Not Found') {
          throw new Error('Resource not found')
        }

        if (ok && status === 200) {
          resetForm()
          setStatus(FORM_STATE.SUCCESS)
          setFormMessage('Successfully submitted. Thank you for your support!')
        }
      } catch (e) {
        const error = e as Error

        setStatus(FORM_STATE.FAILED)
        setFormMessage(error.message)
      }
    }
  })

  const { isSubmitting, status, setStatus } = formik

  function handleMessageBoxStatus() {
    setStatus(undefined)
  }

  return (
    <>
      {status === FORM_STATE.SUCCESS ? (
        <MessageBox state={status} message={formMessage} handleClose={handleMessageBoxStatus} />
      ) : (
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
            disabled={isSubmitting}
          />
          <Input
            type="email"
            name="email"
            handleChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
            disabled={isSubmitting}
            required
          />
          <TextArea
            name="message"
            handleChange={formik.handleChange}
            value={formik.values.message}
            error={formik.errors.message}
            disabled={isSubmitting}
          />
          <MainButton type="submit" disabled={isSubmitting}>
            send
          </MainButton>
          {status === FORM_STATE.FAILED && <MessageBox state={status} message={formMessage} />}
        </Form>
      )}
    </>
  )
})
