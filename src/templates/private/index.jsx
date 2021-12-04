import { Header } from "../../components/header";
import { Aside } from "../../components/aside";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";
import "./private.css";

import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const TemplatePrivate = (props) => {
  const { children } = props;
  const { isLogin, userData } = useSelector((state) => state.auth);
  const history = useHistory();
  if (isLogin === false) {
    history.push("/login");
  }
  return (
    <div>
      <Header datosUsuario={userData} />
      <div className="private">
        <Aside />
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  );
};

export { TemplatePrivate };
