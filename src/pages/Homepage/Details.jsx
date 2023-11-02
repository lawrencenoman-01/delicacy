/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../Navbar'
import Card from '../Card'
import Recipies from '../Recipies';
import Detail from '../Detail';

const Details = () => {
    const [selectedCategory, setSelectedCategory] = useState('Beef');
    // console.log(selectedCategory);

    return (
        <>
            <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Detail />
            <Recipies />
        </>
    )
}

export default Details
