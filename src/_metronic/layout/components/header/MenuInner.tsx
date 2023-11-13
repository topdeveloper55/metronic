import React from 'react'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'
import {useIntl} from 'react-intl'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title='Home' to='/dashboard' />
      <MenuItem title='Submit Violations' to='/dashboard' />
      <MenuItem title='White List' to='/dashboard' />
      <MenuItem title='Billing' to='/dashboard' />
      <MenuItem title='Afilliate' to='/dashboard' />
      <MenuItem title='Settings' to='/dashboard' />
      <MenuItem title='FAQ' to='/dashboard' />
      <MenuItem title='Support' to='/dashboard' />
    </>
  )
}
