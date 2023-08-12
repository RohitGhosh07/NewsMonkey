import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let {title, description, imgageUrl, newsUrl}= this.props
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imgageUrl?"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=740":imgageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
