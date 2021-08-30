import React, { Component } from 'react';
import { BiChevronUp } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'

class Dropdown extends Component {
    state = { isOpen: false }
    render() {
        const { title, content, name, nameOfClass } = this.props
        const { isOpen } = this.state

        return (

            <div className={name}>
                <div className={nameOfClass} onClick={() => this.setState({ isOpen: this.state.isOpen === false })}>
                    <h3 className='dropdown-title'>{title}</h3>
                    <span className='chevron-state'>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</span>

                </div>

                {isOpen ? <div className='details-items'>
                    {typeof (content) === "string" ? <span className='description'>{content}</span> :
                        content.map((elt, index) => (
                            <li key={index}>{elt}</li>
                        ))
                    }
                </div> : null
                }

            </div>

        );
    }
}

export default Dropdown;