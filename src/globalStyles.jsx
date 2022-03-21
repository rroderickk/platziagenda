import { createGlobalStyle, keyframes, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after { box-sizing: inherit; }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }

  ul { list-style: none; }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    margin: 0px auto;
    min-height: 100vh;
    overscroll-behavior: none;
    width: 100%;
    overflow: hidden;
  }

  #root {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(44deg, rgba(189,141,251,1) 7%, rgba(248,251,250,1) 53%, rgba(176,202,224,1) 87%);
    font-family: "Roboto", sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *{
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  }
`
const FadeInKeyFrames = keyframes`
  from{
    filter: blur(5px);
    opacity: 0;
  }
  to{
    filter: blur(0);
    opacity: 1;
  }
` 
export const FadeIn =( {time="1s", type="ease"}={} )=> {
  return css`animation: ${time} ${FadeInKeyFrames} ${type};`
}
