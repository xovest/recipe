import { useEffect, useState } from "react";
import styled from 'styled-components'
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState()
  const [activeTav, setActiveTab] = useState('instructions')
  let params = useParams()

  const fetchDetails = async (id) => { //filter by id
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const recipes = await data.json()
    setDetails(recipes.meals[0])
  }

  useEffect(() => {
    fetchDetails(params.id)
  }, [params.id])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.strMeal}</h2>
        <img src={details.strMealThumb} alt={details.strMeal} />
      </div>
      <Info>
        <Button>Instructions</Button>
        <Button>Ingredients</Button>
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`
const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe