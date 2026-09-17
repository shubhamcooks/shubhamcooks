export interface SecurityStep {
  id: string;
  number: string;
  title: string;
  items: string[];
  status: string;
}

export const securityPath: SecurityStep[] = [
  {
    id: 'foundations',
    number: '01',
    title: 'FOUNDATIONS',
    items: ['Linux', 'Networking', 'Web Fundamentals'],
    status: 'Exploring',
  },
  {
    id: 'web-security',
    number: '02',
    title: 'WEB SECURITY',
    items: ['HTTP', 'Authentication', 'OWASP Concepts', 'Common Web Vulnerabilities'],
    status: 'Practicing',
  },
  {
    id: 'practice',
    number: '03',
    title: 'PRACTICE',
    items: ['TryHackMe', 'Hack The Box', 'OverTheWire'],
    status: 'Practicing',
  },
  {
    id: 'tools',
    number: '04',
    title: 'TOOLS',
    items: ['Burp Suite', 'OWASP ZAP', 'Postman', 'Semgrep', 'Trivy'],
    status: 'Building',
  },
  {
    id: 'documentation',
    number: '05',
    title: 'DOCUMENTATION',
    items: ['Findings', 'Evidence', 'Impact', 'Recommendations'],
    status: 'Documenting',
  },
];
