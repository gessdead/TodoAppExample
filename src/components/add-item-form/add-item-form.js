import React, { Component } from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {

    render() {

        const { onAddItem } = this.props;

        return (
            <div className='d-flex add-item-form'>
                <input
                    placeholder='Add something'
                    type="text"
                    className='form-control'/>
                <button
                    type='button'
                    className='btn btn-outline-secondary'
                    onClick={ onAddItem }>Add Item
                </button>
            </div>
        )
    }
}
