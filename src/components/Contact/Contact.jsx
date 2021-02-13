import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Become a Patron!" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to help me make great content on my channel The Majesty of Reason? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://www.patreon.com/majestyofreason#:~:text=Majesty%20of%20Reason%20aims%20to,rigorous%20philosophical%20reasoning%20and%20evidence.'}
            >
              {btn || "Join Here"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
