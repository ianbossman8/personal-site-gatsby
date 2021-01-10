import { css, DefaultTheme } from 'styled-components'

function colourfulText(colours: DefaultTheme['colours']) {
  return `linear-gradient(to right, ${colours.main[3]}, ${colours.info[3]}, ${colours.warn[3]}, ${colours.alert[3]})`
}

export const fillBackgroundText = css`
  background: ${({ theme: { colours } }) => colourfulText(colours)};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
