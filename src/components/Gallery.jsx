import React, { Component } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

class Gallery extends Component {
    state = { currentPicture: 0 }
    render() {
        const pictures = this.props.content;
        const length = pictures.length
        const { currentPicture } = this.state

        const slidePrev = () => {
            this.setState((lastState) => ({
                currentPicture: lastState.currentPicture !== 0 ? lastState.currentPicture - 1 : lastState.currentPicture = length - 1
            }))
        };

        const slideNext = () => {
            this.setState((lastState) => ({
                currentPicture: lastState.currentPicture !== length - 1 ? lastState.currentPicture + 1 : lastState.currentPicture = 0
            }))
        };

        return (
            <div className='carousel'>
                <BsChevronLeft className='left-arrow' onClick={slidePrev} />
                <BsChevronRight className='right-arrow' onClick={slideNext} />

                <img className='cover-image cover-image-locations' src={pictures[currentPicture]} alt="gallery" />
                <span className='counter'>{currentPicture + 1}/{length}</span>

            </div>
        );
    }
}

export default Gallery;