import React, {Component} from 'react';

class HomePage extends Component {
  render(){
    return (
      <div className='container'>
        <h1 className='text-center pt-2'>MSME Cyber Check JA</h1>
        <div className='row'>
          <div className='col-4'>
            <div class="card">
              <img class="card-img-top" src="https://www.elmhurst.edu/wp-content/uploads/2020/03/cybersecurity-vs-information-security-illustration.jpg" alt="Card cap"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/home" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div class="card">
              <img class="card-img-top" src="https://www.elmhurst.edu/wp-content/uploads/2020/03/cybersecurity-vs-information-security-illustration.jpg" alt="Card cap"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/home" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div class="card">
              <img class="card-img-top" src="https://www.elmhurst.edu/wp-content/uploads/2020/03/cybersecurity-vs-information-security-illustration.jpg" alt="Card cap"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/home" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
