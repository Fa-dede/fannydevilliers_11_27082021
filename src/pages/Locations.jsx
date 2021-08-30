import { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import data from "../logements";
import React from 'react';
import Gallery from "../components/Gallery";
import Tags from "../components/Tags";
import Ratings from "../components/Ratings";
import HostProfile from "../components/HostProfile";

class Locations extends Component {


    state = {}
    render() {

        const idOfUrl = this.props.match.params.id
        const selectedLocation = data.filter((elt) => elt.id === idOfUrl)[0] //only the object in the array

        const { description, equipments, host, location, tags, rating, pictures, title } = selectedLocation

        return (
            <div>
                <Header />
                <Gallery content={pictures} />
                <main className='container-locations'>
                    <h1 className='title-of-location'>{title}</h1>
                    <h2 className='place-of-location'> {location}</h2>

                    <div className='tag-container'>
                        {tags.map((tag, index) => (
                            <Tags content={tag} key={index} />
                        ))}
                    </div>

                    <HostProfile content={host} />

                    <Ratings content={parseInt(rating)} />

                    <section className='details-container'>
                        <Dropdown title='Description' content={description} name='dropdown' nameOfClass='dropdown-menu' />
                        <Dropdown title='Équipements' content={equipments} name='dropdown' nameOfClass='dropdown-menu' />

                    </section>



                </main>
                <Footer />
            </div>
        );
    }
}



export default Locations;