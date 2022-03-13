import { GiChickenOven, GiCow, GiCakeSlice, GiGoat } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <List>
      <NavLink to={'/cuisine/Chicken'}>
        <GiChickenOven />
        <h4>Chicken</h4>
      </NavLink>
      <NavLink to={'/cuisine/Dessert'}>
        <GiCakeSlice />
        <h4>Dessert</h4>
      </NavLink>
      <NavLink to={'/cuisine/Lamb'}>
        <GiGoat />
        <h4>Lamb</h4>
      </NavLink>
      <NavLink to={'/cuisine/Beef'}>
        <GiCow />
        <h4>Beef</h4>
      </NavLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`

export default Category