import React, { Component } from 'react';

class Inbox extends Component {

    render() {
      return (
          <div className="row">

              <div className="card border-success w-full">
              <div className="card-header text-center">Bandeja de mensajes</div>
              <div className="card-body">
                <h4 className="card-title">Mis mensajes recientes</h4>
                <ul className="list-group">

                  <li className="list-group-item d-flex justify-content-between align-items-center alert-success alert ">
                    <p><strong>Carlos Elguedo: </strong>Text Text Text Text Text</p>
                    <span className="badge badge-success badge-pill">14</span>
                  </li>

                </ul>
              </div>
              </div>

          </div>
      );
    }
  }

  export default Inbox;
