
import React, { useState } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import DeviceNode from './DeviceNode';

// Custom node types for our flow
const nodeTypes = {
  deviceNode: DeviceNode,
};

export const RouteFlow = () => {
  // Initialize nodes representing devices in the store
  const initialNodes: Node[] = [
    {
      id: 'entrance',
      data: { 
        label: 'Entrada',
        visitors: 1248,
        icon: '🚪',
        color: '#9b87f5'
      },
      position: { x: 250, y: 50 },
      type: 'deviceNode',
    },
    {
      id: 'device1',
      data: { 
        label: 'Vitrine Principal',
        visitors: 468,
        icon: '📱',
        color: '#D946EF'
      },
      position: { x: 100, y: 200 },
      type: 'deviceNode',
    },
    {
      id: 'device2',
      data: { 
        label: 'Setor de Roupas',
        visitors: 312,
        icon: '👕',
        color: '#8064e8'
      },
      position: { x: 400, y: 200 },
      type: 'deviceNode',
    },
    {
      id: 'device3',
      data: { 
        label: 'Provador Virtual',
        visitors: 286,
        icon: '🔍',
        color: '#6E59A5'
      },
      position: { x: 250, y: 350 },
      type: 'deviceNode',
    },
    {
      id: 'checkout',
      data: { 
        label: 'Caixa',
        visitors: 210,
        icon: '💰',
        color: '#c639d8'
      },
      position: { x: 500, y: 450 },
      type: 'deviceNode',
    },
  ];

  // Define the edges (connections between devices)
  const initialEdges: Edge[] = [
    { id: 'e1-1', source: 'entrance', target: 'device1', animated: true, style: { stroke: '#9b87f5', strokeWidth: 3 } },
    { id: 'e1-2', source: 'entrance', target: 'device2', animated: true, style: { stroke: '#9b87f5', strokeWidth: 2 } },
    { id: 'e2-3', source: 'device1', target: 'device3', animated: true, style: { stroke: '#D946EF', strokeWidth: 2 } },
    { id: 'e2-4', source: 'device2', target: 'device3', animated: true, style: { stroke: '#8064e8', strokeWidth: 2 } },
    { id: 'e3-5', source: 'device3', target: 'checkout', animated: true, style: { stroke: '#6E59A5', strokeWidth: 2 } },
  ];

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="w-full h-full">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          className="bg-led-dark"
        >
          <Background color="#ffffff10" gap={16} />
          <Controls className="bg-led-dark/50 text-white border border-white/10 rounded-md" />
          <MiniMap 
            nodeStrokeWidth={3}
            nodeColor={(node) => node.data.color}
            maskColor="rgba(0, 0, 0, 0.7)"
            className="bg-led-dark/70 border border-white/10 rounded-md"
          />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};
