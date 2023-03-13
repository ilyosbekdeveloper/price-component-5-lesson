import React, { Component } from 'react'

export class Header extends Component {
render() {
    return (
            <header className='row'>
                <div className="left-header col-md-6 col-sm-12"><h4>Company name</h4></div>
                <div className="right-header d-f col-md-6 d-flex justify-content-end">
                    <ul className="d-flex justify-content-end">
                        <li><a href="#" className="p-3 text-dark">Features</a></li>
                        <li><a href="#" className="p-3 text-dark">Enterprise</a></li>
                        <li><a href="#" className="p-3 text-dark">Support</a></li>
                        <li><a href="#" className="p-3 text-dark">Pricing</a></li>
                        <a href="#"><button className="btn btn-outline-primary">Sign up</button></a>
                    </ul>
                </div>
            </header>
    )
}
}

export default Header