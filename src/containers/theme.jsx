import { extendTheme } from "@chakra-ui/react"
import { mode        } from "@chakra-ui/theme-tools"

const styles = {
  global: props=> ({
    "#root": {
      bg: mode('black')(props)
    },
    "#thelayout": {
      bg: mode('black')(props),
      boxShadow: mode('none')(props)
    },
    "#hour": {
      color: mode('white')(props)
    },
    "#foo": {
      color: mode('cyan')(props)
    },
  })
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true 
}

const theme = extendTheme({
  config,
  styles,
})

export { theme }