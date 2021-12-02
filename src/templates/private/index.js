import { Header } from "../../components/header";
import { Aside } from "../../components/aside";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";
function TemplatePrivate(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>
        <Aside />
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  );
}

export { TemplatePrivate };
