import { Component } from "react";

class Nav extends Component {
    state = {}
    render() {
        return (
            <nav className='navbar'>
                <ul>
                    <li>Accueil</li>
                    <li>À Propos</li>
                </ul>

            </nav>
        );
    }
}

export default Nav;