export interface JournalEntry {
  id: string;
  title: string;
  category: 'Build Log' | 'Security Notes' | 'Design Observations' | 'Project Thinking' | 'Learning Notes';
  date: string;
  preview: string;
  content: string;
  sample: boolean;
}

export const journalEntries: JournalEntry[] = [
  {
    id: 'j-01',
    title: 'Setting up the VISKOS storefront architecture',
    category: 'Build Log',
    date: '2025-08-15',
    preview: 'Deciding on the frontend stack for VISKOS — leaning toward a static-first approach with React and Tailwind for the storefront.',
    content: 'Working through the architecture for VISKOS. The storefront needs to feel fast and clean, so I am leaning toward a static-first build with React and Tailwind CSS. The product browsing experience is the priority — clear categories, good imagery, and a checkout flow that does not feel heavy. Still deciding on cart state management. Local state with context might be enough for the initial version.',
    sample: true,
  },
  {
    id: 'j-02',
    title: 'First pass with Burp Suite — intercepting requests',
    category: 'Security Notes',
    date: '2025-07-22',
    preview: 'Started exploring Burp Suite for web request inspection. The proxy intercept feature makes HTTP traffic visible in a way that clicks.',
    content: 'Spent time with Burp Suite today. The proxy intercept feature is genuinely useful — being able to pause, inspect, and forward HTTP requests makes the request-response cycle tangible. Practiced modifying headers and observing server responses. Also looked at Repeater for sending modified requests manually. The gap between reading about HTTP and actually seeing it in motion is significant.',
    sample: true,
  },
  {
    id: 'j-03',
    title: 'Typography choices for a dark-mode identity site',
    category: 'Design Observations',
    date: '2025-09-01',
    preview: 'Choosing between Inter, Space Grotesk, and JetBrains Mono for a digital identity website. Each serves a different purpose.',
    content: 'Thinking about typography for this site. Space Grotesk for display headings — it has personality without being loud. Inter for body text because it is clean and readable at small sizes. JetBrains Mono for labels, tags, and technical metadata — the monospace feel reinforces the technical identity. The combination of a display sans, a body sans, and a mono creates three clear layers of information hierarchy.',
    sample: true,
  },
  {
    id: 'j-04',
    title: 'MEGH-SCAN — what problem am I actually solving?',
    category: 'Project Thinking',
    date: '2025-06-10',
    preview: 'Revisiting the core question behind MEGH-SCAN. It is not about scanning — it is about making urban problems visible.',
    content: 'Revisiting the core question behind MEGH-SCAN. The real problem is not scanning — it is visibility. Urban issues in Meghalaya recur because they are not tracked or categorized in a way that makes patterns visible. The concept should focus on identification and categorization first, then visualization. AI is a tool in the pipeline, not the product itself. Need to resist the temptation to over-engineer before the basic identification framework is solid.',
    sample: true,
  },
  {
    id: 'j-05',
    title: 'Learning Linux through OverTheWire Bandit',
    category: 'Learning Notes',
    date: '2025-05-18',
    preview: 'Working through the Bandit wargame on OverTheWire. Each level teaches a specific Linux concept through a practical challenge.',
    content: 'Working through the Bandit wargame on OverTheWire. Each level is a small puzzle that teaches a specific Linux tool or concept — file permissions, find, grep, SSH, tar, base64 encoding. The hands-on format works better for me than reading documentation in isolation. Completed levels 0 through 15 so far. The difficulty curve is well designed — each level builds on the previous one without a huge leap.',
    sample: true,
  },
  {
    id: 'j-06',
    title: 'Solar service website — structuring the information',
    category: 'Project Thinking',
    date: '2025-07-05',
    preview: 'Mapping out the user journey for Megha Solar Solutions. A visitor needs to understand the service, then find a way to act.',
    content: 'Mapping out the user journey for Megha Solar Solutions. A visitor arrives, needs to understand what services exist (installation, maintenance, repair), then find a way to act on that understanding. The website structure should follow that flow — clear service categories first, then detail pages, then contact. Avoiding the trap of making every page a landing page. The goal is clarity, not persuasion.',
    sample: true,
  },
];
