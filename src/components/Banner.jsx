import { Component } from "react";
import logoPink from './../assets/logo-pink.svg'
import Nav from "./Nav";

class Banner extends Component {
    state = {}
    render() {
        return (
            <div className='banner'>
                <img className='logo' src={logoPink} alt='logo-kasa' />
                <Nav />
            </div>
        );
    }
}

export default Banner;