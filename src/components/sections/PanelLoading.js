import React from 'react';
import Spinner from 'emerald-ui/lib/Spinner';

const PanelLoading = ({ loading, height = '100%' }) => {
  return (
    <div
      style={{
        zIndex: 9,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height,
        background: 'rgba(255,255,255,.8)',
        justifyContent: 'center',
        alignItems: 'center',
        display: loading ? 'flex' : 'none'
      }}
    >
      <Spinner />
    </div>
  );
};

export default PanelLoading;
