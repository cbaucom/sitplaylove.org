import { navigate } from 'gatsby-link'
import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import PropTypes from 'prop-types'
import React from 'react'

const FormItem = Form.Item
const { TextArea } = Input

const Contact = props => {
  const { getFieldDecorator } = props.form

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  function handleSubmit(e) {
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        sendMessage(values)
      }
    })
    
    // e.preventDefault()
  }

  function sendMessage(values) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        navigate('/')
      })
      .catch(error => {
        console.error('Form submission error:', error)
        handleNetworkError()
      })
  }

  function handleNetworkError(e) {
    console.log('submit Error')
  }

  return (
      <section id="contact">
        <div className="row">
          <div className="ten columns offset-1 text-center">
            <h1>Contact Us</h1>
            <Form
              name="contact"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <FormItem label="Name">
                {getFieldDecorator('name', {
                  rules: [
                    {
                      whitespace: true,
                    },
                  ],
                })(<Input name="name" />)}
              </FormItem>
              <FormItem label="E-mail">
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your e-mail address!',
                      whitespace: true,
                      type: 'email',
                    },
                  ],
                })(<Input name="email" />)}
              </FormItem>
              <FormItem label="Phone">
                {getFieldDecorator('phone', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your phone number!',
                      whitespace: true,
                      type: 'string',
                    },
                  ],
                })(<Input name="tel" />)}
              </FormItem>
              <FormItem label="Message">
                {getFieldDecorator('message', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your message!',
                      whitespace: true,
                    },
                  ],
                })(
                  <TextArea
                    name="message"
                    placeholder="Hi, I'd love to learn more about your matchmaking process!!"
                    autosize={{ minRows: 4, maxRows: 10 }}
                  />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </section>
  )
}

Contact.propTypes = {
  form: PropTypes.object,
}

const ContactForm = Form.create({})(Contact)

export default ContactForm
