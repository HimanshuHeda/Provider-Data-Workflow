import { useState } from 'react';
import { WorkflowDiagram } from './components/WorkflowDiagram';
import { Dashboard } from './components/Dashboard';
import { StageDetails } from './components/StageDetails';
import { SystemOverview } from './components/SystemOverview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

export default function App() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-slate-900 mb-2">Provider Profile Validation System</h1>
          <p className="text-slate-600">
            Multi-agent workflow for validating and processing 200+ healthcare provider profiles
          </p>
        </header>

        <Tabs defaultValue="workflow" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="workflow">Workflow View</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>

          <TabsContent value="workflow" className="space-y-6">
            <SystemOverview />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <WorkflowDiagram onStageClick={setSelectedStage} selectedStage={selectedStage} />
              </div>
              <div className="lg:col-span-1">
                <StageDetails selectedStage={selectedStage} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}