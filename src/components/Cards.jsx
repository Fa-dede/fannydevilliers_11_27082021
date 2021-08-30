import { Component } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


class Cards extends Component {
    render() {
        const { title, src, id } = this.props;

        return (
            <div className='card'>
                <Link to={`/locations/${id}`} title={title} className='card'>
                    <img className='card-cover' src={src} alt='location' />
                    <p className='title'>{title}</p>
                </Link>
            </div>
        );
    }

}

Cards.propTypes = {
    title: PropTypes.string.isRequired
}

export default Cards;