import { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

interface WorkflowStageProps {
  id: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'emerald';
  items: string[];
  onClick: () => void;
  isSelected: boolean;
}

const colorClasses = {
  blue: 'border-blue-300 bg-blue-50 hover:bg-blue-100',
  purple: 'border-purple-300 bg-purple-50 hover:bg-purple-100',
  green: 'border-green-300 bg-green-50 hover:bg-green-100',
  orange: 'border-orange-300 bg-orange-50 hover:bg-orange-100',
  emerald: 'border-emerald-300 bg-emerald-50 hover:bg-emerald-100'
};

const iconColorClasses = {
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  green: 'text-green-600',
  orange: 'text-orange-600',
  emerald: 'text-emerald-600'
};

export function WorkflowStage({ 
  title, 
  subtitle, 
  icon: Icon, 
  color, 
  items, 
  onClick, 
  isSelected 
}: WorkflowStageProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full border-2 rounded-lg p-4 transition-all duration-200 cursor-pointer text-left',
        colorClasses[color],
        isSelected && 'ring-2 ring-slate-400 ring-offset-2'
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          <Icon className={cn('h-6 w-6', iconColorClasses[color])} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-slate-900 mb-1">
            {title}
            {subtitle && (
              <span className="text-slate-600"> ({subtitle})</span>
            )}
          </h3>
          {items.length > 0 && (
            <ul className="space-y-1 mt-2">
              {items.map((item, index) => (
                <li key={index} className="text-slate-700">
                  {item.startsWith('Output:') ? (
                    <span className={iconColorClasses[color]}>{item}</span>
                  ) : (
                    <>- {item}</>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </button>
  );
}
