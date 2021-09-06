import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coverImage from '../assets/background-home.png'
import data from "../logements";
import Cards from '../components/Cards'


class Home extends Component {
    render() {
        return (
            <>
                <Header />

                <div className='banner-container'>
                    <img className='cover-image' src={coverImage} alt='background' />
                    <h1 className='motto'>Chez vous, partout et ailleurs</h1>
                </div>

                <main className='card-container'>
                    {data.map((elt) => (
                        <div key={elt.id} className='location-elt'>
                            <Cards title={elt.title} src={elt.cover} id={elt.id} />
                        </div>
                    ))}
                </main>

                <Footer />
            </>
        );
    }
}

export default Home;