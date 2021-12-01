import React,{Component} from 'react'
import './App.css';
import PersonComponent from './profile/component';
import Logos from  './profile/me.jpg';
import User from './profile/handlename'
import HandleName from './profile/user';

class App extends Component{
render() {
  return (
    <div>
    <header  className="box9">
    </header>
    <main className="box11">
    <div  className="box3">
      <div className="box2">
      <PersonComponent fullName={"Belbekri Souhail"}>
      <img src={Logos}  alt="me" style={{borderRadius: "6px 6px 0px 0px",width:"100%",height:"220px"}} />
      </PersonComponent>
      </div>
      <div className="box1">
      <PersonComponent bio={"Tel le phénix, je renais de mes cendres."} style={{marginButtom:"0px"}}>bio</PersonComponent>
      <PersonComponent profession={"Engineer and web developper JS"}  style={{marginTop:"0px"}}>Profession</PersonComponent>
      </div>
      <div>
      <User data={HandleName}/>
      </div>
    </div>
    </main>
    <footer className="box10" >
    </footer>
    </div>
  );
}}

export default App;


