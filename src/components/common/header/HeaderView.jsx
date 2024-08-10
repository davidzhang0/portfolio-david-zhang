import React from 'react';
import {
  Affix, Layout,
  Grid,
  Row,
  Col
} from 'antd';
import HeaderMenuView from './HeaderMenuView';
import HeaderSettingsView from './HeaderSettingsView';

const { Header } = Layout;

function HeaderView({
  menuItems,
  menuSelectedIndex,
  onClickMenuItemIndex,
  verticalNavigation,
  setVerticalDirection,
}) {

  const activeBreakpoints = Object.entries(Grid.useBreakpoint())
    .filter(screen => !!screen[1])
    .map(screen => screen[0]);

  const smBreakpoint = activeBreakpoints.includes('sm');
  const lgBreakpoint = activeBreakpoints.includes('lg');

  return (
    <Affix offsetTop={0}>
      <Header>
        <Row
          justify='space-between'
        >
          <Col
            flex='auto'
          >
            <HeaderMenuView
              menuItems={menuItems}
              menuSelectedIndex={menuSelectedIndex}
              onClickMenuItemIndex={onClickMenuItemIndex}
              inline={!smBreakpoint}
              hideLabel={!lgBreakpoint}
            />
          </Col>
          <Col
            flex='auto'
          >
            <HeaderSettingsView
              verticalNavigation={verticalNavigation}
              setVerticalDirection={setVerticalDirection}
            />
          </Col>
        </Row>
      </Header>
    </Affix>
  );
}

export default HeaderView;
