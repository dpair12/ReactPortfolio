import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer/Footer.jsx';
import CustomNavBar from './components/NavBar/NavBar.jsx';

function App () {
  return (
<div>
  <CustomNavBar />
  <Outlet />
  <Footer />
</div>
  );
}

export default App;