import LayoutApp from './layout/LayoutApp';
import AnimatedPage from './pages/AnimatedPage';
import Crud from './pages/Crud';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutApp />}>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/crud-redux'
            element={<Crud />}
          />
          <Route
            path='/animacion'
            element={<AnimatedPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
