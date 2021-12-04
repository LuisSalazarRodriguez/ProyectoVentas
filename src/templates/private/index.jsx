import { Header } from "../../components/header";
import { Aside } from "../../components/aside";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";
import './private.css';

import React from 'react';

const TemplatePrivate = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className='private'>
        <Aside />
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  );
};

export { TemplatePrivate };
