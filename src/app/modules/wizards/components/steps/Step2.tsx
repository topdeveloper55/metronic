import React, {FC} from 'react'
import {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {getUserByToken, register, login} from '../../../auth/core/_requests'
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {PasswordMeterComponent} from '../../../../../_metronic/assets/ts/components'
import {useAuth} from '../../../auth/core/Auth'
const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  changepassword: '',
  acceptTerms: false,
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  lastname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  changepassword: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
  acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})
const Step2: FC = () => {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleSubmit = async () => {
    const {data: auth} = await login(
      'admin@demo.com',
      'demo'
    )
    console.log('AUTH', auth)
    saveAuth(auth)
    const {data: user} = await getUserByToken(auth.api_token)
    setCurrentUser(user)
  }
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(
          'admin@demo.com',
          'demo'
        )
        console.log('AUTH', auth)
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        setCurrentUser(user)
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The registration details is incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])
  return (
    <div className='w-100'>
      <form
        className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
        noValidate
        id='kt_login_signup_form'
        onSubmit={formik.handleSubmit}
      >
        {/* begin::Heading */}
        <div className='text-center mb-11'>
          {/* begin::Title */}
          <h1 className='text-dark fw-bolder mb-3'>Account Details</h1>
          {/* end::Title */}

          <div className='text-gray-500 fw-semibold fs-6'>Add Your Personal Info</div>
        </div>
        {/* end::Heading */}

        {/* begin::Login options */}
        <div className='row g-3 mb-9'>
          {/* begin::Col */}
          <div className='col-md-6'>
            {/* begin::Google link */}
            <a
              href='#'
              target='_blank'
              className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
            >
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
                className='h-15px me-3'
              />
              Sign in with Google
            </a>
            {/* end::Google link */}
          </div>
          {/* end::Col */}

          {/* begin::Col */}
          <div className='col-md-6'>
            {/* begin::Google link */}
            <a
              href='#'
              className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
            >
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
                className='theme-light-show h-15px me-3'
              />
              <img
                alt='Logo'
                src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
                className='theme-dark-show h-15px me-3'
              />
              Sign in with Apple
            </a>
            {/* end::Google link */}
          </div>
          {/* end::Col */}
        </div>
        {/* end::Login options */}

        <div className='separator separator-content my-14'>
          <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
        </div>

        {formik.status && (
          <div className='mb-lg-15 alert alert-danger'>
            <div className='alert-text font-weight-bold'>{formik.status}</div>
          </div>
        )}

        {/* begin::Form group Firstname */}
        <div className='fv-row mb-8'>
          <label className='form-label fw-bolder text-dark fs-6'>First name</label>
          <input
            placeholder='First name'
            type='text'
            autoComplete='off'
            onChange={(e) => setFirstName(e.target.value)}
            className={clsx(
              'form-control bg-transparent',
            )}
          />
        </div>
        {/* end::Form group */}
        <div className='fv-row mb-8'>
          {/* begin::Form group Lastname */}
          <label className='form-label fw-bolder text-dark fs-6'>Last name</label>
          <input
            placeholder='Last name'
            type='text'
            autoComplete='off'
            onChange={(e) => setLastName(e.target.value)}
            className={clsx(
              'form-control bg-transparent',
            )}
          />
          {/* end::Form group */}
        </div>

        {/* begin::Form group Email */}
        <div className='fv-row mb-8'>
          <label className='form-label fw-bolder text-dark fs-6'>Email</label>
          <input
            placeholder='Email'
            type='email'
            autoComplete='off'
            onChange={(e)=> setEmail(e.target.value)}
            className={clsx(
              'form-control bg-transparent',
            )}
          />
        </div>
        {/* end::Form group */}

        {/* begin::Form group Password */}
        <div className='fv-row mb-8' data-kt-password-meter='true'>
          <div className='mb-1'>
            <label className='form-label fw-bolder text-dark fs-6'>Password</label>
            <div className='position-relative mb-3'>
              <input
                type='password'
                placeholder='Password'
                autoComplete='off'
                onChange={(e)=> setPassword(e.target.value)}
                className={clsx(
                  'form-control bg-transparent',
                )}
              />
            </div>
            {/* end::Meter */}
          </div>
          <div className='text-muted'>
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </div>
        </div>
        {/* end::Form group */}

        {/* begin::Form group Confirm password */}
        <div className='fv-row mb-5'>
          <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>
          <input
            type='password'
            placeholder='Password confirmation'
            autoComplete='off'
            onChange={(e)=> setConfirm(e.target.value)}
            className={clsx(
              'form-control bg-transparent',
            )}
          />
        </div>
        {/* end::Form group */}

        {/* begin::Form group */}
        <div className='fv-row mb-8'>
          <label className='form-check form-check-inline' htmlFor='kt_login_toc_agree'>
            <input
              className='form-check-input'
              type='checkbox'
              id='kt_login_toc_agree'
              {...formik.getFieldProps('acceptTerms')}
            />
            <span>
              I Accept the{' '}
              <a
                href='https://keenthemes.com/metronic/?page=faq'
                target='_blank'
                className='ms-1 link-primary'
              >
                Terms
              </a>
              .
            </span>
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.acceptTerms}</span>
              </div>
            </div>
          )}
        </div>
        {/* end::Form group */}

        {/* begin::Form group */}
        <div className='text-center'>
          <button
            onClick={() => handleSubmit()}
            type='button'
            id='kt_sign_up_submit'
            className='btn btn-lg btn-primary w-100 mb-5'
          >
            {!loading && <span className='indicator-label'>Submit</span>}
            {loading && (
              <span className='indicator-progress' style={{display: 'block'}}>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
          <Link to='/auth/login'>
            <button
              type='button'
              id='kt_login_signup_form_cancel_button'
              className='btn btn-lg btn-light-primary w-100 mb-5'
            >
              Cancel
            </button>
          </Link>
        </div>
        {/* end::Form group */}
      </form>
    </div>
  )
}

export {Step2}
