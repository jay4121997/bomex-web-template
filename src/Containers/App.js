import React,{Component} from 'react';
import Services from './Services';
import Details from './Details';
import News from '../Components/News/News';
import Navbar from '../Components/Navbar/Navbar';
import Backdrop from '../Components/UI/Backdrop/Backdrop';
import Sidebar from '../Components/Navbar/Sidebar/Sidebar';
import LearnAboutUs from '../Components/LearnAboutUs/LearnAboutUs';
import Particles from '../Components/Particles/Particles';
import mblsikka from '../Assets/images/banner-1-1-2.png';
import './App.css';

class App extends Component{

    state={
        sidebarDisplay:false
    }
    sidebarToggleHandler=(props)=>{
        this.setState({sidebarDisplay:true})
    }
    sideBarCloserHandler=()=>{
        this.setState({sidebarDisplay:false})
    }

   converter= () =>{
      let a= document.getElementById('num1').value;
      if(typeof(a)!=='int')
      {
          alert("Enter a number");
          document.getElementById('num1').value=null;
          return;
      }
      let ans= a/500000;
      document.getElementById('btc').innerHTML="Value in Bitcoins is "+ans;
   }
    render(){

        
const app=(
    
    <div>
         <Sidebar raam={this.state.sidebarDisplay} />
         <Backdrop sideBarCloser={this.sideBarCloserHandler} sideBar={this.state.sidebarDisplay}>
         
        <Navbar sideBarToggle={this.sidebarToggleHandler}/>
        <Particles id="top"/>
        <div className='container'>
        <div className='mbl row'>
        <div className="col-md-6">
        <h1>Bitcoins are secure in your pocket </h1>
        <p className="lead"> Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="col-md-6">
        <img src={mblsikka} alt="Mobile Sikka"/>
        </div>
        </div>
        </div>
        <Services />
        <LearnAboutUs/>
        <News />
        <div className="calculator">
        <div className="black">
        <p> Bitcoin currency </p>
        <h1>Calculator</h1>
        <span> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
eirmod tempor invidunt ut laboret dolore magna aliquyam erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
eirmod tempor invidunt ut laboret dolore magna aliquyam erat.</span> <br />
        <input type="text" id="num1" placeholder="Enter the value in Rs"/> &nbsp; &nbsp; <p id="btc"> </p> <br />
        <input type="button" className="btn" onClick={this.converter} value="Convert"/>
        </div>
        </div>
        <div className="back-to-top">
        <a href="#top">
        <i className="icon ion-md-arrow-up "/>
        </a>
        </div>

        <Details />
        <footer> 
            <div className="footer-bottom row">
            <div className="row">
            <div className="footer-content">
            <div className="col-md-5">
            <p> © 2018 Bitcoin.com All copy rights are reserved. </p>
            </div>
            </div>
            </div>
            </div>
            </footer>
            </Backdrop>
        </div>
)

   return (<div> 
    {app}
     </div>);

    }
}
export default App;