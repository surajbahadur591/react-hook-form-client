import Forms from "./components/Forms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllUsers from "./components/AllUsers";

function App() {
  return (
    <BrowserRouter>
      <div className="px-4 py-2 bg-gray-200">
        {/* <h1 className="text-2xl font-semibold">Advanced Form Validation</h1> */}

        <Routes>
          <Route path="/" element={<Forms />}></Route>
          <Route path="/allusers" element={<AllUsers />}></Route>
        </Routes>

        <p>
          Developed by{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/suraj-bahadur-kumal/"
          >
            Suraj Bahadur
          </a>{" "}
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
