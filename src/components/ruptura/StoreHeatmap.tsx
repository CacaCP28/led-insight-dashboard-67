
import React, { useEffect } from 'react';
import { Card } from "../ui/card";

// Dados simulados de calor por seção da loja
const heatmapData = [
  { x: 0, y: 0, value: 0.2 },
  { x: 0, y: 1, value: 0.5 },
  { x: 0, y: 2, value: 0.9 },
  { x: 1, y: 0, value: 0.3 },
  { x: 1, y: 1, value: 0.7 },
  { x: 1, y: 2, value: 0.4 },
  { x: 2, y: 0, value: 0.8 },
  { x: 2, y: 1, value: 0.2 },
  { x: 2, y: 2, value: 0.6 },
  // Mais células do heatmap podem ser adicionadas aqui
];

const StoreHeatmap = () => {
  useEffect(() => {
    const drawHeatmap = () => {
      const canvas = document.getElementById('heatmapCanvas') as HTMLCanvasElement;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          const cellWidth = canvas.width / 4;
          const cellHeight = canvas.height / 4;
          
          // Desenhar grid de loja
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          for (let i = 0; i <= 3; i++) {
            // Linhas verticais (corredores)
            ctx.beginPath();
            ctx.moveTo(i * cellWidth, 0);
            ctx.lineTo(i * cellWidth, canvas.height);
            ctx.stroke();
            
            // Linhas horizontais (seções)
            ctx.beginPath();
            ctx.moveTo(0, i * cellHeight);
            ctx.lineTo(canvas.width, i * cellHeight);
            ctx.stroke();
          }
          
          // Desenhar heatmap
          heatmapData.forEach(cell => {
            const x = (cell.x + 0.5) * cellWidth;
            const y = (cell.y + 0.5) * cellHeight;
            
            const gradient = ctx.createRadialGradient(x, y, 5, x, y, cellWidth * 0.7);
            gradient.addColorStop(0, `rgba(255, 0, 0, ${cell.value})`);
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, cellWidth * 0.7, 0, Math.PI * 2);
            ctx.fill();
          });
          
          // Adicionar legendas
          ctx.fillStyle = 'white';
          ctx.font = '12px sans-serif';
          ctx.fillText('Entrada', 10, 15);
          ctx.fillText('Caixas', canvas.width - 50, canvas.height - 10);
        }
      }
    };
    
    drawHeatmap();
    
    // Redimensionar o heatmap quando a janela mudar de tamanho
    window.addEventListener('resize', drawHeatmap);
    return () => window.removeEventListener('resize', drawHeatmap);
  }, []);

  return (
    <Card className="p-4 w-full h-[350px] bg-gray-900 border-gray-800">
      <div className="flex flex-col h-full">
        <h3 className="font-bold text-white mb-2">Mapa de Calor de Rupturas</h3>
        <p className="text-xs text-gray-400 mb-4">Visualização de áreas críticas na loja</p>
        <div className="flex-1 relative">
          <canvas 
            id="heatmapCanvas" 
            className="w-full h-full absolute inset-0"
            width={500}
            height={300}
          ></canvas>
          <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 p-2 rounded">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-300">Baixo</span>
              <div className="w-24 h-3 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded"></div>
              <span className="text-xs text-gray-300">Alto</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StoreHeatmap;
