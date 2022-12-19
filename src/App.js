import Login from "./components/Login/Login";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Counter from "./components/Counter/Counter";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route path={"/counter"}>
            <Counter/>
          </Route>
          <Route path={"/"}>
            <Login/>
          </Route>
        </Switch>
      </Router>


    </AppContainer>
    // <div>
    //   <Login/>
    // </div>
  );
}

export default App;
