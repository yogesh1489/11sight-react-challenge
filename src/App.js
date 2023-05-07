import { Navigate, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import History from "./pages/History";
import Search from "./pages/Search";
import ViewUser from "./pages/ViewUser";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" exact element={<Navigate to="/search" />} />
          <Route path="/search" element={<Search />} />
          <Route path="/history" element={<History />} />
          <Route path="/:id" element={<ViewUser />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
