import React, { useState } from 'react';
import axios from 'axios';
import SEO from '../../components/seo';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    axios.post('http://192.168.0.143:3000/api/send-mail', formData)
      .then(response => {
        console.log('SUCCESS!', response.data);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('FAILED...', error);
        setError('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <SEO
        titleTemplate="Contact"
        description="Contact page of flone react minimalist eCommerce template."
      />
      <div className="col-12 col-lg-8 col-md-7">
        <div className="contact-form">
          <div className="contact-title mb-30">
            <h2>Get In Touch</h2>
          </div>
          <form className="contact-form-style" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  type="text"
                  required
                />
              </div>
              <div className="col-lg-6">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  type="email"
                  required
                />
              </div>
              <div className="col-lg-6">
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile*"
                  type="text"
                  required
                />
              </div>
              <div className="col-lg-12">
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject*"
                  type="text"
                  required
                />
              </div>
              <div className="col-lg-12">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message*"
                  required
                />
                <button className="submit" type="submit" disabled={submitting}>
                  {submitting ? 'Sending...' : 'SEND'}
                </button>
              </div>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default ContactForm;
