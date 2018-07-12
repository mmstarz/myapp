import React from 'react';
import ReactPlayer from 'react-player';

const videomodal = (props) => {
    return (
        <div className="modal fade" id={"vgallery" + props.id}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">                
                  <div className="modal-header">                    
                      <h5 className="modal-title text-light mytext1">Video slot #{props.id}</h5>                    
                  </div>               
                  <div className="modal-body">
                    <div className='player-wrapper'>
                      <ReactPlayer
                        className='react-player'
                        url={props.vid}
                        width ='100%'
                        height ='100%'
                        playing = {false}
                        controls= {true}
                        volume= {0.1}
                      />                      
                    </div>                    
                  </div>                
                  <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
        </div>            
    )
}

export default videomodal;