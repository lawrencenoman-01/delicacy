/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../Navbar'
import Card from '../Card'
import Recipies from '../Recipies';

const Homepage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Beef');
    // console.log(selectedCategory);

    return (
        <>
            <Navbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Card selectedCategory={selectedCategory} />
            <Recipies />
        </>
    )
}

export default Homepage
