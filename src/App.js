import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { 
    content: "",  // Add 'content' field to store the quote
    author: ""    // Add 'author' field to store the author name
  };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get("http://api.quotable.io/random")
            .then((response) => {
                const { content, author } = response.data;
                this.setState({ content , author });
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
                    <p className="text">{content}</p>
                    <p className="author">{author}</p>
                    <button className="new-quote" onClick={this.fetchAdvice}>
                        <span>Give Me Advice</span>
                    </button>
                </div>
        </div>
        );
    }
}

export default App;
