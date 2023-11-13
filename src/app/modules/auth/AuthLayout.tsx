/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Registration} from './components/Registration'
const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return <Registration />
}

export {AuthLayout}
