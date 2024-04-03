import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from "./pages"
import { Jobs as JobsPage } from "./pages/Jobs"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/jobs",
      element: <JobsPage />,
    },
  ])

  return (
    <div className="App" style={{ fontFamily: "Roboto" }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
