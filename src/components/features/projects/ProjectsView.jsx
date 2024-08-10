import React from 'react';
import { Card, Col, Row } from 'antd';
import Chantier from '../../../images/landscapes/Chantier.jpg';
import Serveur from '../../../images/landscapes/Serveur.jpg';

function ProjectsView() {
  const PROJECTS_ITEMS = [{
    label: 'En cours...',
    image: Chantier,
  }, {
    label: 'En cours...',
    image: Chantier,
  }, {
    label: 'En cours...',
    image: Chantier,
  }, {
    label: 'En cours...',
    image: Chantier,
  }, {
    label: 'En cours...',
    image: Chantier,
  }, {
    label: 'En cours...',
    image: Chantier,
  }];

  const KEY_PREFIX_PROJECT_ITEM = 'project-item-';

  return (
    <Row
      gutter={[50, 50]}
    >
      {PROJECTS_ITEMS.map((item, itemIndex) => (
        <Col
          key={'project-item-' + itemIndex}
          span={24}
          md={{
            span: 12,
          }}
          xl={{
            span: 8,
          }}
        >
          <Card
            key={KEY_PREFIX_PROJECT_ITEM + itemIndex}
            cover={<img src={item.image} alt={`Image du projet : ${item.label}`} />}
            hoverable
            style={{
              color: 'white',
              padding: '2px',
              backgroundColor: 'rgb(0, 31, 51)',
            }}
          >
            {item.label}
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectsView;
