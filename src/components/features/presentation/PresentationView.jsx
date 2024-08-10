import React from 'react';
import {
  Avatar, Button, Flex, Typography,
} from 'antd';
import Logo from '../../../images/portraits/PP.png';

const { Title } = Typography;

function PresentationView() {
  return (
    <Flex justify="center" align="center" gap={50} wrap>
      <Avatar
        src={<img src={Logo} alt="" width="100%" />}
        size={200}
        style={{ border: '2px solid white' }}
      />
      <Flex vertical justify="center" align="start">
        <Title level={2} style={{ margin: '0', padding: '0', color: 'white' }}>
          David ZHANG
        </Title>
        <Title level={3} style={{ margin: '0', padding: '0', color: 'white' }}>
          Développeur fullstack
        </Title>
        <Title level={4} style={{ margin: '0', padding: '0', color: 'white' }}>
          Spring Boot & React JS
        </Title>
        <Button
          type="primary"
          size="large"
          download="my-cv.pdf"
          href="."
          style={{ marginTop: 24 }}
        >
          Télécharger mon CV
        </Button>
      </Flex>
    </Flex>
  );
}

export default PresentationView;
