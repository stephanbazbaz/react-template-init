import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <h1>APP</h1>
          </div>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
