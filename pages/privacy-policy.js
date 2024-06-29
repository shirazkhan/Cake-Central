import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { WEBSITE_WIDTH } from '../GlobalVariables';

const Container = styled.div`
    text-align: left;
    padding: 20px;
    max-width: ${WEBSITE_WIDTH};
    margin: 0 auto;
`;

export default function PrivacyPolicy(props) {
    

    return (
        <>
            <Head>
                <title>Privacy Policy | Cake Central </title>
            </Head>
            <Container>
                <header>
                    <h1>Introduction to Our Privacy Policy</h1>
                </header>

                <main>

                <section>
                    <h2>Introduction to Privacy</h2>
                    <p>
                        At Cake Central, we value your privacy. This policy outlines our privacy practices for the Cake Central services and explains how we collect and utilize your personal information. We are committed to keeping your information safe and secure. If you have any concerns or wish to have your details removed, please contact us via email.
                    </p>
                </section>

                <section>
                    <h2>Notice about Children's Privacy:</h2>
                    <p>
                        Our services are intended for users aged 18 and above. If you are under 18, you may browse our services but are prohibited from providing any personally identifiable information or making purchases.
                    </p>
                </section>

                <section>
                    <h2>What Information Do We Collect?</h2>
                    <p>
                        Cake Central collects your personal information with your consent. When placing an order, you will be required to provide details such as your full name, a valid email address, complete credit or debit card information, and delivery and billing addresses.
                    </p>
                </section>

                <section>
                    <h2>Understanding Your Site Visits</h2>
                    <p>
                        We may employ various measures to gather information about your online habits to enhance your experience. This may include recording the frequency and scope of your use of our services, the duration of your sessions, the web pages visited, and your IP address.
                    </p>
                    <p>
                        Cake Central may collect and organize this information directly or through third-party services, such as Google Analytics.
                    </p>
                </section>

                <section>
                    <h2>Utilization of Your Personal Information</h2>
                    <p>
                        We utilize the information you provide to facilitate smooth transactions. This includes contacting you regarding your orders, providing updates and notifications throughout the order process via email and SMS, and, with your consent, sending marketing information about our products and services.
                    </p>
                    <p>
                        We may also use your information to comply with applicable laws, prevent fraud, collect fees, and assist in dispute resolution.
                    </p>
                </section>

                <section>
                    <h2>Information Sharing</h2>
                    <p>
                        Cake Central may occasionally use your data for remarketing and customer feedback efforts. We do not sell, rent, or lease your personally identifiable information to third parties for marketing purposes. However, we may utilize this data to improve customer feedback and remarketing efforts.
                    </p>
                    <p>
                        We may request birthdays to enhance our marketing efforts and provide personalized offers.
                    </p>
                </section>

                <section>
                    <h2>Third-Party Software:</h2>
                    <p>
                        We utilize various third-party services for website performance, marketing, and remarketing purposes, including Google Analytics, Rakuten, Google Shopping, Klaviyo, and AdRoll. These services may collect data for personalization of ads and marketing communications.
                    </p>
                </section>

                <section>
                    <h2>Opt Out and Deletion of Personally Identifiable Information</h2>
                    <p>
                        You may opt out of Cake Central's mailing lists at any time by contacting our data controller via email. You can also delete your account or request deletion of your personally identifiable information stored on our database. We may retain certain aggregated or anonymized information for statistical and marketing purposes.
                    </p>
                </section>

                <section>
                    <h2>Information Security</h2>
                    <p>
                        Cake Central implements security systems and procedures, such as SSL protocol and encryption, to secure your personal information. While we take measures to reduce security risks, we cannot guarantee absolute security. In the event of a security breach, affected users will be notified.
                    </p>
                </section>

                <section>
                    <h2>Changes to this Privacy Policy</h2>
                    <p>
                        Cake Central may update this policy periodically. Substantial changes will be notified on our services thirty (30) days prior to taking effect. Other changes will be effective seven (7) days after posting unless required by legal obligations.
                    </p>
                    <p>
                        If you disagree with any amendments, please refrain from further use of our services.
                    </p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>
                        For any requests, comments, or questions regarding this privacy policy, please contact Cake Central via email at <a href="mailto:hello@cakecentral.co.uk">hello@cakecentral.co.uk</a>.
                    </p>
                </section>

                </main>
            </Container>
        </>
    )
}
