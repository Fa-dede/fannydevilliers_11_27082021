import { Component } from "react";
import { Link } from "react-router-dom";
import logoPink from './../assets/logo-pink.svg'
import Nav from "./Nav";

class Header extends Component {
    state = {}
    render() {
        return (
            <div className='header'>
                <Link to='/' title='Home'>
                    <img className='logo' src={logoPink} alt='logo-kasa' />
                </Link>

                <Nav />
            </div>
        );
    }
}

export default Header;