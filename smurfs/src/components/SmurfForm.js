import React, { useState } from 'react';
import { connect } from 'react-redux';
import { giveSmurf } from '../actions';

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    })

    const handleChange = event => {
        const value = event.target.value
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: value
        })
    }

    return(
        <div className='smurf-input'>
                <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='name'
                    value={newSmurf.name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    id='age'
                    name='age'
                    placeholder='age'
                    value={newSmurf.age}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    id='height'
                    name='height'
                    placeholder='height'
                    value={newSmurf.height}
                    onChange={handleChange}
                />
                <button id='button' onClick={()=>{props.giveSmurf(newSmurf)}}>New Smurf</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { giveSmurf }
)(SmurfForm);