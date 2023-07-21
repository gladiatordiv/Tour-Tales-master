import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'



const Testimonials = () => {
    const settings={
        dots:true,
        infinte:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slideToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slideToShow:2,
                    slidesToScroll:1,
                    infinte:true,
                    dots:true,
                },

            },
            {
               breakpoint:576,
               settings:{
                slideToShow:1,
                slidesToScroll:1,
               },

            }
        ]
    }
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus mollitia aut laboriosam optio totam voluptate officiis ipsum sequi suscipit. Ipsa aliquid tempora veniam ipsam ullam architecto, accusantium aperiam, doloremque, non velit unde blanditiis sapiente?
        </p>
<div className="d-flex align-items-center gap-4 mt-3">
    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
    <div>

    <h6 className='mb-0 mt-3'>Lakhan Pratap</h6>
    <p>Cutomer</p>
    </div>
</div>
        </div>

        <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus mollitia aut laboriosam optio totam voluptate officiis ipsum sequi suscipit. Ipsa aliquid tempora veniam ipsam ullam architecto, accusantium aperiam, doloremque, non velit unde blanditiis sapiente?
        </p>
<div className="d-flex align-items-center gap-4 mt-3">
    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
   <div>

    <h6 className='mb-0 mt-3'>lady gaga</h6>
    <p>Cutomer</p>
</div>
   </div>
        </div>
        <div className="testimonial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus mollitia aut laboriosam optio totam voluptate officiis ipsum sequi suscipit. Ipsa aliquid tempora veniam ipsam ullam architecto, accusantium aperiam, doloremque, non velit unde blanditiis sapiente?
        </p>
<div className="d-flex align-items-center gap-4 mt-3">
    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
   <div>

    <h6 className='mb-0 mt-3'>Ayush verma</h6>
    <p>Cutomer</p>
   </div>
</div>        </div>
    </Slider>
  )
}

export default Testimonials