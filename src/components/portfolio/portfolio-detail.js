import axios from 'axios';
import React, { Component } from 'react';



export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItem()
    }

    getPortfolioItem() {
        axios.get(`https://spencersuckow.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true })
            .then(response => {
                this.setState({
                    portfolioItem: response.data.portfolio_item
                })
            })
            .catch(error => {
                console.log("getPortfolioItem error", error)
            })
    }



    render() {
        const {
            banner_image_url,
            logo_url,
            description,
            name,
            url
        } = this.state.portfolioItem

        const bannerStyles = {
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            backgroundReapet: "no-repeat",
            backgroundPosition: "center center"
        }

        return (
            <div className='portfolio-detail-wrapper'>
                <div className='banner' style={bannerStyles}>
                    <img src={logo_url} />
                </div>
                <div className='name-content'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <button className='btn portfolio-detail-btn'><a href={url} target='_blank'>Visit {name}</a></button>
            </div>
        );
    };
};