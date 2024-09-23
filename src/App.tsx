import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Header from "./components/header/Header";
import './App.scss'

function App() {
  return (
    <div className="container">
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
