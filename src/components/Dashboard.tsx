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
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sprints'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const projectsData: ProjectData[] = [
    {
      boardName: 'TI board',
      projectManager: 'KL Das',
      sprintUnderstanding: 'B Level',
      level: 'B Level',
      weeklyData: [
        { week: 'W0', dateRange: 'Jul 7th - Jul 11th', devCount: 4, bl: 1, dr: 0, dg: 0, pd: 0, pl: 1 },
        { week: 'W1', dateRange: 'Jul 14th - Jul 18th', devCount: 0, bl: 0, dr: 0, dg: 0, pd: 0, pl: 0 },
        { week: 'W2', dateRange: 'Jul 21st - Jul 25th', devCount: 0, bl: 0, dr: 0, dg: 0, pd: 0, pl: 0 },
        { week: 'W3', dateRange: 'Jul 28th - Aug 1st', devCount: 0, bl: 0, dr: 0, dg: 0, pd: 0, pl: 0 },
        { week: 'W4', dateRange: 'Aug 4th - Aug 8th', devCount: 0, bl: 0, dr: 0, dg: 0, pd: 0, pl: 0 },
      ]
    },
    {
      boardName: 'Holacracy Version 2.0',
      projectManager: 'KL Das',
      sprintUnderstanding: 'B Level',
      level: 'B Level',
      weeklyData: [
        { week: 'W0', dateRange: 'Jul 7th - Jul 11th', devCount: 2, bl: 3, dr: 0, dg: 0, pd: 0, pl: 0 },
        { week: 'W1', dateRange: 'Jul 14th - Jul 18th', devCount: 0, bl: 2, dr: 0, dg: 0, pd: 0, pl: 0 },
        { week: 'W2', dateRange: 'Jul 21st - Jul 25th', devCount: 0, bl: 0, dr: 0, dg: 0, pd: 0, pl: 0 },
        { week: 'W3', dateRange: 'Jul 28th - Aug 1st', devCount: 0, bl: 0, dr: 0, dg: 0, pd: 0, pl: 0 },
        { week: 'W4', dateRange: 'Aug 4th - Aug 8th', devCount: 0, bl: 0, dr: 0, dg: 0, pd: 0, pl: 0 },
      ]
    }
  ];

  const sprintsData: SprintData[] = [
    {
      sprintName: 'TEDaaS-Se...',
      sprintUnderstanding: 'B Level',
      level: 'B Level',
      week1: {
        devCount: 4,
        es: '0/3',
        doc: '0/0',
        uml: '1/1',
        drr: '0/0',
        drs: '0/0',
        drf: '0/0'
      },
      week2: {
        devCount: 0,
        es: '0/0',
        doc: '0/0',
        uml: '0/0',
        drr: '0/0',
        drs: '0/0',
        drf: '0/0'
      }
    }
  ];

  const sprintsList: Sprint[] = [
    {
      id: '1',
      name: 'User Authentication System',
      project: 'TI Board',
      status: 'active',
      progress: 75,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      team: ['John Doe', 'Jane Smith', 'Mike Johnson'],
      priority: 'high',
      description: 'Implement secure user authentication with multi-factor authentication support',
      tasks: { total: 12, completed: 9, inProgress: 2, pending: 1 }
    },
    {
      id: '2',
      name: 'Dashboard Analytics',
      project: 'Holacracy Version 2.0',
      status: 'active',
      progress: 45,
      startDate: '2024-01-20',
      endDate: '2024-02-20',
      team: ['Sarah Wilson', 'Tom Brown'],
      priority: 'medium',
      description: 'Create comprehensive analytics dashboard with real-time data visualization',
      tasks: { total: 8, completed: 3, inProgress: 3, pending: 2 }
    },
    {
      id: '3',
      name: 'Mobile App Integration',
      project: 'TI Board',
      status: 'planned',
      progress: 0,
      startDate: '2024-02-01',
      endDate: '2024-03-01',
      team: ['Alex Chen', 'Lisa Garcia'],
      priority: 'low',
      description: 'Develop mobile application with offline capabilities',
      tasks: { total: 15, completed: 0, inProgress: 0, pending: 15 }
    },
    {
      id: '4',
      name: 'API Performance Optimization',
      project: 'Holacracy Version 2.0',
      status: 'completed',
      progress: 100,
      startDate: '2023-12-01',
      endDate: '2024-01-10',
      team: ['David Lee', 'Emma Davis'],
      priority: 'high',
      description: 'Optimize API endpoints for better performance and scalability',
      tasks: { total: 10, completed: 10, inProgress: 0, pending: 0 }
    },
    {
      id: '5',
      name: 'Security Audit',
      project: 'TI Board',
      status: 'on-hold',
      progress: 20,
      startDate: '2024-01-10',
      endDate: '2024-02-10',
      team: ['Robert Kim'],
      priority: 'high',
      description: 'Comprehensive security audit and vulnerability assessment',
      tasks: { total: 6, completed: 1, inProgress: 1, pending: 4 }
    }
  ];

  const legends = [
    { code: 'E/S', meaning: 'Epics and Stories' },
    { code: 'Doc', meaning: 'Documentation' },
    { code: 'UML', meaning: 'UML diagrams' },
    { code: 'DRR', meaning: 'Design Review Ready' },
    { code: 'DRS', meaning: 'Design Review Success' },
    { code: 'DRF', meaning: 'Design Review Fail' },
    { code: 'PL', meaning: 'Planning' },
    { code: 'PD', meaning: 'Pre-Design' },
    { code: 'DG', meaning: 'Designing' },
    { code: 'DR', meaning: 'Design Review' },
    { code: 'BL', meaning: 'Build' }
  ];

  const getLevelBadgeColor = (level: string) => {
    return level === 'B Level' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-blue-100 text-blue-800 border-blue-200';
  };

  const getStatusColor = (value: number) => {
    if (value === 0) return 'text-slate-500';
    if (value <= 2) return 'text-amber-600';
    return 'text-emerald-600';
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-200', icon: Play },
      completed: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200', icon: CheckCircle },
      planned: { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-200', icon: Clock },
      'on-hold': { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-200', icon: Pause }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config.icon;
    
    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-full border ${config.bg} ${config.text} ${config.border}`}>
        <Icon className="w-3 h-3" />
        {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      high: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' },
      medium: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' },
      low: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' }
    };
    
    const config = priorityConfig[priority as keyof typeof priorityConfig];
    
    return (
      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${config.bg} ${config.text} ${config.border}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  };

  const filteredSprints = sprintsList.filter(sprint => {
    const matchesSearch = sprint.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sprint.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || sprint.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-900">Engineering Dashboard</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-slate-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4" />
                  <span>Overview</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('sprints')}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'sprints'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Sprint Management</span>
                </div>
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'overview' ? (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Active Projects</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{projectsData.length}</p>
                    <p className="text-xs text-emerald-600 mt-1">+2 from last month</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Active Sprints</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{sprintsList.filter(s => s.status === 'active').length}</p>
                    <p className="text-xs text-emerald-600 mt-1">73% completion rate</p>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Total Dev Count</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">
                      {projectsData.reduce((sum, project) => 
                        sum + project.weeklyData.reduce((weekSum, week) => weekSum + week.devCount, 0), 0
                      )}
                    </p>
                    <p className="text-xs text-amber-600 mt-1">Across all projects</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">Avg Progress</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">68%</p>
                    <p className="text-xs text-emerald-600 mt-1">+5% from last week</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Data Section */}
            <div className="mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                  <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Weekly Progress Overview
                  </h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Board Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Project Manager</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Sprint Understanding</th>
                        {projectsData[0]?.weeklyData.map((week) => (
                          <th key={week.week} className="px-4 py-4 text-center text-sm font-semibold text-slate-700 min-w-[140px]">
                            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg px-3 py-2 mb-2 border border-amber-200">
                              <div className="font-semibold text-amber-800">{week.week}</div>
                              <div className="text-xs text-amber-700">{week.dateRange}</div>
                            </div>
                            <div className="text-xs text-slate-600 font-medium">Dev Count</div>
                          </th>
                        ))}
                      </tr>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th colSpan={3}></th>
                        {projectsData[0]?.weeklyData.map((week) => (
                          <th key={`${week.week}-headers`} className="px-2 py-3">
                            <div className="grid grid-cols-5 gap-1 text-xs font-semibold text-slate-600">
                              <div className="bg-slate-100 rounded px-1 py-1">BL</div>
                              <div className="bg-slate-100 rounded px-1 py-1">DR</div>
                              <div className="bg-slate-100 rounded px-1 py-1">DG</div>
                              <div className="bg-slate-100 rounded px-1 py-1">PD</div>
                              <div className="bg-slate-100 rounded px-1 py-1">PL</div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {projectsData.map((project, index) => (
                        <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-semibold text-slate-900">{project.boardName}</td>
                          <td className="px-6 py-4 text-sm text-slate-700">{project.projectManager}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getLevelBadgeColor(project.level)}`}>
                              {project.level}
                            </span>
                          </td>
                          {project.weeklyData.map((week) => (
                            <td key={`${project.boardName}-${week.week}`} className="px-2 py-4 text-center">
                              <div className="mb-2 text-sm font-bold text-slate-900 bg-slate-100 rounded-lg py-1">{week.devCount}</div>
                              <div className="grid grid-cols-5 gap-1 text-xs">
                                <div className={`${getStatusColor(week.bl)} bg-slate-50 rounded px-1 py-1 font-medium`}>{week.bl}/{week.bl + 2}</div>
                                <div className={`${getStatusColor(week.dr)} bg-slate-50 rounded px-1 py-1 font-medium`}>{week.dr}/{week.dr}</div>
                                <div className={`${getStatusColor(week.dg)} bg-slate-50 rounded px-1 py-1 font-medium`}>{week.dg}/{week.dg}</div>
                                <div className={`${getStatusColor(week.pd)} bg-slate-50 rounded px-1 py-1 font-medium`}>{week.pd}/{week.pd}</div>
                                <div className={`${getStatusColor(week.pl)} bg-slate-50 rounded px-1 py-1 font-medium`}>{week.pl}/{week.pl + 6}</div>
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Daily Status Section */}
            <div className="mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                  <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Daily Status
                  </h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">#</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Sprint Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Sprint Understanding</th>
                        <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg px-3 py-2 mb-2 border border-purple-200">
                            <div className="font-semibold text-purple-800">Week-1</div>
                          </div>
                          <div className="text-xs text-slate-600 font-medium">Dev Count</div>
                        </th>
                        <th className="px-4 py-4 text-center text-sm font-semibold text-slate-700">
                          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg px-3 py-2 mb-2 border border-purple-200">
                            <div className="font-semibold text-purple-800">Week-2</div>
                          </div>
                          <div className="text-xs text-slate-600 font-medium">Dev Count</div>
                        </th>
                      </tr>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th colSpan={3}></th>
                        <th className="px-2 py-3">
                          <div className="grid grid-cols-6 gap-1 text-xs font-semibold text-slate-600">
                            <div className="bg-slate-100 rounded px-1 py-1">E/S</div>
                            <div className="bg-slate-100 rounded px-1 py-1">Doc</div>
                            <div className="bg-slate-100 rounded px-1 py-1">UML</div>
                            <div className="bg-slate-100 rounded px-1 py-1">DRR</div>
                            <div className="bg-slate-100 rounded px-1 py-1">DRS</div>
                            <div className="bg-slate-100 rounded px-1 py-1">DRF</div>
                          </div>
                        </th>
                        <th className="px-2 py-3">
                          <div className="grid grid-cols-6 gap-1 text-xs font-semibold text-slate-600">
                            <div className="bg-slate-100 rounded px-1 py-1">E/S</div>
                            <div className="bg-slate-100 rounded px-1 py-1">Doc</div>
                            <div className="bg-slate-100 rounded px-1 py-1">UML</div>
                            <div className="bg-slate-100 rounded px-1 py-1">DRR</div>
                            <div className="bg-slate-100 rounded px-1 py-1">DRS</div>
                            <div className="bg-slate-100 rounded px-1 py-1">DRF</div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sprintsData.map((sprint, index) => (
                        <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 text-sm text-slate-700 font-medium">{index + 1}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-slate-900">{sprint.sprintName}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getLevelBadgeColor(sprint.level)}`}>
                              {sprint.level}
                            </span>
                          </td>
                          <td className="px-2 py-4 text-center">
                            <div className="mb-2 text-sm font-bold text-slate-900 bg-slate-100 rounded-lg py-1">{sprint.week1.devCount}</div>
                            <div className="grid grid-cols-6 gap-1 text-xs">
                              <div className="text-red-600 bg-red-50 px-1 py-1 rounded font-medium border border-red-200">{sprint.week1.es}</div>
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week1.doc}</div>
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week1.uml}</div>
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week1.drr}</div>
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week1.drs}</div>
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week1.drf}</div>
                            </div>
                          </td>
                          <td className="px-2 py-4 text-center">
                            <div className="mb-2 text-sm font-bold text-slate-900 bg-slate-100 rounded-lg py-1">{sprint.week2.devCount}</div>
                            <div className="grid grid-cols-6 gap-1 text-xs">
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week2.es}</div>
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week2.doc}</div>
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week2.uml}</div>
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week2.drr}</div>
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week2.drs}</div>
                              <div className="text-slate-600 bg-slate-50 px-1 py-1 rounded font-medium">{sprint.week2.drf}</div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Legends Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Legends
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {legends.map((legend, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg border border-slate-200 hover:shadow-sm transition-shadow">
                      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-bold min-w-[50px] text-center shadow-sm">
                        {legend.code}
                      </div>
                      <div className="text-sm text-slate-700 font-medium">{legend.meaning}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Sprint Management Tab */
          <div className="space-y-6">
            {/* Sprint Controls */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Sprint Management</h2>
                  <p className="text-sm text-slate-600 mt-1">Manage and track all your sprints in one place</p>
                </div>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm">
                  <Plus className="w-4 h-4" />
                  New Sprint
                </button>
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search sprints..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="planned">Planned</option>
                    <option value="on-hold">On Hold</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Sprint Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredSprints.map((sprint) => (
                <div key={sprint.id} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{sprint.name}</h3>
                        <p className="text-sm text-slate-600 mb-3">{sprint.description}</p>
                        <div className="flex items-center gap-2 mb-3">
                          {getStatusBadge(sprint.status)}
                          {getPriorityBadge(sprint.priority)}
                        </div>
                      </div>
                      <div className="relative">
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-700">Progress</span>
                        <span className="text-sm font-semibold text-slate-900">{sprint.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${sprint.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Task Summary */}
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-900">{sprint.tasks.total}</div>
                        <div className="text-xs text-slate-600">Total</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-emerald-600">{sprint.tasks.completed}</div>
                        <div className="text-xs text-slate-600">Done</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-amber-600">{sprint.tasks.inProgress}</div>
                        <div className="text-xs text-slate-600">In Progress</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-500">{sprint.tasks.pending}</div>
                        <div className="text-xs text-slate-600">Pending</div>
                      </div>
                    </div>

                    {/* Sprint Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Project:</span>
                        <span className="font-medium text-slate-900">{sprint.project}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Duration:</span>
                        <span className="font-medium text-slate-900">
                          {new Date(sprint.startDate).toLocaleDateString()} - {new Date(sprint.endDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Team:</span>
                        <div className="flex -space-x-1">
                          {sprint.team.slice(0, 3).map((member, index) => (
                            <div
                              key={index}
                              className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-xs font-medium text-white border-2 border-white"
                              title={member}
                            >
                              {member.split(' ').map(n => n[0]).join('')}
                            </div>
                          ))}
                          {sprint.team.length > 3 && (
                            <div className="w-6 h-6 bg-slate-400 rounded-full flex items-center justify-center text-xs font-medium text-white border-2 border-white">
                              +{sprint.team.length - 3}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-200">
                      <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                      <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-700 font-medium">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <div className="ml-auto">
                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredSprints.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">No sprints found</h3>
                <p className="text-slate-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;