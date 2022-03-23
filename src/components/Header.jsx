import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
  let path = window.location.pathname,
      url = path.split('/'),
      name = url.pop(),
      dayIndex = new Date().getDay(),
      currentDay = '',
      user = 'Rasmus'
  
  //switch to convert day index to day name
  switch(dayIndex) {
    case 0:
      currentDay = 'Sunday'
      break;
    case 1:
      currentDay = 'Monday'
      break;
    case 2:
      currentDay = 'Tuesday'
      break;
    case 3:
      currentDay = 'Wednesday'
      break;
    case 4:
      currentDay = 'Thursday'
      break;
    case 5:
      currentDay = 'Friday'
      break;
    case 6:
      currentDay = 'Saturday'
      break;
  }
  
  //check if name === dashboard
  if (name === 'dashboard') {
    name = 'overview'
    path = '/dashboard/posts'
  }

  return (
    <StyledHeader>
      <div className="texts">
        <h1 className='title'>{ name }</h1>
        <p>Have a nice {currentDay}, <b>{user}</b></p>
      </div>
      <Link to={`${path}/add`} className='actionBtn'>add new</Link>
    </StyledHeader>
  )
}

//styled
const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .texts h1 {
    font-size: 20px;
    text-transform: capitalize;
    color: #353948;
  }
  .texts p {
    font-size: 14px;
    color: #85909F;
  }

  .actionBtn {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px 15px;
    background: #3682F4;
    text-transform: uppercase;
    color: #FFFFFF;
    border-radius: 50px;
    font-size: 14px;
  }
`

export default Header