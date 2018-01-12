import React, { Component } from 'react';

class NewsItem extends Component {
  get article() {
    return this.props.article;
  }

  render() {
    return (
      <div>
        <h3>
          <a href={`https://www.reddit.com${this.article.permalink}`}>
            {this.article.title}
          </a>
        </h3>
        <p>
          {this.article.thumbnail !== "self" ? <img src={this.article.thumbnail} alt="thumbnail" /> : ""}
          Posted by: <a href={`https://www.reddit.com/user/${this.article.author}`}>{this.article.author}</a>
        </p>
      </div>
    )
  }
}

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: []};
  }

  async fetchLatest() {
    const results = await fetch('http://www.google.com/');
    console.log(results);
  }

  componentDidMount() {
    this.loadLatestNews();
  }

  loadLatestNews() {
    // Loads json script (to get around CORS)
    const timeStamp = `ql${Date.now()}`;
    const script = document.createElement('script');
    script.src = `https://www.reddit.com/r/quake/.json?jsonp=${timeStamp}`;

    window[timeStamp] = (jsonData) => {
      this.setState({articles: jsonData.data.children});
      delete window[timeStamp];
      document.head.removeChild(script);
    }

    document.head.appendChild(script);
  }

  render() {
    return this.state.articles.length < 1 ? <p>Loading &hellip;</p> : (
      <ul>
        {this.state.articles.map(a => <li key={a.data.id}><NewsItem article={a.data} /></li>)}
      </ul>
    );
  }
}

export default News;
