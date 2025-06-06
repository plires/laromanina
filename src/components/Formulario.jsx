import { useRef, useState, useContext, useEffect } from 'react'
import { StoreContext } from '../context/store'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import ErrorInput from '@/components/ErrorInput.jsx'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Loader from '@/components/Loader'
import { validation } from '@/utils/dataUtils'
import 'react-toastify/dist/ReactToastify.css'

import styles from './formulario.module.css'

export default function Formulario() {
  const [loading, setLoading] = useState(false)
  const [wordBtn, setWordBtn] = useState('ENVIAR MENSAJE')
  const [isSubscribed, setIsSubscribed] = useState(true)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const { message, setMessage, textAreaRef } = useContext(StoreContext)

  const ref = useRef()

  const handleChange = event => {
    setIsSubscribed(event.target.checked)
  }

  useEffect(() => {
    ref.current.setFieldValue('comments', message)
  }, [message])

  const sendForm = async (values, { setSubmitting, resetForm }) => {
    setLoading(true)
    setWordBtn('ENVIANDO...')

    const token = await executeRecaptcha('form_contacto')
    values.recaptchaToken = token

    if (isSubscribed) {
      values.newsletter = 'on'
    } else {
      delete values.newsletter
    }

    values.origin = 'Landing Totems de Seguridad'

    const urlParams = new URLSearchParams(window.location.search)

    if (urlParams.has('utm_source')) {
      values.utm_source = urlParams.get('utm_source')
    } else {
      values.utm_source = 'No Set'
    }

    if (urlParams.has('utm_medium')) {
      values.utm_medium = urlParams.get('utm_medium')
    } else {
      values.utm_medium = 'No Set'
    }

    if (urlParams.has('utm_campaign')) {
      values.utm_campaign = urlParams.get('utm_campaign')
    } else {
      values.utm_campaign = 'No Set'
    }

    if (urlParams.has('utm_content')) {
      values.utm_content = urlParams.get('utm_content')
    } else {
      values.utm_content = 'No Set'
    }

    try {
      const res = await axios.post(
        import.meta.env.VITE_ROOT + 'php/process.php',
        values,
      )

      const myJson = JSON.stringify(res.data)
      const responseData = JSON.parse(myJson)

      if (responseData.success) {
        toast.success(responseData.msg_success)

        window.dataLayer.push({
          formLocation: 'form_contact',
          event: 'send_form_contact',
        })
      } else {
        responseData.errors.map(error => {
          return toast.error(error)
        })
      }
    } catch (error) {
      // Realizar acciones en caso de error
      toast.error(
        'Aparentemente en este momento no hay conexión con el servidor, por favor intente mas tarde.',
      )
    }

    resetForm()
    setMessage('')
    setSubmitting(false)
    setLoading(false)
    setWordBtn('ENVIAR MENSAJE')
  }

  const initFormDefault = {
    name: '',
    email: '',
    phone: '',
    comments: '',
    newsletter: true,
  }

  return (
    <>
      {loading && <Loader />}
      <section className={`${styles.formulario}`}>
        <ToastContainer autoClose={false} />
        <div id='formulario'>
          <Formik
            innerRef={ref}
            initialValues={initFormDefault}
            validate={validation}
            onSubmit={sendForm}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form
                data-aos='fade-up'
                id='form_contacto'
                onSubmit={handleSubmit}
              >
                <h3>
                  ¡Solicitá más información sobre nuestros productos de
                  almacenamiento!
                </h3>
                <div className='row'>
                  <div className={`col-sm-12 mb-4 ${styles.inputContainer}`}>
                    <label htmlFor='name' className={`${styles.label}`}>
                      Nombre
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      type='text'
                      name='name'
                      placeholder=''
                    />
                    <ErrorMessage name='name' component={ErrorInput} />
                  </div>
                  <div className={`col-sm-12 mb-4 ${styles.inputContainer}`}>
                    <label htmlFor='email' className={`${styles.label}`}>
                      Email
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      type='email'
                      name='email'
                      placeholder=''
                    />
                    <ErrorMessage name='email' component={ErrorInput} />
                  </div>
                  <div className={`col-sm-12 mb-4 ${styles.inputContainer}`}>
                    <label htmlFor='phone' className={`${styles.label}`}>
                      Teléfono
                    </label>
                    <Field
                      className={`form-control ${styles.input} transition`}
                      type='text'
                      name='phone'
                      placeholder=''
                    />
                    <ErrorMessage name='phone' component={ErrorInput} />
                  </div>
                  <div className={`col-sm-12 mb-3 ${styles.inputContainer}`}>
                    <label
                      htmlFor='comments'
                      className={`${styles.label} ${styles.labelComments}`}
                    >
                      Dejanos tu consulta
                    </label>
                    <Field
                      innerRef={textAreaRef}
                      className={`form-control ${styles.input} transition`}
                      as='textarea'
                      name='comments'
                      rows='4'
                      placeholder=''
                      value={message}
                      onChange={event => setMessage(event.target.value)}
                    />
                    <ErrorMessage name='comments' component={ErrorInput} />
                  </div>
                </div>

                <div className='row mb-3'>
                  <div
                    className={`form-check ${styles.formCheck} ${styles.contentLabelNewsletter}`}
                  >
                    <label>
                      <Field
                        onChange={handleChange}
                        checked={isSubscribed}
                        type='checkbox'
                        name='newsletter'
                        id='newsletter'
                      />
                      <label className='form-check-label' htmlFor='newsletter'>
                        Suscribir newsletter
                      </label>
                    </label>
                  </div>
                </div>

                <button
                  id='send'
                  className={`btn transition ${styles.btnSend}`}
                  type='submit'
                  disabled={isSubmitting}
                >
                  {wordBtn}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  )
}
