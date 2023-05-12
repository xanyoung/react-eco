import React from 'react'
import { Formik } from 'formik'

import { useDispatch } from 'react-redux'

import { Icon } from '../../../Icon'
import { setCurrentModal } from '../../../../redux/modals/slice'
import { useRegistrationMutation } from '../../../../redux/auth'
import { RegisterBody, RegisterResponse } from '../../../../models/auth.model'

import styles from '../Login.module.sass'
import { setUsername } from '../../../../redux/user/slice'

export interface Props {
  onClose: () => void;
}

export const Registation = ({onClose}: Props) => {
  const [register, {data, isLoading}] = useRegistrationMutation();
  const dispatch = useDispatch()

  const handleRegister = (values: RegisterResponse) => {
    register(values).then(() => dispatch(setUsername(data?.username as string)))
  }

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
            <RegisterBody>
            initialValues={{
              username: '',
              phone_number: '',
              password: ''
            }}
            validate={values => {
              const errors: Partial<typeof values> = {};
              if (!values.username) {
                errors.username = 'Поле "Имя" обязательно';
              }

              if (!values.phone_number) {
                errors.phone_number = 'Поле "Телефон" обязательно';
              } else if (!/^\+7\d{10}$/.test(values.phone_number)) {
                errors.phone_number = 'Неверный формат телефона';
              }

              if (!values.password) {
                errors.password = 'Поле "Пароль" обязательно';
              } else if (values.password.length < 6) {
                errors.password = 'Пароль должен содержать не менее 6 символов';
              } 

              return errors;
              } 
            }
  
            onSubmit={handleRegister}
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
              name='username'
							value={values.username}
              type="text" 
              placeholder="Имя"></input>
              <span className={styles.validate}> 
                {errors.username && touched.username && errors.username}
              </span>
            </label>
            <label>
              <input 
              onChange={handleChange}
							onBlur={handleBlur}
              name='phone_number'
							value={values.phone_number}
              type="tel" 
              placeholder="Телефон"></input>
              <span className={styles.validate}> 
                {errors.phone_number && touched.phone_number && errors.phone_number}
              </span>
            </label>  
            <label> 
              <input 
                onChange={handleChange}
								onBlur={handleBlur}
                name='password'
								value={values.password}
                type="password" 
                placeholder='Пароль'></input>
                <span className={styles.validate}> 
                  {errors.password && touched.password && errors.password}
                </span>            
                </label>
          <div className={styles.enters}>
          <button type='submit' className={styles.big}>Зарегистрироваться</button>
            <div className={styles.smalls}>
              <div onClick={() => dispatch(setCurrentModal("Auth"))} 
              className={styles.buttons}>Я уже зарегистрировался(-ась)</div>
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