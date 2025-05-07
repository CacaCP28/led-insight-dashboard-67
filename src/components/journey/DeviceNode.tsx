
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

interface DeviceNodeProps {
  data: {
    label: string;
    visitors: number;
    icon: string;
    color: string;
    dimensions?: string;
  };
}

const DeviceNode = memo(({ data }: DeviceNodeProps) => {
  return (
    <div className="relative group">
      <div 
        className="node px-4 py-3 rounded-md shadow-lg text-white hover-scale transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]" 
        style={{ 
          backgroundColor: `${data.color}30`,
          borderLeft: `3px solid ${data.color}`,
          maxWidth: '200px' 
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">{data.icon}</span>
          <div>
            <div className="font-semibold">{data.label}</div>
            <div className="text-sm text-white/80">{data.visitors} visitantes</div>
            {data.dimensions && (
              <div className="text-xs text-white/60 mt-1">{data.dimensions}</div>
            )}
          </div>
        </div>

        {/* Animated pulse effect */}
        <div 
          className="absolute inset-0 -z-10 rounded-md animate-pulse opacity-20"
          style={{ backgroundColor: data.color }}
        ></div>
      </div>
      
      {/* Connection handles */}
      <Handle 
        type="target" 
        position={Position.Top} 
        className="w-2 h-2 bg-white/80 border-none" 
      />
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="w-2 h-2 bg-white/80 border-none" 
      />
    </div>
  );
});

export default DeviceNode;
