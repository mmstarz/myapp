import React, { Component } from 'react';
import './App.css';
import MyBar from './navbar';
import NavButtons from './navbuttons';
import Cardfront from './components/cardfront';
import Cardback from './components/cardback';
import MyGalMod from './components/gallerymodal';
import Aboutus from './components/aboutus';
import Updates from './components/updates';
import Contacts from './components/contacts';
import LoginForm from './components/login';

let flag = 0;
let carList = [
  {
    id: 1,
    title: 'first card title',
    trademark: 'bmw',
    year: '2014',
    model: 'i8',
    mileage: '20.000',
    color: 'white/blue',
    engine: 'gas',
    size: 'coupe',
    doors: '3',
    seats: '4',
    interior: 'leather',
    advances: 'full complectation',
    defects: 'no defects',
    img1: require(`./images/${2}/${1}.jpg`),
    img2: require('./images/2/2.jpg'),
    img3: require('./images/2/3.jpg'),
    img4: require('./images/2/4.jpg'),
  },
  { 
    id: 2,
    title: 'second card title',
    trademark: 'audi',
    year: '2017',
    model: 'A6',
    mileage: '40.000',
    color: 'black',
    engine: 'gas',
    size: 'coupe',
    doors: '3',
    seats: '4',
    interior: 'leather',
    advances: 'full complectation',
    defects: 'no defects',
    img1: require(`./images/${3}/${1}.jpg`),
    img2: require('./images/3/2.jpg'),
    img3: require('./images/3/3.jpg'),
    img4: require('./images/3/4.jpg'),
  },
  { 
    id: 3,
    title: 'third card title',
    trademark: 'mercedes',
    year: '2018',
    model: 'S Class',
    mileage: '10.000',
    color: 'red',
    engine: 'diesel',
    size: 'coupe',
    doors: '3',
    seats: '4',
    interior: 'leather',
    advances: 'full complectation',
    defects: 'no defects',    
    img1: require(`./images/${2}/${1}.jpg`),
    img2: require('./images/2/2.jpg'),
    img3: require('./images/2/3.jpg'),
    img4: require('./images/2/4.jpg'),
  },  
];

class App extends Component {
  state = {
      id: carList[flag].id,
      title: carList[flag].title,
      trademark: carList[flag].trademark,
      model: carList[flag].model,
      year: carList[flag].year,
      mileage: carList[flag].mileage,
      color: carList[flag].color,
      engine: carList[flag].engine,
      size: carList[flag].size,
      doors: carList[flag].doors,
      seats: carList[flag].seats,
      interior: carList[flag].interior,
      advances: carList[flag].advances,
      defects: carList[flag].defects,
      img1: carList[flag].img1,
      img2: carList[flag].img2,
      img3: carList[flag].img3,
      img4: carList[flag].img4,
      btnColor: 'btn-4',
      flipped: true,
      index: 0,      
  }; 

  switchNext = () => {
    console.log('Button Next was Clicked')
    flag += 1;
    // Wrong method to use this.state.cars[0].trademark = 'Lexus'
    if (flag < carList.length) {      
      this.setState({
        id: carList[flag].id,
        trademark: carList[flag].trademark,
        model: carList[flag].model,
        year: carList[flag].year,
        mileage: carList[flag].mileage,
        color: carList[flag].color,
        engine: carList[flag].engine,
        title: carList[flag].title,
        size: carList[flag].size,
        doors: carList[flag].doors,
        seats: carList[flag].seats,
        interior: carList[flag].interior,
        advances: carList[flag].advances,
        defects: carList[flag].defects,
        img1: carList[flag].img1,
        img2: carList[flag].img2,
        img3: carList[flag].img3,
        img4: carList[flag].img4,
        btnColor: 'btn-' + flag,             
      });      
    } else {
      flag = 0;
      this.setState({
        id: carList[flag].id,
        trademark: carList[flag].trademark,
        model: carList[flag].model,
        year: carList[flag].year,
        mileage: carList[flag].mileage,
        color: carList[flag].color,
        engine: carList[flag].engine,
        title: carList[flag].title,
        size: carList[flag].size,
        doors: carList[flag].doors,
        seats: carList[flag].seats,
        interior: carList[flag].interior,
        advances: carList[flag].advances,
        defects: carList[flag].defects,
        img1: carList[flag].img1,
        img2: carList[flag].img2,
        img3: carList[flag].img3,
        img4: carList[flag].img4,
        btnColor: 'btn-4'
      });
    }  
  }

  switchPrev = () => {
    console.log('Button Prev was Clicked')
    flag -= 1;    
    if (flag < 0) {      
      flag = carList.length - 1;
      console.log(flag)
      this.setState({
        id: carList[flag].id,
        trademark: carList[flag].trademark,
        model: carList[flag].model,
        year: carList[flag].year,
        mileage: carList[flag].mileage,
        color: carList[flag].color,
        engine: carList[flag].engine,
        title: carList[flag].title,
        size: carList[flag].size,
        doors: carList[flag].doors,
        seats: carList[flag].seats,
        interior: carList[flag].interior,
        advances: carList[flag].advances,
        defects: carList[flag].defects,
        img1: carList[flag].img1,
        img2: carList[flag].img2,
        img3: carList[flag].img3,
        img4: carList[flag].img4,
        btnColor: 'btn-' + flag,             
      });      
    } else {      
      this.setState({
        id: carList[flag].id,
        trademark: carList[flag].trademark,
        model: carList[flag].model,
        year: carList[flag].year,
        mileage: carList[flag].mileage,
        color: carList[flag].color,
        engine: carList[flag].engine,
        title: carList[flag].title,
        size: carList[flag].size,
        doors: carList[flag].doors,
        seats: carList[flag].seats,
        interior: carList[flag].interior,
        advances: carList[flag].advances,
        defects: carList[flag].defects,
        img1: carList[flag].img1,
        img2: carList[flag].img2,
        img3: carList[flag].img3,
        img4: carList[flag].img4,
        btnColor: 'btn-4'
      });
    }
  }

  flipHandle = () => {    
    if(this.state.flipped === true) {
      this.setState({
        flipped: false,
      });
    } else {
      this.setState({
        flipped: true,
      });
    }
    console.log(this.state.flipped)
  } 

  render() {
    console.log('current flag value: ' + flag)   
    console.log(this.state.id)
    console.log(this.state.img1)
    

    let id = carList[flag].id;
    let trademark = carList[flag].trademark;
    let model = carList[flag].model;
    let year = carList[flag].year;
    let mileage = carList[flag].mileage;
    let color = carList[flag].color; 
    let engine = carList[flag].engine;
    let title = carList[flag].title;
    let size = carList[flag].size;
    let doors = carList[flag].doors;
    let seats = carList[flag].seats;
    let interior = carList[flag].interior;
    let advances = carList[flag].advances;
    let defects = carList[flag].defects;
    let img1 = carList[flag].img1;
    let img2 = carList[flag].img2;
    let img3 = carList[flag].img3;
    let img4 = carList[flag].img4;
    let currClass = this.state.btnColor;    
    let flippedCSS = this.state.flipped ? " " : " flipped";    

    return (
      <div className="App">
        <MyBar />                        
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false" >
          <button className={"mybtn circle-btn " + currClass} href="#myCarousel" data-slide="prev" onClick={this.switchPrev}>Prev</button>
          <div className="carousel-inner">                
            <div className="carousel-item active">
              <div className={"card flipcard text-white bgimg3" + flippedCSS} onClick={this.flipHandle} >
                <Cardfront
                  id={this.state.id}
                  title={this.state.title}
                  trademark={this.state.trademark}
                  model={this.state.model}
                  year={this.state.year}
                  engine={this.state.engine}
                  src={this.state.img1} 
                 />
                <Cardback
                  id={this.state.id}
                  trademark={this.state.trademark}
                  model={this.state.model}
                  year={this.state.year}
                  mileage={this.state.mileage}
                  color={this.state.color}
                  engine={this.state.engine}
                  size={this.state.size}
                  doors={this.state.doors}
                  seats={this.state.seats}
                  interior={this.state.interior}
                  advances={this.state.advances}
                  defects={this.state.defects}
                  src1={this.state.img1}
                  src2={this.state.img2}
                  src3={this.state.img3}
                  src4={this.state.img4}                  
                 />
              </div>
            </div>
            <div className="carousel-item">
              <div className={"card flipcard text-white bgimg3" + flippedCSS} onClick={this.flipHandle} >
                <Cardfront
                  id={id}
                  title={title}
                  trademark={trademark}
                  model={model}
                  year={year}
                  engine={engine}
                  src={img1}
                 />
                <Cardback
                  id={id}
                  trademark={trademark}
                  model={model}
                  year={year}
                  mileage={mileage}
                  color={color}
                  engine={engine}
                  size={size}
                  doors={doors}
                  seats={seats}
                  interior={interior}
                  advances={advances}
                  defects={defects}
                  src1={img1}
                  src2={img2}
                  src3={img3}
                  src4={img4}                  
                   />
              </div>
            </div>                
          </div>           
          <button className={"mybtn circle-btn " + currClass} href="#myCarousel" data-slide="next" onClick={this.switchNext}>Next</button>          
        </div>
        <NavButtons />
        <MyGalMod
          id={this.state.id}
          src1={this.state.img1}
          src2={this.state.img2}
          src3={this.state.img3}
          src4={this.state.img4}
          trademark={this.state.trademark}
          model={this.state.model}
          year={this.state.year}
          title={this.state.title} 
          />
        <Aboutus />
        <Updates />
        <Contacts />
        <LoginForm />        
      </div>        
    );
  }
}

export default App;
