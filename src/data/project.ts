import type { ProjectObjective, TechStackItem } from '../types';

export const projectInfo = {
  title: 'Smart Agri-Crop Recommendation System',
  academicInfo: {
    department: 'Department of Computer Science and Engineering',
    projectType: 'College Mini-Project',
    academicYear: '2025 - 2026',
    domain: 'Artificial Intelligence, Machine Learning & Agriculture Support Systems',
  },
  problemStatement: `Agricultural productivity depends heavily on choosing crops aligned with natural soil chemistry and ambient microclimate. Traditional crop selection methods often rely on trial-and-error or legacy regional habits, ignoring real-time soil nutrient depletion (N, P, K levels), soil pH variations, microclimate temperature, humidity, and annual rainfall patterns. Misalignment leads to reduced crop yield, soil degradation, inefficient resource allocation, and unnecessary economic burden on farmers.`,
  
  summary: `This intelligent crop recommendation system provides data-driven decision support by analyzing seven core agricultural parameters (Nitrogen, Phosphorus, Potassium, Temperature, Humidity, Soil pH, and Rainfall) to recommend the most suitable crop for cultivation.`,
};

export const projectObjectives: ProjectObjective[] = [
  {
    title: 'Develop ML Recommendation Model',
    description: 'Implement machine learning algorithms trained on comprehensive soil and weather datasets to map environmental vectors to optimal crop types.',
    icon: 'Brain',
  },
  {
    title: 'Analyze Soil & Environmental Parameters',
    description: 'Process key soil chemistry (N-P-K, pH) and atmospheric conditions (temperature, humidity, precipitation) for precision agricultural insights.',
    icon: 'Sliders',
  },
  {
    title: 'Provide Actionable Crop Recommendations',
    description: 'Output clear crop suitability predictions along with agronomic rationale and nutrient considerations to guide crop planning.',
    icon: 'Sprout',
  },
  {
    title: 'Support Data-Driven Decisions',
    description: 'Replace subjective farming decisions with empirical data science model evaluations for improved yield stability.',
    icon: 'BarChart3',
  },
  {
    title: 'Create Intuitive Web Interface',
    description: 'Deliver an accessible, responsive user interface allowing students, researchers, and farmers to test input scenarios easily.',
    icon: 'Layout',
  },
];

export const methodologySteps = [
  {
    step: 1,
    title: 'Data Collection',
    description: 'Gather agricultural dataset containing 2,200 records across 22 crop classes with 7 feature attributes.',
    details: 'Dataset features: Nitrogen (N), Phosphorus (P), Potassium (K), Temperature (°C), Humidity (%), pH level, Rainfall (mm).',
    icon: 'Database',
  },
  {
    step: 2,
    title: 'Data Preprocessing',
    description: 'Clean data, check missing values, normalize continuous numerical features, and partition into training/testing sets.',
    details: 'Executed standard feature scaling and 80-20 train-test splitting in Python environment.',
    icon: 'Filter',
  },
  {
    step: 3,
    title: 'Feature Selection',
    description: 'Analyze feature correlation matrix to evaluate feature importance of soil nutrients and atmospheric variables.',
    details: 'Correlation mapping ensures non-redundant parameters enter model training.',
    icon: 'CheckSquare',
  },
  {
    step: 4,
    title: 'Model Training',
    description: 'Train supervised classification models (Random Forest Classifier / Gaussian Naive Bayes / Decision Tree).',
    details: 'Optimized model hyperparameters using Scikit-Learn cross-validation.',
    icon: 'Cpu',
  },
  {
    step: 5,
    title: 'Prediction Engine',
    description: 'Expose model inference via RESTful API (Flask) returning target crop label given 7 input features.',
    details: 'Service layer structures request payloads in standard JSON format.',
    icon: 'Zap',
  },
  {
    step: 6,
    title: 'Crop Recommendation',
    description: 'Render interactive UI with predicted crop, match confidence, agronomic tips, and parameter breakdown.',
    details: 'Presents user-friendly visualization for demo and academic presentation.',
    icon: 'Award',
  },
];

export const techStackItems: TechStackItem[] = [
  {
    name: 'React',
    category: 'Frontend UI',
    description: 'Component-based UI library for building interactive, declarative user interfaces.',
    iconName: 'Code2',
    isIntegratedNow: true,
  },
  {
    name: 'TypeScript',
    category: 'Frontend UI',
    description: 'Typed JavaScript variant for strict type checking and scalable frontend code.',
    iconName: 'FileCode2',
    isIntegratedNow: true,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend UI',
    description: 'Utility-first CSS framework for modern responsive styling and glassmorphism UI.',
    iconName: 'Palette',
    isIntegratedNow: true,
  },
  {
    name: 'Python',
    category: 'Backend ML',
    description: 'Primary language for machine learning modeling, data analytics, and Flask API script.',
    iconName: 'Terminal',
    isIntegratedNow: false,
  },
  {
    name: 'Flask',
    category: 'Backend ML',
    description: 'Lightweight WSGI web application framework for serving ML model predictions via REST API.',
    iconName: 'Server',
    isIntegratedNow: false,
  },
  {
    name: 'Scikit-learn',
    category: 'Backend ML',
    description: 'Python ML library for model training (Random Forest, Decision Tree, Naive Bayes).',
    iconName: 'BrainCircuit',
    isIntegratedNow: false,
  },
  {
    name: 'Pandas & NumPy',
    category: 'Data Processing',
    description: 'Numerical computing and tabular data manipulation for dataset analysis.',
    iconName: 'Table',
    isIntegratedNow: false,
  },
  {
    name: 'Vite',
    category: 'Frontend UI',
    description: 'Next-generation frontend tooling offering fast hot-module reload and optimized builds.',
    iconName: 'Zap',
    isIntegratedNow: true,
  },
];
