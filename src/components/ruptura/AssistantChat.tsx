
import React, { useState, useRef, useEffect } from 'react';
import { Card } from "../ui/card";

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
};

const predefinedResponses: { [key: string]: string } = {
  'ruptura': 'O índice de ruptura atual é de 4.6%, com 78 SKUs afetados. A maior concentração está no setor de mercearia seca.',
  'reposição': 'O tempo médio de reposição é de 37 minutos, um aumento de 5 minutos em relação à semana passada. Recomendo verificar o processo na seção de laticínios.',
  'financeiro': 'O impacto financeiro estimado hoje é de R$ 8.720, com tendência de aumento se não houver intervenção rápida nos produtos críticos.',
  'crítico': 'Os produtos mais críticos em ruptura são: Arroz Tipo 1 Marca X, Leite UHT Integral Marca Y, e Sabão em Pó Marca Z. Eles representam 32% do impacto financeiro.',
  'tendência': 'A tendência para hoje indica aumento de ruptura no período noturno, especialmente após as 19h. Recomendo preparar equipe extra de reposição.',
  'ajuda': 'Posso ajudar com informações sobre ruptura, reposição, impacto financeiro, produtos críticos, tendências e recomendações. O que deseja saber?'
};

const AssistantChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou o assistente virtual de rupturas. Como posso ajudar hoje?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Adicionar mensagem do usuário
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simular resposta do assistente após um breve delay
    setTimeout(() => {
      const response = generateResponse(input.toLowerCase());
      const assistantMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    }, 600);
  };

  const generateResponse = (question: string): string => {
    // Verificar palavras-chave na pergunta
    for (const keyword in predefinedResponses) {
      if (question.includes(keyword)) {
        return predefinedResponses[keyword];
      }
    }
    
    // Resposta padrão se nenhuma palavra-chave for encontrada
    return "Não tenho informações específicas sobre isso. Você pode perguntar sobre ruptura, reposição, financeiro, produtos críticos ou tendências.";
  };

  return (
    <Card className="p-4 w-full bg-gray-900 border border-purple-500/30 rounded-xl shadow-lg shadow-purple-500/10">
      <div className="flex flex-col h-[320px]">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="font-bold text-white">Assistente Virtual</h3>
            <p className="text-xs text-gray-400">Pergunte sobre rupturas e reposição</p>
          </div>
          <div className="bg-purple-900 rounded-full px-2 py-1">
            <span className="text-xs text-purple-400">Online</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto mb-3 pr-2" style={{ scrollbarWidth: 'thin' }}>
          <div className="space-y-3">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`rounded-lg px-3 py-2 max-w-[80%] ${
                    msg.sender === 'user' 
                      ? 'bg-purple-700 text-white' 
                      : 'bg-gray-800 text-gray-100'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="flex space-x-2 mt-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Digite sua pergunta..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AssistantChat;
