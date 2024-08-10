import React, { useEffect, useState } from 'react';
import {
  Divider, Flex, Layout, Typography, Col, Row,
} from 'antd';
import HeaderView from '../header/HeaderView';

const { Content } = Layout;

const { Title } = Typography;

function VerticalPage({
  menuItems,
  verticalNavigation,
  setVerticalDirection
}) {
  const HEADER_PIXEL_HEIGHT = 64;

  const CONTENT_SIDE_SPAN_SIZE_XS = 1;
  const CONTENT_SIDE_SPAN_SIZE_SM = 2;
  const CONTENT_SIDE_SPAN_SIZE_MD = 2;

  const KEY_PREFIX_CONTAINER_ITEM = 'container-item-';

  const [
    menuSelectedIndex,
    setMenuSelectedIndex,
  ] = useState(0);

  const scrollToSelectedIndex = (index) => {
    window.scrollTo({
      top: document.querySelector(`#${KEY_PREFIX_CONTAINER_ITEM}${index}`).offsetTop,
      behavior: 'smooth',
    });
  }

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const isElementInCenterViewport = (el) => {
    const xCenterPosition = 0.5 * (window.innerWidth || document.documentElement.clientWidth);
    const yCenterPosition = 0.5 * (window.innerHeight || document.documentElement.clientHeight);
    const rect = el.getBoundingClientRect();
    return (rect.top <= yCenterPosition
      && rect.bottom >= yCenterPosition
      && rect.left <= xCenterPosition
      && rect.right >= xCenterPosition
    );
  }

  const handleScroll = debounce(() => {
    menuItems.forEach((_, itemIndex) => {
      const el = document.querySelector(`#${KEY_PREFIX_CONTAINER_ITEM}${itemIndex}`);
      if (isElementInCenterViewport(el)) {
        setMenuSelectedIndex(itemIndex);
      }
    });
  }, 50);

  useEffect(() => {
    scrollToSelectedIndex(0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout>
      <HeaderView
        menuItems={menuItems}
        menuSelectedIndex={menuSelectedIndex}
        onClickMenuItemIndex={(index) => {
          setMenuSelectedIndex(index);
          scrollToSelectedIndex(index);
        }}
        verticalNavigation={verticalNavigation}
        setVerticalDirection={setVerticalDirection}
      />
      <Content
        style={{
          backgroundColor: 'rgb(0, 21, 41)',
        }}
      >
        <Row>
          <Col
            span={24 - 2 * CONTENT_SIDE_SPAN_SIZE_XS}
            offset={CONTENT_SIDE_SPAN_SIZE_XS}
            sm={{
              offset: CONTENT_SIDE_SPAN_SIZE_SM,
              span: 24 - 2 * CONTENT_SIDE_SPAN_SIZE_SM,
            }}
            md={{
              offset: CONTENT_SIDE_SPAN_SIZE_MD,
              span: 24 - 2 * CONTENT_SIDE_SPAN_SIZE_MD,
            }}
          >
            <Flex vertical>
              {menuItems.map((item, itemIndex) => (
                <Flex
                  key={KEY_PREFIX_CONTAINER_ITEM + itemIndex}
                  id={KEY_PREFIX_CONTAINER_ITEM + itemIndex}
                  style={{
                    backgroundColor: 'rgb(0, 21, 41)',
                    margin: '0',
                    border: '0',
                    minHeight: `calc(100vh - ${(itemIndex ? (itemIndex + 1 !== menuItems.length) ? 0 : 1 : 1) * HEADER_PIXEL_HEIGHT}px)`,
                  }}
                  vertical
                  justify={!itemIndex && "center"}
                  align={!itemIndex && "center"}
                >
                  {!itemIndex ? (
                    <Title
                      style={{
                        color: 'white',
                        margin: `-${HEADER_PIXEL_HEIGHT}px 0 50px`,
                        textAlign: 'center',
                      }}
                    >
                      {item.title}
                    </Title>
                  ) : (
                    <Divider
                      style={{
                        borderColor: 'white',
                        margin: '50px 0',
                      }}
                      orientationMargin={100}
                    >
                      <Title level={itemIndex ? 3 : 1} style={{ color: 'white', margin: 0 }}>{item.title}</Title>
                    </Divider>
                  )}
                  {item.component}
                </Flex>
              ))}
            </Flex>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default VerticalPage;
