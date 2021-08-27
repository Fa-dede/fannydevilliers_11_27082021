import React, { Component } from 'react';
import Banner from '../components/Banner';

class Error extends Component {
    render() {
        return (
            <div className='error-page'>
                <Banner />
                <div className='error-container'>
                    <h1 className='number-of-error'>404</h1>
                    <h3 className='error-message'>Oups! La page que vous demandez n'existe pas.</h3>
                    <p className='home-return'>Retournez sur la page d'accueil</p>

                </div>


            </div >
        );
    }

};

export default Error;