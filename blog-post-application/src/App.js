import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PostCard from './components/PostCard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        exact
                        path="/post"
                        element={<PostCard />}
                    />
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
