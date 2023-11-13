/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {KTIcon} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem to='/dashboard' icon='switch' title='Home' />
      <AsideMenuItem to='/submit' icon='switch' title='Submit Violations' />
      <AsideMenuItem to='/white' icon='switch' title='White List' />
      <AsideMenuItem to='/billing' icon='switch' title='Billing' />
      <AsideMenuItem to='/afilliate' icon='switch' title='Afilliate' />
      <AsideMenuItem to='/setting' icon='switch' title='Settings' />
      <AsideMenuItem to='/faq' icon='switch' title='FAQ' />
      <AsideMenuItem to='/support' icon='switch' title='Support' />
    </>
  )
}
