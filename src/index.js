import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TourDateList from './components/tour-date-list';
import Header from './components/header';
import Footer from './components/footer';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tourDates: []
    };

    fetch('https://rest.bandsintown.com/artists/Sweater%20Beats/events?app_id=Test')
      .then(response => response.json() )
      .then(tourDates => this.setState({tourDates: tourDates})
    )
  }

  render() {
    return (
      <div>
      <Header />
        <TourDateList tourDates={this.state.tourDates}/>
        <Footer />
      </div>
    );
  }
}

// Take the components generated HTML and put it in the document
ReactDOM.render(<App />, document.querySelector('#zdiv'));
