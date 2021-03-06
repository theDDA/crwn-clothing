import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={ShopPage} path="/shop" />
      </Switch>
    </div>
  );
}

export default App;
