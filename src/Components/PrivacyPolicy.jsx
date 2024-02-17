import React from 'react';
import "../App.css";
const PrivacyPolicy = () => {
    return (
        <div className=' privacy_policy '>
            <div className='container py-5'>
                <h1 className='fs-1 border-bottom border-3 border-dark'>Privacy Policy</h1>
                <p>last updated at:</p>
                <div className='mt-4'>
                    <p className='fs-4'>At Martial Arts App, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines the types of personal information we collect, how we use it, and how we safeguard your information when you use our mobile application.</p>
                </div>

                <div>
                    <h3 className='text-decoration-underline'>Information We Collect:</h3>
                    <ol>
                        <li className='fs-4'>
                            <strong>Personal Information:</strong> When you register an account with Karate App, we may collect personal information such as your name, email address, and other contact details.
                        </li>
                        <li className='fs-4'>
                            <strong>Usage Information:</strong> We may collect information about how you use the Karate App, including your interactions with the app, session duration, and preferences.
                        </li>
                        <li className='fs-4'>
                            <strong>Payment Information: </strong> If you make purchases within the app, we may collect payment information such as credit card details or other payment methods. However, we do not store payment information on our servers. We utilize third-party payment processors that adhere to strict security standards.
                        </li>
                        <li className='fs-4'>
                            <strong>Device Information: </strong> We may collect information about the device you use to access the Karate App, including the device type, operating system, and unique device identifiers.
                        </li>
                    </ol>
                </div>


                <div>
                    <h3 className='text-decoration-underline'>How We Use Your Information:</h3>
                    <ol>
                        <li className='fs-4'>
                            <strong>To Provide Services:</strong>We use the information collected to provide and personalize the services offered by the Karate App, including delivering content, processing transactions, and improving the app's functionality.
                        </li>
                        <li className='fs-4'>
                            <strong>Communication:</strong>  We may use your contact information to communicate with you about your account, updates to our services, and promotional offers. You can opt-out of promotional communications at any time.
                        </li>
                        <li className='fs-4'>
                            <strong>Analytics:</strong> We may use aggregated and anonymized data for analytical purposes to understand how users interact with the Karate App and to improve our services.
                        </li>
                        <li className='fs-4'>
                            <strong>Security:</strong> We take measures to protect the security of your personal information and prevent unauthorized access or disclosure.
                        </li>
                    </ol>
                </div>

                <div>
                    <h3 className='text-decoration-underline'>Information Sharing:</h3>
                    <p className='fs-4'>We do not sell, trade, or rent your personal information to third parties for marketing purposes. However, we may share your information with trusted third-party service providers who assist us in operating our app and providing services to you. These service providers are contractually obligated to maintain the confidentiality and security of your information.</p>
                </div>
                <div>
                    <h3 className='text-decoration-underline'>Data Retention:</h3>
                    <p className='fs-4'>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
                </div>
                <div>
                    <h3 className='text-decoration-underline'>Your Choices:</h3>
                    <p className='fs-4'>You can update your account information and preferences within the Karate App settings. You may also choose to delete your account, although please note that doing so may result in the loss of access to certain features and services.</p>
                </div>
                <div>
                    <h3 className='text-decoration-underline'>Children's Privacy:</h3>
                    <p className='fs-4'>The Karate App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we may have inadvertently collected information from a child under 13, please contact us immediately.</p>
                </div>
                <div>
                    <h3 className='text-decoration-underline'>Changes to this Privacy Policy:</h3>
                    <p className='fs-4'>We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the revised policy within the Karate App or through other means of communication. Your continued use of the Karate App after any such changes indicates your acceptance of the updated Privacy Policy.</p>
                </div>
                <div>
                    <h3 className='text-decoration-underline'>Contact Us:</h3>
                    <p className='fs-5'><b>Email: </b>test@gmail.com</p>
                </div>

            </div>


        </div>
    );
}

export default PrivacyPolicy;
