import React from 'react';
import { addToDb, removeToDB } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const { name, id } = props.cosmetic;
    const addToCard = (id) => {
        /* localStorage.setItem(id, 1) */
        addToDb(id)
    }

    const removeFromCard = id => {
        removeToDB(id)
    }

    // const addToCardWithPara = () => addToCard(id)


    return (
        <div className='product'>
            <h2>name: {name}</h2>
            <p>id: {id}</p>

            <button onClick={() => addToCard(id)}>Add to card </button>
            <button onClick={() => removeFromCard(id)}>Remove </button>

        </div>
    );
};

export default Cosmetic;