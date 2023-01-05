import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, Container, Grid, Link, Paper, Stack, Toolbar, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
//-----------------
//Theme
//-----------------
const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#00695c',
      },
      secondary: {
        main: '#fb8c00',
      },
    },
  });


//-----------------
// PAGE CONTENT
//-----------------
const App = () => {
  //For Dark Mode
  
  //-----------------
  // Setup UseState
  //-----------------
  const [intro, setIntro] = useState([])

  //-----------------
  // NAV Buttons
  //-----------------
  const [introVisible, setIntroVisible] = useState(true)
  const [workExpVisible, setWorkExpVisible] = useState(false)
  const [portfolioVisible, setPortfolioVisible] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)

  const showIntro = () => {
    setIntroVisible(true)
    setWorkExpVisible(false)
    setSkillsVisible(false)
    setPortfolioVisible(false)
  }
  const showWorkExp = () => {
    setIntroVisible(false)
    setWorkExpVisible(true)
    setSkillsVisible(false)
    setPortfolioVisible(false)
  }
  const showSkills = () => {
    setIntroVisible(false)
    setWorkExpVisible(false)
    setSkillsVisible(true)
    setPortfolioVisible(false)
  }
  const showPortfolio = () => {
    setIntroVisible(false)
    setWorkExpVisible(false)
    setSkillsVisible(false)
    setPortfolioVisible(true)
  }


  //----------------
  //EDIT Sausage Input
  //----------------
  const [showModal, setShowModal] = useState(false)
  const [sausage, setSausage] = useState({})
  const editSausage = (sausageToEdit) => {
    setShowModal(true)
    setSausage(sausageToEdit)
  }


  //----------------
  //RESET Form Input
  //----------------
  useEffect(() => {
  }, [])

  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Container>
        <Paper>
          <AppBar position="static" sx={{ m: 2, ml: 0, p: 2, bgcolor: 'secondary' }}>
            <Toolbar>
              <Typography variant="h4">Meko Steinberg</Typography>
              <Typography sx={{ m:1, p: 4 }} variant="h6"> Meet the Developer </Typography>
             
            </Toolbar>
          </AppBar>
        </Paper>

        <main>

          <Box
            sx={{ bgcolor: 'background.paper', pt: 3, pb: 6 }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h5"
                variant="h5"
                align="center"
                color="text.primary"
                gutterBottom
              >Welcome to my Portfolio</Typography>
              <Stack sx={{ p: 2 }} direction="row" spacing={2} justifyContent="center" >
                <Button variant={introVisible ? "contained" : "outlined"} onClick={showIntro}>Intro</Button>
                <Button variant={workExpVisible ? "contained" : "outlined"} onClick={showWorkExp}>Work Exp</Button>
                <Button variant={skillsVisible ? "contained" : "outlined"} onClick={showSkills}>Skills </Button>
                <Button variant={portfolioVisible ? "contained" : "outlined"} onClick={showPortfolio}>Portfolio</Button>

              </Stack>
              <Typography variant="h6" align="center" color="text.secondary" paragraph>
                Life changes quickly, and a portfolio makes organization of past experiences, jobs and projects easier to weed through, so WELCOME to mine! Explore the various sections to find out more about my backround, and check out my gallery below to see some of my favorite things!
              </Typography>


            </Container>
          </Box>
          <Container maxWidth="md">
            {/* 
            {areSausagesVisible
              && <SausageList sausages={sausages} onEditClick={editSausage} />}


            {isAddSausageVisible
              &&
              <SausageForm onSubmit={handleNewSausageFormSubmit} />
            }

            {isBrewSearchVisible && <BrewerySearch />} */}

          </Container>

          {/* <SausageModal
            open={showModal}
            onClose={() => { setShowModal(false) }}
            sausage={sausage}
            onDelete={deleteSausage}
            onSubmit={handleEditFormSubmit} /> */}

        </main>
        <Box
          component="footer"
          sx={{
            py: 3, px: 2, mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[400]
                : theme.palette.grey[800],
          }}>
          <Container maxWidth="sm">
            <Typography variant="subtitle2">
              Brought to you by M.Steinberg
            </Typography>
            <Link href="https://www.linkedin.com/in/mekosteinberg"><LinkedInIcon color="primary" fontSize="large" /></Link>
            <Link href="https://github.com/mekosteinberg"><GitHubIcon color="primary" fontSize="large" /></Link>
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  );

}


export default App;
