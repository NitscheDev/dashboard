import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function MenuLink(props) {
  return (
    <StyledLink to={props.to} end={props.end} >
      { props.icon }
      { props.name }
    </StyledLink>
  )
}

const StyledLink = styled(NavLink)`
  display: flex;
  padding: 15px 20px;
  align-items: center;
  width: 100%;
  text-decoration: none;
  font-size: 16px;
  color: #85909F;
  border-radius: 150px;
  margin: 10px 0px;

  svg {
    margin-right: 10px;
    font-size: 18px;
  }

  &.active {
    //active class state
    color: #3682F4;
    background: rgba(54,130,244,0.10);
  }
`

export default MenuLink