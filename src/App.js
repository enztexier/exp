import './App.css';
import {Routes, Route} from "react-router-dom";
import All from './All';
import Category from './Category';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
