import React from "react";
import axios from "axios";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

class App extends React.Component {
  bgColors = ["#697565","#3C3D37", '#AB886D',"#E4E0E1","#789DBC", "#FFB0B0"];
  state = { 
    content: "Fear is the foundation of most governments.", 
    author: "John Adams"    
  };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get("https://api.api-ninjas.com/v1/quotes", {
          headers: {
            'X-Api-Key': 'oZOap4y044E7DdfoPaolzg==tiwdPhmRNgyccii4'
          },
          timeout: 10000 
        })
        .then(response => {
          const { quote , author } = response.data[0];
         this.setState({ content: quote, author });
          console.log(response.data[0]);
        })
        .catch((error) => {
                console.log(error);
        });
    };
  
  changeBg = () => {
     const randomColor = this.bgColors[Math.floor(Math.random() * this.bgColors.length)];
    document.body.style.backgroundColor = randomColor;
  }

  

    render() {
        const { content , author } = this.state;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)} - ${encodeURIComponent(author)}`;


        return (
          <div className="app">                               
            <h1>Quote Generator</h1>
            <div id="quote-box">
                    <i class="bi bi-quote fs-1"></i>
                    <p id="text" className="hl-1">{content}</p>
                    <p id="author" className="text-center">-{author}</p>
                    <button id="new-quote" className="btn btn-light m-2" onClick={()=>{this.fetchAdvice(); this.changeBg();}}>
                        <span>New Quote</span>
                    </button>
                    <a id="tweet-quote" href={tweetUrl}  target="_blank" rel="noopener noreferrer" className="text-center btn-primary btn d-flex align-items-center justify-content-center"><i class="bi bi-twitter-x p-0 m-0"></i></a>
                </div>
        </div>
        );
    }
}

export default App;
