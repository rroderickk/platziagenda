import React from "react";
import styled from "styled-components";
import { FadeIn, GlobalStyle } from "../globalStyles"
import { Divider, Button } from "@chakra-ui/react"
import logo from "@logos/logo.webp"
import foot from "@logos/foot.jpg"
import "../_vars.scss"
import { ThemeToggleButton } from "./themeToggleButton";

const pday="https://platzi.com/day/"
const aday="https://platzi.com/agendaday/"

const openTab=( DURL="https://platzi.com/agenda/" )=> ()=>window.open(DURL)

const PlatziAgenda =(props)=> { return ( <> <GlobalStyle/>

  <Header>
    <img width="240px" src={logo} alt="banner" onClick={openTab(pday)}
      style={{cursor: "pointer"}}
    />
  </Header>

<Main>
  <section>
    <SButton className="textgradient" onClick={openTab()}>
      { !props.date? "DOMINGO 20" : props.date}
    </SButton>
    <ThemeToggleButton/>

    <article>
      { !props.hightTitle?  (<>
          <h1><em>HACKS</em><b> para aprender en linea?</b></h1>
        </>)
        : props.hightTitle
      }
      { !props.who?  (<>
          <H2><em>isis garcia y wilmar zapata</em></H2>
        </>)
        : <H2><em>{props.who}</em></H2>
      }
      { !props.hour?  (<> <H3>hora bogota</H3> </>)
        : <H3 id="hour">{props.hour}</H3>
      }
      <Divider borderColor="cyan.200"/>
    </article>
    {props.children}
  </section>
</Main>

  <Footer>
    <section id="foo">
      <h2>Consulta los detalles en:</h2>
      <h5 className="textgradient" style={{fontWeight: "bold"}}
          onClick={openTab(aday)}
      >
        platzi.com/agendaday
      </h5>
    </section>
    <div className="container">
      <img src={foot} alt="footerimage" />
    </div>
  </Footer>

</>) }; export { PlatziAgenda };

const Header = styled.header`
  ${FadeIn({time: "2s", type: "ease"})}
  position: relative;
  margin: 0 auto;
  top: -270px;
`
const SButton = styled(Button)`
  ${FadeIn({time: "1.4s", type: "ease"})}
  text-transform: uppercase;
  padding: 8px 13px !important;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 24px!important;
  font-weight: 900;
  letter-spacing: 1.3px;
  color: white;
  filter: drop-shadow(0 20px 30px #28d8ff33);
  box-shadow:  2px 2px 7px #ccd6de,
              -5px -5px 7px #f0fcff;
`
const Main = styled.main`
  height: 44px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0 60px;
  flex-direction: column;
  margin-top: -230px;
  text-align: left;
  width: 100%;
  & section{
    padding-bottom: 200px;
  }
  color: #111e3c;
  & article{
    margin-bottom: 12px;
  }
  font-weight: 800;
  font-size: 20px;
`

const H2 = styled.h2`
  color: var(--customgris);
  font-size: 16px;
  text-align: left;
  text-transform: capitalize;
  font-weight: 400;
`
const H3 = styled.h3`
  color: var(--background);
  font-size: 11px;
  text-align: right;
  margin-top: -18px;
  font-weight: 400;
`
const Footer = styled.footer`
  position: fixed;
  flex-direction: column;
  z-index: 3;
  width: 480px;
  bottom: 130px;
  color: var(--udea);
  & section{
    width: 100%;
    backdrop-filter: blur(10px);
  }
  & div{
    position: fixed;
    bottom: -130px;
    margin: 0 auto;
    z-index: -1;
    width: 480px;
    ${FadeIn({time: "1s", type: "ease-in-out"})};
  }
  & h2{
    font-size: 20px;
    font-weight: 600;
  }
`