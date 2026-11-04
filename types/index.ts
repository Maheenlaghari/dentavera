export interface NavItem {
  label: string;
  href: string;
}

export interface DoctorProfile {
  name: string;
  role: string;
  credentials: string;
  titleBadge: string;
  subheadline: string;
  experienceYears: string;
  experienceLabel: string;
  annualSurgeries: string;
  annualSurgeriesLabel: string;
  partnerBadge: string;
  performanceBadge: string;
  successRate: string;
  restoredArchesCount: string;
  protocolVerification: string;
  phoneDisplay: string;
  phoneRaw: string;
  photoUrl: string;
}

export interface ClinicalCondition {
  id: string;
  category: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  imageUrl: string;
}

export interface ImplantSolution {
  id: string;
  index: string;
  badge: string;
  title: string;
  description: string;
  subNote: string;
}

export interface NavigationModelSpec {
  title: string;
  statusText: string;
  accuracy: string;
  imageUrl: string;
  metrics: {
    value: string;
    label: string;
  }[];
  hotspots: {
    id: string;
    top: string;
    left: string;
    label: string;
    detail: string;
  }[];
}

export interface ArchDiagnosticItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge: string;
}

export interface QuizOption {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface QuizQuestion {
  id: string;
  stepNumber: number;
  question: string;
  options: QuizOption[];
}

export interface ValueAssuranceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface ClinicData {
  clinicName: string;
  clinicSubtitle: string;
  logoUrl: string;
  navItems: NavItem[];
  doctor: DoctorProfile;
  clinicalConditions: ClinicalCondition[];
  navigationModel: NavigationModelSpec;
  implantSolutions: ImplantSolution[];
  archDiagnostics: {
    badge: string;
    title: string;
    subtitle: string;
    items: ArchDiagnosticItem[];
    guaranteeTitle: string;
    guaranteeDescription: string;
  };
  candidateQuiz: {
    badge: string;
    title: string;
    subtitle: string;
    questions: QuizQuestion[];
    privacyNotice: string;
  };
  valueAssurances: ValueAssuranceItem[];
  footer: {
    description: string;
    straumannBadge: string;
    nobelBadge: string;
    focusLinks: FooterSection;
    protocolLinks: FooterSection;
    hours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    phoneDisplay: string;
    copyright: string;
    legalLicense: string;
    legalLinks: {
      label: string;
      href: string;
    }[];
  };
}
