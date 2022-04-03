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
      
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      
        </Head>
          
        <NavBarComponent />
        <HomeMainComponent/>

    </div>
  )
}
