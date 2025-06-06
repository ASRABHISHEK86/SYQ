import { BrowserRouter, Routes, Route } from 'react-router-dom';


import GameDevelopment from './components/Gamedev';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="game-development" element={<GameDevelopment />} />
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;