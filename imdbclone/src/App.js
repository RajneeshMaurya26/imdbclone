import Home from './pages/Home';
import CategoryMovies from './pages/CategoryMovies';
import { routePath } from './constant/route';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home/>} />
        <Route path={routePath.categories} element={<CategoryMovies/>} />
        <Route path={routePath.invalid} element={<Home/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
