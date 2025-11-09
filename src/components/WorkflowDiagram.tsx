import { WorkflowStage } from './WorkflowStage';
import { WorkflowConnector } from './WorkflowConnector';
import { Database, CheckCircle2, Shield, BarChart3 } from 'lucide-react';

interface WorkflowDiagramProps {
  onStageClick: (stage: string) => void;
  selectedStage: string | null;
}

export function WorkflowDiagram({ onStageClick, selectedStage }: WorkflowDiagramProps) {
  const stages = [
    {
      id: 'input',
      title: 'INPUT: 200 Provider Profiles',
      subtitle: 'some with PDFs',
      icon: Database,
      color: 'blue',
      items: []
    },
    {
      id: 'agent1',
      title: 'Agent 1: DATA EXTRACTION',
      icon: Database,
      color: 'purple',
      items: [
        'Parse CSV/Excel files',
        'Extract data from scanned PDFs using AI-based document extraction',
        'Pull information from public data sources',
        'Output: Structured provider data'
      ]
    },
    {
      id: 'agent2',
      title: 'Agent 2: DATA VALIDATION',
      icon: CheckCircle2,
      color: 'green',
      items: [
        'Call NPI Registry API to verify NPI number',
        'Web scrape provider websites for contact info',
        'Check Google Maps API for location validation',
        'Validate and correct contact info & credentials',
        'Output: Validation results + confidence scores'
      ]
    },
    {
      id: 'agent3',
      title: 'Agent 3: QUALITY ASSURANCE',
      icon: Shield,
      color: 'orange',
      items: [
        'Compare original data vs validated data',
        'Calculate confidence score (0-100%)',
        'Flag mismatches for manual review by directory managers',
        'Auto-approve high-confidence records',
        'Output: Updated records + flagged providers'
      ]
    },
    {
      id: 'output',
      title: 'OUTPUT: Dashboard & Reports',
      icon: BarChart3,
      color: 'emerald',
      items: [
        'Online dashboard for easy review',
        'Downloadable reports (CSV, Excel, PDF)',
        'Updated provider list with confidence scores',
        'Prioritized review queue for insurance staff',
        'Auto-generated verification emails'
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div key={stage.id}>
            <WorkflowStage
              {...stage}
              onClick={() => onStageClick(stage.id)}
              isSelected={selectedStage === stage.id}
            />
            {index < stages.length - 1 && <WorkflowConnector />}
          </div>
        ))}
      </div>
    </div>
  );
}