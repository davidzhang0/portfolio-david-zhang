import React, { useState } from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

function HeaderSettingsView({
  verticalNavigation,
  setVerticalDirection
}) {

  const KEY_PREFIX_MENU = "menu-right-"
  const KEY_PREFIX_MENU_ITEM = KEY_PREFIX_MENU + "item-"
  const KEY_MENU_ITEM_LANGUAGE = KEY_PREFIX_MENU_ITEM + 'language';
  const KEY_MENU_ITEM_DIRECTION = KEY_PREFIX_MENU_ITEM + 'direction';

  const [
    languageSelectedIndex,
    setLanguageSelectedIndex,
  ] = useState(0);

  const navigationDirectionLabel = verticalNavigation ? "Vertical" : "Horizontal";
  const navigationDirectionIcon = verticalNavigation ? <>&#8597;</> : <>&harr;</>;

  const languageLabel = ['Français', 'English'][languageSelectedIndex];
  const languageIcon = [<>FR</>, <>EN</>][languageSelectedIndex];

  const items = [{
    key: KEY_MENU_ITEM_LANGUAGE,
    label: languageIcon,
    title: languageLabel
  }, {
    key: KEY_MENU_ITEM_DIRECTION,
    label: navigationDirectionIcon,
    title: navigationDirectionLabel
  }];

  const onClick = (info) => {
    const selectedKey = info.key;
    switch (selectedKey) {
      case KEY_MENU_ITEM_LANGUAGE:
        setLanguageSelectedIndex(1 - languageSelectedIndex);
        break;
      case KEY_MENU_ITEM_DIRECTION:
        setVerticalDirection(!verticalNavigation);
        break;
    }
  };

  return (
    <Menu
      theme="dark"
      mode={"horizontal"}
      inlineCollapsed
      selectable={false}
      items={items}
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'row-reverse'
      }}
    />
  );
}

export default HeaderSettingsView;
