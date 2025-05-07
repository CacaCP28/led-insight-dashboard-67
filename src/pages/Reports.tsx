
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Reports() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Relatórios</h1>
      <Card>
        <CardHeader>
          <CardTitle>Visão Geral de Relatórios</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Esta página de relatórios está atualmente em desenvolvimento.</p>
        </CardContent>
      </Card>
    </div>
  );
}
