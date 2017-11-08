import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import IdeaList from './ideas/IdeaList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <IdeaList />
        <Footer/>
      </div>
    );
  }
}
