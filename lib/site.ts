import {
  Award,
  BookOpenCheck,
  Globe2,
  HeartHandshake,
  Lightbulb,
  MessagesSquare,
  Network,
  Sprout,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

export const site = {
  name: 'Nandana Praveen',
  title: 'Year 1 MD Student',
  email: 'your@email.com',
}

export type Competency = {
  number: number
  slug: string
  title: string
  description: string
  icon: LucideIcon
}

export const competencies: Competency[] = [
  {
    number: 1,
    slug: 'medical-expert',
    title: 'Medical Expert',
    description:
      'Mastery of the clinical knowledge and skills that form the bedrock of medical practice.',
    icon: Stethoscope,
  },
  {
    number: 2,
    slug: 'evidence-based-practitioner-scholar',
    title: 'Evidence-Based Practitioner & Scholar',
    description:
      'Applying scientific reasoning and continuous learning to improve patient care.',
    icon: BookOpenCheck,
  },
  {
    number: 3,
    slug: 'patient-care-provider-health-advocate',
    title: 'Patient Care Provider & Health Advocate',
    description:
      'Responding to the health needs of both individual patients and their communities.',
    icon: HeartHandshake,
  },
  {
    number: 4,
    slug: 'communicator',
    title: 'Communicator',
    description:
      'Clear, empathetic and effective communication with patients, their families and healthcare teams.',
    icon: MessagesSquare,
  },
  {
    number: 5,
    slug: 'collaborator-innovator-leader',
    title: 'Collaborator, Innovator & Leader',
    description:
      'Teamwork, adaptive thinking and leadership within complex healthcare environments.',
    icon: Lightbulb,
  },
  {
    number: 6,
    slug: 'professional',
    title: 'Professional',
    description:
      'A commitment to ethical practice, integrity and accountability.',
    icon: Award,
  },
  {
    number: 7,
    slug: 'system-based-healthcare-advocate',
    title: 'System-Based Healthcare Advocate',
    description:
      'Understanding and influencing health system structures to promote better care.',
    icon: Network,
  },
  {
    number: 8,
    slug: 'self-profession-enhancer',
    title: 'Self & Profession Enhancer',
    description:
      'Lifelong learning, personal wellness and contributing to the advancement of the profession.',
    icon: Sprout,
  },
  {
    number: 9,
    slug: 'socially-accountable-practitioner',
    title: 'Socially Accountable Practitioner',
    description:
      'Serving diverse populations and responding to pressing societal health needs in the UAE.',
    icon: Globe2,
  },
]
