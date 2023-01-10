
import './App.css';
import { Route, Routes } from "react-router-dom"

import { ReviewList } from './Components/ReviewList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NorthGamers</h1>
      </header>
      <Routes>
        <Route path="/" element={<ReviewList />} />
      </Routes>

    </div>
  );
}

export default App;
