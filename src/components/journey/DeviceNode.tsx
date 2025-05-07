
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
        className={`node px-1 py-1 rounded-md shadow-md text-white ${data.isHighlighted ? 'ring-1 ring-offset-1 ring-white/50' : ''}`} 
        style={{ 
          backgroundColor: `${data.color}30`,
          borderLeft: `2px solid ${data.color}`,
          maxWidth: '110px',
          transform: 'scale(0.85)',
          fontSize: '0.75rem'
        }}
      >
        <div className="flex items-center gap-1">
          <span className="text-base">{data.icon}</span>
          <div>
            <div className="font-semibold text-xs whitespace-nowrap overflow-hidden text-ellipsis">{data.label}</div>
            <div className="text-xs text-white/80">{data.visitors} visitantes</div>
            {data.dimensions && (
              <div className="text-xs text-white/60 line-clamp-1">{data.dimensions}</div>
            )}
          </div>
        </div>

        {/* Subtle glow effect */}
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
