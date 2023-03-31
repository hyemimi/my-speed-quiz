import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Pages/Main";
import Question from "../Pages/Question";
import Result from "../Pages/Result";
export default function Router() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
