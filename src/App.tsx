import LayoutApp from './layout/LayoutApp';
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
