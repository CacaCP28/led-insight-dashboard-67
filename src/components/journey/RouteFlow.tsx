
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
  // Initialize nodes representing areas in the floor plan based on the image
  const initialNodes: Node[] = [
    {
      id: 'loja-adorno',
      data: { 
        label: 'Loja Adorno The Loft',
        visitors: 532,
        icon: '🛍️',
        color: '#D946EF',
        dimensions: '2.91 x 0.46 metros'
      },
      position: { x: 120, y: 50 },
      type: 'deviceNode',
    },
    {
      id: 'piso-led',
      data: { 
        label: 'Piso elevado Led 10cm',
        visitors: 420,
        icon: '🏢',
        color: '#9b87f5',
        dimensions: '10cm altura'
      },
      position: { x: 400, y: 50 },
      type: 'deviceNode',
    },
    {
      id: 'loja-adesivo',
      data: { 
        label: 'Logo Adesivo The Led',
        visitors: 380,
        icon: '🖼️',
        color: '#8064e8',
        dimensions: '1.02 x 0.21 metros'
      },
      position: { x: 650, y: 60 },
      type: 'deviceNode',
    },
    {
      id: 'bar-1',
      data: { 
        label: 'Logo Adesivo The Led Bar',
        visitors: 340,
        icon: '🍹',
        color: '#6E59A5',
        dimensions: '1.33 x 0.28 metros'
      },
      position: { x: 500, y: 180 },
      type: 'deviceNode',
    },
    {
      id: 'bar-2',
      data: { 
        label: 'Logo Adesivo The Led Bar',
        visitors: 320,
        icon: '🍹',
        color: '#6E59A5',
        dimensions: '1.33 x 0.28 metros'
      },
      position: { x: 400, y: 200 },
      type: 'deviceNode',
    },
    {
      id: 'teto-bar',
      data: { 
        label: 'Teto Bar Led',
        visitors: 290,
        icon: '✨',
        color: '#D946EF',
        dimensions: '2.5 x 0.5 x 16 metros'
      },
      position: { x: 450, y: 250 },
      type: 'deviceNode',
    },
    {
      id: 'led-suspenso',
      data: { 
        label: 'Led Suspenso',
        visitors: 260,
        icon: '💡',
        color: '#c639d8',
        dimensions: '1.0 x 2.0 metros'
      },
      position: { x: 650, y: 280 },
      type: 'deviceNode',
    },
    {
      id: 'parede-led-1',
      data: { 
        label: 'Parede Led',
        visitors: 230,
        icon: '🧱',
        color: '#9b87f5',
        dimensions: '2.5 x 2.5 metros'
      },
      position: { x: 150, y: 180 },
      type: 'deviceNode',
    },
    {
      id: 'piso-elevado',
      data: { 
        label: 'Piso Elevado 10cm MDF Black Piano',
        visitors: 210,
        icon: '🏢',
        color: '#8064e8',
        dimensions: '10cm altura'
      },
      position: { x: 100, y: 120 },
      type: 'deviceNode',
    },
    {
      id: 'parede-led-2',
      data: { 
        label: 'Parede Led',
        visitors: 190,
        icon: '🧱',
        color: '#9b87f5',
        dimensions: '2.5 x 0.25 metros'
      },
      position: { x: 220, y: 290 },
      type: 'deviceNode',
    },
    {
      id: 'vps-1',
      data: { 
        label: 'VPS 5.0 cm',
        visitors: 170,
        icon: '📱',
        color: '#c639d8',
        dimensions: '2.5 x 0.52 metros'
      },
      position: { x: 100, y: 260 },
      type: 'deviceNode',
    },
    {
      id: 'vps-2',
      data: { 
        label: 'VPS 5.0 cm',
        visitors: 150,
        icon: '📱',
        color: '#c639d8',
        dimensions: '2.5 x 0.52 metros'
      },
      position: { x: 300, y: 340 },
      type: 'deviceNode',
    },
    {
      id: 'vps-3',
      data: { 
        label: 'VPS 5.0 cm',
        visitors: 130,
        icon: '📱',
        color: '#c639d8',
        dimensions: '2.5 x 0.52 metros'
      },
      position: { x: 220, y: 340 },
      type: 'deviceNode',
    }
  ];

  // Define the edges (connections between areas) with proper styling
  const initialEdges: Edge[] = [
    { id: 'e1-2', source: 'loja-adorno', target: 'piso-led', animated: true, style: { stroke: '#D946EF', strokeWidth: 3 } },
    { id: 'e2-3', source: 'piso-led', target: 'loja-adesivo', animated: true, style: { stroke: '#9b87f5', strokeWidth: 3 } },
    { id: 'e3-4', source: 'loja-adesivo', target: 'bar-1', animated: true, style: { stroke: '#8064e8', strokeWidth: 2 } },
    { id: 'e4-5', source: 'bar-1', target: 'bar-2', animated: true, style: { stroke: '#6E59A5', strokeWidth: 2 } },
    { id: 'e5-6', source: 'bar-2', target: 'teto-bar', animated: true, style: { stroke: '#6E59A5', strokeWidth: 2 } },
    { id: 'e6-7', source: 'teto-bar', target: 'led-suspenso', animated: true, style: { stroke: '#D946EF', strokeWidth: 2 } },
    { id: 'e2-8', source: 'piso-led', target: 'parede-led-1', animated: true, style: { stroke: '#9b87f5', strokeWidth: 2 } },
    { id: 'e8-9', source: 'parede-led-1', target: 'piso-elevado', animated: true, style: { stroke: '#9b87f5', strokeWidth: 2 } },
    { id: 'e8-10', source: 'parede-led-1', target: 'parede-led-2', animated: true, style: { stroke: '#9b87f5', strokeWidth: 2 } },
    { id: 'e9-11', source: 'piso-elevado', target: 'vps-1', animated: true, style: { stroke: '#8064e8', strokeWidth: 2 } },
    { id: 'e10-12', source: 'parede-led-2', target: 'vps-2', animated: true, style: { stroke: '#9b87f5', strokeWidth: 2 } },
    { id: 'e12-13', source: 'vps-2', target: 'vps-3', animated: true, style: { stroke: '#c639d8', strokeWidth: 2 } },
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
          fitViewOptions={{ padding: 0.2 }}
          className="bg-transparent"
        >
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
