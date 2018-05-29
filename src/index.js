import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyModal from './modal';
import Mybar from './navbar';
import TextArea from './textarea';
import MyCarousel from './carousel';
import NavButtons from './navbuttons';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const mainBody = (
    <div>      
      <Mybar />
      <TextArea />
      <div className="currentColor">
        <MyModal className="mybtn btn-4" text="textview1" buttonLabel="Modal Button" />
      </div>            
      <MyCarousel />
      <NavButtons />        
    </div>
  )

ReactDOM.render(mainBody, document.getElementById('root'));
registerServiceWorker();
