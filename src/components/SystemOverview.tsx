import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Globe, 
  Shield, 
  FileText, 
  BarChart3, 
  Users, 
  Target 
} from 'lucide-react';

export function SystemOverview() {
  const capabilities = [
    {
      icon: Globe,
      title: 'Public Data Sources',
      description: 'Pull provider information from websites, NPI registry, Google Maps, etc.'
    },
    {
      icon: Shield,
      title: 'Validate & Correct',
      description: 'Automatically validate and correct contact info and credentials'
    },
    {
      icon: FileText,
      title: 'AI Document Extraction',
      description: 'Extract data from scanned PDF documents using modern AI-based extraction'
    },
    {
      icon: BarChart3,
      title: 'Dashboard & Reports',
      description: 'Deliver results as online dashboard for easy review or downloadable reports'
    }
  ];

  return (
    <Card className="border-2 border-blue-200 bg-blue-50/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-blue-900">System Overview</CardTitle>
            <CardDescription className="text-blue-700 mt-2">
              Automated AI agent system for provider information validation
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
            AI-Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex gap-3 bg-white p-4 rounded-lg border border-blue-100">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <capability.icon className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div>
                <h4 className="text-slate-900 mb-1">{capability.title}</h4>
                <p className="text-slate-600">{capability.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-blue-200">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-slate-600">Target Users</p>
              <p className="text-slate-900">Insurance staff & directory managers</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-slate-600">Goal</p>
              <p className="text-slate-900">Smooth, hands-free workflow with minimal manual effort</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
