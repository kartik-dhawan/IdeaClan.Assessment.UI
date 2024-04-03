import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from "./pages"
import { Jobs as JobsPage } from "./pages/Jobs"
import { Provider } from "react-redux"
import store from "./redux/store"

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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App
