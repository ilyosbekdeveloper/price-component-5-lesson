import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
         <div className="container d-flex justify-content-between">
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header p-3 h4">
                Free
              </div>
              <div className="card-body">
                <div className="card-title d-flex justify-content-center align-items-end">
                  <h1>$0</h1><h2 className="text-muted">/mo</h2>
                </div>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
              </div>
            </div>
          </div>
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header p-3 h4">
                Pro
              </div>
              <div className="card-body">
                <div className="card-title d-flex justify-content-center align-items-end">
                  <h1>$15</h1><h2 className="text-muted">/mo</h2>
                </div>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-lg btn-block btn-primary">Get started</button>
              </div>
            </div>
          </div>
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 box-shadow">
              <div className="card-header p-3 h4">
                Enterprice
              </div>
              <div className="card-body">
                <div className="card-title d-flex justify-content-center align-items-end">
                  <h1>$29</h1><h2 className="text-muted">/mo</h2>
                </div>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button className="btn btn-lg btn-block btn-primary">Contact us</button>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Card