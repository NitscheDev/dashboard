import styled from 'styled-components'
import MenuLink from './MenuLink'
import { 
  BsFillGridFill,
  BsFillFilePostFill 
} from 'react-icons/bs'
function Sidebar() {
  return (
    <Container>
      <MenuLink to={'/dashboard'} name='Overview' icon={<BsFillGridFill />} end='true' />
      <MenuLink to={'/dashboard/posts'} name='Posts' icon={<BsFillFilePostFill />} />
    </Container>
  )
}

const Container = styled.div`
  width: 220px;
  flex-shrink: 0;
  min-height: 100vh;
  border-right: 1px solid #E8EDF4;
  padding: 10px;
  background: #FFFFFF;
`

export default Sidebar