import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import { PageLogin } from "./pages/login";
import { PageHome } from "./pages/home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TemplatePrivate } from "./templates/private/";
import { PageProductos } from "./pages/productos";
import { PageProductosAgregar } from "./pages/productos/agregar";
import { PageProductosEditar } from "./pages/productos/editar";
import { PageClientes } from "./pages/clientes";
import { PagePedidos } from "./pages/pedidos";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <TemplatePrivate>
                <PageHome />
              </TemplatePrivate>
            </Route>
            <Route exact path="/productos">
              <TemplatePrivate>
                <PageProductos />
              </TemplatePrivate>
            </Route>
            <Route exact path="/productos/agregar">
              <TemplatePrivate>
                <PageProductosAgregar />
              </TemplatePrivate>
            </Route>
            <Route exact path="/productos/editar/:id">
              <TemplatePrivate>
                <PageProductosEditar />
              </TemplatePrivate>
            </Route>
            <Route exact path="/clientes">
              <TemplatePrivate>
                <PageClientes />
              </TemplatePrivate>
            </Route>
            <Route exact path="/pedidos">
              <TemplatePrivate>
                <PagePedidos />
              </TemplatePrivate>
            </Route>
            <Route exact path="/login">
              <PageLogin />
            </Route>
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
