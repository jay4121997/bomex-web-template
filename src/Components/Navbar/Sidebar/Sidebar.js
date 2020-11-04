import React from 'react';
import './Sidebar.css';

const sidebar=(props)=>{
        if(props.raam){
            return(
                <div className="Sidebar open text-center" id="sb">
                    <h1> Crypto Bitcoin </h1>
                    <h1> Currency </h1>
                    <h1> Html Template </h1>
                    <p>
                    Lorem ipsum dolor sit amet adipiscing elitn quis ex et mauris vulputate semper Etiam eget lacus dapibs ultricies diam vel sollicitudin.
                        </p>
                        <span>
                            Inquiry@Bitcoin.com <br/>
                            2089IDA0S
                            </span>
                </div>
                    );
        }
       else 
       return(
            <div className="Sidebar close" id="sb">
            </div>
       ) ;
       
};

export default sidebar;