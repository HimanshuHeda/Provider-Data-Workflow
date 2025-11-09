import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Mail,
  Download,
  User,
  TrendingUp
} from 'lucide-react';

export function Dashboard() {
  const mockProviders = [
    { 
      id: '1', 
      name: 'Dr. Sarah Johnson', 
      npi: '1234567890', 
      confidence: 98, 
      status: 'verified',
      issues: 0
    },
    { 
      id: '2', 
      name: 'Dr. Michael Chen', 
      npi: '2345678901', 
      confidence: 95, 
      status: 'verified',
      issues: 0
    },
    { 
      id: '3', 
      name: 'Dr. Emily Rodriguez', 
      npi: '3456789012', 
      confidence: 67, 
      status: 'review',
      issues: 2
    },
    { 
      id: '4', 
      name: 'Dr. James Wilson', 
      npi: '4567890123', 
      confidence: 42, 
      status: 'flagged',
      issues: 4
    },
    { 
      id: '5', 
      name: 'Dr. Lisa Anderson', 
      npi: '5678901234', 
      confidence: 88, 
      status: 'verified',
      issues: 1
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Processed</CardDescription>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              187 / 200
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={93.5} className="h-2" />
            <p className="text-slate-600 mt-2">93.5% complete</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Verified Providers</CardDescription>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              142
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">Avg confidence: 94.2%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Needs Review</CardDescription>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-600" />
              32
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">Avg confidence: 68.5%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Flagged Issues</CardDescription>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              13
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">Require immediate attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Results
        </Button>
        <Button variant="outline">
          <Mail className="h-4 w-4 mr-2" />
          Send Verification Emails (32)
        </Button>
        <Button variant="outline">
          <TrendingUp className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Prioritized Review Queue */}
      <Card>
        <CardHeader>
          <CardTitle>Prioritized Review Queue</CardTitle>
          <CardDescription>
            Providers sorted by confidence score - lowest first
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockProviders.map((provider) => (
              <div 
                key={provider.id}
                className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-slate-900">{provider.name}</h4>
                    {provider.status === 'verified' && (
                      <Badge variant="outline" className="bg-green-100 text-green-700 border-0">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    {provider.status === 'review' && (
                      <Badge variant="outline" className="bg-orange-100 text-orange-700 border-0">
                        <Clock className="h-3 w-3 mr-1" />
                        Review
                      </Badge>
                    )}
                    {provider.status === 'flagged' && (
                      <Badge variant="outline" className="bg-red-100 text-red-700 border-0">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Flagged
                      </Badge>
                    )}
                  </div>
                  <p className="text-slate-600">NPI: {provider.npi}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-slate-600">Confidence Score</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress 
                        value={provider.confidence} 
                        className="h-2 w-24" 
                      />
                      <span className="text-slate-900 min-w-[3ch]">{provider.confidence}%</span>
                    </div>
                  </div>

                  {provider.issues > 0 && (
                    <div className="text-right">
                      <p className="text-slate-600">Issues</p>
                      <p className="text-red-600">{provider.issues}</p>
                    </div>
                  )}

                  <Button size="sm" variant={provider.status === 'verified' ? 'outline' : 'default'}>
                    {provider.status === 'verified' ? 'View' : 'Review'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
