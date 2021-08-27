import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coverImage from '../assets/background-about.png'

class About extends Component {
    state = {}
    render() {
        return (
            <>
                <Header />
                <img className='cover-image' src={coverImage} alt='background' />
                <Footer />
            </>
        );
    }
}

export default About;