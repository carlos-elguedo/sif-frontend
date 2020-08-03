import React from 'react';
import PropTypes from 'prop-types';
import Button from 'emerald-ui/lib/Button';
import styled from 'styled-components';

export const StyledButtonToolbar = styled.div`
  height: 40px;
  button {
    float: ${props => (props.float ? 'right' : 'left')};
  }

  .eui-btn {
    text-transform: capitalize !important;
  }
`;

const ActionToolbar = ({
  onPrimaryActionClick,
  onSecondaryActionClick,
  primaryActionText,
  pullRight,
  secondaryActionText,
  isLoading = false,
  onError = false
}) => {
  return (
    <StyledButtonToolbar float={pullRight} className="btn-toolbar">
      <Button
        disabled={isLoading || onError}
        color="success"
        onClick={onPrimaryActionClick}
        type="submit"
      >
        {primaryActionText}
      </Button>
      <Button
        disabled={isLoading || onError}
        color="info"
        onClick={onSecondaryActionClick}
        shape="flat"
        type="submit"
      >
        {secondaryActionText}
      </Button>
    </StyledButtonToolbar>
  );
};

ActionToolbar.propTypes = {
  onPrimaryActionClick: PropTypes.func,
  onSecondaryActionClick: PropTypes.func,
  primaryActionText: PropTypes.string,
  pullRight: PropTypes.bool,
  secondaryActionText: PropTypes.string
};

ActionToolbar.defaultProps = {
  primaryActionText: 'Save',
  pullRight: false,
  secondaryActionText: 'Cancel'
};

export default ActionToolbar;
