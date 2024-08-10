import React from 'react';
import { Button, Flex, Form, Input, Space } from 'antd';
import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';

function ContactView() {
  const CONTACT_ITEMS = [{
    icon: <MailFilled />,
    label: 'davidzhangpro@gmail.com',
    href: 'mailto:davidzhangpro@gmail.com',
  }, {
    icon: <LinkedinFilled />,
    label: 'https://www.linkedin.com/in/david-zhang-a4397a1b7/',
    href: 'https://www.linkedin.com/in/david-zhang-a4397a1b7/',
  }, {
    icon: <GithubFilled />,
    label: 'https://github.com/davidzhang0',
    href: 'https://github.com/davidzhang0',
  }];

  const KEY_PREFIX_CONTACT_ITEM = 'contact-item-';

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Flex
      vertical
      align="center"
      gap="large"
    >
      <Form
        form={form}
        name="contact"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        onFinish={(values) => {
          alert(Object.entries(values)
            .map((entry) => `${entry[0]}: ${entry[1]}\n`)
            .reduce((s1, s2) => s1 + s2)
          )
        }}
        style={{
          maxWidth: 600,
          width: '80%',
        }}
      >
        <Form.Item
          label={<label style={{ color: 'white' }}>Votre nom</label>}
          name="name"
        >
          <Input placeholder='Ex: ZHANG' />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: 'white' }}>Votre mail</label>}
          name="mail"
        >
          <Input placeholder='Ex: davidzhangpro@gmail.com' />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: 'white' }}>Titre</label>}
          name="title"
        >
          <Input placeholder='Ex: Proposition de partenariat ...' />
        </Form.Item>
        <Form.Item
          label={<label style={{ color: 'white' }}>Message</label>}
          name="message"
        >
          <Input.TextArea placeholder="Ex: Bonjour, j'aimerais savoir si ..." />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 5 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Envoyer
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Réinitialiser
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <Flex
        justify="space-evenly"
        gap={64}
      >
        {CONTACT_ITEMS.map((item, itemIndex) => (
          <a
            key={KEY_PREFIX_CONTACT_ITEM + itemIndex}
            href={item.href}
            style={{
              fontSize: '48px',
            }}
          >
            {item.icon}
          </a>
        ))}
      </Flex>
    </Flex >
  );
}

export default ContactView;
