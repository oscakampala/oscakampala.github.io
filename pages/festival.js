import { Button, Container } from '@mui/material';
import * as React from 'react';

export default function Festival() {
    return (
        <div className="container">
            <Container>
                <h1>
                    THE OPEN SOURCE FESTIVAL 2022 KAMPALA EDITION
                </h1>

                <h3>Date : 9th April 2022</h3>
                <h4>Time : 10 AM to 5 PM</h4>

                <h2>Concept note</h2>
                
                <p>Open collaboration often allows communities to achieve more than their members can do alone. 
                This, in turn, accelerates innovation and is one of the reasons all the tech giants such as Microsoft,
                Google, Meta, are supporting various open-source projects financially and bringing their engineers 
                to help build a healthy open source community.
                </p>

                <a href='https://bit.ly/oscafestkla'>
                <Button>RSVP</Button>
                </a>

                <p>You can contribute by making a donation</p>


                <a href='https://opencollective.com/osca-kampala-chapter/donate'>
                <Button>Donate</Button>
                </a>
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

    )
}