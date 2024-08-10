import React from 'react';
import { Card, Col, Flex, Row, Typography } from 'antd';

const { Title } = Typography;

const CAREER_ITEMS = [{
  label: 'CGI - Développeur Fullstack',
  duration: 'De mars 2023 à aujourd\'hui (1 an et 4 mois)',
  description: 'Actuellement travaillant sur une mission dans le secteur bancaire '
    + 'j\'y officie en tant que développeur fullstack sur une application comprenant une partie front, api et batch. '
    + 'J\'ai notamment pu y effectuer une refonte visuelle de l\'ihm ainsi qu\'une migration complète de tous les composants, '
    + 'cela inclut des montées en version, de l\'externalisations vers un cloud et de la refactorisation de code vers une clean architecture. '
    + 'À noter qu\'avant tout cela, j\'ai commencé par un poste de développeur backend durant les 6 premiers mois, '
    + 'dans le cadre de mon stage de fin d\'étude en travaillant sur un sujet de chiffrement '
    + 'des données clients en bdd et dans les flux webservices pour application batch.',
}, {
  label: 'Axians Audiovisual Solutions - Développeur No Code',
  duration: 'De juillet 2022 à novembre 2022 (5 mois)',
  description: 'Développement From Scratch d\'une application de type ERP en Low Code via la suite de logiciels Dynamics 365. '
    + 'L\'objectif étant la centralisation de toute les demandes d\'achats afin de faciliter le travail des approvisionneurs '
    + 'et de rendre visible l\'état d\'avancement de commande par tous les membres intéressés. '
    + 'J\'ai aussi pu développer des macros en AutoLISP pour le logiciel AutoCAD qui est utilisé par les ingénieurs audiovisuels. '
    + 'Tout cela ayant été réalisé dans le cadre de mon stage de seconde année d\'ingénieur.',
}, {
  label: "École d'Ingénieur Denis Diderot",
  duration: 'De 2020 à 2023 (3 ans)',
  description: 'Cycle master d\'ingénieur avec une spécialité Systèmes Informatique Embarqué. '
    + 'La formation couvre plusieurs domaines de l\'informatique, une partie théorique '
    + '(le génie logiciel, l\'algorithmie, la vérification et validation de systèmes, la cyber sécurité et les intelligences artificielles) '
    + 'ainsi qu\'une partie plus pratique (le développement de systèmes critiques (avionnique, spatial), '
    + 'les méthodes de calculs scientifiques, l\'automatisation, les bases des données et les réseaux).',
}, {
  label: 'CPGE Lavoisier & ENCPB',
  duration: 'De 2018 à 2020 (2 ans)',
  description: 'Classes Préparatoires aux Grandes Écoles avec les spécialités Physique et Science de l\'Ingénieur (PSI).'
    + 'La formation développe les compétences scientifiques dans tous les domaines, à savoir : '
    + 'les mathématiques, la physique, la chimie, les sciences de l\'ingénieur et l\'informatique.',
}];

function CareerView() {
  return (
    <Flex vertical gap="large">
      {CAREER_ITEMS.map((item, itemIndex) => (
        <Row>
          <Col
            span={24}
            md={{
              span: 18,
              offset: itemIndex % 2 && 6
            }}
          >
            <Card
              key={'career-item-' + itemIndex}
              hoverable
              style={{
                backgroundColor: 'rgb(0, 31, 51)',
                color: 'white',
              }}
            >
              <Title level={4} style={{ margin: 0, color: 'white' }}>{item.label}</Title>
              <p style={{ color: 'white' }}>{item.duration}</p>
              <p style={{ color: 'white' }}>{item.description}</p>
            </Card>
          </Col>
        </Row>
      ))}
    </Flex>
  );
}

export default CareerView;
