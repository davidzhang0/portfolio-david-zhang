import React, { useState } from 'react';
import './App.css';
import {
  CalculatorOutlined, CodeOutlined, CommentOutlined, HomeOutlined, ProfileOutlined,
} from '@ant-design/icons';
import PresentationView from './components/features/presentation/PresentationView';
import SkillsView from './components/features/skills/SkillsView';
import ProjectsView from './components/features/projects/ProjectsView';
import CareerView from './components/features/career/CareerView';
import ContactView from './components/features/contact/ContactView';
import VerticalPageLayout from './components/common/pageLayout/VerticalPageLayout';
import HorizontalPageLayout from './components/common/pageLayout/HorizontalPageLayout';

function App() {

  const [
    verticalNavigation,
    setVerticalDirection
  ] = useState(true);

  const MENU_ITEMS = [{
    label: 'Accueil',
    icon: <HomeOutlined />,
    title: 'Bienvenue sur mon portfolio',
    component: <PresentationView />,
  }, {
    label: 'Compétences',
    icon: <CalculatorOutlined />,
    title: 'Mes Compétences',
    component: <SkillsView />,
  }, {
    label: 'Réalisations',
    icon: <CodeOutlined />,
    title: 'Mes Réalisations',
    component: <ProjectsView />,
  }, {
    label: 'Parcours',
    icon: <ProfileOutlined />,
    title: 'Mon Parcours',
    component: <CareerView />,
  }, {
    label: 'Contact',
    icon: <CommentOutlined />,
    title: 'Contact',
    component: <ContactView />,
  }];

  return verticalNavigation ? (
    <VerticalPageLayout
      menuItems={MENU_ITEMS}
      verticalNavigation={verticalNavigation}
      setVerticalDirection={setVerticalDirection}
    />
  ) : (
    <HorizontalPageLayout
      menuItems={MENU_ITEMS}
      verticalNavigation={verticalNavigation}
      setVerticalDirection={setVerticalDirection}
    />
  );
}

export default App;
