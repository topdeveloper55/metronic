/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import {Vertical} from '../../wizards/components/Vertical'

export function Registration() {
  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <Vertical/>
  )
}
