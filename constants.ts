import type { NavLink, SocialLink, Stat, ExperienceItem, Project, SkillCategory, ProfessionalSkill, EducationItem } from './types';
import { 
    LinkedInIcon, GithubIcon, MailIcon, UserTieIcon, FolderOpenIcon, BriefcaseIcon, CodeIcon, ServerIcon, DatabaseIcon, WarehouseIcon, ClipboardListIcon, TrophyIcon, RocketIcon, ExternalLinkIcon, GraduationCapIcon
} from './components/icons';

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { href: 'https://linkedin.com/in/wahyu-heriyanto', icon: LinkedInIcon, label: 'LinkedIn' },
  { href: 'https://github.com/wahyuheriyanto', icon: GithubIcon, label: 'GitHub' },
  { href: 'mailto:pandanca7@gmail.com', icon: MailIcon, label: 'Email' },
];

export const stats: Stat[] = [
    { value: '8+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '2', label: 'Major WMS Systems' },
    { value: '100%', label: 'Client Satisfaction' },
];

export const experienceData: ExperienceItem[] = [
    {
        date: 'Nov 2015 - Present',
        title: 'Section Head Asset dan Logistik',
        company: 'Trans TV',
        description: 'Leading digital transformation initiatives in asset and logistics management, developing innovative solutions for warehouse operations and inventory tracking.',
        responsibilities: [
            'Spearheaded the architectural design and development of a bespoke Warehouse Management System (WMS) from concept to deployment.',
            'Engineered a PostgreSQL database schema to manage over 10,000 SKUs, ensuring high data integrity and reducing stock discrepancies by 95%.',
            'Developed and integrated a barcode/QR code scanning system, increasing the efficiency of asset check-in/check-out processes by 70%.',
            'Built RESTful APIs with Node.js to automate data synchronization between the WMS and other internal corporate systems.',
            'Automated the generation of daily and monthly inventory reports, saving an estimated 20+ hours of manual administrative work per week.',
            'Managed the full project lifecycle, including budgeting, procurement, vendor coordination, and user training across multiple departments.',
        ],
        achievement: {
            icon: TrophyIcon,
            text: 'Best Employee 2021 - Cash award of Rp10,000,000 for operational system digitalization innovation',
        },
    },
    {
        date: 'Jul 2012 - Jan 2014',
        title: 'Supervisor Restoran',
        company: 'JCO Coffee',
        description: 'Managed restaurant operations with focus on quality control, team leadership, and customer satisfaction.',
        responsibilities: [
            'Led outlet teams in maintaining product quality standards and customer service',
            'Managed daily operations, inventory, and sales report administration',
            'Trained staff to ensure optimal service and customer satisfaction',
        ],
    },
];

// --- PERUBAHAN DI SINI ---
// Data pendidikan Anda yang baru telah dimasukkan
export const educationData: EducationItem[] = [
    {
        date: 'Lulus 2010',
        degree: 'Sarjana Ekonomi (S.E.) - Akuntansi',
        institution: 'Universitas Muhammadiyah Prof. Dr. Hamka, Jakarta',
        description: 'Lulus dengan Indeks Prestasi Kumulatif (IPK) 3.28 dari 4.00, dengan pemahaman mendalam pada audit dan sistem informasi akuntansi.',
        link: 'https://drive.google.com/file/d/1lba4iROTXz0-WwDr2lxNF1scnnl0cmXG/view'
    },
];

export const projectsData: Project[] = [
    {
        icon: WarehouseIcon,
        title: 'Warehouse Management System (WMS)',
        description: 'Web-based application designed to digitalize asset management and logistics processes in corporate environments. Features comprehensive tracking and role-based access control.',
        features: [
            'CRUD operations for asset data management',
            'Real-time asset movement tracking between locations',
            'Role-based user authentication using JWT',
            'Interactive dashboard for asset visualization',
        ],
        tech: ['Node.js', 'Express', 'React.js', 'PostgreSQL', 'REST API', 'JWT'],
        demoLink: '#contact',
        sourceLink: '#contact',
        imageUrl: '/assets/project-wms.png',
    },
    {
        icon: ClipboardListIcon,
        title: 'HRD & Asset Recording Application',
        description: 'Internal application helping HRD and logistics teams record assets, manage stock, and generate efficient inventory reports. Streamlines audit processes and inventory validation.',
        features: [
            'Comprehensive asset recording system',
            'Advanced stock management capabilities',
            'Automated inventory reporting',
            'Audit trail and validation features',
        ],
        tech: ['Node.js', 'Express', 'React.js', 'PostgreSQL', 'REST API'],
        demoLink: '#contact',
        imageUrl: '/assets/project-hrd.gif',
    },
    {
        icon: CodeIcon,
        title: 'API Integration Platform',
        description: 'Custom API integration platform for connecting various business systems and automating data synchronization between different departments and external vendors.',
        features: [
            'Multi-system API integration',
            'Real-time data synchronization',
            'Automated workflow management',
            'Comprehensive logging and monitoring',
        ],
        tech: ['Node.js', 'Express', 'TypeScript', 'MongoDB', 'REST API'],
        demoLink: '#contact',
        imageUrl: '/assets/project-api.png',
    },
];

export const skillCategories: SkillCategory[] = [
    {
        icon: ServerIcon,
        title: 'Backend Development',
        skills: [
            { name: 'Node.js', level: 90 },
            { name: 'Express.js', level: 85 },
            { name: 'API Integration', level: 85 },
            { name: 'JWT Authentication', level: 80 },
        ],
    },
    {
        icon: CodeIcon,
        title: 'Frontend Development',
        skills: [
            { name: 'React.js', level: 85 },
            { name: 'HTML/CSS', level: 90 },
            { name: 'JavaScript', level: 85 },
            { name: 'TypeScript', level: 75 },
        ],
    },
    {
        icon: DatabaseIcon,
        title: 'Database Management',
        skills: [
            { name: 'PostgreSQL', level: 80 },
            { name: 'SQL Server', level: 70 },
            { name: 'MongoDB', level: 65 },
        ],
    },
];

export const professionalSkills: ProfessionalSkill[] = [
    {name: 'WMS Architecture & Implementation'},
    {name: 'Logistics Process Automation'},
    {name: 'Inventory Digitalization Strategy'},
    {name: 'Data-Driven Reporting & Analysis'},
    {name: 'Technical Project Management'},
	{name: 'Vendor & Procurement Coordination'},
    {name: 'Suply Chain Management'},
	{name: 'Problem Solving'},
];
