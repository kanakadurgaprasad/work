import React from 'react';
import Tree from 'react-d3-tree';

const data = {
  name: 'Parent',
  children: [
    {
      name: 'Child 1',
      children: [
        { name: 'Grandchild 1' },
        { name: 'Grandchild 2' },
      ],
    },
    {
      name: 'Child 2',
      children: [
        { name: 'Grandchild 3' },
        { name: 'Grandchild 4' },
      ],
    },
  ],
};

const containerStyles = {
  width: '100vw',
  height: '70vh',
};

// Custom node component
 

function NetworkTree() {
  return (
    <div style={containerStyles}>
      <Tree
        data={data}
        orientation="vertical"
        pathFunc="step"
        zoomable={false}
        draggable={false}
        translate={{ x: 260, y: 50 }}
        nodeSize={{ x: 90, y: 90 }}
        separation={{ siblings: 1.7, nonSiblings: 2 }}
       
      />
    </div>
  );
}

export default NetworkTree;
