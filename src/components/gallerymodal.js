import React from 'react';

const mygallerymodal = (props) => {
    return(
    <div className="modal fade" id={"gallery" + props.id}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">                
                <div className="modal-header">
                    <a type="button" className="btn btn-danger" href={"#carouselinside" + props.id} data-slide="prev">PREV</a>
                    <h5 className="modal-title text-light mytext1">Photo gallery slot #{props.id}</h5>
                    <a type="button" className="btn btn-danger" href={"#carouselinside" + props.id} data-slide="next">NEXT</a>
                </div>
               
                <div className="modal-body">
                    <div id={"carouselinside" + props.id} className="carousel slide" data-ride="carousel">
                        
                        <ul className="carousel-indicators">
                        <li data-target={"#carouselinside" + props.id} data-slide-to="0" className="active">1</li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="1"></li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="2"></li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="3"></li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="4"></li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="5"></li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="6"></li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="7"></li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="8"></li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="9"></li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="10"></li>
                        <li data-target={"#carouselinside" + props.id} data-slide-to="11"></li>
                        </ul>
                        
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="img-fluid rounded img-nofade" src={props.src1} alt="Responsive pic 1" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 1</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid rounded img-nofade" src={props.src2} alt="Responsive pic 2" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 2</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid rounded img-nofade" src={props.src3} alt="Responsive pic 3" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 3</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid rounded img-nofade" src={props.src4} alt="Responsive pic 4" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 4</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid rounded img-nofade" src={props.src5} alt="Responsive pic 5" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 5</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid rounded img-nofade" src={props.src6} alt="Responsive pic 6" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 6</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid rounded img-nofade" src={props.src7} alt="Responsive pic 7" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 7</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid rounded img-nofade" src={props.src8} alt="Responsive pic 8" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 8</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid rounded img-nofade" src={props.src9} alt="Responsive pic 9" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 9</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid rounded img-nofade" src={props.src10} alt="Responsive pic 10" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 10</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid rounded img-nofade" src={props.src11} alt="Responsive pic 11" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 11</h3>
                                <p></p>
                                </div>
                            </div>
                            <div className="carousel-item">
                            <img className="img-fluid rounded img-nofade" src={props.src12} alt="Responsive pic 12" />
                                <div className="carousel-caption d-none d-md-block text-danger">
                                <h3>Picture 12</h3>
                                <p>{ props.trademark }, { props.model }, { props.year }</p>
                                <p>{ props.title }</p>
                                </div>
                            </div>
                        </div>                    
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

export default mygallerymodal;