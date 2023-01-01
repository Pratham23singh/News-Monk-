import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props
    return (
      <div>
        <div className="container">
          <div className="card" style={{ width: "20rem" }}>
            <img src={!imageUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/220831095103-02-snapchat-app-stock.jpg?q=w_800,c_fill" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-primary">By {!author ? "Unknown" : author} updated on {date}</small></p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem