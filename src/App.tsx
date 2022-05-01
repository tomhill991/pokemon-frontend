import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from './components'
import { Home, Search } from './pages'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="search" element={<Search />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
