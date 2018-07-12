import React from 'react';
import './App.css';
import MyBar from './components/navbar';
import NavButtons from './components/navbuttons';
import Cardfront from './components/cardfront';
import Cardback from './components/cardback';
import MyGalMod from './components/gallerymodal';
import Aboutus from './components/aboutus';
import Contacts from './components/contacts';
import LoginForm from './components/login';
import History from './components/history';
import Videomodal from './components/video';
import axios from 'axios';


let flag = 0;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carList: [
          {
            id: 1,
            title: 'first card title',
            location: 'Lithuania',
            trademark: 'BMW',
            year: '2000',
            model: '',
            mileage: '120.000',
            color: 'black',
            engine: 'gas',
            size: 'coupe',
            doors: '5',
            seats: '4',
            interior: 'leather',
            advances: 'full complectation',
            defects: 'no defects',
            images: [
              {
                id: 1,
                img: require('./content/bmw/pho1.jpg')},
              {
                id: 2,
                img: require('./content/bmw/pho2.jpg')},
              {
                id: 3,
                img: require('./content/bmw/pho3.jpg')},
              {
                id: 4,
                img: require('./content/bmw/pho4.jpg')},
              {
                id: 5,
                img: require('./content/bmw/pho5.jpg')},
              {
                id: 6,
                img: require('./content/bmw/pho6.jpg')},
              {
                id: 7,
                img: require('./content/bmw/pho7.jpg')},
              {
                id: 8,
                img: require('./content/bmw/pho8.jpg')},
              {
                id: 9,
                img: require('./content/bmw/pho9.jpg')},
              {
                id: 10,
                img: require('./content/bmw/pho10.jpg')},
              {
                id: 11,
                img: require('./content/bmw/pho11.jpg')},
            ],
            vid: '',    
            status: 'new',    
          },
          { 
            id: 2,
            title: 'second card title',
            location: 'Ukraine',
            trademark: 'Audi',
            year: '2006',
            model: 'A6',
            mileage: '140.000',
            color: 'silver',
            engine: 'gas',
            size: 'coupe',
            doors: '5',
            seats: '4',
            interior: 'leather',
            advances: 'full complectation',
            defects: 'no defects',
            images: [
              {
                id: 1,
                img: require('./content/audi/pho1.jpg')},
              {
                id: 2,
                img: require('./content/audi/pho2.jpg')},
              {
                id: 3,
                img: require('./content/audi/pho3.jpg')},
              {
                id: 4,
                img: require('./content/audi/pho4.jpg')},
              {
                id: 5,
                img: require('./content/audi/pho5.jpg')},
              {
                id: 6,
                img: require('./content/audi/pho6.jpg')},
              {
                id: 7,
                img: require('./content/audi/pho7.jpg')},
              {
                id: 8,
                img: require('./content/audi/pho8.jpg')},
              {
                id: 9,
                img: require('./content/audi/pho9.jpg')},
              {
                id: 10,
                img: require('./content/audi/pho10.jpg')},
              {
                id: 11,
                img: require('./content/audi/pho11.jpg')},
              {
                id: 12,
                img: require('./content/audi/pho12.jpg')},
              {
                id: 13,
                img: require('./content/audi/pho13.jpg')},
              {
                id: 14,
                img: require('./content/audi/pho14.jpg')},
            ],          
            vid: '',    
            status: 'new',
          },
          { 
            id: 3,
            title: 'third card title',
            location: 'Lithuania',
            trademark: 'Chevrolet',
            year: '',
            model: '',
            mileage: '',
            color: 'black',
            engine: '',
            size: 'coupe',
            doors: '5',
            seats: '4',
            interior: '',
            advances: '',
            defects: '',
            images: [
              {
                id: 1,
                img: require('./content/chevrolet/pho1.jpg')},
              {
                id: 2,
                img: require('./content/chevrolet/pho2.jpg')},
              {
                id: 3,
                img: require('./content/chevrolet/pho3.jpg')},
              {
                id: 4,
                img: require('./content/chevrolet/pho4.jpg')},
              {
                id: 5,
                img: require('./content/chevrolet/pho5.jpg')},
              {
                id: 6,
                img: require('./content/chevrolet/pho6.jpg')},
              {
                id: 7,
                img: require('./content/chevrolet/pho7.jpg')},
              {
                id: 8,
                img: require('./content/chevrolet/pho8.jpg')},
              {
                id: 9,
                img: require('./content/chevrolet/pho9.jpg')},
              {
                id: 10,
                img: require('./content/chevrolet/pho10.jpg')},
            ],         
            vid: '',    
            status: 'new',
          },
          { 
            id: 4,
            title: 'fourth card title',
            location: 'Lithuania',
            trademark: 'Ford',
            year: '',
            model: '',
            mileage: '',
            color: 'silver',
            engine: '',
            size: '',
            doors: '5',
            seats: '4',
            interior: '',
            advances: '',
            defects: '',
            images: [
              {
                id: 1,
                img: require('./content/ford/pho1.jpg')},
              {
                id: 2,
                img: require('./content/ford/pho2.jpg')},
              {
                id: 3,
                img: require('./content/ford/pho3.jpg')},
              {
                id: 4,
                img: require('./content/ford/pho4.jpg')},
              {
                id: 5,
                img: require('./content/ford/pho5.jpg')},
              {
                id: 6,
                img: require('./content/ford/pho6.jpg')},
              {
                id: 7,
                img: require('./content/ford/pho7.jpg')},
              {
                id: 8,
                img: require('./content/ford/pho8.jpg')},            
            ],
            vid: require('./content/ford/vid1.mp4'),
            status: 'new',
          },
          { 
            id: 5,
            title: 'fifth card title',
            location: 'Lithuania',
            trademark: 'Opel',
            year: '',
            model: '',
            mileage: '',
            color: 'grey/metalic',
            engine: '',
            size: '',
            doors: '5',
            seats: '4',
            interior: '',
            advances: '',
            defects: '',
            images: [
              {
                id: 1,
                img: require('./content/opel/pho1.jpg')},
              {
                id: 2,
                img: require('./content/opel/pho2.jpg')},
              {
                id:3,
                img: require('./content/opel/pho3.jpg')},
              {
                id: 4,
                img: require('./content/opel/pho4.jpg')},
              {
                id: 5,
                img: require('./content/opel/pho5.jpg')},
              {
                id: 6,
                img: require('./content/opel/pho6.jpg')},
              {
                id: 7,
                img: require('./content/opel/pho7.jpg')},
              {
                id: 8,
                img: require('./content/opel/pho8.jpg')},
            ],
            vid: '',    
            status: 'new',
          },
          { 
            id: 6,
            title: 'sixth card title',
            location: 'Lithuania',
            trademark: 'Volkswagen',
            year: '',
            model: '',
            mileage: '',
            color: 'blue',
            engine: '',
            size: '',
            doors: '5',
            seats: '4',
            interior: '',
            advances: '',
            defects: '',
            images: [            
                {
                  id: 1,
                  img: require('./content/volkswagen/pho1.jpg')},
                {
                  id: 2,
                  img: require('./content/volkswagen/pho2.jpg')},
                {
                  id: 3,
                  img: require('./content/volkswagen/pho3.jpg')},
                {
                  id: 4,
                  img: require('./content/volkswagen/pho4.jpg')},
                {
                  id: 5,
                  img: require('./content/volkswagen/pho5.jpg')},
                {
                  id: 6,
                  img: require('./content/volkswagen/pho6.jpg')},
                {
                  id: 7,
                  img: require('./content/volkswagen/pho7.jpg')},
                {
                  id: 8,
                  img: require('./content/volkswagen/pho8.jpg')},                
            ],
            vid: '',    
            status: 'new',
          }, 
        ],      
        showCarImages: true,
        btnColor: 'btn-4',
        flipped: true,
        currentCardShown: true,
        selectedFile: null,      
      } 
  };  

  flipHandle = () => {    
    if(this.state.flipped === true) {
      this.setState({
        flipped: false,
        showCarsImages: false,
      });
    } else {
      this.setState({
        flipped: true,
        showCarsImages: true,
      });
    }
    // console.log(this.state.flipped)
  }
  
  dragTask(event) {
    const cX = event.clientX;
    console.log(cX);
    if (cX > 0 && cX < 199 ){    
      this.switchPrev();
    } else if (cX > 200 && cX < 399) {
      this.switchNext();
    }
  }
  
  dragTaskGallery(event) {
    const cX = event.clientX;
    console.log(cX);
    console.log(event.next);
  }
  
  switchNext = () => {
    console.log('Button Next was Clicked')
    flag += 1;
    // Wrong method to use this.state.cars[0].trademark = 'Lexus'
    if (flag < this.state.carList.length) {
      this.setState({      
        btnColor: 'btn-' + flag,        
      });           
    } else {
      flag = 0;      
      this.setState({                
        btnColor: 'btn-4'
      });
    }    
  }

  switchPrev = () => {
    console.log('Button Prev was Clicked')
    flag -= 1;    
    if (flag < 0) {      
      flag = this.state.carList.length - 1;      
      this.setState({        
        btnColor: 'btn-' + flag,        
      });            
    } else {      
      this.setState({        
        btnColor: 'btn-4'
      });
    }    
  }

  handleItemChange = (item) => {
    const currentFlag = item;
    flag = currentFlag;
    this.setState({
      currentCardShown: true,      
    })        
  }

  handleModalevent = (event) => {
    console.log(event)
  }

  render() {
    // console.log('current flag value: ' + flag)   
    // console.log(this.state.id)
    // console.log(this.state.img1)    
    let galleryIndicators = []
    let galleryItems = []    
    let isActiveCheck = ''

    if(this.state.flipped === true) {
      console.log('`flipped` state check(true) triggers arrays filled')
      
      galleryIndicators = (
        this.state.carList[flag].images.map((image, index) => {
          
        if (index === 0) {
          isActiveCheck = 'active'
        } else {
          isActiveCheck = ''
        }
        
        return (<li key={'indicator-' + image.id} data-target={"#carouselinside" + this.state.carList[flag].id} data-slide-to={index} className={isActiveCheck}></li>)        
      })) 
      
      galleryItems = (
        this.state.carList[flag].images.map((image, index) => { 
        if (index === 0) {
          isActiveCheck = 'active'
        } else {
          isActiveCheck = ''
        }
        
        return(
          <div key={'itemNum-' + image.id} className={"carousel-item " + isActiveCheck} onDragEnd={(event) => {this.dragTaskGallery(event)}}>
            <img className="img-fluid rounded img-nofade" src={image.img} alt={"Responsive pic " + index + 1} />
            <div className="carousel-caption d-none d-md-block text-danger">
              <h3>Picture {index + 1}</h3>
              <p>{ this.state.carList[flag].trademark }, { this.state.carList[flag].model }, { this.state.carList[flag].year }</p>
              <p>{ this.state.carList[flag].title }</p>
            </div>
          </div>)
      }))     
    } else {
      console.log('`flipped` state check(false) arrays stay [] empty')
    } 

    console.log(galleryItems)

    let tableBody = [];
    let status = '';

    if (this.state.carList.length > 0) {
      for (let i = 0; i < this.state.carList.length; i++) {
        if(this.state.carList[i].images.length > 0 && this.state.carList[i].vid.length !== 0 ) {
          status = 'photos and video'
        } else if (this.state.carList[i].images.length > 0 && this.state.carList[i].vid.length === 0 ) {
          status = 'photos'
        } else if (this.state.carList[i].images.length === 0 && this.state.carList[i].vid.length === 0 ) {
          status = 'no photos/video'
        } else {
          status = 'video only'
        }
        // console.log('vid: ' + this.state.carList[i].vid.length)
        // Create the parent and add the children
        tableBody.push(<tr key={i}>                                                                                                             
                        <th scope="row">{ this.state.carList[i].id }</th>                          
                        <td> { this.state.carList[i].trademark }, { this.state.carList[i].model }, {this.state.carList[i].year } </td>
                        <td> <span className="badge badge-warning"> {status} </span> </td>
                        <td> <button className="btn btn-warning" onClick={ () => this.handleItemChange(i) } data-dismiss="modal" > Go </button> </td>
                      </tr>)                  
      }
    }

    // console.log(this.state.carList[flag].id)
    let currClass = this.state.btnColor;    
    let flippedCSS = this.state.flipped ? " " : " flipped";        

    return (
      <div className="App">
        <MyBar />
        <div className="form-group row">
          <div className="col d-inline-flex">
            <button className={"btn mybtn " + currClass} href="#myCarousel" data-slide="prev" onClick={this.switchPrev}>Prev</button>              
          </div>
          <div className="col d-inline-flex">
            <button className={"btn mybtn " + currClass} href="#myCarousel" data-slide="next" onClick={this.switchNext}>Next</button>
          </div>
        </div>        
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false" onDragEnd={(event) => {this.dragTask(event)}} >          
          <div className="carousel-inner">                
            <div className="carousel-item active" >
              <div className={"card flipcard text-white bgimg3" + flippedCSS} onClick={this.flipHandle} >
                <Cardfront
                  id={this.state.carList[flag].id}
                  title={this.state.carList[flag].title}
                  trademark={this.state.carList[flag].trademark}
                  model={this.state.carList[flag].model}
                  year={this.state.carList[flag].year}
                  engine={this.state.carList[flag].engine}
                  src={this.state.carList[flag].images[0].img}
                />
                <Cardback
                  id={this.state.carList[flag].id}
                  trademark={this.state.carList[flag].trademark}
                  model={this.state.carList[flag].model}
                  year={this.state.carList[flag].year}
                  mileage={this.state.carList[flag].mileage}
                  color={this.state.carList[flag].color}
                  engine={this.state.carList[flag].engine}
                  size={this.state.carList[flag].size}
                  doors={this.state.carList[flag].doors}
                  seats={this.state.carList[flag].seats}
                  interior={this.state.carList[flag].interior}
                  advances={this.state.carList[flag].advances}
                  defects={this.state.carList[flag].defects}
                  location={this.state.carList[flag].location}                  
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className={"card flipcard text-white bgimg3" + flippedCSS} onClick={this.flipHandle} >
                <Cardfront
                  id={this.state.carList[flag].id}
                  title={this.state.carList[flag].title}
                  trademark={this.state.carList[flag].trademark}
                  model={this.state.carList[flag].model}
                  year={this.state.carList[flag].year}
                  engine={this.state.carList[flag].engine}
                  src={this.state.carList[flag].images[0].img}
                />
                <Cardback 
                  id={this.state.carList[flag].id}
                  trademark={this.state.carList[flag].trademark}
                  model={this.state.carList[flag].model}
                  year={this.state.carList[flag].year}
                  mileage={this.state.carList[flag].mileage}
                  color={this.state.carList[flag].color}
                  engine={this.state.carList[flag].engine}
                  size={this.state.carList[flag].size}
                  doors={this.state.carList[flag].doors}
                  seats={this.state.carList[flag].seats}
                  interior={this.state.carList[flag].interior}
                  advances={this.state.carList[flag].advances}
                  defects={this.state.carList[flag].defects}
                  location={this.state.carList[flag].location}                  
                />
              </div>
            </div>                            
          </div>                    
        </div>
        <NavButtons />        
        <MyGalMod
          id={this.state.carList[flag].id}
          items={galleryItems}
          indicators={galleryIndicators}          
        />        
        <Aboutus />        
        <History tableBody={tableBody}/>
        <Contacts />        
        <LoginForm />        
        <Videomodal id={this.state.carList[flag].id} vid={this.state.carList[flag].vid} />        
      </div>        
    );
  }
}

export default App;
