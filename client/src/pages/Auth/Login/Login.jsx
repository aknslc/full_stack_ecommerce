import { useFormik } from 'formik';
import { useState } from 'react';
import styles from './login.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'
import axios from 'axios';
const Login = () => {
  const { setUser } = useAuth()
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => {
      try {
        const res = await axios.post("/auth/login", values);
        setUser(res.data)
        navigate('/')
      } catch (err) {
        setErrorMessage(err.response.data.message)
      }
    },
  });
  return (
    <div className={styles.formContainer}>
      <form onSubmit={formik.handleSubmit}>
        <h1 className={styles.formTitle}>Login</h1>
        <p className='text-danger'>{errorMessage}</p>
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
        <button className={styles.submitBtn} type="submit">Login</button>

        <Link style={{ fontWeight: "100", marginTop: "2rem" }} to="/register">
          Create account!
        </Link>
      </form>
    </div>
  )
}

export default Login