import { createServerFn } from "@tanstack/react-start";

export type Partner = {
  id: string;
  name: string;
  short_name: string | null;
  country: string;
  region: string;
  category: string;
  themes: string[];
  logo_url: string | null;
  strategic_relevance: string;
  initiatives: string[];
  tier: number;
  sort_order: number;
};

export type Theme = {
  id: string;
  slug: string;
  title: string;
  focus: string;
  associated_partner_short_names: string[];
  sort_order: number;
};

export type Metric = {
  id: string;
  slug: string;
  label: string;
  value: number;
  unit: string | null;
  caption: string | null;
  sort_order: number;
};

export type Opportunity = {
  id: string;
  title: string;
  region: string;
  partner_short_names: string[];
  status: string;
  relevance: string;
  occurred_on: string;
  detail: string | null;
  link: string | null;
};

export type InitiativeMediaRow = {
  opportunity_id: string;
  cover_image_url: string | null;
  youtube_url: string | null;
  blog_url: string | null;
  reading_text: string | null;
};

type PartnerSeed = Omit<Partner, "id" | "logo_url" | "initiatives"> & {
  logo_url?: string | null;
  initiatives?: string[];
};

// prettier-ignore
const PARTNER_SEED: PartnerSeed[] = [
  { name: "Harvard University", short_name: "Harvard", country: "USA", region: "North America", category: "University", themes: ["Research & Commercialisation", "Health & Life Sciences"], strategic_relevance: "Prestigious research and educational institution with world-leading programs", tier: 1, sort_order: 1 },
  { name: "Massachusetts Institute of Technology", short_name: "MIT", country: "USA", region: "North America", category: "University", themes: ["AI & Sovereign Compute", "Research & Commercialisation"], strategic_relevance: "World-renowned technology and research institution driving innovation", tier: 1, sort_order: 2 },
  { name: "National Aeronautics and Space Administration", short_name: "NASA", country: "USA", region: "North America", category: "Government Space Agency", themes: ["Space & Deep Technology", "Research & Commercialisation"], strategic_relevance: "Leading global space exploration and advanced research agency", tier: 1, sort_order: 3 },
  { name: "Samsung Research", short_name: "Samsung", country: "South Korea", region: "Asia", category: "Technology Company", themes: ["AI & Sovereign Compute", "Technology Partners"], strategic_relevance: "Innovation and R&D in semiconductor, AI, and advanced technologies", tier: 1, sort_order: 4 },
  { name: "Sony Research", short_name: "Sony", country: "Japan", region: "Asia", category: "Technology Company", themes: ["Technology Partners", "Research & Commercialisation"], strategic_relevance: "Advanced research in electronics, imaging, and digital technologies", tier: 1, sort_order: 5 },
  { name: "Stanford University", short_name: "Stanford", country: "USA", region: "North America", category: "University", themes: ["AI & Sovereign Compute", "Research & Commercialisation"], strategic_relevance: "Leading research university in technology, AI, and innovation", tier: 1, sort_order: 6 },
  { name: "Columbia University", short_name: "Columbia", country: "USA", region: "North America", category: "University", themes: ["Research & Commercialisation", "Health & Life Sciences"], strategic_relevance: "Major research university in New York with global influence", tier: 2, sort_order: 7 },
  { name: "European Commission", short_name: "EU Commission", country: "Europe", region: "Europe", category: "Government Institution", themes: ["Science Diplomacy & International Partnerships", "Policy & Governance"], strategic_relevance: "Executive body of the European Union driving policy and research", tier: 2, sort_order: 8 },
  { name: "European Space Agency", short_name: "ESA", country: "Europe", region: "Europe", category: "Government Space Agency", themes: ["Space & Deep Technology", "Research & Commercialisation"], strategic_relevance: "International organization coordinating European space exploration", tier: 2, sort_order: 9 },
  { name: "G42", short_name: "G42", country: "UAE", region: "MENA", category: "Technology Company", themes: ["AI & Sovereign Compute", "Technology Partners"], strategic_relevance: "Advanced computing and sovereign AI solutions provider", tier: 2, sort_order: 10 },
  { name: "Hub71", short_name: "Hub71", country: "UAE", region: "MENA", category: "Startup Ecosystem", themes: ["Startup & Venture Ecosystem", "Innovation Diplomacy"], strategic_relevance: "Abu Dhabi's premier technology innovation and startup hub", tier: 2, sort_order: 11 },
  { name: "IIT Bombay", short_name: "IIT Bombay", country: "India", region: "Asia", category: "University", themes: ["Research & Commercialisation", "Education & Training"], strategic_relevance: "Leading Indian institute of technology with global partnerships", tier: 2, sort_order: 12 },
  { name: "Indian Space Research Organisation", short_name: "ISRO", country: "India", region: "Asia", category: "Government Space Agency", themes: ["Space & Deep Technology", "Research & Commercialisation"], strategic_relevance: "India's premier space agency and research organization", tier: 2, sort_order: 13 },
  { name: "Invest Cyprus", short_name: "Invest Cyprus", country: "Cyprus", region: "Europe", category: "Government Institution", themes: ["Investment & Commercialisation Pathways", "Innovation Diplomacy"], strategic_relevance: "Promoting foreign investment and business development in Cyprus", tier: 2, sort_order: 14 },
  { name: "Israel Innovation Authority", short_name: "Israel Innovation", country: "Israel", region: "MENA", category: "Government Institution", themes: ["Research & Commercialisation", "Innovation Diplomacy"], strategic_relevance: "Driving innovation and entrepreneurship ecosystem in Israel", tier: 2, sort_order: 15 },
  { name: "Japan Science & Technology Agency", short_name: "JSTA", country: "Japan", region: "Asia", category: "Government Institution", themes: ["Science Diplomacy & International Partnerships", "Research & Commercialisation"], strategic_relevance: "Promoting scientific advancement and international collaboration", tier: 2, sort_order: 16 },
  { name: "Khazna Data Centers", short_name: "Khazna", country: "UAE", region: "MENA", category: "Technology Infrastructure", themes: ["AI & Sovereign Compute", "Technology Partners"], strategic_relevance: "Regional data center and cloud infrastructure leader", tier: 2, sort_order: 17 },
  { name: "LG AI Research", short_name: "LG AI", country: "South Korea", region: "Asia", category: "Technology Company", themes: ["AI & Sovereign Compute", "Technology Partners"], strategic_relevance: "Advanced AI research and development center", tier: 2, sort_order: 18 },
  { name: "M42", short_name: "M42", country: "UAE", region: "MENA", category: "Technology Company", themes: ["AI & Sovereign Compute", "Technology Partners"], strategic_relevance: "Advanced technology and strategic research initiatives", tier: 2, sort_order: 19 },
  { name: "New Energy and Industrial Technology Development Organization", short_name: "NEDO", country: "Japan", region: "Asia", category: "Government Agency", themes: ["Technology Partners", "Research & Commercialisation"], strategic_relevance: "Japan's energy and industrial technology development leader", tier: 2, sort_order: 20 },
  { name: "Northwestern University", short_name: "Northwestern", country: "USA", region: "North America", category: "University", themes: ["Research & Commercialisation", "AI & Sovereign Compute"], strategic_relevance: "Leading engineering and research university", tier: 2, sort_order: 21 },
  { name: "Plug and Play Tech Center", short_name: "Plug and Play", country: "USA", region: "North America", category: "Startup Ecosystem", themes: ["Startup & Venture Ecosystem", "Innovation Diplomacy"], strategic_relevance: "Global innovation platform and startup accelerator network", tier: 2, sort_order: 22 },
  { name: "Reliance Jio", short_name: "Reliance Jio", country: "India", region: "Asia", category: "Technology Company", themes: ["Technology Partners", "Startup & Venture Ecosystem"], strategic_relevance: "India's leading digital infrastructure and connectivity provider", tier: 2, sort_order: 23 },
  { name: "Research & Innovation Foundation Cyprus", short_name: "RIF Cyprus", country: "Cyprus", region: "Europe", category: "Government Institution", themes: ["Research & Commercialisation", "Innovation Diplomacy"], strategic_relevance: "Supporting research and innovation in Cyprus", tier: 2, sort_order: 24 },
  { name: "RIKEN", short_name: "RIKEN", country: "Japan", region: "Asia", category: "Research Institute", themes: ["Research & Commercialisation", "AI & Sovereign Compute"], strategic_relevance: "Japan's leading comprehensive research institute", tier: 2, sort_order: 25 },
  { name: "Tensortent", short_name: "Tensortent", country: "Cyprus", region: "Europe", category: "Technology Startup", themes: ["Startup & Venture Ecosystem", "Technology Partners"], strategic_relevance: "Cyprus-based technology innovation and development startup", tier: 2, sort_order: 26 },
  { name: "University of Melbourne", short_name: "Melbourne", country: "Australia", region: "Oceania", category: "University", themes: ["Research & Commercialisation", "Education & Training"], strategic_relevance: "Leading Australian research university with global partnerships", tier: 2, sort_order: 27 },
];

export const getLandingData = createServerFn({ method: "GET" }).handler(
  async (): Promise<{
    partners: Partner[];
    themes: Theme[];
    metrics: Metric[];
    opportunities: Opportunity[];
    media: InitiativeMediaRow[];
  }> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    let [partnersR, themesR, metricsR, oppsR, mediaR] = await Promise.all([
      supabaseAdmin.from("partners" as never).select("*").order("sort_order"),
      supabaseAdmin.from("themes" as never).select("*").order("sort_order"),
      supabaseAdmin.from("metrics" as never).select("*").order("sort_order"),
      supabaseAdmin.from("opportunities" as never).select("*").order("occurred_on", { ascending: false }),
      supabaseAdmin.from("initiative_media" as never).select("*"),
    ]);

    if (!partnersR.error && (partnersR.data ?? []).length === 0) {
      const { error } = await supabaseAdmin.from("partners" as never).insert(PARTNER_SEED as never);
      if (error) console.error("partner seed error:", error);
      partnersR = await supabaseAdmin.from("partners" as never).select("*").order("sort_order");
    }

    if (partnersR.error) console.error("partners error:", partnersR.error);
    if (themesR.error) console.error("themes error:", themesR.error);
    if (metricsR.error) console.error("metrics error:", metricsR.error);
    if (oppsR.error) console.error("opportunities error:", oppsR.error);
    if (mediaR.error) console.error("initiative_media error:", mediaR.error);

    return {
      partners: (partnersR.data ?? []) as Partner[],
      themes: (themesR.data ?? []) as Theme[],
      metrics: (metricsR.data ?? []) as Metric[],
      opportunities: (oppsR.data ?? []) as Opportunity[],
      media: (mediaR.data ?? []) as InitiativeMediaRow[],
    };
  },
);
