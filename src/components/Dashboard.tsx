import React from 'react';
import { Calendar, Users, Target, TrendingUp, CheckCircle, AlertCircle, Clock, FileText } from 'lucide-react';

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

const Dashboard: React.FC = () => {
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
    return level === 'B Level' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  const getStatusColor = (value: number) => {
    if (value === 0) return 'text-gray-500';
    if (value <= 2) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Modern Engineering Process Dashboard</h1>
        <p className="text-gray-600">Track project progress and sprint metrics across teams</p>
      </div>

      {/* Weekly Data Section */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Weekly Progress Overview
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Board Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Project Manager</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Sprint Understanding</th>
                  {projectsData[0]?.weeklyData.map((week) => (
                    <th key={week.week} className="px-4 py-3 text-center text-sm font-medium text-gray-700 min-w-[120px]">
                      <div className="bg-yellow-100 rounded px-2 py-1 mb-1">{week.week} - ({week.dateRange})</div>
                      <div className="text-xs text-gray-600">Dev Count</div>
                    </th>
                  ))}
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th colSpan={3}></th>
                  {projectsData[0]?.weeklyData.map((week) => (
                    <th key={`${week.week}-headers`} className="px-2 py-2">
                      <div className="grid grid-cols-5 gap-1 text-xs font-medium text-gray-600">
                        <div>BL</div>
                        <div>DR</div>
                        <div>DG</div>
                        <div>PD</div>
                        <div>PL</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {projectsData.map((project, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{project.boardName}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{project.projectManager}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getLevelBadgeColor(project.level)}`}>
                        {project.level}
                      </span>
                    </td>
                    {project.weeklyData.map((week) => (
                      <td key={`${project.boardName}-${week.week}`} className="px-2 py-3 text-center">
                        <div className="mb-1 text-sm font-medium text-gray-900">{week.devCount}</div>
                        <div className="grid grid-cols-5 gap-1 text-xs">
                          <div className={getStatusColor(week.bl)}>{week.bl}/{week.bl + 2}</div>
                          <div className={getStatusColor(week.dr)}>{week.dr}/{week.dr}</div>
                          <div className={getStatusColor(week.dg)}>{week.dg}/{week.dg}</div>
                          <div className={getStatusColor(week.pd)}>{week.pd}/{week.pd}</div>
                          <div className={getStatusColor(week.pl)}>{week.pl}/{week.pl + 6}</div>
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
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Target className="w-5 h-5" />
              Daily Status
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">#</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Sprint Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Sprint Understanding</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    <div className="bg-purple-100 rounded px-2 py-1 mb-1">Week-1</div>
                    <div className="text-xs text-gray-600">Dev Count</div>
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    <div className="bg-purple-100 rounded px-2 py-1 mb-1">Week-2</div>
                    <div className="text-xs text-gray-600">Dev Count</div>
                  </th>
                </tr>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th colSpan={3}></th>
                  <th className="px-2 py-2">
                    <div className="grid grid-cols-6 gap-1 text-xs font-medium text-gray-600">
                      <div>E/S</div>
                      <div>Doc</div>
                      <div>UML</div>
                      <div>DRR</div>
                      <div>DRS</div>
                      <div>DRF</div>
                    </div>
                  </th>
                  <th className="px-2 py-2">
                    <div className="grid grid-cols-6 gap-1 text-xs font-medium text-gray-600">
                      <div>E/S</div>
                      <div>Doc</div>
                      <div>UML</div>
                      <div>DRR</div>
                      <div>DRS</div>
                      <div>DRF</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sprintsData.map((sprint, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{sprint.sprintName}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getLevelBadgeColor(sprint.level)}`}>
                        {sprint.level}
                      </span>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <div className="mb-1 text-sm font-medium text-gray-900">{sprint.week1.devCount}</div>
                      <div className="grid grid-cols-6 gap-1 text-xs">
                        <div className="text-red-600 bg-red-50 px-1 py-0.5 rounded">{sprint.week1.es}</div>
                        <div className="text-gray-600">{sprint.week1.doc}</div>
                        <div className="text-gray-600">{sprint.week1.uml}</div>
                        <div className="text-gray-600">{sprint.week1.drr}</div>
                        <div className="text-gray-600">{sprint.week1.drs}</div>
                        <div className="text-gray-600">{sprint.week1.drf}</div>
                      </div>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <div className="mb-1 text-sm font-medium text-gray-900">{sprint.week2.devCount}</div>
                      <div className="grid grid-cols-6 gap-1 text-xs">
                        <div className="text-gray-600">{sprint.week2.es}</div>
                        <div className="text-gray-600">{sprint.week2.doc}</div>
                        <div className="text-gray-600">{sprint.week2.uml}</div>
                        <div className="text-gray-600">{sprint.week2.drr}</div>
                        <div className="text-gray-600">{sprint.week2.drs}</div>
                        <div className="text-gray-600">{sprint.week2.drf}</div>
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Legends
          </h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {legends.map((legend, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-teal-600 text-white px-2 py-1 rounded text-sm font-medium min-w-[40px] text-center">
                  {legend.code}
                </div>
                <div className="text-sm text-gray-700">{legend.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900">{projectsData.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Sprints</p>
              <p className="text-2xl font-bold text-gray-900">{sprintsData.length}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Dev Count</p>
              <p className="text-2xl font-bold text-gray-900">
                {projectsData.reduce((sum, project) => 
                  sum + project.weeklyData.reduce((weekSum, week) => weekSum + week.devCount, 0), 0
                )}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-gray-900">73%</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <CheckCircle className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;