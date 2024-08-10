import React from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

function HeaderMenuView({
    menuItems,
    menuSelectedIndex,
    onClickMenuItemIndex,
    inline,
    hideLabel,
}) {

    const KEY_PREFIX_MENU = 'menu-left-';
    const KEY_PREFIX_MENU_ITEM = KEY_PREFIX_MENU + 'item-';

    const items = menuItems.map((item, itemIndex) => ({
        key: KEY_PREFIX_MENU_ITEM + itemIndex,
        icon: (!hideLabel || inline) && item.icon,
        label: hideLabel && !inline ? item.icon : item.label,
        title: item.label,
    }));

    const inlineItems = [{
        key: KEY_PREFIX_MENU + "inline",
        label: <MenuOutlined />,
        children: items,
    }]

    const onClick = (info) => {
        const selectedKey = info.key;
        const selectedIndex = parseInt(selectedKey.replace(KEY_PREFIX_MENU_ITEM, ''));
        onClickMenuItemIndex(selectedIndex);
    };

    return (
        <Menu
            key={KEY_PREFIX_MENU + menuSelectedIndex}
            theme="dark"
            mode={inline ? "inline" : "horizontal"}
            inlineCollapsed
            defaultSelectedKeys={[KEY_PREFIX_MENU_ITEM + menuSelectedIndex]}
            items={inline ? inlineItems : items}
            onClick={onClick}
        />
    );
}

export default HeaderMenuView;
