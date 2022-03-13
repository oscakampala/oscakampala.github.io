import Head from 'next/head'
import * as React from 'react';
import {HomeMainComponent,NavBarComponent} from '../components'

export default function Home() {
  
  return (
    <div>
        <Head>
          <title>OSCA Kampala Chapter</title>
          <link rel="shortcut icon" href="/osca-logo.png" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
        </Head>
          
        <NavBarComponent />
        <HomeMainComponent/>

    </div>
  )
}
