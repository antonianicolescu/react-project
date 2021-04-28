import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/Homepage";
import { AboutMePage } from "./pages/AboutMePage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Switch>
        {/* prop-ul exact schimba dinamic url pt content */}
        <Route path="/" exact component={HomePage} />
        <Route path="/aboutme" component={AboutMePage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
