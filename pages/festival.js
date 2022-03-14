import { Button, Container } from '@mui/material';
import Head from 'next/head'
import * as React from 'react';
import {NavBarComponent} from '../components'


export default function Festival() {
    return (

        <div>
            <NavBarComponent/>
        <div className="container">

            <Container>
                <h1>
                    THE OPEN SOURCE SUMMIT KAMPALA EDITION
                </h1>

                <h3>
                    Date : 9th April 2022
                </h3>

                <h4>
                    Time : 10 AM to 5 PM
                </h4>

                <h2>
                    Concept note
                </h2>
                
                <p>Open collaboration often allows communities to achieve more than their members can do alone. 
                This, in turn, accelerates innovation and is one of the reasons all the tech giants such as Microsoft,
                Google, Meta, are supporting various open-source projects financially and bringing their engineers 
                to help build a healthy open source community.
                </p>

                <a href='https://bit.ly/oscafestkla'>
                    <Button>
                        R.S.V.P
                    </Button>
                </a>

                <p>You can contribute by making a donation</p>


                <a href='https://opencollective.com/osca-kampala-chapter/donate'>
                    <Button>
                        Donate
                    </Button>
                </a>

                <a href='https://forms.gle/E2JTgKwpF98rygxW8'>
                    <Button>
                        Branded Materials Purchase
                    </Button>
                </a>

                <h6>
                    Event Sponsors
                </h6>

                <img width={70} height={70} src="/sponsors/TUNGA.png" alt="TUNGA Logo" />

                <img width={70} height={70} src="/osca-logo.png" alt="OSCA Logo" />

                <h6>
                    Open Source Community Africa (OSCA) is a community for open source lovers, enthusiasts, advocates and experts within and across Africa, with the sole aim of increasing the rate of credible open source contributions by Africans.
                </h6>

            </Container>
            

            <style jsx>{`
                .container {
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>

        </div>
        </div>

    )
}