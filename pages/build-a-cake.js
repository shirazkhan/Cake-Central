import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import FreeDeliveryBanner from '../components/FreeDeliveryBanner';
import BespokeCakeBanner from '../components/BespokeCakeBanner';
import { PRIMARY_THEME_COLOR, DESKTOP_VIEW, WEBSITE_WIDTH, PRIMARY_BUTTON_COLOR, SECONDARY_BUTTON_COLOR, WEBSITE_NAME } from '../GlobalVariables';
import WhatsappHeader from '../components/WhatsappHeader';

const OrderFormContainer = styled.div`
  max-width: 750px;
  border: 1px solid #ccc;
  width: calc(100% - 70px);
  margin: 10px auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const OrderHeader = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem;
  color: ${PRIMARY_THEME_COLOR};
`;

const OrderDescription = styled.p`
  text-align: center;
  margin-bottom: 0.5em;
  font-size: 1.125rem;
  color: #555;
  padding: 0 20px;
`;

const OrderForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 25px 0;
  width: calc(100% - 20px);
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  ${DESKTOP_VIEW}{
    flex-direction: row;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  display: flex;
  line-height: 1em;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0 20px;
  border: 1px solid ${PRIMARY_THEME_COLOR}75;
  background: white;
`;

const Select = styled.select`
  width: 100%;
  height: 45px;
  border: 1px solid ${PRIMARY_THEME_COLOR}75;
  border-radius: 4px;
  font-size: 1rem;
  text-align: center;
  padding: 0 20px;
  background: white;
  color: black;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${PRIMARY_THEME_COLOR}75;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  ${DESKTOP_VIEW}{
    width: 20px;
    height: 20px;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #333;
`;

const SubmitButton = styled(motion.button)`
  padding: 0.75rem;
  background-color: ${PRIMARY_BUTTON_COLOR};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${props => (props.error ? 'red' : 'green')};
  font-weight: bold;
`;

const CakeOrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postCode: '',
    budget: '',
    notes: '',
    cakeSize: '',
    typeOfCake: '',
    dateNeeded: '',
    timeNeeded: '',
    deliveryNeeded: false,
    spongeFlavour: '',
    icingFlavour: '',
  });

  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Enquiry sent successfully! We\'ll be in touch soon!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          postCode: '',
          budget: '',
          notes: '',
          cakeSize: '',
          typeOfCake: '',
          dateNeeded: '',
          timeNeeded: '',
          deliveryNeeded: false,
          spongeFlavour: '',
          icingFlavour: '',
        });
      } else {
        setStatus('Error sending enquiry');
      }
    } catch (error) {
      setStatus('Error sending enquiry');
    }
  };

  return (
    <>
    <Head>
  <title>Build a Cake | {WEBSITE_NAME}</title>
  <meta name="description" content="Create your custom cake with our easy build-a-cake tool. Choose flavors, designs, and extras for your perfect cake." />
  <meta name="keywords" content="custom cake, build a cake, personalized cakes, cake design tool" />
</Head>
      <WhatsappHeader />
      <Banner backgroundImage={'/patterns/sprinkles.svg'} title={'Build a Cake With Us!'} description={'Let us build the perfect cake, designed by you!'} />
      <BespokeCakeBanner />
      <OrderFormContainer>
        <OrderHeader>Cake Enquiry</OrderHeader>
        <OrderDescription>Help us whip up your perfect cake by filling out this form with all the delicious details.</OrderDescription>
        <OrderDescription>Once you’ve sent it over, we’ll get back to you quicker than a cupcake in the oven!</OrderDescription>
        <OrderDescription>...Or if you’re in a hurry, feel free to chat with us on WhatsApp by clicking here! </OrderDescription>
        <OrderForm initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} onSubmit={handleSubmit}>
          <FormGroup>
            <Input placeholder='First Name*' id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
            <Input placeholder='Last Name' id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Input placeholder='Email Address*' type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
            <Input placeholder='Phone Number*' type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </FormGroup>
          <FormGroup>
            <Input placeholder='Post Code*' id="postcode" name="postCode" value={formData.postCode} onChange={handleInputChange} />
            <Input placeholder='Budget (£)' id="budget" name="budget" value={formData.budget} onChange={handleInputChange} />
          </FormGroup>
          {/*<FormGroup style={{justifyContent: 'center'}}>
            <CheckboxLabel>
              <Checkbox id="deliveryNeeded" name="deliveryNeeded" checked={formData.deliveryNeeded} onChange={handleCheckboxChange} />
              Does this order need delivering?
            </CheckboxLabel>
            </FormGroup>*/}
          <FormGroup style={{flexDirection: 'row'}}>
            <Label htmlFor="dateNeeded">Date needed:</Label>
            <Input style={{width: '500px'}} type="date" id="dateNeeded" name="dateNeeded" value={formData.dateNeeded} onChange={handleInputChange} />
            {/*<Input placeholder='Time' type="input" id="timeNeeded" name="timeNeeded" value={formData.timeNeeded} onChange={handleInputChange} />*/}
          </FormGroup>
          <FormGroup style={{flexDirection: 'row'}}>
            <Select id="cakeSize" name="cakeSize" value={formData.cakeSize} onChange={handleInputChange}>
              <option value="">Cake Size</option>
              <option value="6 Inch">Small 6"</option>
              <option value="8 Inch">Medium 8"</option>
              <option value="10 inch">Large 10"</option>
              <option value="12 inch">Extra Large 12"</option>
              <option value="NA">Not Applicable</option>
            </Select>
            <Select id="typeOfCake" name="typeOfCake" value={formData.typeOfCake} onChange={handleInputChange}>
              <option value="">Type of Cake</option>
              <option value="Round Shaped">Round Shaped</option>
              <option value="Square Shaped">Square Shaped</option>
              <option value="Heart Shaped">Heart Shaped</option>
              <option value="Tiered Cake">Tiered Cake</option>
              <option value="Cupcakes">Cupcakes</option>
            </Select>
          </FormGroup>
          <FormGroup style={{flexDirection: 'row'}}>
            <Select id="spongeFlavour" name="spongeFlavour" value={formData.spongeFlavour} onChange={handleInputChange}>
              <option value="">Sponge Flavour</option>
              <option value="Vanilla">Vanilla</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Red Velvet">Red Velvet</option>
              <option value="Not Sure">Not Sure / Other</option>
            </Select>
            <Select id="icingFlavour" name="icingFlavour" value={formData.icingFlavour} onChange={handleInputChange}>
              <option value="">Icing Flavour</option>
              <option value="Vanilla Icing">Vanilla Icing</option>
              <option value="Chocolate Icing">Chocolate Icing</option>
              <option value="Strawberry Icing">Strawberry Icing</option>
              <option value="Not Sure">Not Sure / Other</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Textarea placeholder='Any Extra Details?' id="notes" name="notes" value={formData.notes} onChange={handleInputChange} />
          </FormGroup>
          <SubmitButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
            Submit Enquiry
          </SubmitButton>
        </OrderForm>
        {status && <StatusMessage>{status}</StatusMessage>}
      </OrderFormContainer>
      <FreeDeliveryBanner />
    </>
  );
};

export default CakeOrderForm;
