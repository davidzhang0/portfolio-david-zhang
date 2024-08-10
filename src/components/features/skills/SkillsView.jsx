import React from 'react';
import {
  Card, Col, Flex, Row, Typography,
} from 'antd';
import SkillItemComponent from './SkillItem';
import ReactJSLogo from '../../../images/logos/reactjs.png';
import ReduxLogo from '../../../images/logos/redux.png';
import ReduxSagaLogo from '../../../images/logos/reduxsaga.png';
import ESLintLogo from '../../../images/logos/eslint.png';
import JavaLogo from '../../../images/logos/java.png';
import SpringBootLogo from '../../../images/logos/springboot.png';
import SpringBatchLogo from '../../../images/logos/springbatch.png';
import SpringCloudLogo from '../../../images/logos/springcloud.png';
import PostgreSQLLogo from '../../../images/logos/postgresql.png';
import CLogo from '../../../images/logos/c.png';
import ScadeLogo from '../../../images/logos/scade.png';
import Dynamics365Logo from '../../../images/logos/dynamics365.png';
import PythonLogo from '../../../images/logos/python.png';
import LISPLogo from '../../../images/logos/lisp.png';
import MatlabLogo from '../../../images/logos/matlab.png';
import AntDesignLogo from '../../../images/logos/antdesign.png';

const { Title } = Typography;

const FRONT_END_SKILLS_ITEMS = [{
  label: 'ReactJS',
  image: ReactJSLogo,
}, {
  label: 'Redux',
  image: ReduxLogo,
}, {
  label: 'Redux Saga',
  image: ReduxSagaLogo,
}, {
  label: 'Ant Design',
  image: AntDesignLogo,
}, {
  label: 'Eslint',
  image: ESLintLogo,
}];

const BACK_END_SKILLS_ITEMS = [{
  label: 'Java',
  image: JavaLogo,
}, {
  label: 'Spring Boot',
  image: SpringBootLogo,
}, {
  label: 'Spring Batch',
  image: SpringBatchLogo,
}, {
  label: 'Spring Cloud',
  image: SpringCloudLogo,
}, {
  label: 'Postgresql',
  image: PostgreSQLLogo,
}];

const OTHER_SKILLS_ITEMS = [{
  label: 'C',
  image: CLogo,
}, {
  label: 'Scade',
  image: ScadeLogo,
}, {
  label: 'Dynamics 365',
  image: Dynamics365Logo,
}, {
  label: 'Python',
  image: PythonLogo,
}, {
  label: 'LISP',
  image: LISPLogo,
}, {
  label: 'Matlab',
  image: MatlabLogo,
}];

const KEY_PREFIX_FRONT_END_SKILL_ITEM = 'front-end-skill-item-';

const KEY_PREFIX_BACK_END_SKILL_ITEM = 'back-end-skill-item-';

const KEY_PREFIX_OTHER_SKILL_ITEM = 'other-skill-item-';

function SkillsView() {
  return (
    <Row
      gutter={[50, 50]}
    >
      <Col
        span={24}
        xl={{
          span: 12,
        }}
      >
        <Card
          title={(
            <Title
              level={4}
              style={{ margin: 0, textAlign: 'center', color: 'white' }}
            >
              Back End
            </Title>
          )}
          style={{
            color: 'white',
            backgroundColor: 'rgb(0, 31, 51)',
          }}
        >
          <Flex gap={50} wrap justify="space-evenly">
            {BACK_END_SKILLS_ITEMS.map((item, itemIndex) => (
              <SkillItemComponent
                key={KEY_PREFIX_FRONT_END_SKILL_ITEM + itemIndex}
                label={item.label}
                image={item.image || item.label}
              />
            ))}
          </Flex>
        </Card>
      </Col>
      <Col
        span={24}
        xl={{
          span: 12,
        }}
      >
        <Card
          title={(
            <Title
              level={4}
              style={{ margin: 0, textAlign: 'center', color: 'white' }}
            >
              Front End
            </Title>
          )}
          style={{
            color: 'white',
            backgroundColor: 'rgb(0, 31, 51)',
          }}
        >
          <Flex gap={50} wrap justify="space-evenly">
            {FRONT_END_SKILLS_ITEMS.map((item, itemIndex) => (
              <SkillItemComponent
                key={KEY_PREFIX_BACK_END_SKILL_ITEM + itemIndex}
                label={item.label}
                image={item.image}
              />
            ))}
          </Flex>
        </Card>
      </Col>
      <Col
        span={24}
      >
        <Card
          title={(
            <Title
              level={4}
              style={{ margin: 0, textAlign: 'center', color: 'white' }}
            >
              Autres
            </Title>
          )}
          style={{
            color: 'white',
            backgroundColor: 'rgb(0, 31, 51)',
          }}
        >
          <Flex gap={50} wrap justify="space-evenly">
            {OTHER_SKILLS_ITEMS.map((item, itemIndex) => (
              <SkillItemComponent
                key={KEY_PREFIX_OTHER_SKILL_ITEM + itemIndex}
                label={item.label}
                image={item.image || item.label}
              />
            ))}
          </Flex>
        </Card>
      </Col>
    </Row>
  );
}

export default SkillsView;
