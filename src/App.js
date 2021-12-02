import { PageLogin } from "./pages/login";
import { PageHome } from "./pages/home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Aside } from "./components/aside";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { PageProductos } from "./pages/productos";
import { PageClientes } from "./pages/clientes";
import { PagePedidos } from "./pages/pedidos";

import "./App.css";

function App() {
  return (
    <div>
      {/* <PageLogin/> */}
      {/* <PageHome/>       */}
      <Router>
        <Header />
        <section className="home-section">
          <Aside />
          <Main>
            <Switch>
              <Route exact path="/">
                <PageHome />
              </Route>
              <Route exact path="/login">
                <PageLogin />
              </Route>
              <Route exact path="/PageProductos">
                <PageProductos />
              </Route>
              <Route exact path="/PageClientes">
                <PageClientes />
              </Route>
              <Route exact path="/PagePedidos">
                <PagePedidos />
              </Route>
            </Switch>
          </Main>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
