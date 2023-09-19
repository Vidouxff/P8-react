import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import About from './About';

function App() {
  return (
    <div>

      <Header />

      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} />  
      </Routes>

    </div>
  );
}

export default App;