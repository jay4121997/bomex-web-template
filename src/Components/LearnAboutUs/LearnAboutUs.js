import React from 'react';
import './LearnAboutUs.css';
import img from '../../Assets/images/about-moc-1.png';

const learnAboutUs=()=>(
    <section className="LearnAboutUs">
    <div className="row">
    <div className="container">
    <div className="col-md-6 text">
    <h1>
        Learn about Bitcoin
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore edolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, takimata sanctus est ipsum dolor.
            </p>
         <button>Get started</button>    
    </div>
    <div className="col-md-6">
    <img src={img} alt="LAU chhabi" />
    </div>
    </div>
    </div>
    </section>
);

export default learnAboutUs;
