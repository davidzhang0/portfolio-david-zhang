import React from 'react';
import {
    Flex, Button,
    Affix,
} from 'antd';
import Sider from 'antd/es/layout/Sider';

function HorizontalSiderComponent({
    disable,
    headerPixelHeight,
    siderPixelWidth,
    sideDirectionValue,
    sideDirectionHovered,
    setSideDirectionHovered,
    icon,
    onClick,
}) {

    const sideHovered = sideDirectionHovered === sideDirectionValue;

    const otherHovered = !sideHovered && sideDirectionHovered !== null;

    const iconStyled = React.cloneElement(icon, {
        style: {
            color: 'white',
            opacity: sideHovered ? '1' : '0.5'
        }
    })

    return (
        <Sider
            width={(!disable && sideHovered) ? 2 * siderPixelWidth : otherHovered ? 0 : siderPixelWidth}
            onMouseEnter={() => !disable && setSideDirectionHovered(sideDirectionValue)}
            onMouseLeave={() => setSideDirectionHovered(null)}
            onClick={() => !disable && onClick()}
        >
            <Affix offsetTop={headerPixelHeight}>
                <Flex
                    justify='center'
                    align='center'
                    style={{ height: 'calc(100vh - ' + headerPixelHeight + 'px)' }}
                >
                    <Button
                        type="text"
                        icon={!disable && iconStyled}
                    />
                </Flex>
            </Affix>
        </Sider >
    );
}

export default HorizontalSiderComponent;
