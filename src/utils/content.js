import ArrowSwap from "../components/icons/ArrowSwap";
import CardSlash from "../components/icons/CardSlash";
import Cloud from "../components/icons/Cloud";
import DollarCircle from "../components/icons/DollarCircle";
import Import from "../components/icons/Import";
import Integrate from "../components/icons/Integrate";
import MagicPen from "../components/icons/MagicPen";
import Microphone from "../components/icons/Microphone";
import Note from "../components/icons/Note";
import Organization from "../components/icons/Organization";
import Search from "../components/icons/Search";
import Slack from "../components/icons/Slack";
import SMSNotification from "../components/icons/SMSNotification";
import TwoUsers from "../components/icons/TwoUsers";
import Lock from "../components/icons/Lock";

const navigationLinks = [
  {
    id: 1,
    link: "Home",
    href: "#",
  },
  {
    id: 2,
    link: "Pricing",
    href: "#",
  },
  {
    id: 3,
    link: "About",
    href: "#",
  },
  {
    id: 4,
    link: "Community",
    href: "#",
  },
];

const reviews = [
  {
    id: 1,
    src: new URL("../assets/headshots/img-1.webp", import.meta.url),
    alt: "Rachel Foster",
  },
  {
    id: 2,
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
    alt: "Emily Thompson",
  },
  {
    id: 3,
    src: new URL("../assets/headshots/img-5.webp", import.meta.url),
    alt: "Daniel Harris",
  },
  {
    id: 4,
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    alt: "Sarah Lee",
  },
  {
    id: 5,
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    alt: "Lucas King",
  },
];

const logos = [
  {
    id: 1,
    src: new URL("../assets/logos/Wipro.webp", import.meta.url),
    alt: "Wipro Logo",
  },
  {
    id: 2,
    src: new URL("../assets/logos/ExxonMobile.webp", import.meta.url),
    alt: "Exxon Mobile Logo",
  },
  {
    id: 3,
    src: new URL("../assets/logos/Microsoft.webp", import.meta.url),
    alt: "Microsoft Logo",
  },
  {
    id: 4,
    src: new URL("../assets/logos/Vice.webp", import.meta.url),
    alt: "Vice Logo",
  },
  {
    id: 5,
    src: new URL("../assets/logos/Walmart.webp", import.meta.url),
    alt: "Walmart Logo",
  },
  {
    id: 6,
    src: new URL("../assets/logos/Chase.webp", import.meta.url),
    alt: "Chase Logo",
  },
  {
    id: 7,
    src: new URL("../assets/logos/Visa.webp", import.meta.url),
    alt: "Visa Logo",
  },
  {
    id: 8,
    src: new URL("../assets/logos/Amazon.webp", import.meta.url),
    alt: "Amazon Logo",
  },
];

const frequentlyAskedQuestions = [
  {
    category: "General",
    id: 1,
    questions: [
      {
        id: 1,
        alt: "Main Icon",
        Icon: Note,
        question: "What is Tamrin?",
        answer:
          "Tamrin is an AI-powered training platform designed to upskill teams efficiently.\
          It provides personalized, adaptive learning for each employee,\
          aiming to save time and improve learning outcomes.",
      },
      {
        id: 2,
        alt: "Magic Pen Icon",
        Icon: MagicPen,
        question: "How does Tamrin use AI to enhance upskilling?",
        answer:
          "Tamrin uses AI to personalize learning paths, adapt content in real time, \
          track progress automatically, and deliver insights for targeted team development\
          —streamlining upskilling while maximizing impact.",
      },
      {
        id: 3,
        alt: "Two Users Icon",
        Icon: TwoUsers,
        question: "Can Tamrin be used for team collaboration?",
        answer:
          "Yes, Tamrin supports team collaboration by enabling shared learning goals, \
          peer progress visibility, group challenges, and manager-led initiatives within \
          the platform.",
      },
      {
        id: 4,
        alt: "Cloud Icon",
        Icon: Cloud,
        question: "Can I access Tamrin on multiple devices?",
        answer:
          "Yes, you can access Tamrin from any device, including your computer, tablet, and\
          smartphone. Our app syncs seamlessly across platforms, so your\
          training resources are always up-to-date and available whenever you need them.",
      },
    ],
  },
  {
    id: 2,
    category: "Pricing",
    questions: [
      {
        id: 5,
        alt: "Dollar Circle Icon",
        Icon: DollarCircle,
        question: "What pricing plans does Tamrin offer?",
        answer:
          "Tamrin offers several pricing tiers to meet the needs of both individuals and teams. \
          We have a free plan with basic features, as well as premium plans that provide advanced features \
          like unlimited storage, team collaboration tools, and more. You can find detailed information about \
          each plan on our Pricing page.",
      },
      {
        id: 6,
        alt: "Card Slash Icon",
        Icon: CardSlash,
        question: "Is there a free trial available for Tamrin",
        answer:
          "Tamrin offers several pricing tiers to meet the needs of both individuals and teams. \
          We have a free plan with basic features, as well as premium plans that provide advanced features \
          like unlimited storage, team collaboration tools, and more. You can find detailed information about \
          each plan on our Pricing page.",
      },
      {
        id: 7,
        alt: "Arrow Swap Icon",
        Icon: ArrowSwap,
        question: "Can I change or cancel my subscription anytime?",
        answer:
          "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time through your account \
          settings. If you decide to cancel, you will still have access to your plan’s features until the end of \
          your current billing cycle.",
      },
      {
        id: 8,
        alt: "Lock Icon",
        Icon: Lock,
        question: "Is my payment information secure with Tamrin",
        answer:
          "Yes, we take your security very seriously. All payment transactions are processed through secure, encrypted \
          channels. Tamrin uses industry-standard security protocols to ensure your payment information is always protected. \
          For additional peace of mind, we are also compliant with GDPR and other relevant data protection regulations.",
      },
    ],
  },
  {
    id: 3,
    category: "Features",
    questions: [
      {
        id: 9,
        alt: "Organization Icon",
        Icon: Organization,
        question: "How does the Adaptive Learning Engine work?",
        answer:
          "Tamrin's Adaptive Learning Engine uses AI to analyze each employee’s progress\
          and learning style, then adjusts the difficulty, content, and pace of training modules\
          in real time. This ensures learners stay engaged and are consistently challenged without being overwhelmed.",
      },
      {
        id: 10,
        alt: "SMS Notification Icon",
        Icon: SMSNotification,
        question: "How does the Skill Gap Analyzer feature work?",
        answer:
          "Tamrin’s Skill Gap Analyzer uses performance data and role-based benchmarks\
            to identify individual and team skill gaps. It then recommends specific training modules\
            to close those gaps, aligning learning with business needs.",
      },
      {
        id: 11,
        alt: "Microphone Icon",
        Icon: Microphone,
        question:
          "How does the Collaborative Learning Hub work?",
        answer:
          "The Collaborative Learning Hub allows team members to engage in shared courses,\
           group discussions, and peer reviews. AI highlights relevant topics and suggests\
           collaboration opportunities based on users’ progress and interests.",
      },
      {
        id: 12,
        alt: "Search Icon",
        Icon: Search,
        question:
          "How does the Progress Insights Dashboard work?",
        answer:
          "Tamrin’s Progress Insights Dashboard gives managers real-time analytics\
          on employee development. It tracks course completion, engagement levels, and\
          skill improvements, offering actionable insights to guide training strategies.",
      },
    ],
  },
  {
    id: 4,
    category: "Integrations",
    questions: [
      {
        id: 13,
        alt: "Organization Icon",
        Icon: Organization,
        question: "What integrations does Tamrin support?",
        answer:
          "Tamrin integrates with LMS platforms, HR systems, productivity tools,\
           and CRMs to streamline training delivery, align learning with roles,\
           enable in-platform engagement, and personalize content based on real-time data.",
      },
      {
        id: 14,
        alt: "Integrate Icon",
        Icon: Integrate,
        question: "Will Tamrin integrate with other apps in the future?",
        answer:
          "We are always working to expand our integration offerings to meet the needs of our users. We frequently \
        update Tamrin to support new and popular tools, so be sure to check back for new integrations that may \
        enhance your experience.",
      },
      {
        id: 15,
        alt: "Import Icon",
        Icon: Import,
        question:
          "How does Tamrin handle integration with other platforms?",
        answer:
          "Tamrin integrates with existing learning and HR systems\
          to import training content and sync employee data,\
          enabling seamless workflows and personalized, AI-driven upskilling across platforms.",
      },
      {
        id: 16,
        alt: "Slack Icon",
        Icon: Slack,
        question:
          "Does Tamrin integrate with team collaboration tools like Slack?",
        answer:
          "Yes, Tamrin integrates with team collaboration tools like Slack\
           to deliver training notifications, facilitate communication, and support collaborative learning within teams.",
      },
    ],
  },
];

const testimonials = [
  {
    id: 1,
    rating: 4,
    description:
      "Tamrin transformed our training process—personalized learning paths\
       have boosted employee engagement and skill growth.",
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
    name: "Emily Thompson",
    title: "HR Manager",
  },
  {
    id: 2,
    rating: 5,
    description:
      "With Tamrin’s AI-driven platform, our team upskilled faster and more efficiently than ever before.",
    src: new URL("../assets/headshots/img-3.webp", import.meta.url),
    name: "Michael Carter",
    title: "Learning & Development Lead",
  },
  {
    id: 3,
    rating: 5,
    description:
      "The adaptive training saved us countless hours while improving knowledge retention across departments.",
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    name: "Sarah Lee",
    title: "Operations Director",
  },
  {
    id: 4,
    rating: 4,
    description:
      "Tamrin’s insights helped us pinpoint skill gaps and tailor programs that truly meet our team’s needs.",
    src: new URL("../assets/headshots/img-4.webp", import.meta.url),
    name: "Jonathan Moore",
    title: "Training Coordinator",
  },
  {
    id: 5,
    rating: 4,
    description:
      "Our employees appreciate how the content adjusts to their pace, making learning less stressful and more effective.",
    src: new URL("../assets/headshots/img-11.webp", import.meta.url),
    name: "Rachel Foster",
    title: "Team Lead",
  },
  {
    id: 6,
    rating: 5,
    description:
      "Thanks to Tamrin, we’ve significantly reduced onboarding time while ensuring new hires are fully prepared.",
    src: new URL("../assets/headshots/img-5.webp", import.meta.url),
    name: "Daniel Harris",
    title: "Talent Acquisition Specialist",
  },
  {
    id: 7,
    rating: 4,
    description:
      "The seamless integration with our HR system means training is always aligned with employee roles and goals.",
    src: new URL("../assets/headshots/img-1.webp", import.meta.url),
    name: "Olivia Carter",
    title: "HRIS Analyst",
  },
  {
    id: 8,
    rating: 5,
    description:
      "AI-driven recommendations keep our workforce continuously growing and adapting to market demands.",
    src: new URL("../assets/headshots/img-6.webp", import.meta.url),
    name: "Thomas Williams",
    title: "Chief Learning Officer",
  },
  {
    id: 9,
    rating: 4,
    description:
      "Tamrin made it effortless to scale training across global teams with consistent quality and personalized focus.",
    src: new URL("../assets/headshots/img-8.webp", import.meta.url),
    name: "Jessica Gonzalez",
    title: "Global Training Manager",
  },
  {
    id: 10,
    rating: 5,
    description:
      "Our productivity improved because employees spend less time on irrelevant training and more on key skills.",
    src: new URL("../assets/headshots/img-13.webp", import.meta.url),
    name: "Aaron Mitchell",
    title: "Department Head",
  },
  {
    id: 11,
    rating: 4,
    description:
      "The progress dashboards give managers real-time visibility, enabling smarter coaching and support.",
    src: new URL("../assets/headshots/img-10.webp", import.meta.url),
    name: "Grace Stevens",
    title: "Senior Manager",
  },
  {
    id: 12,
    rating: 4,
    description:
      "Tamrin’s platform fosters collaboration and peer learning, which has boosted team morale and knowledge sharing.",
    src: new URL("../assets/headshots/img-14.webp", import.meta.url),
    name: "Ben Turner",
    title: "Project Manager",
  },
  {
    id: 13,
    rating: 5,
    description:
      "Automated tracking and reporting have streamlined compliance training for our regulated industry.",
    src: new URL("../assets/headshots/img-12.webp", import.meta.url),
    name: "Katherine Evans",
    title: "Compliance Officer",
  },
  {
    id: 14,
    rating: 4,
    description:
      "We’re impressed by how easily Tamrin adapts training content as our business evolves.",
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    name: "Lucas King",
    title: "Product Manager",
  },
  {
    id: 15,
    rating: 5,
    description:
      "The personalized learning experience keeps our employees motivated and engaged, driving better results.",
    src: new URL("../assets/headshots/img-2.webp", import.meta.url),
    name: "Natalie James",
    title: "CEO",
  },
];

const footerCols = [
  {
    id: 1,
    category: "Home",
    links: ["FAQ", "Features", "Companies", "Testimonials"],
  },
  {
    id: 2,
    category: "Pricing",
    links: ["Plans", "Billing", "Free Trial", "Refunds"],
  },
  {
    id: 3,
    category: "About",
    links: ["Careers", "Our Story", "Contact", "Policy"],
  },
  {
    id: 4,
    category: "Community",
    links: ["Forum", "Stories", "Blog", "Support"],
  },
];

const features = {
  AdaptiveLearningEngine: {
    alt: "Adaptive Learning Engine Graphic",
    heading: "Adaptive Learning Engine",
    description:
      "Adaptive Learning Engine is powered by AI to analyze each employee’s progress\
       and learning style, with the difficulty, content, and pace of training modules\
       adjusted in real time to maintain engagement and deliver appropriate challenges.",
  },
  Collaboration: {
    alt: "Collaboration graphic",
    heading: "Collaboration",
    description:
      "Shared courses, group discussions, and peer reviews\
       are enabled through the Collaborative Learning Hub,\
        with relevant topics and collaboration opportunities suggested by AI\
         based on users’ progress and interests.",
  },
};

export {
  navigationLinks,
  reviews,
  logos,
  frequentlyAskedQuestions,
  testimonials,
  footerCols,
  features,
};
