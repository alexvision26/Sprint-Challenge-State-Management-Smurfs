import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSmurf, addSmurf } from '../actions/index';

const SmurfsList = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    console.log(props)

    const handleName = e => {
        e.preventDefault();
        setName(e.target.value)
    }

    const handleAge = e => {
        e.preventDefault();
        setAge(e.target.value)

    }

    const handleHeight = e =>{
        e.preventDefault();
        setHeight(e.target.value)

    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    const smurfGet = e => {
        props.getSmurf()
        props.addSmurf(name, age, height)
    }



    return (
        <div>

            <form onSubmit={smurfGet}>
                <label htmlFor='name'>Smurf Name:<br/><input onChange={handleName} id='name' name='name'></input></label><br/>
                <label htmlFor='name'>Smurf Age:<br/><input onChange={handleAge} id='name' name='name'></input></label><br/>
                <label htmlFor='name'>Smurf Height:<br/><input onChange={handleHeight} id='name' name='name'></input></label><br/>
                <button>Add Smurf</button>
            </form>



            <button onClick={smurfGet}>View Smurfs</button>

            <div>
            {props.smurfs.length ? props.smurfs.map(item => {
                    return (
                        <div>
                            <h3>Name: {item.name}</h3>
                            <p>Age: {item.age}</p>
                            <p>Height: {item.height}</p>
                        </div>
                    )
                }) : (<div>Let's add some Smurfs!</div>)}
                
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurf, addSmurf })(SmurfsList)