import React from "react";
import axios from "axios";
import "./App.css";

// const options = {
//   method: 'GET',
//   url: 'https://api.api-ninjas.com/v1/quotes',
//   headers: {
//     'X-Api-Key': 'oZOap4y044E7DdfoPaolzg==tiwdPhmRNgyccii4'
//   }
// };

class App extends React.Component {
  state = { 
    content: "",  // Add 'content' field to store the quote
    author: ""    // Add 'author' field to store the author name
  };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        // axios.get('https://api.quotable.io/random')
        // .then((response) => {
        //         const { content, author } = response.data;
        //         this.setState({ content , author });
        //         console.log(response);
        //     })
        axios.get('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': 'oZOap4y044E7DdfoPaolzg==tiwdPhmRNgyccii4'
          },
          timeout: 10000 // 10 seconds
        })
        .then(response => {
          const { quote , author } = response.data[0];
         this.setState({ content: quote, author });
          console.log(response.data);
        })
        .catch((error) => {
                console.log(error);
        });
    };

    render() {
        const { content , author } = this.state;

        return (
          <div className="app">
            <div className="quote-box">
                    <p className="text">"{content}"</p>
                    <p className="author">-{author}</p>
                    <button className="new-quote" onClick={this.fetchAdvice}>
                        <span>Give Me Advice</span>
                    </button>
                </div>
        </div>
        );
    }
}

export default App;
