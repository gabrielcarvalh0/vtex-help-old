import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Controllers } from "./pages/Controllers";
import { Events } from "./pages/Events";

export function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/controllers" element={<Controllers />} />
        <Route path="/events" element={<Events />} />
      </Route>
    </Routes>
  );
}
