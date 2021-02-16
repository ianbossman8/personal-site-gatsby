import React from 'react'
import { SIZE } from '../../constants/font'

interface Props {
  label: string
  symbol: number
  size?: SIZE
}

export default function ContactForm() {
  function encode(data: any) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name')
      })
    })
      .then((e) => console.log(e))
      .catch((error) => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>

      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}
