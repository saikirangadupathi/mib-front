import React, { useState } from 'react';
import { 
  Calendar, Users, Target, TrendingUp, CheckCircle, AlertCircle, Clock, FileText,
  Search, Filter, Plus, MoreVertical, Play, Pause, CheckSquare, ArrowRight,
  BarChart3, Activity, Zap, Settings, Bell, ChevronDown, Eye, Edit, Trash2
} from 'lucide-react';

interface WeeklyData {
  week: string;
  dateRange: string;
  devCount: number;
  bl: number;
  dr: number;
  dg: number;
  pd: number;
  pl: number;
}

interface ProjectData {
  boardName: string;
  projectManager: string;
  sprintUnderstanding: string;
  level: 'B Level' | 'A Level';
  weeklyData: WeeklyData[];
}

interface SprintData {
  sprintName: string;
  sprintUnderstanding: string;
  level: 'B Level' | 'A Level';
  week1: {
    devCount: number;
    es: string;
    doc: string;
    uml: string;
    drr: string;
    drs: string;
    drf: string;
  };
  week2: {
    devCount: number;
    es: string;
    doc: string;
    uml: string;
    drr: string;
    drs: string;
    drf: string;
  };
}

interface Sprint {
  id: string;
  name: string;
  project: string;
  status: 'active' | 'completed' | 'planned' | 'on-hold';
  progress: number;
  startDate: string;
  endDate: string;
  team: string[];
  priority: 'high' | 'medium' | 'low';
  description: string;
  tasks: {
    total: number;
    completed: number;
    inProgress: number;
    pending: number;
  };
  statusLabel: 'On Track' | 'Slightly Behind' | 'At Risk';
  dueDate: string;
  teamMembers: { name: string; initial: string; color: string }[];
  mobiusLevel: 'A' | 'B' | 'C' | 'D';
  mobiusDescription: string;
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sprints'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedSprint, setSelectedSprint] = useState<Sprint | null>(null);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<{[key: string]: Array<{id: string, author: string, text: string, timestamp: string}>}>({});

  // Rest of your component code...

  return (
    // Your JSX code...
  );
};

export default Dashboard;