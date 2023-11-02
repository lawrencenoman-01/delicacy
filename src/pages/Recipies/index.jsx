/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { callAPI } from '../../domain/api'
import { Link } from 'react-router-dom'

const Recipies = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const filterCategory = await callAPI({
                    endpoint: `/filter.php?c=Seafood`,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                const dataFilter = filterCategory.meals.slice(0, 6)
                const idCategory = dataFilter.map((category) => category.idMeal)
                const results = idCategory.map((id) =>
                    callAPI({
                        endpoint: `/lookup.php?i=${id}`,
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                )
                const countryData = await Promise.all(results)
                setCategory(countryData)
            } catch (err) {
                console.log('Error', err);
            }
        }

        fetchCategory()
    }, [])

    console.log(category);

    return (
        <div className={styles.container_recipies}>
            <h1> More recipies </h1>
            <div className={styles.container_card_recipies}>
                {category.map((cat) => {
                    const c = cat.meals[0]
                    return (
                        <Link to={`/detailRecipies/${c.idMeal}`} className={styles.linkDetail} key={c.idMeal}>
                            <div key={c.idMeal} className={styles.recipies_card}>
                                <img src={c.strMealThumb} />
                                <h1> {c.strMeal} </h1>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </div>


    )
}

export default Recipies
