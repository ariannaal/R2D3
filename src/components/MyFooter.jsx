import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const MyFooter = () => (

    <div className="footer p-4" data-bs-theme="dark">
        <Container>
      <div className="d-flex justify-content-center mb-4" >
        <Image src="/assets/square-facebook.svg" alt="facebook logo" className="me-3 social-logo" />
        <Image src="/assets/square-instagram.svg" alt="instagram logo" className="me-3 social-logo" />
        <Image src="/assets/square-twitter.svg" alt="twitter logo" className="me-3 social-logo" />
        <Image src="/assets/square-youtube.svg" alt="youtube logo" className="social-logo"/>
            </div>
            
           <Row className="footer-text fs-6 my-4 text-start" >
        <Col xs={12} md={6} lg={3}>Audio and Subtitles</Col>
        <Col xs={12} md={6} lg={3}>Audio Description</Col>
        <Col xs={12} md={6} lg={3}>Help Center</Col>
        <Col xs={12} md={6} lg={3}>Gift Cards</Col>
            </Row>  
            
            <Row className="footer-text fs-6 my-4 text-start" >
        <Col xs={12} md={6} lg={3}>Media Center</Col>
        <Col xs={12} md={6} lg={3}>Investor Relations</Col>
        <Col xs={12} md={6} lg={3}>Jobs</Col>
        <Col xs={12} md={6} lg={3}>Terms of Use</Col>
            </Row>  
            
            <Row className="footer-text fs-6 my-4 text-start" >
        <Col xs={12} md={6} lg={3}>Privacy</Col>
        <Col xs={12} md={6} lg={3}>Legal Notices</Col>
        <Col xs={12} md={6} lg={3}>Cookie Preferences</Col>
        <Col xs={12} md={6} lg={3}>Corporate Information</Col>
            </Row>  
            
             <Row className="footer-text fs-6 my-4 text-start" >
                <Col xs={12} md={6} lg={3}>Contact Us</Col>
            </Row>

            
            <div className="text-center">
        <Button variant="dark" className="btn-outline-secondary my-4">Service Code</Button>
        <div className="text-secondary">
          &copy; 1997-2019 Netflix, Inc. &#123;i-0d00fcda2fdf9c0de&#125;
        </div>
      </div>
    </Container>

    </div>

)

export default MyFooter;