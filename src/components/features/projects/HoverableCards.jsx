import React from 'react';
import PropTypes from 'prop-types';
import { Card, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

function HoverableCards({
  cardItems,
  hoveredIndex,
  setHoveredIndex,
}) {
  const KEY_PREFIX = 'hoverable-cards-item-';

  return (
    <InfiniteScroll
      dataLength={cardItems.length}
      scrollableTarget="scrollableDiv"
      style={{
        height: '70vh',
        overflow: 'auto',
        padding: '0 16px',
      }}
    >
      <List
        dataSource={cardItems}
        renderItem={(item, index) => (
          <List.Item key={item.email}>
            <Card
              key={KEY_PREFIX + index}
              hoverable
              style={{
                width: '100%',
                backgroundColor: `rgba(10,10,10,${hoveredIndex === index ? 0.1 : 0})`,
              }}
              onMouseEnter={(_) => setHoveredIndex(index)}
            >
              {item}
            </Card>
          </List.Item>
        )}
      />
    </InfiniteScroll>
  );
}

HoverableCards.propTypes = {
  cardItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  hoveredIndex: PropTypes.number.isRequired,
  setHoveredIndex: PropTypes.func.isRequired,
};

export default HoverableCards;
