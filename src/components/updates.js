import React, { Component } from 'react';

let histList = [
    {
        id: 4,
        trademark: 'lexus',
        year: '2010',
        model: 'CT 200H',
        date: '01.06.2018',
        status: 'new'
    },
    {
        id: 5,
        trademark: 'volkswagen',
        year: '2011',
        model: 'Golf',
        date: '01.01.2018',
        status: 'sold'
    },
    {
        id: 6,
        trademark: 'mitsubishi',
        year: '2012',
        model: 'Lancer',
        date: '03.08.2018',
        status: 'sold'
    },
]

class Updates extends Component {    

    createHistTable = () => {
        let table = [];
        let index = 0;
        
        // Outer loop to create parent
        for (let i = 0; i < histList.length; i++) {      
          //Create the parent and add the children
          table.push(<tr key={index}>                                                                                                             
                        <th scope="row">{ index }</th>
                        <td colSpan="2">{ histList[index].date }:</td>
                        <td>{ histList[index].trademark }, { histList[index].model }, {histList[index].year }</td>
                        <td><span className="badge badge-success">{histList[index].status }</span></td>                                    
                    </tr>)
          index += 1;          
        }
        return table
    }

    render() {
        return(
            <div className="modal fade" id="updates" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
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
                                    <th colSpan="2">Date</th>
                                    <th scope="col">Info</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>                                                             
                                {this.createHistTable()}                                
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
}

export default Updates;