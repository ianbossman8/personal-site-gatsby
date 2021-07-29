import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery } from 'gatsby'
import Dump from '../Dump'

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    markdownRemark: {
      frontmatter: {
        title: 'About',
        description: 'A clear description of myself'
      },
      html: ''
    },
    site: {
      siteMetadata: {
        title: '',
        description: '',
        author: '',
        keywords: '',
        lang: '',
        siteUrl: ''
      }
    }
  }))
})

describe('Dump', () =>
  it('renders correctly', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
    })

    jest.spyOn(window, 'matchMedia')

    const data = {
      markdownRemark: {
        frontmatter: {
          title: 'About',
          description: 'A clear description of myself'
        },
        html: ''
      },
      site: {
        siteMetadata: {
          title: '',
          description: '',
          author: '',
          keywords: '',
          lang: '',
          siteUrl: ''
        }
      }
    }
    const tree = renderer.create(<Dump data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
