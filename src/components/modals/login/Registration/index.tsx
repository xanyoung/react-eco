import { Formik } from 'formik'
import * as yup from 'yup'

import { useDispatch } from 'react-redux'

import { Icon } from 'components/Icon'
import { setCurrentModal } from 'redux/modals/slice'
import { useRegistrationMutation } from 'redux/auth'
import { RegisterBody } from 'models/registration.model'

import styles from '../ModalRoot.module.sass'

export interface Props {
  onClose: () => void;
}

export const Registation = ({onClose}: Props) => {
  // eslint-disable-next-line 
  const [register, {data, isLoading}] = useRegistrationMutation();
  const dispatch = useDispatch()

  const handleRegister = (values: RegisterBody) => {
    register(values).then(() => dispatch(setCurrentModal("Auth")))

  }

  const validationSchema = yup.object({
    username: yup
              .string()
              .required('Имя обязательно'),

    phone_number: yup
                  .string()
                  .required('Номер телефона обязателен')
                  .matches(/^\d{11}$/, 'Неверный формат телефона'),
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
            <RegisterBody>
            initialValues={{
              username: '',
              phone_number: '',
              password: ''
            }}
            validationSchema={validationSchema}
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
              placeholder="Имя"/>
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
              placeholder="Телефон"/>
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
                placeholder='Пароль'/>
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