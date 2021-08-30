import React, { Component } from 'react';

class HostProfile extends Component {
    render() {
        const { content } = this.props
        const { name, picture } = content

        return (
            <div className='profile-container'>
                <h4 className='host-name'>{name}</h4>
                <img className='profile-picture' src={picture} alt="profile" />
            </div>
        );
    }
}

export default HostProfile;