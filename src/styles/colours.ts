import { css, DefaultTheme } from 'styled-components'

export function colourfulBackground(colours: DefaultTheme['colours'], direction: string) {
  if (direction === 'toRight') {
    return `linear-gradient(to right, ${colours.main[3]}, ${colours.info[3]}, ${colours.warn[3]}, ${colours.alert[3]})`
  }

  if (direction === 'toBottomRight') {
    return `linear-gradient(-45deg, ${colours.main[3]}, ${colours.info[3]}, ${colours.warn[3]}, ${colours.alert[3]})`
  }
}

export const fillBackgroundText = css`
  background: ${({ theme: { colours } }) => colourfulBackground(colours, 'toRight')};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`

export const glassBackground = css`
  background: ${({ theme: { colours } }) => colours.primary.blur.light};
  box-shadow: ${({ theme: { colours } }) => `0 8px 32px 0 ${colours.secondary.blur.strong}`};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`
