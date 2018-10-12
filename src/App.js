import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import { className } from 'postcss-selector-parser';
import ReactToPrint from 'react-to-print';
import Print from './print.js';


class ComponentToPrint extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      words: [],
      advanced_words: [],
      activePage: 15
    };
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber })
  }

  componentDidMount() {
    const wordRef = firebase.database().ref('words');
    wordRef.on('value', (snapshot) => {
      let words = snapshot.val();
      let newState = [];
      for (let word in words) {
        newState.push({
          id: word,
          word: words[word].word,
          meaning: words[word].meaning
        });

      }
      this.setState({
        words: newState
      });
    });

    const advRef = firebase.database().ref('advanced_words');
    advRef.on('value', (snapshot) => {
      let advWords = snapshot.val();
      let newAdvState = [];
      for (let advWord in advWords) {
        newAdvState.push({
          id: advWord,
          advWord: advWords[advWord].word,
          advMeaning: advWords[advWord].meaning
        });


      }
      this.setState({
        advanced_words: newAdvState
      });
    });

  };




  render() {
    return (
      
      <div>
      <div>  
      <a href="https://thevatsalsaglani.xyz" target="_blank" class="uk-icon" uk-icon="icon: world; ratio: 1.3"></a>
      </div> 
      <div className="uk-container pos">
        <div className="navigation uk-visible@m" uk-sticky="bottom: #offset">
          <a id="js-scroll-trigger" className="uk-button uk-button-text uk-align-left" href="#normal" uk-scroll>Words 1</a>
          <a id="js-scroll-trigger" className="uk-button uk-button-text uk-align-right" href="#adv" uk-scroll>Words 2</a>

        </div>
        <div className="nav uk-hidden@m" uk-sticky="bottom: #offset">
          <a href="#normal" uk-tooltip="One" className="uk-icon uk-align-left" uk-icon="home"></a>
          <a href="#adv" uk-tooltip="Two" className="uk-icon uk-align-right" uk-icon="plus"></a>
        </div>


        <section id="normal">
          <div className="uk-container-small uk-center uk-align-center">
            <h1>Words 1</h1>

            {this.state.words.map((word) => {
              return (

                // <li key={word.id}>
                //   <h2>{word.word}</h2>
                //   <p>{word.meaning}</p>
                // </li>

                <div className="cc">
                  <div className="uk-child-width-1-1@m">
                    <div className="uk-card uk-card-default uk-card-body card">
                      <h3 className="uk-card-title word">{word.word}:</h3>
                      <p className="meaning">{word.meaning}</p>
                    </div>
                  </div>
                </div>



              )
            })}

          </div>
        </section>
        {/* <section>
          <div>
            <h1>Advanced Words</h1>
            <ul>
              {this.state.advanced_words.map((w) => {
                return (
                  <li key={w.id}>
                    <h2>{w.advWord}</h2>
                    <p>{w.advMeaning}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section> */}
        <section id="adv">
          <div className="uk-container-small uk-center uk-align-center">
            <h1>Words 2</h1>

            {this.state.advanced_words.map((w) => {
              return (
                <div className="cc">
                  <div className="uk-child-width-1-1@m">
                    <div className="uk-card uk-card-default uk-card-body card">
                      <h3 className="uk-card-title word">{w.advWord}</h3>
                      <p className="meaning">{w.advMeaning}</p>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </section>
      </div>
      </div>

    );
  }
}

export default ComponentToPrint;
