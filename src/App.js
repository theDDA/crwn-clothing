import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const hats = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={hats} path="/shop/hats" />
      </Switch>
    </div>
  );
}

export default App;
