import { GiChickenOven, GiCow, GiCakeSlice, GiGoat } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Chicken'}>
        <GiChickenOven />
        <h4>Chicken</h4>
      </SLink>
      <SLink to={'/cuisine/Dessert'}>
        <GiCakeSlice />
        <h4>Dessert</h4>
      </SLink>
      <SLink to={'/cuisine/Lamb'}>
        <GiGoat />
        <h4>Lamb</h4>
      </SLink>
      <SLink to={'/cuisine/Beef'}>
        <GiCow />
        <h4>Beef</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg, h4 {
      color: white;
    }
  }
`

export default Category