
import React, { useEffect, useRef } from 'react';
import { Card } from "../ui/card";

const Gondola3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Função para desenhar uma gôndola 3D simples
    const drawGondola = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Configurações da gôndola
      const width = 180;
      const height = 200;
      const depth = 60;
      const shelves = 4;
      const shelfHeight = height / shelves;
      
      // Centro do canvas
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Desenhar a parte frontal da gôndola
      ctx.fillStyle = '#444444';
      ctx.strokeStyle = '#666666';
      ctx.lineWidth = 2;
      
      // Perspectiva isométrica
      const isoAngle = Math.PI / 6;
      
      // Desenhar as prateleiras (de baixo para cima)
      for (let i = 0; i < shelves; i++) {
        // Posição Y da prateleira
        const shelfY = centerY + height/2 - i * shelfHeight;
        
        // Desenhar parte frontal da prateleira
        ctx.fillStyle = '#555555';
        ctx.beginPath();
        ctx.rect(centerX - width/2, shelfY - shelfHeight, width, shelfHeight);
        ctx.fill();
        ctx.stroke();
        
        // Desenhar parte superior da prateleira
        ctx.fillStyle = '#666666';
        ctx.beginPath();
        ctx.moveTo(centerX - width/2, shelfY - shelfHeight);
        ctx.lineTo(centerX - width/2 + depth * Math.cos(isoAngle), shelfY - shelfHeight - depth * Math.sin(isoAngle));
        ctx.lineTo(centerX + width/2 + depth * Math.cos(isoAngle), shelfY - shelfHeight - depth * Math.sin(isoAngle));
        ctx.lineTo(centerX + width/2, shelfY - shelfHeight);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Desenhar lado direito da prateleira
        ctx.fillStyle = '#444444';
        ctx.beginPath();
        ctx.moveTo(centerX + width/2, shelfY);
        ctx.lineTo(centerX + width/2, shelfY - shelfHeight);
        ctx.lineTo(centerX + width/2 + depth * Math.cos(isoAngle), shelfY - shelfHeight - depth * Math.sin(isoAngle));
        ctx.lineTo(centerX + width/2 + depth * Math.cos(isoAngle), shelfY - depth * Math.sin(isoAngle));
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Simular produtos nas prateleiras
        drawProducts(centerX, shelfY, shelfHeight, width, depth, isoAngle, i);
      }
    };
    
    const drawProducts = (centerX: number, shelfY: number, shelfHeight: number, width: number, depth: number, isoAngle: number, shelfIndex: number) => {
      const productCount = 8;
      const productWidth = width / productCount;
      
      // Diferentes níveis de presença de produtos por prateleira
      const fillLevels = [
        [1, 1, 0, 1, 1, 1, 0, 1],  // Prateleira inferior
        [1, 0, 1, 1, 0, 1, 1, 1],  // Segunda prateleira
        [1, 1, 1, 0, 1, 0, 1, 1],  // Terceira prateleira
        [1, 1, 0, 0, 1, 1, 1, 0]   // Prateleira superior
      ];
      
      const fillLevel = fillLevels[shelfIndex];
      
      // Cores diferentes por tipo de produto
      const productColors = ['#ff9966', '#99ccff', '#99ff99', '#ffff99'];
      const shelfColor = productColors[shelfIndex];
      
      for (let i = 0; i < productCount; i++) {
        // Se não tiver produto nessa posição (ruptura)
        if (fillLevel[i] === 0) continue;
        
        const productHeight = shelfHeight * 0.8;
        const productX = centerX - width/2 + i * productWidth + productWidth * 0.1;
        const productY = shelfY - productHeight - 5;
        
        // Frente do produto
        ctx.fillStyle = shelfColor;
        ctx.beginPath();
        ctx.rect(productX, productY, productWidth * 0.8, productHeight);
        ctx.fill();
        ctx.stroke();
        
        // Topo do produto
        ctx.fillStyle = adjustColorBrightness(shelfColor, 20);
        ctx.beginPath();
        ctx.moveTo(productX, productY);
        ctx.lineTo(productX + (depth * 0.8) * Math.cos(isoAngle), productY - (depth * 0.8) * Math.sin(isoAngle));
        ctx.lineTo(productX + productWidth * 0.8 + (depth * 0.8) * Math.cos(isoAngle), productY - (depth * 0.8) * Math.sin(isoAngle));
        ctx.lineTo(productX + productWidth * 0.8, productY);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Lado do produto
        ctx.fillStyle = adjustColorBrightness(shelfColor, -20);
        ctx.beginPath();
        ctx.moveTo(productX + productWidth * 0.8, productY);
        ctx.lineTo(productX + productWidth * 0.8, productY + productHeight);
        ctx.lineTo(productX + productWidth * 0.8 + (depth * 0.8) * Math.cos(isoAngle), productY + productHeight - (depth * 0.8) * Math.sin(isoAngle));
        ctx.lineTo(productX + productWidth * 0.8 + (depth * 0.8) * Math.cos(isoAngle), productY - (depth * 0.8) * Math.sin(isoAngle));
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    };
    
    const adjustColorBrightness = (col: string, amt: number) => {
      let usePound = false;
      if (col[0] === "#") {
        col = col.slice(1);
        usePound = true;
      }
      let R = parseInt(col.substring(0, 2), 16);
      let G = parseInt(col.substring(2, 4), 16);
      let B = parseInt(col.substring(4, 6), 16);
      
      R = R + amt;
      G = G + amt;
      B = B + amt;
      
      if (R > 255) R = 255;
      else if (R < 0) R = 0;
      if (G > 255) G = 255;
      else if (G < 0) G = 0;
      if (B > 255) B = 255;
      else if (B < 0) B = 0;
      
      const result = (usePound?"#":"") + (16777216 + (R << 16) + (G << 8) + B).toString(16).slice(1);
      return result;
    };
    
    // Desenhar a gôndola inicialmente
    drawGondola();
    
    // Redimensionar a gôndola quando a janela mudar de tamanho
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        drawGondola();
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Animação simples - rotação
    let rotation = 0;
    const animate = () => {
      rotation += 0.01;
      if (rotation > Math.PI * 2) rotation = 0;
      
      // Apenas redesenhar a cada poucos frames para economizar recursos
      if (Math.floor(rotation * 20) % 2 === 0) {
        drawGondola();
      }
      
      requestAnimationFrame(animate);
    };
    
    // Iniciar animação
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Card className="p-4 w-full h-[350px] bg-gray-900 border-gray-800">
      <div className="flex flex-col h-full">
        <h3 className="font-bold text-white mb-2">Visualização 3D de Gôndolas</h3>
        <p className="text-xs text-gray-400 mb-4">Identificação visual de rupturas por gôndola</p>
        <div className="flex-1 relative">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full absolute inset-0"
          ></canvas>
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 p-2 rounded text-xs text-white">
            Ruptura: Áreas em branco
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Gondola3D;
