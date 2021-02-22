export const WIDTH_BOUNDARIES = {
  S: 720,
  M: 1180
}

export const HEIGHT_BOUNDARIES = {
  M: 980
}

export const MEDIA_QUERY_SMALL_WIDTH_RULE = `@media only screen and (max-width: ${WIDTH_BOUNDARIES.S}px)`
export const MEDIA_QUERY_MEDIUM_WIDTH_RULE = `@media only screen and (max-width: ${WIDTH_BOUNDARIES.M}px)`
export const MEDIA_QUERY_MEDIUM_HEIGHT_RULE = `@media only screen and (max-height: ${HEIGHT_BOUNDARIES.M}px)`
