import { useState } from 'react';
import styled from 'styled-components';
import { WEBSITE_WIDTH } from '../GlobalVariables';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Error sending message');
      }
    } catch (error) {
      setStatus('Error sending message');
    }
  };

  return (
    <ContactContainer>
      <Header>Contact Us</Header>
      <Description>
        Welcome to Cake Central! If you have any questions, special requests, or feedback about our cakes, 
        please fill out the form below or contact us via email at <EmailLink href="mailto:hello@cakecentral.co.uk">hello@cakecentral.co.uk</EmailLink>.
        We look forward to hearing from you!
      </Description>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone Number:</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Send</Button>
      </Form>
      {status && <Status>{status}</Status>}
    </ContactContainer>
  );
};

export default Contact;

// Styled Components
const ContactContainer = styled.div`
  max-width: 750px;
  border: 1px solid #ccc;
  width: calc(100% - 50px);
  margin: 50px auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.125rem;
  color: #555;
  padding: 0 20px;
`;

const EmailLink = styled.a`
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 80px);
  margin: 0 auto;
  padding: 25px 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  align-self: flex-start;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

const Status = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${props => (props.error ? 'red' : 'green')};
  font-weight: bold;
`;