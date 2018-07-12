import React from 'react';

const contacts = (props) => {
    return(
        <div className="modal fade" id="contacts" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bgimg4">
                        <h3 className="modal-title text-light mytext1" id="exampleModalLabel"><strong>Contacts Information</strong></h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body bgimg3 text-warning">
                        <h5><span className="mytext1">Phone numbers:</span> 012345678911 | 258129201921</h5>
                        <h5><span className="mytext1">E-mail:</span> some@email.com</h5>
                        <h5><span className="mytext1">Facebook page:</span> href...</h5>
                    </div>
                    <div className="modal-footer bgimg4">
                    <button type="button" className="btn btn-3" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contacts;