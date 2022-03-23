import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  )
}
//styled-components
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #EFF3F9;
`

const Content = styled.div`
  flex: 1;
  min-height: 100vh;
  padding: 50px;
  min-width: 400px;
`

export default Dashboard
