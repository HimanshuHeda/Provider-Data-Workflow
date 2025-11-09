import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface StageDetailsProps {
  selectedStage: string | null;
}

const stageData = {
  input: {
    title: 'Input Stage',
    description: 'Initial data collection',
    status: 'completed',
    duration: '2 minutes',
    details: [
      { label: 'Total Providers', value: '200' },
      { label: 'CSV Files', value: '1' },
      { label: 'PDF Attachments', value: '45' },
      { label: 'Data Format', value: 'Mixed' }
    ]
  },
  agent1: {
    title: 'Data Extraction Agent',
    description: 'Parsing and extracting structured data',
    status: 'completed',
    duration: '15 minutes',
    details: [
      { label: 'Providers Processed', value: '200/200' },
      { label: 'PDFs Scanned', value: '45/45' },
      { label: 'VLM Accuracy', value: '94.2%' },
      { label: 'Fields Extracted', value: '12 per record' }
    ]
  },
  agent2: {
    title: 'Data Validation Agent',
    description: 'Verifying data against external sources',
    status: 'in-progress',
    duration: '~30 minutes',
    details: [
      { label: 'NPI Verifications', value: '187/200' },
      { label: 'Website Checks', value: '165/200' },
      { label: 'Location Verified', value: '192/200' },
      { label: 'API Calls Made', value: '542' }
    ]
  },
  agent3: {
    title: 'Quality Assurance Agent',
    description: 'Cross-checking and scoring data quality',
    status: 'pending',
    duration: 'Not started',
    details: [
      { label: 'Records Reviewed', value: '0/200' },
      { label: 'Avg Confidence', value: 'N/A' },
      { label: 'Flagged Records', value: '0' },
      { label: 'Auto-approved', value: '0' }
    ]
  },
  output: {
    title: 'Dashboard Output',
    description: 'Final results and actions',
    status: 'pending',
    duration: 'Not ready',
    details: [
      { label: 'Clean Records', value: 'TBD' },
      { label: 'Needs Review', value: 'TBD' },
      { label: 'Emails Queued', value: '0' },
      { label: 'Export Ready', value: 'No' }
    ]
  }
};

export function StageDetails({ selectedStage }: StageDetailsProps) {
  if (!selectedStage || !stageData[selectedStage as keyof typeof stageData]) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Stage Details</CardTitle>
          <CardDescription>
            Click on a workflow stage to see detailed information
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-48 text-slate-400">
          No stage selected
        </CardContent>
      </Card>
    );
  }

  const stage = stageData[selectedStage as keyof typeof stageData];

  const statusConfig = {
    completed: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100', label: 'Completed' },
    'in-progress': { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100', label: 'In Progress' },
    pending: { icon: AlertCircle, color: 'text-slate-400', bg: 'bg-slate-100', label: 'Pending' }
  };

  const config = statusConfig[stage.status as keyof typeof statusConfig];
  const StatusIcon = config.icon;

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{stage.title}</CardTitle>
            <CardDescription>{stage.description}</CardDescription>
          </div>
          <Badge variant="outline" className={`${config.bg} ${config.color} border-0`}>
            <StatusIcon className="h-3 w-3 mr-1" />
            {config.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-slate-600">
          <Clock className="h-4 w-4" />
          <span>{stage.duration}</span>
        </div>

        <div className="space-y-3 pt-4 border-t">
          {stage.details.map((detail, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-slate-600">{detail.label}</span>
              <span className="text-slate-900">{detail.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
