import React from "react";
import { NavLink } from "react-router-dom";
import "./aside.css";
import imgMenus from "../../image/menus.png";
import imgProducto from "../../image/producto.png";
import imgCliente from "../../image/cliente.jpg";
import imgPedido from "../../image/pedido.png";
import imgMas from "../../image/mas.png";

const Aside = () => {
  return (
    <aside className="aside">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              <img src={imgMenus} className="aside-img" alt="Home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/PageProductos" exact>
              <img src={imgProducto} className="aside-img" alt="Productos" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/PageClientes" exact>
              <img src={imgCliente} className="aside-img" alt="Clientes" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/PagePedidos" exact>
              <img src={imgPedido} className="aside-img" alt="Pedidos" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/PageMas" exact>
              <img src={imgMas} className="aside-img" alt="Mas opciones" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div></div>
    </aside>
  );
};

export { Aside };
