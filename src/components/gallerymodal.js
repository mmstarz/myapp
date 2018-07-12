import React from 'react';

const mygallerymodal = (props) => {    
    return(
    <div className="modal fade" id={"gallery" + props.id} >
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">                
                <div className="modal-header">
                    <button type="button" className="btn btn-danger" href={"#carouselinside" + props.id} data-slide="prev" >PREV</button>
                    <h5 className="modal-title text-light mytext1">Photo gallery slot #{props.id}</h5>
                    <button type="button" className="btn btn-danger" href={"#carouselinside" + props.id} data-slide="next" >NEXT</button>
                </div>
            
                <div className="modal-body">
                    <div id={"carouselinside" + props.id} className="carousel slide" data-ride="carousel" data-interval="false" >         

                        <ul className="carousel-indicators">
                            {props.indicators}                                                        
                        </ul>    
                                      
                        {props.items}             
                    </div>                                        
                </div>                
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal" >Close</button>
                </div>
            </div>
        </div>
    </div>
    )    
}

export default mygallerymodal;