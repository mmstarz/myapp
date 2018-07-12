import React from 'react';

const myVgalleryModal = (props) => {
    return(
    <div className="modal fade" id={"vgallery" + props.id}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">                
                <div className="modal-header">                    
                    <h5 className="modal-title text-light mytext1">Video slot #{props.id}</h5>                    
                </div>               
                <div className="modal-body">
                    
                </div>                
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default myVgalleryModal;

