import React,{Component} from 'react';
import Particles from 'react-particles-js';
import './Particles.css';
class Particle extends Component{
  
    render(){
        return (
            <Particles className='particle'
                params={{
            		particles: {
                        number:{"value":50,"density":{"enable":true,"value_area":800}},
                        move:{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,attract:{"enable":false,"rotateX":600,"rotateY":1200}},
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 0
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                backgroundColor: '#F9B81F' 
              }}
            >
            <h1 style={{color:'white'}}> Raam </h1>
            </Particles>
        );
    }
}

export default Particle;