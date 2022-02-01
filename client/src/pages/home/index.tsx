import Header from "../../ui/components/header";
import NavBar from "../../ui/components/navbar";
import Logo from "../../assets/Logo";

import { getHeadersLinks } from "../../utils";

import { SHeaderContainer } from "../../styles/components";
import Button from "../../ui/components/button";

import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";

const headerLinks = getHeadersLinks();

const SButtons = styled.div`
  > a {
    margin-left: 20px;
  }
`;

const SHeaders = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

const Home = () => {
  const { isLogin, setIsLogin, user, setUser } = useAuth();

  const handleLogin = () => {
    setIsLogin(true);
    setUser({ name: "Tony Stark" });
  };

  return (
    <SHeaders>
      <Header
        HeaderStyledComponent={SHeaderContainer}
        logo={<Logo />}
        navbar={<NavBar links={headerLinks} />}
        buttons={
          <SButtons>
            <Button type='link'>войти</Button>
            <Button type='link'>зарегистрироваться</Button>
          </SButtons>
        }
      />
      <Header
        HeaderStyledComponent={SHeaderContainer}
        logo={<Logo />}
        navbar={<NavBar links={headerLinks} />}
        buttons={
          <SButtons>
            <Button type='link' onClick={handleLogin}>
              войти
            </Button>
            <Button type='link'>зарегистрироваться</Button>
          </SButtons>
        }
        isLogin={isLogin}
        user={user}
      />
    </SHeaders>
  );
};

export default Home;
