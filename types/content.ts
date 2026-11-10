export type IconName =
  | "Activity"
  | "CircleAlert"
  | "Clock"
  | "FileCheck"
  | "Moon"
  | "RefreshCw"
  | "Scan"
  | "ShieldAlert"
  | "ShieldCheck"
  | "Smile"
  | "SquareCheck"
  | "TriangleAlert";

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
}

export interface Brand {
  name: string;
  tagline: string;
}

export interface Contact {
  phoneDisplay: string;
  phoneRaw: string;
}

export interface HeaderContent {
  navItems: NavLink[];
  bookLabel: string;
}

export interface DoctorProfile {
  name: string;
  titleBadge: string;
  subheadline: string;
  stats: Stat[];
  primaryActionLabel: string;
  verificationNote: string;
  photoUrl: string;
  partnerBadge: string;
  role: string;
  credentials: string;
  speakerNote: string;
  ambassadorBadge: string;
  ambassadorTitle: string;
  ambassadorNote: string;
}

export interface SectionIntro {
  badge: string;
  title: string;
  subtitle: string;
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

export interface ClinicalConditionsContent extends SectionIntro {
  closeLabel: string;
  items: ClinicalCondition[];
}

export interface Hotspot {
  id: string;
  top: string;
  left: string;
  label: string;
  detail: string;
}

export interface NavigationModel {
  title: string;
  accuracy: string;
  imageUrl: string;
  metrics: { value: string; label: string }[];
  hotspots: Hotspot[];
}

export interface ImplantSolution {
  id: string;
  index: string;
  badge: string;
  title: string;
  description: string;
  note: string;
}

export interface ImplantSolutionsContent extends SectionIntro {
  model: NavigationModel;
  items: ImplantSolution[];
}

export interface DiagnosticItem {
  id: string;
  iconName: IconName;
  title: string;
  description: string;
  badge: string;
}

export interface ArchDiagnosticsContent extends SectionIntro {
  items: DiagnosticItem[];
  guaranteeTitle: string;
  guaranteeDescription: string;
  actionLabel: string;
}

export interface QuizOption {
  id: string;
  title: string;
  subtitle: string;
  iconName: IconName;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface CandidateQuizContent extends SectionIntro {
  questions: QuizQuestion[];
  contactQuestion: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successMessage: string;
  resetLabel: string;
  errorMessage: string;
  privacyNotice: string;
}

export interface ValueAssurance {
  id: string;
  iconName: IconName;
  title: string;
  description: string;
}

export interface ReviewsContent extends SectionIntro {
  ratingLabel: string;
  reviewCountLabel: string;
}

export interface ConsultationContent {
  badge: string;
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  contactLabel: string;
  contactPlaceholder: string;
  concernLabel: string;
  concerns: string[];
  submitLabel: string;
  submittingLabel: string;
  successTitle: string;
  successMessage: string;
  doneLabel: string;
  errorMessage: string;
  confidentialityNote: string;
}

export interface FooterContent {
  description: string;
  badges: string[];
  linkGroups: { title: string; links: NavLink[] }[];
  hoursTitle: string;
  hours: string[];
  directLineLabel: string;
  copyright: string;
  license: string;
  legalLinks: NavLink[];
}

export interface SiteContent {
  brand: Brand;
  contact: Contact;
  header: HeaderContent;
  doctor: DoctorProfile;
  clinicalConditions: ClinicalConditionsContent;
  implantSolutions: ImplantSolutionsContent;
  archDiagnostics: ArchDiagnosticsContent;
  candidateQuiz: CandidateQuizContent;
  valueAssurances: ValueAssurance[];
  reviews: ReviewsContent;
  consultation: ConsultationContent;
  footer: FooterContent;
}
