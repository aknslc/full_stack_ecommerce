import styles from './register.module.scss'
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios'


import { useNavigate } from 'react-router'

const Register = () => {

  const navigate = useNavigate()
  const [errorMessage,setErrorMessage] = useState('')

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: async values => {

      try {
        await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, values)
        navigate('/login')
      } catch (err) {
        setErrorMessage(err.response.data.message)
      }
    },
  });
  return (
    <div className={styles.formContainer}>
      <form onSubmit={formik.handleSubmit}>
        <h1 className={styles.formTitle}>Register</h1>

        <p className='text-danger'>{errorMessage}</p>
        <input
          id="username"
          name="username"
          type="username"
          placeholder='Username'
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder='Password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type='submit' className={styles.submitBtn}>Create</button>

      </form>
    </div>
  )
}

export default Register