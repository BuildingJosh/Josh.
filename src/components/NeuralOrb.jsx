import React from 'react';
import ForceGraph from './ForceGraph';

const NeuralOrb = ({ data, onNodeClick }) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <ForceGraph
        data={data}
        onNodeClick={onNodeClick}
      />
    </div>
  );
};

export default NeuralOrb;
