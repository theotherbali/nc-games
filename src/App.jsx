
import './App.css';
import { Route, Routes } from "react-router-dom"

import { ReviewList } from './Components/ReviewList';
import { ReviewPage } from './Components/ReviewPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NorthGamers</h1>
      </header>
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/review/:review_id" element={<ReviewPage />} />
      </Routes>

    </div>
  );
}

export default App;
