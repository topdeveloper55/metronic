/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {HeaderToolbar} from './HeaderToolbar'

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {aside} = config

  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '), 'align-items-stretch')}
      {...attributes.headerMenu}
    >
      {/* begin::Brand */}
      <div className='header-brand'>
        {/* begin::Logo */}
        <Link to='/'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/logos/Left.png')}
          />
          
        </Link>
        {/* end::Logo */}
        
        {/* begin::Aside toggle */}
        <div className='d-flex align-items-center d-lg-none ms-n3 me-1' title='Show aside menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-30px h-30px'
            id='kt_aside_mobile_toggle'
          >
            <KTIcon iconName='abstract-14' className='fs-1' />
          </div>
        </div>
        {/* end::Aside toggle */}
      </div>
      {/* end::Brand */}
      <HeaderToolbar />
    </div>
  )
}
