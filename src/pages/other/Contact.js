import { Fragment } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import GoogleMap from "../../components/google-map"

import React, { useState } from 'react';
import axios from 'axios';


const Contact = () => {
  let { pathname } = useLocation();
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

    axios.post('http://192.168.0.143:4000/api/send-mail', formData)
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
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Contact", path: process.env.PUBLIC_URL + pathname }
          ]} 
        /> */}
        <div className="contact-area pt-50 pb-100">
          <div className="container mt-3">
          <div className="custom-row-2 pb-50">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+012 345 678 102</p>
                      <p>+012 345 678 102</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:yourname@email.com">
                          yourname@email.com
                        </a>
                      </p>
                      <p>
                        <a href="https://yourwebsitename.com">
                          yourwebsitename.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Address goes here, </p>
                      <p>street, Crossroad 123.</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
                      <div className="col-lg-6">
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
            </div>
            <div className="contact-map mb-10">
              <GoogleMap lat={17.4125414} lng={78.2540123} />
            </div>
            
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
