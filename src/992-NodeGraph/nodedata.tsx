export const nodes = [
  { id: 1, label: 'Opportunities at Hotel Chain', group: 1 },
  { id: 2, label: 'Application & Hosting Architecture', group: 2, parent: 1 },
  { id: 3, label: 'Applications development', group: 2, parent: 1 },
  { id: 4, label: 'Integrations', group: 2, parent: 1 },
  { id: 5, label: 'Data storage & management', group: 2, parent: 1 },
  { id: 6, label: 'Network & IT infrastructure', group: 2, parent: 1 },
  { id: 7, label: 'Off the shelve product evaluation', group: 2, parent: 1 },
  { id: 8, label: 'Content creation', group: 2, parent: 1 },
  { id: 9, label: 'IT Operations', group: 2, parent: 1 },
  { id: 10, label: 'Training & e-learning', group: 2, parent: 1 },
  { id: 11, label: 'Assessment & Consulting Services', group: 3, parent: 2 },
  { id: 12, label: 'Strategy & Planning Services', group: 3, parent: 2 },
  { id: 13, label: 'Design Services', group: 3, parent: 2 },
  { id: 14, label: 'Security & Compliance Services', group: 3, parent: 2 },
  { id: 15, label: 'Monitoring & Management Services', group: 3, parent: 2 },
  { id: 16, label: 'Performance Optimization Services', group: 3, parent: 2 },
  { id: 17, label: 'Backup & Disaster Recovery Services', group: 3, parent: 2 },
  { id: 18, label: 'Capacity Planning', group: 3, parent: 2 },
  { id: 19, label: 'Infra modernization', group: 3, parent: 2 },
  { id: 20, label: 'Infra migration', group: 3, parent: 2 },
  { id: 21, label: 'Devops', group: 3, parent: 2 },
  { id: 22, label: 'ALM', group: 3, parent: 2 },
  { id: 23, label: 'Web site development', group: 3, parent: 3 },
  { id: 24, label: 'API development', group: 3, parent: 3 },
  { id: 25, label: 'Portal development', group: 3, parent: 3 },
  { id: 26, label: 'Mobile app development', group: 3, parent: 3 },
  { id: 27, label: 'BI / decision making systems', group: 3, parent: 3 },
  { id: 28, label: 'Front end development', group: 3, parent: 3 },
  { id: 29, label: 'User interface design', group: 3, parent: 3 },
  { id: 30, label: 'Functional Testing', group: 3, parent: 3 },
  { id: 31, label: 'Performance testing', group: 3, parent: 3 },
  { id: 32, label: 'Security testing', group: 3, parent: 3 },
  { id: 33, label: 'Automation Testing', group: 3, parent: 3 },
  { id: 34, label: 'RPA', group: 3, parent: 3 },
  { id: 35, label: 'Software Modernization services', group: 3, parent: 3 },
  { id: 36, label: 'Devops', group: 3, parent: 3 },
  { id: 37, label: 'ALM', group: 3, parent: 3 },
  { id: 38, label: 'ECM', group: 3, parent: 3 },
];

export const links = [
  { source: 1, target: 2 },
  { source: 1, target: 3 },
  { source: 1, target: 4 },
  { source: 1, target: 5 },
  { source: 1, target: 6 },
  { source: 1, target: 7 },
  { source: 1, target: 8 },
  { source: 1, target: 9 },
  { source: 1, target: 10 },
  { source: 2, target: 11 },
  { source: 2, target: 12 },
  { source: 2, target: 13 },
  { source: 2, target: 14 },
  { source: 2, target: 15 },
  { source: 2, target: 16 },
  { source: 2, target: 17 },
  { source: 2, target: 18 },
  { source: 2, target: 19 },
  { source: 2, target: 20 },
  { source: 2, target: 21 },
  { source: 2, target: 22 },
  { source: 3, target: 23 },
  { source: 3, target: 24 },
  { source: 3, target: 25 },
  { source: 3, target: 26 },
  { source: 3, target: 27 },
  { source: 3, target: 28 },
  { source: 3, target: 29 },
  { source: 3, target: 30 },
  { source: 3, target: 31 },
  { source: 3, target: 32 },
  { source: 3, target: 33 },
  { source: 3, target: 34 },
  { source: 3, target: 35 },
  { source: 3, target: 36 },
  { source: 3, target: 37 },
  { source: 3, target: 38 },

  { source: 16, target: 31 },
  { source: 31, target: 16 },
];
export const interlinks = [{ source: 16, target: 31 }];
