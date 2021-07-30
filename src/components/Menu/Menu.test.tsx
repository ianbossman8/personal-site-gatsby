import React from 'react'
import renderer from 'react-test-renderer'
import Menu from './Menu'
import themeWrapper from '../../util/testingTools/themeWrapper'
import { pageMeta } from '../../constants/meta'
import linksGen from '../../util/linksGen'
import { PAGE_NAMES } from '../../constants/pageNames'

describe('Menu', () => {
  describe('snapshot', () => {
    it('should render the menu', () => {
      const linksMeta = linksGen(pageMeta, [PAGE_NAMES[404], PAGE_NAMES.PRIVACY])
      const tree = renderer
        .create(themeWrapper(<Menu linksMeta={linksMeta} isIndex={false} />))
        .toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('should not render the menu', () => {
      const linksMeta = linksGen(pageMeta, [PAGE_NAMES[404], PAGE_NAMES.PRIVACY])
      const tree = renderer
        .create(themeWrapper(<Menu linksMeta={linksMeta} isIndex={true} />))
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
