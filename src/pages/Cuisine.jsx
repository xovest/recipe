import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Cuisine() {
  const [cuisine, setCuisine] = useState([])
  let params = useParams()

  const getCuisine = async (category) => { //filter by category
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    const recipes = await data.json()
    setCuisine(recipes.meals)
    console.log(recipes.meals);
  }

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  return (
    <Grid>
      {cuisine.map(item => {
        return (
          <Card key={item.idMeal}>
            <img src={item.strMealThumb} alt="item.strMeal" />
            <h4>{item.strMeal}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`

export default Cuisine