import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateProducts from './pages/CreateProducts';
import ReadProducts from './pages/ReadProducts';
import UpdateProducts from './pages/UpdateProducts';
import DeleteProducts from './pages/DeleteProducts';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products/create' element={<CreateProducts/>}/>
      <Route path='/products/read/:id' element={<ReadProducts/>}/>
      <Route path='/products/update/:id' element={<UpdateProducts/>}/>
      <Route path='/products/delete/:id' element={<DeleteProducts/>}/>
    </Routes>
  )
}

export default App