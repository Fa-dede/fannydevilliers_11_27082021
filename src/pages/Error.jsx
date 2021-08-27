import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';

class Error extends Component {
    render() {
        return (
            <div className='error-page'>
                <Header />
                <div className='error-container'>
                    <h1 className='number-of-error'>404</h1>
                    <h3 className='error-message'>Oups! La page que vous demandez n'existe pas.</h3>
                    <Link to='/' title='Home' className='home-return'>Retournez sur la page d'accueil</Link>
                </div>

                <Footer />
            </div >
        );
    }

};

export default Error;