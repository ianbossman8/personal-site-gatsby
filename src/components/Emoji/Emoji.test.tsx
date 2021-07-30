import React from 'react'
import renderer from 'react-test-renderer'
import { screen } from '@testing-library/react'
import 'jest-styled-components'
import Emoji from './Emoji'
import themeWrapper from '../../util/testingTools/themeWrapper'
import { render } from '../../util/testingTools/test-wrappers'
import symbols from '../../constants/symbols'

describe('Emoji', () => {
  describe('snapshot', () => {
    it('should render a house emoji', () => {
      const tree = renderer
        .create(themeWrapper(<Emoji label="testing" symbol={symbols.house} />))
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('render context', () => {
    it('should contain a span', () => {
      render(<Emoji label="testing" symbol={symbols.house} />)

      expect(screen.getByRole('img')).toHaveTextContent(String.fromCodePoint(symbols.house))
    })
  })
})
