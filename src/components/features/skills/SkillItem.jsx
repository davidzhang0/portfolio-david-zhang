import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'antd';

function SkillItemComponent({
  label,
  image,
}) {
  return (
    <Flex vertical align="center" gap="small">
      <img
        width={100}
        height={100}
        src={image}
        alt={`Skill Logo ${label}`}
      />
      {label}
    </Flex>
  );
}

SkillItemComponent.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SkillItemComponent;
