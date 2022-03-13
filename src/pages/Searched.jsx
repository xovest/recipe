import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()

  const getSearched = async (category) => { //filter by category
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    const recipes = await data.json()
    setSearchedRecipes(recipes.meals)
  }

  useEffect(() => {
    getSearched(params.search)
  }, [params.search])

  return (
    <Grid>
      {searchedRecipes.map(item => {
        return (
          <Card key={item.idMeal}>
            <Link to={'/recipe/' + item.idMeal}>
              <img src={item.strMealThumb} alt="item.strMeal" />
              <h4>{item.strMeal}</h4>
            </Link>
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

export default Searched