import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import StoreProvider from './context/store.jsx'

import 'normalize.css/normalize.css'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/js/app.js'
import './assets/css/fonts.css'
import './assets/css/app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY_V3}
    >
      <StoreProvider>
        <App />
      </StoreProvider>
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
)
