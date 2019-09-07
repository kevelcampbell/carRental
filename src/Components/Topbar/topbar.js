import React, {Component} from 'react';

class Topbar extends Component{
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">Fiwi Rental</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/#">Browse <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Reserve</a>
                </li>
            </ul>
            <span className="navbar-text">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/#">List your car</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Log in</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Sign up</a>
                    </li>
                </ul>
            </span>
        </div>
      </nav>
    );
  }
}

export default Topbar;