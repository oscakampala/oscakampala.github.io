import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import * as React from 'react';
import {HomeMainComponent,NavBarComponent} from '../components'

export default function Home() {
  
  return (
    <div>
        <Head>
          <title>OSCA Kampala Chapter</title>
          <link rel="shortcut icon" href="/osca-logo.png" />
        </Head>
          
        <NavBarComponent />
        <HomeMainComponent/>

    </div>
  )
}
