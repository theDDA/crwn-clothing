import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={ShopPage} path="/shop" />
        <Route component={SignInSignUpPage} path="/signin" />
      </Switch>
    </div>
  );
}

export default App;
