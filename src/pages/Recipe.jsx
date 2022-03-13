import { useEffect, useState } from "react";
import styled from 'styled-components'
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState([])
  const [activeTab, setActiveTab] = useState('instructions')
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
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instructions' ? (
          <div>
            <h3>{details.strInstructions}</h3>
          </div>
        ) : (
          <ul>
            <li>{details.strIngredient1 !== '' && '- '}{details.strIngredient1}</li>
            <li>{details.strIngredient2 !== '' && '- '}{details.strIngredient2}</li>
            <li>{details.strIngredient3 !== '' && '- '}{details.strIngredient3}</li>
            <li>{details.strIngredient4 !== '' && '- '}{details.strIngredient4}</li>
            <li>{details.strIngredient5 !== '' && '- '}{details.strIngredient5}</li>
            <li>{details.strIngredient6 !== '' && '- '}{details.strIngredient6}</li>
            <li>{details.strIngredient7 !== '' && '- '}{details.strIngredient7}</li>
            <li>{details.strIngredient8 !== '' && '- '}{details.strIngredient8}</li>
            <li>{details.strIngredient9 !== '' && '- '}{details.strIngredient9}</li>
            <li>{details.strIngredient10 !== '' && '- '}{details.strIngredient10}</li>
            <li>{details.strIngredient11 !== '' && '- '}{details.strIngredient11}</li>
            <li>{details.strIngredient12 !== '' && '- '}{details.strIngredient12}</li>
            <li>{details.strIngredient13 !== '' && '- '}{details.strIngredient13}</li>
            <li>{details.strIngredient14 !== '' && '- '}{details.strIngredient14}</li>
            <li>{details.strIngredient15 !== '' && '- '}{details.strIngredient15}</li>
            <li>{details.strIngredient16 !== '' && '- '}{details.strIngredient16}</li>
            <li>{details.strIngredient17 !== '' && '- '}{details.strIngredient17}</li>
            <li>{details.strIngredient18 !== '' && '- '}{details.strIngredient18}</li>
            <li>{details.strIngredient19 !== '' && '- '}{details.strIngredient19}</li>
            <li>{details.strIngredient20 !== '' && '- '}{details.strIngredient20}</li>
          </ul>
        )}
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
  
  ul {
    list-style-type: none;
  }
`

export default Recipe