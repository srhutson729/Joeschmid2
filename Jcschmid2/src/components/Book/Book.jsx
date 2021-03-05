import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import BookImg from '../Image/BookImg';


const Book = () => {
    const { book } = useContext(PortfolioContext);
    const { img, btn, paragraphOne, paragraphTwo, email } = book;
   
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
      } else {
        setIsMobile(true);
        setIsDesktop(false);
      }
    }, []);
  
    return (
           
      <section id="book" >
          <Container>
           <Title title="Check out my Book!" />
            <Row className='book-wrapper'>     <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <BookImg alt="bookcover" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
             <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="contact-wrapper">
              <p className="contact-wrapper__text">
              {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
                <p className="contact-wrapper__text">
                  {paragraphTwo ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>
              <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              href={email ? `mailto:${email}` : 'https://www.amazon.com/Majesty-Reason-Critical-Thinking-Philosophy-ebook/dp/B086G7KS52'}
            >
              {btn || "Order Here"}
            </a>
            </div>
          </Fade>
          </Col>
          </Row>
         </Container>
      </section>
    );
  };




export default Book;