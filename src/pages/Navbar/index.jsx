/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from './style.module.scss'
import React, { useEffect, useState } from 'react'
import { callAPI } from '../../domain/api'

const Navbar = ({selectedCategory, setSelectedCategory}) => {
    const [dataMeal, setDataMeal] = useState([])
    const [prevSelectedCategory, setPrevSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const filterCategory = await callAPI({
                    endpoint: `/categories.php`,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                const dataFilter = filterCategory.categories.slice(0, 5)
                // const nameCategory = dataFilter.map((c) => c.strCategory)

                setDataMeal(dataFilter)
            } catch (err) {
                console.log('Data Error', err)
            }
        }

        fetchMeal()
    }, [])

    console.log(dataMeal);

    return (
        <div className={styles.container_navigation}>
            <div className={styles.logo_navigation}>
                <h1> Delicacy </h1>
            </div>
            <div className={styles.categories_navigation}>
                {dataMeal.map((meal) => (
                    <p
                        key={meal.idCategory}
                        className={selectedCategory === meal.strCategory ? styles.selected : ''}
                        onClick={() => {
                            setPrevSelectedCategory(selectedCategory)
                            setSelectedCategory(meal.strCategory)
                        }}
                    >
                        {meal.strCategory}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Navbar
