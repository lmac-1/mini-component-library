import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    height: 24,
    borderThickness: 1,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    height: 36,
    borderThickness: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`No styles found for size: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': `${styles.iconSize}px` }}>
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.borderThickness}
        />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          '--width': `${width}px`,
          '--height': `${styles.height / 16}rem`,
          '--font-size': `${styles.fontSize / 16}rem`,
          '--border-thickness': `${styles.borderThickness}px`,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  pointer-events: none;
`;

const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
