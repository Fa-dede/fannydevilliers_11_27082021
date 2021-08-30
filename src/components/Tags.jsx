import React, { Component } from 'react';

class Tags extends Component {
    render() {
        const { content } = this.props;

        return (
            <div className='tags'>{content}
            </div>
        );
    }
}

export default Tags;