import React from 'react'
import './testimonials.css'

export default function Testimonials() {
  return (
    <div className='testimonials'>
        <h2>TESTIMONIALS</h2>
        <div className="testimonials-body">
            <div className="testimonials-body-item">
                <h3>Tewabe Yilak</h3>
                {/* <hr /> */}
                <p>As a general manager I had the chance to witness that he demonstrated integrity and professionalism in undertaking its duties and responsibilities.</p>
                {/* <hr /> */}
                <h3>General Manager, ICOS Consulting PLC</h3>
            </div>
            <div className="testimonials-body-item">
                <h3>Jhon Doe</h3>
                {/* <hr /> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quasi adipisci quaerat exercitationem enim illum in voluptatem corporis et ratione alias, asperiores ipsa voluptate nostrum, tempora eos molestias! Quae, quibusdam?</p>
                {/* <hr /> */}
                <h3>Senior Product Manager</h3>
            </div>
            <div className="testimonials-body-item">
                <h3>Abebe Bekele</h3>
                {/* <hr /> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quasi adipisci quaerat exercitationem enim illum in voluptatem corporis et ratione alias, asperiores ipsa voluptate nostrum, tempora eos molestias! Quae, quibusdam?</p>
                {/* <hr /> */}
                <h3>Senior Development Officer</h3>
            </div>
        </div>
    </div>
  )
}
