import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        const pictures = this.props.content


        return (
            <div className='carousel'>
                <img className='cover-image cover-image-locations' src={pictures[0]} alt="" />

            </div>
        );
    }
}

export default Gallery;