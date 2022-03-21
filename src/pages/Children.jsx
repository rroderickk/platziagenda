import React from "react";
import styled from "styled-components";
import { Divider } from "@chakra-ui/react"

const Children =(props)=> { return (<>
<Wrapper>
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
    { !props.hour?  (<>
        <H3>hora bogota</H3>
      </>)
      : <H3 id="hour">{props.hour}</H3>
    }
    <Divider borderColor="cyan.200"/>
  </article>
</Wrapper>
</> ) }; export {Children};

const Wrapper = styled.article`
  & article{
    margin-bottom: 12px;
  }
  font-weight: 900;
  font-size: 20px;
`
const H2 = styled.h2`
  color: var(--customgris);
  font-size: 16px;
  width: 60%;
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