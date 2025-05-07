
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
  // Initialize nodes with adjusted positions to match the background image
  const initialNodes: Node[] = [
    {
      id: 'logo-adesivo-1',
      data: { 
        label: 'Logo Adesivo The Led',
        visitors: 450,
        icon: '🔵',
        color: '#D946EF',
        dimensions: '2.21 x 0.46m',
      },
      position: { x: 110, y: 60 },
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
        dimensions: 'MDF Black',
      },
      position: { x: 110, y: 140 },
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
        dimensions: '2.5 x 2.5m',
      },
      position: { x: 180, y: 190 },
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
        dimensions: '2.5 x 0.52m',
      },
      position: { x: 180, y: 280 },
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
        dimensions: '2.5 x 2.5m',
      },
      position: { x: 250, y: 310 },
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
        dimensions: '2.5 x 0.52m',
      },
      position: { x: 250, y: 370 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'piso-elevado-2',
      data: { 
        label: 'Piso elevado Led',
        visitors: 320,
        icon: '⬜',
        color: '#9b87f5',
        dimensions: '10cm',
      },
      position: { x: 445, y: 60 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'logo-adesivo-2',
      data: { 
        label: 'Logo Adesivo',
        visitors: 300,
        icon: '🔵',
        color: '#8064e8',
        dimensions: '1.02 x 0.21m',
      },
      position: { x: 610, y: 60 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'logo-adesivo-3',
      data: { 
        label: 'Logo Adesivo Bar',
        visitors: 280,
        icon: '🔵',
        color: '#6E59A5',
        dimensions: '1.35 x 0.28m',
      },
      position: { x: 370, y: 105 },
      type: 'deviceNode',
      draggable: false,
    },
    {
      id: 'logo-adesivo-4',
      data: { 
        label: 'Logo Adesivo Bar',
        visitors: 260,
        icon: '🔵',
        color: '#D946EF',
        dimensions: '1.35 x 0.28m',
      },
      position: { x: 370, y: 220 },
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
        dimensions: '2.5 x 0.5 x 10m',
      },
      position: { x: 370, y: 280 },
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
        dimensions: '1.0 x 2.0m',
      },
      position: { x: 675, y: 320 },
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
        dimensions: '2.5 x 1.0m',
      },
      position: { x: 675, y: 130 },
      type: 'deviceNode',
      draggable: false,
    },
  ];

  // Define the paths between the points with appropriate styling
  // Adjusted to match the new node positions
  const initialEdges: Edge[] = [
    { id: 'e1-2', source: 'logo-adesivo-1', target: 'piso-elevado-1', animated: true, style: { stroke: '#D946EF', strokeWidth: 1.5 } },
    { id: 'e2-3', source: 'piso-elevado-1', target: 'parede-led-1', animated: true, style: { stroke: '#9b87f5', strokeWidth: 1.5 } },
    { id: 'e3-4', source: 'parede-led-1', target: 'kits-5', animated: true, style: { stroke: '#8064e8', strokeWidth: 1.5 } },
    { id: 'e4-5', source: 'kits-5', target: 'parede-led-2', animated: true, style: { stroke: '#6E59A5', strokeWidth: 1.5 } },
    { id: 'e5-6', source: 'parede-led-2', target: 'kits-50-2', animated: true, style: { stroke: '#D946EF', strokeWidth: 1.5 } },
    { id: 'e3-9', source: 'parede-led-1', target: 'logo-adesivo-3', animated: true, style: { stroke: '#8064e8', strokeWidth: 1.5 } },
    { id: 'e9-10', source: 'logo-adesivo-3', target: 'logo-adesivo-4', animated: true, style: { stroke: '#6E59A5', strokeWidth: 1.5 } },
    { id: 'e10-11', source: 'logo-adesivo-4', target: 'teto-bar', animated: true, style: { stroke: '#D946EF', strokeWidth: 1.5 } },
    { id: 'e7-8', source: 'piso-elevado-2', target: 'logo-adesivo-2', animated: true, style: { stroke: '#9b87f5', strokeWidth: 1.5 } },
    { id: 'e8-13', source: 'logo-adesivo-2', target: 'xpe-50', animated: true, style: { stroke: '#8064e8', strokeWidth: 1.5 } },
    { id: 'e11-12', source: 'teto-bar', target: 'led-supreme', animated: true, style: { stroke: '#c639d8', strokeWidth: 1.5 } },
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
          zoomOnScroll={true}
          panOnScroll={true}
          panOnDrag={true}
          preventScrolling={false}
          attributionPosition="bottom-right"
          minZoom={0.5}
          maxZoom={2}
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
