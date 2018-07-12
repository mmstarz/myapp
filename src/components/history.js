import React from 'react';

const history = (props) => {
    return(
        <div className="modal fade" id="history" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bgimg4">
                        <h3 className="modal-title text-light mytext1" id="exampleModalLabel"><strong>Updates Information</strong></h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body bgimg3 text-center text-white">
                    <table className="table table-hover table-dark blurbox">
                        <thead>
                            <tr>
                                <th scope="col">#</th>                                
                                <th scope="col">Info</th>                                
                                <th scope="col">Status</th>
                                <th scope="col">Href</th>
                            </tr>
                        </thead>
                        <tbody>                                                             
                            {props.tableBody}                                
                        </tbody>
                    </table>
                    </div>
                    <div className="modal-footer bgimg4">
                    <button type="button" className="btn btn-3" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default history;