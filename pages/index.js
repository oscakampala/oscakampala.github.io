import Head from 'next/head'
import * as React from 'react';
import {HomeMainComponent,NavBarComponent} from '../components'

export default function Home() {
  
  return (
    <div>
        <head>
          <title>OSCA Kampala Chapter</title>
          <link rel="shortcut icon" href="/osca-logo.png" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
        </head>
          
        <NavBarComponent />
        <HomeMainComponent/>

    </div>
  )
}
