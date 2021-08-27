import { Component } from "react";
import logoWhite from './../assets/logo-white.svg'

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className='footer-container'>
                <img src={logoWhite} alt='logo-kasa-white' />
                <h4 className='copyright-txt'>© 2020 Kasa. All rights reserved</h4>

            </div>
        );
    }
}

export default Footer;