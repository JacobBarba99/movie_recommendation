import { HashRouter as Router } from "react-router-dom";
import Layout from "./Pages/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { intialPageAction } from "./redux/movieReducer";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(intialPageAction())
  }, [dispatch])

  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
