import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ContactSection , ContactTitle , Span , Form , FormInput , InputText , InputEmail , InputExp , TextArea , InputSubmit} from './style.js'
import Footer from './../Footer'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'sohaibkla@gmail.com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_nDIPIaZn',
       templateParams,
      'user_1dwiBQJPdSNdmUqECR71x'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <React.Fragment>
            <ContactSection>
                <div class="container">
                    <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormInput>
                            <InputText  type="text"
                                        name="name"
                                        value={this.state.name}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'name')}
                                        placeholder="Name" />
                            <InputEmail type="email"
                                        name="email"
                                        value={this.state.email}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'email')}
                                        placeholder="Enter email" />
                        </FormInput>
                        <InputExp   type="text"
                                    name="subject"
                                    className="text-primary"
                                    value={this.state.subject}
                                    onChange={this.handleChange.bind(this, 'subject')}
                                    placeholder="Subject" />
                        <TextArea   cols="30"
                                    rows="10"
                                    name="message"
                                    className="text-primary"
                                    value={this.state.message}
                                    onChange={this.handleChange.bind(this, 'message')}
                                    placeholder="Your Message"></TextArea>
                        <InputSubmit type="submit" value="Send Message" />
                    </Form>
                </div>
            </ContactSection>
            <Footer />
        </React.Fragment>
    )
  }
}
export default ContactForm