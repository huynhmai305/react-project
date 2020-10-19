import React, {useEffect} from "react";
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css';
import 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { wrapper } from "../store";

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
