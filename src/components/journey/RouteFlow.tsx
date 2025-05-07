
import React from 'react';
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
  // Initialize nodes based on the exact positions in the image
  const initialNodes: Node[] = [
    {
      id: 'logo-adesivo-1',
      data: { 
        label: 'Logo Adesivo The Led',
        visitors: 450,
        icon: '🔵',
        color: '#D946EF',
        dimensions: '2.21 x 0.46 metros',
      },
      position: { x: 80, y: 40 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'piso-elevado-1',
      data: { 
        label: 'Piso Elevado 10cm',
        visitors: 420,
        icon: '⬜',
        color: '#9b87f5',
        dimensions: 'MDF Black Piano',
      },
      position: { x: 80, y: 120 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'parede-led-1',
      data: { 
        label: 'Parede Led',
        visitors: 400,
        icon: '🧱',
        color: '#8064e8',
        dimensions: '2.5 x 2.5 metros',
      },
      position: { x: 160, y: 180 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'kits-5',
      data: { 
        label: 'Kits 5.0',
        visitors: 380,
        icon: '💡',
        color: '#6E59A5',
        dimensions: '2.5 x 0.52 metros',
      },
      position: { x: 160, y: 260 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'parede-led-2',
      data: { 
        label: 'Parede Led',
        visitors: 360,
        icon: '🧱',
        color: '#D946EF',
        dimensions: '2.5 x 2.5 metros',
      },
      position: { x: 240, y: 290 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'kits-50-2',
      data: { 
        label: 'Kits 5.0',
        visitors: 340,
        icon: '💡',
        color: '#c639d8',
        dimensions: '2.5 x 0.52 metros',
      },
      position: { x: 240, y: 340 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'piso-elevado-2',
      data: { 
        label: 'Piso elevado Led 10cm',
        visitors: 320,
        icon: '⬜',
        color: '#9b87f5',
        dimensions: '',
      },
      position: { x: 495, y: 40 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'logo-adesivo-2',
      data: { 
        label: 'Logo Adesivo The Led',
        visitors: 300,
        icon: '🔵',
        color: '#8064e8',
        dimensions: '1.02 x 0.21 metros',
      },
      position: { x: 670, y: 40 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'logo-adesivo-3',
      data: { 
        label: 'Logo Adesivo The Led Bar',
        visitors: 280,
        icon: '🔵',
        color: '#6E59A5',
        dimensions: '1.35 x 0.28 metros',
      },
      position: { x: 420, y: 85 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'logo-adesivo-4',
      data: { 
        label: 'Logo Adesivo The Led Bar',
        visitors: 260,
        icon: '🔵',
        color: '#D946EF',
        dimensions: '1.35 x 0.28 metros',
      },
      position: { x: 420, y: 200 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'teto-bar',
      data: { 
        label: 'Teto Bar Led',
        visitors: 240,
        icon: '☂️',
        color: '#c639d8',
        dimensions: '2.5 x 0.5 x 10 metros',
      },
      position: { x: 420, y: 240 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'led-supreme',
      data: { 
        label: 'Led Supreme',
        visitors: 220,
        icon: '✨',
        color: '#9b87f5',
        dimensions: '1.0 x 2.0 metros',
      },
      position: { x: 735, y: 280 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'xpe-50',
      data: { 
        label: 'XPE 5.0',
        visitors: 200,
        icon: '📊',
        color: '#8064e8',
        dimensions: '2.5 x 1.0 metros',
      },
      position: { x: 735, y: 30 },
      type: 'deviceNode',
      draggable: false,
    },
  ];

  // Define the paths between the points with appropriate styling
  const initialEdges: Edge[] = [
    { id: 'e1-2', source: 'logo-adesivo-1', target: 'piso-elevado-1', animated: true, style: { stroke: '#D946EF', strokeWidth: 2 } },
    { id: 'e2-3', source: 'piso-elevado-1', target: 'parede-led-1', animated: true, style: { stroke: '#9b87f5', strokeWidth: 2 } },
    { id: 'e3-4', source: 'parede-led-1', target: 'kits-5', animated: true, style: { stroke: '#8064e8', strokeWidth: 2 } },
    { id: 'e4-5', source: 'kits-5', target: 'parede-led-2', animated: true, style: { stroke: '#6E59A5', strokeWidth: 2 } },
    { id: 'e5-6', source: 'parede-led-2', target: 'kits-50-2', animated: true, style: { stroke: '#D946EF', strokeWidth: 2 } },
    { id: 'e3-9', source: 'parede-led-1', target: 'logo-adesivo-3', animated: true, style: { stroke: '#8064e8', strokeWidth: 2 } },
    { id: 'e9-10', source: 'logo-adesivo-3', target: 'logo-adesivo-4', animated: true, style: { stroke: '#6E59A5', strokeWidth: 2 } },
    { id: 'e10-11', source: 'logo-adesivo-4', target: 'teto-bar', animated: true, style: { stroke: '#D946EF', strokeWidth: 2 } },
    { id: 'e7-8', source: 'piso-elevado-2', target: 'logo-adesivo-2', animated: true, style: { stroke: '#9b87f5', strokeWidth: 2 } },
    { id: 'e8-13', source: 'logo-adesivo-2', target: 'xpe-50', animated: true, style: { stroke: '#8064e8', strokeWidth: 2 } },
    { id: 'e11-12', source: 'teto-bar', target: 'led-supreme', animated: true, style: { stroke: '#c639d8', strokeWidth: 2 } },
  ];

  return (
    <div className="w-full h-full">
      <ReactFlowProvider>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          className="bg-transparent"
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          panOnDrag={false}
        >
          <Controls 
            className="bg-led-dark/50 text-white border border-white/10 rounded-md"
            showInteractive={false}
          />
          <MiniMap 
            nodeStrokeWidth={3}
            nodeColor={(node) => node.data.color}
            maskColor="rgba(0, 0, 0, 0.7)"
            className="bg-led-dark/70 border border-white/10 rounded-md"
          />
          <Background color="#888" gap={16} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};
