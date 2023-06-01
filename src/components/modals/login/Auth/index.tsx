import React from 'react'
import * as yup from 'yup'

import { useDispatch } from 'react-redux'

import { Icon } from 'components/Icon'

import styles from '../ModalRoot.module.sass'

import { setCurrentModal, setIsVisible } from 'redux/modals/slice'
import { useAuthenticationMutation, useLazyUserInfoQuery } from 'redux/auth'
import { AuthenticationRequest } from 'models/generated'
import { setUsername } from 'redux/user/slice'
import { Formik } from 'formik'

export interface Props {
  onClose: () => void;
}

export const Auth = ({onClose}: Props) => {
  const [authentication] = useAuthenticationMutation();
  const [userInfo] = useLazyUserInfoQuery()
  const dispatch = useDispatch()

  const handleAuth = (values: AuthenticationRequest) => {
    authentication(values)
                          .then((res) => { if ('data' in res) {dispatch(setIsVisible(false))
                                          localStorage.setItem('token', res.data.token as string)}})
    .then(() => {
					userInfo(null)
						.then((res) => dispatch(setUsername(res.data?.username as string)))
				})
  }

  const validationSchema = yup.object({
    login: yup
              .string()
              .required('Телефон обязателен')
              .matches(/^\d{11}$/, 'Неверный формат телефона')
              ,
    password: yup
              .string()
              .required('Пароль обязателен')
  })
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>
          <h1>Вход</h1>
            <button onClick={() => onClose()} className={styles.cross}>
              <Icon name="Cross" size={18}/>
            </button>
        </div>
        <Formik
            <AuthenticationRequest>
            initialValues={{
              login: '',
              password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleAuth}
          >
          {({
					  values,
					  handleChange,
					  handleBlur,
					  handleSubmit,
            errors,
            touched
				  }) => (
          <form onSubmit={handleSubmit} className={styles.forms}>
            <label>
              <input 
              onChange={handleChange}
							onBlur={handleBlur}
              name='login'
							value={values.login}
              type="text" 
              placeholder="Телефон"/>
              <span className={styles.validate}> 
                {errors.login && touched.login && errors.login}
              </span>
            </label>  
            <label> 
              <input 
                onChange={handleChange}
								onBlur={handleBlur}
                name='password'
								value={values.password}
                type="password" 
                placeholder='Пароль'/>
                <span className={styles.validate}> 
                  {errors.password && touched.password && errors.password}
                </span>            
                </label>
          <div className={styles.enters}>
          <button type='submit' className={styles.big}>Войти</button>
            <div className={styles.smalls}>
              <div onClick={() => dispatch(setCurrentModal("WithCode"))} 
              className={styles.buttons}>Войти с помощью смс</div>
              <div onClick={() => dispatch(setCurrentModal("Registration"))} 
              className={styles.buttons}>Регистрация</div>
            </div>
          </div>
          <div onClick={() => dispatch(setCurrentModal("Partners"))} 
            className={styles.partners}>Вход для партнёров</div>
          </form>
          )}
          </Formik>
      </div>
    </>
  )
}
