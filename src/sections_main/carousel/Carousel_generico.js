import React, { Component } from 'react';
import carousel from '../../json/carousel.json'

export default class Carousel_generico extends Component {
    constructor(props){
        super(props);
        this.state = carousel
    }
    render() {
        return (
            <div class="div-img">
                <div class="">
                    <img src={this.state.carousel[this.props.id].img} class="img_carrosel"/>
                </div>
            </div>
        );
    }
}
