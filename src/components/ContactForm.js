import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

const ContactForm = () => {
    const data = useActionData()
  return (
    <div>
            <h3>Contact Us</h3>
      <Form method='post' action='/help/contactForm'>
            <label>
                <span>Your email:</span>
                <input type='email' name='email' required />
            </label>
            <label>
                <span>Your message:</span>
                <textarea name='message' required />
            </label>
            <button>Submit</button>
            {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  )
}

export default ContactForm

export const formAction = async ({request}) => {

    console.log(request)
    const data = await request.formData()

    const submission = {
        email:  data.get('email'),
        message: data.get('message')
    }

    console.log(submission)

    if (submission.message.length < 10) {
        return {error: 'Message must be over 10 char'}
    }

    return redirect('/')
}