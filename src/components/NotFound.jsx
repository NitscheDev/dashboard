import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NotFound() {
    return (
      <Styled404>
        <div className="wrap">
          <h1>404</h1>
          <p>Oops. Seems like you found nothing</p>
          <Link to={'/dashboard'} className='actionBtn'>to dashboard</Link>
        </div>
      </Styled404>
    )
  }
  
const Styled404 = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
    font-size: 78px;
    color: #3682F4;
    }
    p {
    color: #353948;
    }
    .actionBtn {
    margin-top: 20px;
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
}
`

export default NotFound