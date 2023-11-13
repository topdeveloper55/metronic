/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react'
import noUiSlider, {target} from 'nouislider'
import {useLayout} from '../../core'
import {DefaultTitle} from './page-title/DefaultTitle'
import {ThemeModeSwitcher} from '../../../partials'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {HeaderUserMenu, Search} from '../../../partials'

const HeaderToolbar = () => {
  const {classes} = useLayout()
  const [status, setStatus] = useState<string>('1')

  useEffect(() => {
    const slider: target = document.querySelector('#kt_toolbar_slider') as target
    const rangeSliderValueElement: Element | null = document.querySelector(
      '#kt_toolbar_slider_value'
    )

    if (!slider) {
      return
    }

    slider.innerHTML = ''

    noUiSlider.create(slider, {
      start: [5],
      connect: [true, false],
      step: 1,
      range: {
        min: [1],
        max: [10],
      },
    })

    slider.noUiSlider?.on('update', function (values: any, handle: any) {
      if (!rangeSliderValueElement) {
        return
      }

      rangeSliderValueElement.innerHTML = parseInt(values[handle]).toFixed(1)
    })
  }, [])

  return (
    <div className='toolbar d-flex align-items-stretch'>
      {/* begin::Toolbar container */}
      <div
        className={`${classes.headerContainer.join(
          ' '
        )} py-6 py-lg-0 d-flex flex-column flex-lg-row align-items-lg-stretch justify-content-lg-between`}
      >
        <DefaultTitle />
        <div className='d-flex align-items-stretch overflow-auto pt-3 pt-lg-0'>
          {/* begin::Action wrapper */}
          <div className='d-flex align-items-center'>{/* begin::Label */}<img src={toAbsoluteUrl('/media/logos/1.svg')} alt='' /></div>
          {/* end::Action wrapper */}

          {/* begin::Action wrapper */}
          <div className='d-flex align-items-center'><img src={toAbsoluteUrl('/media/logos/2.png')} alt='' /></div>
          {/* end::Action wrapper */}

          {/* begin::Action wrapper */}
          <div className='d-flex align-items-center'>
            {/* begin::Label */}
            <span className='fs-7 text-gray-700 fw-bolder pe-3 d-none d-xxl-block'>
              Quick Tools:
            </span>
            {/* end::Label */}

            {/* begin::Actions */}
            <div className='d-flex'>
              {/* begin::Action */}
              <a
                href='#'
                className='btn btn-sm btn-icon btn-icon-muted btn-active-icon-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_invite_friends'
              >
                <img src={toAbsoluteUrl('/media/logos/3.png')} alt='' />
              </a>
              {/* end::Action */}

              <div>
                <div className='me-n2'>
                  {/*begin::Action*/}
                  <a
                    href='#'
                    className='btn btn-icon btn-sm btn-active-color-primary mt-n2'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-start'
                    data-kt-menu-overflow='false'
                  >
                    <img src={toAbsoluteUrl('/media/logos/down.png')} alt='' style={{marginTop: '10px'}}/>
                    
                  </a>

                  <HeaderUserMenu />
                  {/*end::Action*/}
                </div>
                
              </div>
              {/* end::Theme mode */}
            </div>
            {/* end::Actions */}
          </div>
          {/* end::Action wrapper */}
        </div>
        {/* end::Toolbar container */}
      </div>
    </div>
  )
}

export {HeaderToolbar}
