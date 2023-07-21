import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import experienceImg from "../assets/images/experience.png";
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';
const Home = () => {
  return (
<>
    {/* -----------new section-------------*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero_subtitle d-flex align-items-center">
               <Subtitle subtitle={'Know where you go'} /> 
                <img src={worldImg} alt="" />
              </div>
              <h1> Travelling is the best way to spend  <span className='highlight'>Vaction</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa, quibusdam quo atque assumenda saepe quaerat voluptas quis ducimus soluta deleniti 
                sed ipsa quas voluptatem. Necessitatibus, tempora quasi! Amet, nobis?
              </p>
            </div>

          </Col>
          <Col lg='2'>
            <div className="hero_img_box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img_box mt-4">
              <video src={heroVideo} type="video/mp4" alt="" controls autostart autoPlay  />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero_img_box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar /> 
        
        </Row>
      </Container>
    </section>
{/* ===================hero section start==============*/}
<section>
  <Container>
    <Row>
      <Col lg='3'>
      <h5 className="services__subtitle">What we serve</h5>
      <h2 className='services__title'>we offer our best services</h2>
      </Col>
      <ServiceList/>
    </Row>
  </Container>
</section>
{/* ===================hero section end==============*/}
{/* ===================Featured section start==============*/}

<section>
  <Container>
    <Row>
      <Col lg='12' className='mb-5'>
      <Subtitle subtitle={'Explore'}/>
      <h2 className='featured__tour-title'>Our featured tours</h2>
      </Col>
      <FeaturedTourList/>
    </Row>
  </Container>
</section>
{/* ===================Featured section end============== */}
{/*==================== experience section start ========== */}
<section>
  <Container>
    <Row>
      <Col lg='6'>
      <div className="experience__content">
        <Subtitle subtitle={'Experience'}/>
        <h2>with our all experience<br/> we will serve you</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Quae, ipsam voluptates ipsa in exercitationem officia nemo soluta molestias itaque nulla!</p>
      </div>

      <div className="counter__wrapper d-flex align-items-center gap-5">
        <div className="counter__box">

          <span>12k+</span>
          <h6>Successful Trip</h6>
        </div>

        <div className="counter__box">
    <span>15</span>
    <h6>Regular Clients</h6>
    </div>

<div className="counter__box">
<span>12k+</span>
<h6>Years Experience</h6>
</div>

      </div>
      </Col>

      <Col lg='6'>
<div className="experience__img">
  <img src={experienceImg} alt="" />
</div>

      </Col>
    </Row>
  </Container>
</section>

{/*==================== experience section end ========== */}
{/*=====================gallery section start============*/}
<section>
  <Container>
    <Row>
      <Col>
      <Subtitle subtitle={'Gallery'}/>
        <h2>Visit our customers tour gallery</h2>
      </Col>
      <Col lg='12'>
       <MasonryImagesGallery/>

      </Col>
    </Row>
  </Container>
</section>
{/*=====================gallery section end============*/}
{/*=====================testimonial section start============*/}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'Fans Love'}/>
        <h2 className='testimonial__title'>What our Fans says about us</h2>
     </Col>
     <Col lg='12'> 
      <Testimonials/>
     </Col>
    </Row>
  </Container>
</section>




{/*=====================testimonial section end============*/}

<Newsletter></Newsletter>
</>
  )
}

export default Home