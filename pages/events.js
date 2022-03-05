import { Button, Container } from '@mui/material';
import * as React from 'react';

export default function Events() {
    return (
        <div className="container">
            <Container>
                <h1>
                    OUR PREVIOUS EVENTS
                </h1>

                <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>


                
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
        </div>

    )
}