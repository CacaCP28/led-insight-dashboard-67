
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

interface DeviceNodeProps {
  data: {
    label: string;
    visitors: number;
    icon: string;
    color: string;
    dimensions?: string;
    isHighlighted?: boolean;
  };
}

const DeviceNode = memo(({ data }: DeviceNodeProps) => {
  return (
    <div className="relative group pointer-events-none">
      <div 
        className={`node px-2 py-2 rounded-md shadow-lg text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)] ${data.isHighlighted ? 'ring-2 ring-offset-2 ring-white/50' : ''}`} 
        style={{ 
          backgroundColor: `${data.color}30`,
          borderLeft: `3px solid ${data.color}`,
          maxWidth: '140px'
        }}
      >
        <div className="flex items-center gap-1">
          <span className="text-lg">{data.icon}</span>
          <div>
            <div className="font-semibold text-xs">{data.label}</div>
            <div className="text-xs text-white/80">{data.visitors} visitantes</div>
            {data.dimensions && (
              <div className="text-xs text-white/60">{data.dimensions}</div>
            )}
          </div>
        </div>

        {/* Animated pulse effect */}
        <div 
          className="absolute inset-0 -z-10 rounded-md opacity-20"
          style={{ backgroundColor: data.color }}
        ></div>
      </div>
      
      {/* Connection handles - hidden but functional */}
      <Handle 
        type="target" 
        position={Position.Top} 
        className="invisible w-1 h-1" 
      />
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="invisible w-1 h-1" 
      />
    </div>
  );
});

export default DeviceNode;
