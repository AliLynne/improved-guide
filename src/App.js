import { useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import List from "./components/List";
import Resume from "./pages/Resume";

function App() {
  const documentWrapperRef = useRef(null);
  return (
    <Layout>
      <Router>
        <main>
          <Switch>
            <Route path="/resume">
              <Resume documentWrapperRef={documentWrapperRef} />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </main>
      </Router>
    </Layout>
  );
}

export default App;
