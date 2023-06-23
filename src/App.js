import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './App.css';
import MyComponent from './MenuPopupState';
import projectImage from './images/project-image.jpg';
import experienceImage from './images/experience-image.jpg';
import interestsImage from './images/interests-image.jpg';
import educationImage from './images/education-image.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


function App() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleIconClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="App">
      <header>
      <nav className="Toolbar">
          <div className="Icons" >
            <LinkedInIcon
            onClick={() => handleIconClick('https://www.linkedin.com/in/chirag-chopra-036826108/')}
            />
            <GitHubIcon
              onClick={() => handleIconClick('https://github.com/CHIRAGCHOPRA')}
            />
            <EmailIcon
              onClick={() => handleIconClick('mailto:chiragchopra7@gmail.com')}
            />
            <MyComponent />
          </div>
        </nav>
      </header>
      <main>
        <Card className="Card" onClick={() => handleCardClick('/projects')}>
          <CardHeader className="CardHeader" title="Projects" />
          <CardContent className="CardContent">
            <img src={projectImage} alt="Project" className="CardImage" />
            <Typography variant="body2">
              Add your project details here.
            </Typography>
          </CardContent>
        </Card>

        <Card className="Card" onClick={() => handleCardClick('/experience')}>
          <CardHeader className="CardHeader" title="Experience" />
          <CardContent className="CardContent">
            <img src={experienceImage} alt="Experience" className="CardImage" />
            <Typography variant="body2">
              Add your experience details here.
            </Typography>
          </CardContent>
        </Card>

        <Card className="Card" onClick={() => handleCardClick('/interests')}>
          <CardHeader className="CardHeader" title="Interests" />
          <CardContent className="CardContent">
            <img src={interestsImage} alt="Interests" className="CardImage" />
            <Typography variant="body2">
              Add your interests here.
            </Typography>
          </CardContent>
        </Card>

        <Card className="Card" onClick={() => handleCardClick('/education')}>
          <CardHeader className="CardHeader" title="Education" />
          <CardContent className="CardContent">
            <img src={educationImage} alt="Education" className="CardImage" />
            <Typography variant="body2">
              Add your education details here.
            </Typography>
          </CardContent>
        </Card>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
