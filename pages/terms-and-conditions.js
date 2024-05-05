import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    text-align: center;
    li{
        text-align: left;
    }
`;

export default function TermsAndConditions(props) {
    

    return (
        <>
            <Container>
                <section>
                    <h2>Terms of Use Agreement</h2>
                    <p>Please read carefully the following terms and conditions (the "Terms" or "Terms of Use"), because they constitute a binding agreement between you and Cake Central Limited. By accessing the Website or by using any of its services, you indicate your acceptance to these Terms. If you do not agree with any or all the Terms of Use, you may not access the Website or use any of its services. Please feel free to submit any questions that you may have regarding the Terms to: <a href="mailto:hello@cakecentral.co.uk">hello@cakecentral.co.uk</a></p>
                </section>
                <section>
                    <h2>The Service</h2>
                    <p>When using the Website, you may review food and place an order for food and merchandise. Upon completing your order online, Cake Central Limited will review your order and acknowledge receipt with an e-mail message that will be sent to your e-mail address. Please note that Cake Central Limited's e-mail notification does not constitute an acceptance of your order. The execution of your order and the charge of your credit card will be made directly by the venue that you ordered from and will be deemed as an acceptance of your order.</p>
                </section>
                <section>
                    <h2>Availability</h2>
                    <p>Our services are available only to, and may only be used by individuals who can be legally bound by contracts under the applicable law. Each user of the Website must have a valid credit or debit card and a valid e-mail address for contact purposes. Cake Central Limited's services are available only for credit and debit card types which are listed on the Website.</p>
                    <p>The Website is not directed to children under the age of 18. If you are under 18 years old, you may browse the Website, however, you may not place an order online or provide Cake Central Limited with any of your personally identifiable information. Cake Central Limited will permanently delete a child’s personally identifiable information if a parent so requests by sending an e-mail to <a href="mailto:hello@cakecentral.co.uk">hello@cakecentral.co.uk</a>.</p>
                    <p>We do not sell alcoholic products to persons under the age of 18 as per the licensing Act 2003. Refusal of a store pickup or driver delivery is at our discretion. In placing an order containing alcohol you confirm that you, and the intended recipient(s), are aged 18 years or over.</p>
                </section>
                <section>
                    <h2>Acceptable Use of the Website</h2>
                    <p>Subject to these Terms you may access and use the Website and order online. The following Terms define the acceptable use of the Website. While using the Website you agree to refrain from willfully, or carelessly -</p>
                    <ul>
                    <li>Interfering with or disrupting the functionality of the Website;</li>
                    <li>Disobey or breach these Terms or any other applicable instructions conveyed by Cake Central Limited and its officers;</li>
                    <li>Violating any applicable local, state, national or international law, statute, ordinance, rule or regulation;</li>
                    <li>Impersonating any person or entity, or making any false statement about your identity, employment, agency or affiliation with any person or entity;</li>
                    <li>Providing false or misleading credit card details and/or false delivery address when placing an order online;</li>
                    <li>Displaying the Website or any part thereof in an exposed or concealed frame;</li>
                    <li>Linking to certain elements on the Website independently from the web pages on which they originally appear;</li>
                    <li>Email, transmit or otherwise make available any information and materials that infringes third party’s right, including Intellectual Property Rights;</li>
                    <li>Email, transmit or otherwise make available software viruses, Trojan horses, warms and any other malicious application to computers and networks;</li>
                    <li>Email, transmit or otherwise make available any information or material which may constitute or encourages conduct that would constitute a criminal offense or civil wrongdoing or otherwise violets any applicable law;</li>
                    <li>Email, transmit or otherwise make available any information or material which may be deemed threatening, abusive, harassing, defamatory, libelous, vulgar, obscene or racially, ethnically or otherwise objectionable.</li>
                    </ul>
                </section>
            </Container>
        </>
    )
}
