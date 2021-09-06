import { Route, Switch } from "react-router-dom";
import LoginComp from "./login";
import MenuComp from "./menu";


function MainPageComp() {
  

  return (
    <div className="App">
      <h1>Movies - Subscription Web Site</h1>

      <Switch>
          <Route exact path="/">
              <LoginComp />
          </Route>
          <Route path="/menu">
              <MenuComp />
          </Route>
      </Switch>
    </div>
  );
}

export default MainPageComp;