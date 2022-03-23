import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Posts from './views/Posts'
import Overview from './views/Overview'
import NotFound from './components/NotFound'

function Router() {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} >
        <Route path='' element={<Overview />} />
        <Route path='/dashboard/posts'>
          <Route path='/dashboard/posts/' element={<Posts />} />
          <Route path='/dashboard/posts/add' element={<h1>Add Post</h1>} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Router