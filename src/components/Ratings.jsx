import React, { Component } from 'react';
import { BsStarFill } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import PropTypes from 'prop-types'


class Ratings extends Component {
    render() {
        const { content } = this.props
        const starsArray = []

        for (let i = 0; i < 5; i++)
        {
            i < content ? starsArray.push('full') : starsArray.push('empty')
        }

        return (
            <div className='stars-container'>
                {starsArray.map((star, i) => (
                    star === 'full' ?
                        <span key={i}><BsStarFill></BsStarFill></span> :
                        <span key={i}><BsStar></BsStar></span>))}

            </div>
        );
    }
}

Ratings.propTypes = {
    content: PropTypes.number.isRequired
}

export default Ratings;