import { Component } from "react";
import { Link } from "react-router-dom";

class Cards extends Component {
    render() {
        const { title, src, id } = this.props;

        return (
            <div className='card'>
                <Link title={title} to={`/location/${id}`} />
                <img className='card-cover' src={src} alt='location' />
                <p className='title'>{title}</p>
            </div>
        );
    }
}

export default Cards;