import {FC} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useLayout} from '../../../core/LayoutProvider'
import {usePageData} from '../../../core/PageData'

const DefaultTitle: FC = () => {
  const {pageTitle, pageDescription, pageBreadcrumbs} = usePageData()
  const {config} = useLayout()
  return (
    <div className='page-title d-flex justify-content-center flex-column me-5'>
      
    </div>
  )
}

export {DefaultTitle}
