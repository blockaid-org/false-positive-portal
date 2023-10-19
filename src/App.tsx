import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import ConfirmationPage from "./pages/confirmation/ConfirmationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ConfirmationPage />,
    
  },
]);

function App() {
  return (
    <>
      <Topbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
