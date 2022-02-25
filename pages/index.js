import Head from 'next/head'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>OSCA Kampala Chapter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to the <a href="https://oscakampala.github.io/">OSCA Kampala Chapter</a>
        </h1>

        <p className="description">
          Join the  <code>future of open source</code> collaborators
        </p>

        <div className="grid">

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={3}>
                <a href="https://chat.whatsapp.com/D2bB0UWDgT34Fic3Hnb2fA">
                  <WhatsAppIcon fontSize="large"/>
                </a>
              </Grid>

              <Grid xs={3}>
                <a href="https://t.me/oscakampala">
                  <TelegramIcon fontSize="large"/>
                </a>
              </Grid>

              <Grid xs={3}>
                <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82ODg4NjU1NC9wb2RjYXN0L3Jzcw==">
                  <PodcastsIcon fontSize="large"/>
                </a>
              </Grid>

              <Grid xs={3}>
                <a href="https://twitter.com/oscakampala">
                  <TwitterIcon fontSize="large"/>
                </a>
              </Grid>

            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={12}>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid xs={3}>
                <a href="https://www.linkedin.com/company/open-source-community-kampala/">
                  <LinkedInIcon fontSize="large"/>
                </a>
              </Grid>

              <Grid xs={3}>
                <a href="https://www.youtube.com/channel/UCtRZkl24Sfo6wa_uzCFEnGA">
                  <YouTubeIcon fontSize="large"/>
                </a>
              </Grid>

              <Grid xs={3}>
                <a href="https://github.com/oscakampala/made-in-uganda">
                  <GitHubIcon fontSize="large"/>
                </a>
              </Grid>

              <Grid xs={3}>              
                <a href="https://discord.gg/pRJgjH9SwR">
                <discordAppIcon fontSize="large"/>
                </a>
              </Grid>
            </Grid>
          </Box>
          
          
        </div>

      </main>

      <footer>
        <a
          href="mailto: oscakampala@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <p>The Open Source Community Africa (oscakampala@gmail.com)</p>
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
