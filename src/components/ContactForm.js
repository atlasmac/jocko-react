import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import ContactMessage from './ContactMessage';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return <ContactMessage />
  }
  return (
    <div>
    <form id="survey-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <fieldset id="name">
          <div>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              className="form-control"
              required
            />
          </div>

          <div>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="form-control"
              required
            />
          </div>

        </fieldset>
      </div>
      <div className="form-group">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="form-control"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="form-group">
        <textarea
          id="message"
          name="comment"
          placeholder="Message"
          className="input-textarea form-control"  ></textarea>
      </div>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <div className='buttonDiv'>
        <button
          type="submit"
          disabled={state.submitting}
          className="submit-button"
        >
          Send
        </button>
      </div>

    </form>
  </div>
  )
}

export default ContactForm
