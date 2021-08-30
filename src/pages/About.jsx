import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coverImage from '../assets/background-about.png'
import Dropdown from "../components/Dropdown";
import datas from '../about-text'

class About extends Component {
    state = {}
    render() {

        return (
            <>
                <Header />
                <img className='cover-image' src={coverImage} alt='background' />
                <div className='details'>
                    {datas.map((elt) => (
                        <Dropdown title={elt.title} content={elt.content} name='dropdown-about' nameOfClass='dropdown-menu' />))}
                </div>
                <Footer />
            </>
        );
    }
}

export default About;