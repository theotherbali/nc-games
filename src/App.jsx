
import './App.css';
import { Link, Route, Routes } from "react-router-dom"

import { ReviewList } from './Components/ReviewList';
import { ReviewPage } from './Components/ReviewPage';
import { Nav } from './Components/Nav';
import { UsersPage } from './Components/UsersPage';
import { InConstruction } from './Components/InConstruction';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Link to="/" className='appTitle' ><h1>NorthGamers </h1></Link>
      </header>
      <Nav className="navigation" />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/category/:categories" element={<ReviewList />} />
        <Route path="/review/:review_id" element={<ReviewPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userid" element={<InConstruction />} />
      </Routes>

    </div>
  );
}

export default App;
