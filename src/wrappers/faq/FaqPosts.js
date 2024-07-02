import React, { Fragment } from "react";
import Accordion from 'react-bootstrap/Accordion';
const FaqPosts = () => {
  return (
    <Fragment>      
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Can evpe accommodate specific customization requests for its EV fleets?</Accordion.Header>
        <Accordion.Body>
        Yes, we understand that different clients may have unique requirements. Our team works closely with clients to customize EV fleets according to their specific needs, whether it involves vehicle modifications, branding, or other customization options.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How can I get started with evpe’s logistics solutions?</Accordion.Header>
        <Accordion.Body>
        Getting started with evpe is easy. Simply contact our team, and we’ll guide you through the process, from assessing your logistics needs to designing a customized solution that maximizes efficiency and minimizes costs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is the credit scoring system, and how does it work?</Accordion.Header>
        <Accordion.Body>
        Our compassionate credit scoring system is designed to provide leasing opportunities to individuals and businesses traditionally excluded from traditional credit scoring models. We understand that financial circumstances can vary, and we’re committed to promoting inclusivity and accessibility in electric vehicle leasing. Learn more about our compassionate credit scoring system and how it can help you get behind the wheel of an electric vehicle.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How does evpe ensure the reliability of its EVs for delivery operations?</Accordion.Header>
        <Accordion.Body>
        We work with reputable manufacturers and employ rigorous quality control measures to ensure the reliability and performance of our EV fleets. Additionally, our fleet management services include proactive maintenance and monitoring to address any issues promptly.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can evpe assist with charging infrastructure setup?</Accordion.Header>
        <Accordion.Body>
        Absolutely. We can assist with setting up both charging and swapping infrastructure tailored to your operational requirements. Additionally, we have strategic partnerships with charger and swapping providers that can seamlessly integrate into your fleet management system, ensuring efficient operation and optimization of your EV fleet. Whether you require on-site charging stations, access to a network of charging points, or swapping stations, we have the expertise and partnerships to facilitate the process effectively.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What environmental benefits does evpe’s solution offer?</Accordion.Header>
        <Accordion.Body>
        By transitioning to electric vehicles, EVPE helps reduce carbon emissions and mitigate the environmental impact of logistics operations. Our solution promotes sustainability and contributes to cleaner air and a healthier planet.
        </Accordion.Body>
      </Accordion.Item>     
    </Accordion>
     
    </Fragment>
  );
};

export default FaqPosts;
