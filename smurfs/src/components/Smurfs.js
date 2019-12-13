import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';
import Smurf from './Smurf'

const Smurfs = ({getSmurfs, ...props}) => {
    useEffect(() => {
        getSmurfs()
    }, [getSmurfs])
    console.log(props.smurfs);

    return(
        <div>
            <h2>Smurfs in the Village:</h2>
            {props.smurfs.map(smurf =>
                <Smurf smurf={smurf} key={smurf.id} deleteSmurf={props.deleteSmurf}/> )}
        </div>
    );
};

const mapStateTopProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateTopProps,
    {getSmurfs, deleteSmurf}
    )(Smurfs);