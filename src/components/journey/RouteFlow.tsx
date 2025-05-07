
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
  // Inicialize os nós com base nos pontos da imagem
  const initialNodes: Node[] = [
    {
      id: 'led-workstation',
      data: { 
        label: 'LED Workstation',
        visitors: 520,
        icon: '💻',
        color: '#D946EF',
        dimensions: 'Estação de Trabalho',
        isHighlighted: true
      },
      position: { x: 100, y: 70 },
      type: 'deviceNode',
    },
    {
      id: 'aquarium-led',
      data: { 
        label: 'Aquarium LED',
        visitors: 480,
        icon: '🐠',
        color: '#9b87f5',
        dimensions: 'Iluminação Interativa'
      },
      position: { x: 100, y: 180 },
      type: 'deviceNode',
    },
    {
      id: 'trim-accents',
      data: { 
        label: 'Trim Accents',
        visitors: 450,
        icon: '✨',
        color: '#8064e8',
        dimensions: 'Detalhes Decorativos'
      },
      position: { x: 280, y: 320 },
      type: 'deviceNode',
    },
    {
      id: 'face-scanner',
      data: { 
        label: 'Face Scanner',
        visitors: 430,
        icon: '📷',
        color: '#6E59A5',
        dimensions: 'Reconhecimento Facial'
      },
      position: { x: 280, y: 470 },
      type: 'deviceNode',
    },
    {
      id: 'led-strip',
      data: { 
        label: 'LED Strip',
        visitors: 410,
        icon: '💡',
        color: '#D946EF',
        dimensions: 'Faixa LED Decorativa'
      },
      position: { x: 450, y: 580 },
      type: 'deviceNode',
    },
    {
      id: 'dj-mixer',
      data: { 
        label: 'DJ Mixer',
        visitors: 390,
        icon: '🎧',
        color: '#c639d8',
        dimensions: 'Equipamento de Áudio'
      },
      position: { x: 650, y: 130 },
      type: 'deviceNode',
    },
    {
      id: 'media-screen',
      data: { 
        label: 'Media Screen',
        visitors: 370,
        icon: '🖥️',
        color: '#9b87f5',
        dimensions: 'Tela Interativa'
      },
      position: { x: 650, y: 340 },
      type: 'deviceNode',
    },
    {
      id: 'wall-leds',
      data: { 
        label: 'Wall LEDs',
        visitors: 350,
        icon: '🧱',
        color: '#8064e8',
        dimensions: 'LEDs de Parede'
      },
      position: { x: 650, y: 410 },
      type: 'deviceNode',
    },
    {
      id: 'music-client',
      data: { 
        label: 'Music Client',
        visitors: 330,
        icon: '🎵',
        color: '#6E59A5',
        dimensions: 'Sistema de Áudio'
      },
      position: { x: 1000, y: 480 },
      type: 'deviceNode',
    }
  ];

  // Define os caminhos entre os pontos com estilização adequada
  const initialEdges: Edge[] = [
    { id: 'e1-2', source: 'led-workstation', target: 'aquarium-led', animated: true, style: { stroke: '#D946EF', strokeWidth: 3 } },
    { id: 'e2-3', source: 'aquarium-led', target: 'trim-accents', animated: true, style: { stroke: '#9b87f5', strokeWidth: 3 } },
    { id: 'e3-4', source: 'trim-accents', target: 'face-scanner', animated: true, style: { stroke: '#8064e8', strokeWidth: 3 } },
    { id: 'e4-5', source: 'face-scanner', target: 'led-strip', animated: true, style: { stroke: '#6E59A5', strokeWidth: 3 } },
    { id: 'e1-6', source: 'led-workstation', target: 'dj-mixer', animated: true, style: { stroke: '#D946EF', strokeWidth: 2 } },
    { id: 'e6-7', source: 'dj-mixer', target: 'media-screen', animated: true, style: { stroke: '#c639d8', strokeWidth: 2 } },
    { id: 'e7-8', source: 'media-screen', target: 'wall-leds', animated: true, style: { stroke: '#9b87f5', strokeWidth: 2 } },
    { id: 'e8-9', source: 'wall-leds', target: 'music-client', animated: true, style: { stroke: '#8064e8', strokeWidth: 2 } },
    { id: 'e5-8', source: 'led-strip', target: 'wall-leds', animated: true, style: { stroke: '#D946EF', strokeWidth: 2, strokeDasharray: '5,5' } },
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
          <Background color="#888" gap={16} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};
