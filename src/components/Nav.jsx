import { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    state = {}
    render() {
        return (
            <nav className='navbar'>
                <ul>
                    <li><Link to='/' title='Home'>Accueil</Link></li>
                    <li><Link to='/about' title='About'>À Propos</Link></li>
                </ul>

            </nav>
        );
    }
}

export default Nav;