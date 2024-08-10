import React, { useRef, useState } from 'react';
import {
  Divider, Flex, Layout, Typography, Col, Row, Carousel,
  Grid,
} from 'antd';
import HeaderView from '../header/HeaderView';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import HorizontalSiderComponent from './HorizontalSiderComponent';

const { Content } = Layout;

const { Title } = Typography;

function HorizontalPage({
  menuItems,
  verticalNavigation,
  setVerticalDirection
}) {
  const HEADER_PIXEL_HEIGHT = 64;
  const SIDER_PIXEL_WIDTH = 60;
  const SIDER_PIXEL_WIDTH_SMALL = 20;

  const CONTENT_SIDE_SPAN_SIZE_XS = 2;
  const CONTENT_SIDE_SPAN_SIZE_SM = 2;
  const CONTENT_SIDE_SPAN_SIZE_MD = 2;

  const KEY_PREFIX_CONTAINER_ITEM = 'container-item-';

  const [
    menuSelectedIndex,
    setMenuSelectedIndex,
  ] = useState(0);

  const [
    sideDirectionHovered,
    setSideDirectionHovered,
  ] = useState(null);

  const slider = useRef();

  const activeBreakpoints = Object.entries(Grid.useBreakpoint())
    .filter(screen => !!screen[1])
    .map(screen => screen[0]);

  const smBreakpoint = activeBreakpoints.includes('sm');

  return (
    <Layout>
      <HeaderView
        menuItems={menuItems}
        menuSelectedIndex={menuSelectedIndex}
        onClickMenuItemIndex={(newIndex) => {
          setMenuSelectedIndex(newIndex);
          slider.current.goTo(newIndex);
        }}
        verticalNavigation={verticalNavigation}
        setVerticalDirection={setVerticalDirection}
      />
      <Layout>
        <HorizontalSiderComponent
          disable={!menuSelectedIndex}
          headerPixelHeight={HEADER_PIXEL_HEIGHT}
          siderPixelWidth={smBreakpoint ? SIDER_PIXEL_WIDTH : SIDER_PIXEL_WIDTH_SMALL}
          sideDirectionValue='left'
          sideDirectionHovered={sideDirectionHovered}
          setSideDirectionHovered={setSideDirectionHovered}
          icon={<LeftOutlined />}
          onClick={() => slider.current.prev()}
        />
        <Content
          style={{
            backgroundColor: 'rgb(0, 21, 41)',
            padding: '0 20px'
          }}
        >
          <Carousel
            adaptiveHeight
            dots={false}
            draggable
            beforeChange={(_, nextIndex) => {
              setMenuSelectedIndex(nextIndex);
            }}
            ref={ref => {
              slider.current = ref;
            }}
          >
            {menuItems.map((item, itemIndex) => (
              <Row
                key={KEY_PREFIX_CONTAINER_ITEM + itemIndex}
              >
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
                  <Flex
                    style={{
                      backgroundColor: 'rgb(0, 21, 41)',
                      margin: '0',
                      border: '0',
                      minHeight: `calc(100vh - ${HEADER_PIXEL_HEIGHT}px)`,
                      paddingBottom: '50px',
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
                </Col>
              </Row>
            ))}
          </Carousel>
        </Content>
        <HorizontalSiderComponent
          disable={menuSelectedIndex + 1 === menuItems.length}
          headerPixelHeight={HEADER_PIXEL_HEIGHT}
          siderPixelWidth={smBreakpoint ? SIDER_PIXEL_WIDTH : SIDER_PIXEL_WIDTH_SMALL}
          sideDirectionValue='right'
          sideDirectionHovered={sideDirectionHovered}
          setSideDirectionHovered={setSideDirectionHovered}
          icon={<RightOutlined />}
          onClick={() => slider.current.next()}
        />
      </Layout>
    </Layout >
  );
}

export default HorizontalPage;
