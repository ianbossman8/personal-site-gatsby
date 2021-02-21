import React, { ReactNode } from 'react'
import { HooksReturnType } from '../../customHooks/useModalContentHooks'
import SEO, { Props as SeoProps } from '../Seo'
import Layout from '../Layout/Layout'
import Modal from '../Modal/Modal'
import { pageMeta } from '../../constants/meta'
import Location from '../../util/location'

interface Props {
  pageSeo: SeoProps
  modalProps?: {
    modalContent: HooksReturnType
    handleModalReset: () => void
  }
  children?: ReactNode
  reverse?: boolean
}

export default function Base(props: Props) {
  const { pageSeo, modalProps, children, reverse = false } = props

  const isIndex = Location.isIndexPath(pageSeo.pathname)

  return (
    <Layout isIndex={isIndex} pageMeta={pageMeta}>
      <SEO {...pageSeo} />
      {children}
      {modalProps && modalProps.modalContent && (
        <Modal
          topic={modalProps.modalContent.title}
          modalContent={modalProps.modalContent.body}
          handleModalClose={modalProps.handleModalReset}
          reverse={reverse}
        />
      )}
    </Layout>
  )
}
