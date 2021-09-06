import { Route, Switch } from "react-router-dom";
import LoginComp from "./login";
import MenuComp from "./menu";


function MainPageComp() {

  return (
    <div className="App">
      <h3>Movies - Subscription Web Site</h3>

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