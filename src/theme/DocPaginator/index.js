import React from 'react'
import DocPaginator from '@theme-original/DocPaginator'
import FeedbackWidget from '../../components/FeedbackWidget'

export default function DocPaginatorWrapper(props) {
  return (
    <>
      <DocPaginator {...props} />
      <FeedbackWidget />
    </>
  )
}
