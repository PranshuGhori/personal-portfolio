/**
 * PUBLIC CONTENT ONLY.
 *
 * Everything in this module is rendered on a public website and shipped in page
 * payloads. Professional (employer) work is described through sanitized,
 * qualitative summaries and fully synthetic examples. Never add internal
 * metrics, dataset sizes, thresholds, weights, provider names, identifiers,
 * file paths, or excerpts from internal documents here.
 *
 * `publicMetrics` arrays stay empty unless a metric has been explicitly
 * approved for public disclosure.
 *
 * This file has no imports so it can be checked by `npm test` with Node alone.
 */

export type Category = "data-science" | "machine-learning" | "data-systems";

export const CATEGORY_LABELS: Record<Category, string> = {
  "data-science": "Data Science",
  "machine-learning": "Machine Learning",
  "data-systems": "Data Systems",
};

export type StatusKind = "shipped" | "research" | "prototype" | "delivered";

export type Status = { label: string; kind: StatusKind };

export type PublicMetric = {
  label: string;
  value: string;
  /** Must be true for anything about employer work. */
  approvedForPublic: true;
};

export type Decision = { title: string; body: string };

export type SubWork = { title: string; status: Status; body: string };

export type DiagramId =
  | "credit-pipeline"
  | "entity-resolution"
  | "data-layers"
  | "quality-flow"
  | "analytics-flow";

export type ExampleId =
  | "match-records"
  | "linked-sources"
  | "midrank-percentile"
  | "grain-sql";

export type CaseStudy = {
  slug: string;
  title: string;
  /** Short serif line used on the flagship panel and detail page header. */
  headline: string;
  summary: string;
  categories: Category[];
  status: Status;
  period: string;
  contribution: string;
  context: string[];
  decisions: Decision[];
  evaluation: { intro: string; items: Decision[] };
  outcome: string[];
  subwork: SubWork[];
  limitations: string[];
  lessons: string[];
  tools: string[];
  /** Short points shown inside the expandable detail on the homepage. */
  highlights: string[];
  diagram: DiagramId;
  example?: ExampleId;
  publicMetrics: PublicMetric[];
};

export const profile = {
  name: "Pranshu Ghori",
  initials: "PG",
  role: "Data Science Co-op",
  company: "Command Credit Corp",
  location: "Tempe, Arizona",
  availability: "Open to 2027 Data Science, ML, and AI opportunities",
  headline: "I turn messy data into useful decisions and dependable systems.",
  headlineLines: ["I turn messy data", "into useful decisions", "and dependable systems."],
  bio: "Data Science Co-op at Command Credit Corp and a concurrent Business Data Analytics and Artificial Intelligence student at Arizona State University. I work across the whole path from raw records to something people rely on: building labels where none exist, testing models honestly, and shipping the parts that hold up.",
  focus: [
    "Applied machine learning",
    "Evaluation",
    "Record linkage",
    "Data systems",
    "AI applications",
    "Statistics",
  ],
  portraitAlt:
    "Pranshu Ghori in a blue polo and sunglasses, standing in front of the Golden Gate Bridge on a clear day",
  links: {
    email: "pranshughori203@gmail.com",
    github: "https://github.com/PranshuGhori",
    linkedin: "https://www.linkedin.com/in/pranshughori",
  },
  /** No public resume file has been supplied, so no download link is shown. */
  resumeUrl: null as string | null,
} as const;

export const education = {
  school: "Arizona State University",
  location: "Tempe, Arizona",
  degrees: ["B.S. Business Data Analytics", "B.S. Artificial Intelligence"],
  note: "Concurrent degrees, both STEM-designated.",
  start: "Aug 2024",
  expectedGraduation: "Aug 2027",
  details: [
    { label: "Cumulative GPA", value: "4.00" },
    { label: "Expected graduation", value: "Aug 2027" },
  ],
  honors: ["Dean's List — Fall 2024", "Dean's List — Spring 2025", "Dean's List — Fall 2025", "Dean's List — Spring 2026"],
};

export type Role = {
  title: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  type: string;
  summary: string;
  points: string[];
  tags: string[];
  caseStudyLinks?: boolean;
};

export const experience: Role[] = [
  {
    title: "Data Science Co-op",
    org: "Command Credit Corp",
    location: "Scottsdale, Arizona",
    period: "May 2026 — Present",
    current: true,
    type: "Co-op · scheduled through Dec 2026",
    summary:
      "Data science across a business-credit product: outcome data, risk modeling, entity resolution, data quality, and analytics.",
    points: [
      "Built an outcome-labelled dataset from public filings and a regularized ranking score that ships in a business-credit product.",
      "Designed and shipped cross-provider entity matching with conflict safeguards, readable decision trails, and user confirmation for ambiguous cases.",
      "Audited completeness and comparability of commercial credit data and built percentile-based score displays with deterministic explanations.",
      "Prototyped a public-records business-data pipeline with record linkage, provenance, and transparent scoring experiments.",
      "Analyzed legacy product usage with SQL to inform the design of a replacement product.",
    ],
    tags: ["Python", "SQL", "DuckDB", "Polars", "scikit-learn", "TypeScript"],
    caseStudyLinks: true,
  },
  {
    title: "Machine Learning Engineer Intern",
    org: "Bigscal Technologies Pvt. Ltd.",
    location: "India",
    period: "May 2025 — Aug 2025",
    type: "Internship",
    summary: "Supported a machine learning team on modeling workflows.",
    points: [
      "Contributed to data preprocessing, feature engineering, and model training workflows in Python and scikit-learn.",
      "Built and tested classification and regression models and helped compare them during model selection.",
    ],
    tags: ["Python", "scikit-learn"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "credit-risk-modeling",
    title: "Commercial credit-risk modeling",
    headline: "Build the outcome labels first. Then earn a score.",
    summary:
      "Tested whether commercial credit signals separate businesses with observed adverse outcomes, then built a regularized ranking score that now ships in a business-credit product.",
    categories: ["data-science", "machine-learning"],
    status: { label: "Shipped score · separate research", kind: "shipped" },
    period: "2026",
    contribution:
      "I built the labelled outcome dataset, screened the available signals, developed and evaluated the model, and packaged the score with reference examples so the product implementation could be tested against it.",
    context: [
      "A business-credit report shows several scores, but there was no in-house evidence that they separate businesses that later run into trouble from businesses that do not. Without outcome labels, choosing between signals was a matter of opinion.",
      "The work had two questions. Do the existing signals rank businesses with observed adverse outcomes below the general population? And can a small, reviewable model rank them better than any single signal?",
    ],
    decisions: [
      {
        title: "Build labels from public records",
        body: "No labelled outcome set existed, so I built one. Public business filings were filtered to business entities, names were normalized, and each filing was linked to a commercial business record through staged matching: exact first, then known aliases, then guarded fuzzy matching. Only confident links entered the labelled set; ambiguous ones were left out rather than guessed.",
      },
      {
        title: "Compare against the population, not a convenience sample",
        body: "Comparison records came from a seeded random sample of the wider business population. The model therefore learns to separate outcomes from the kind of business a customer would actually look up.",
      },
      {
        title: "Screen every signal before modeling",
        body: "Each signal was evaluated on its own: does it discriminate at all, does it point the expected direction, and could its values be contaminated by information recorded after the outcome? Signals that failed were excluded before any model was fit.",
      },
      {
        title: "Prefer a small, transparent model",
        body: "I used regularized logistic regression on percentile-binned inputs. Binning handles heavy tails and heaped values without assuming a functional form, regularization keeps the bin weights stable, and the whole model can be reviewed line by line.",
      },
      {
        title: "Make the production port provable",
        body: "The model was developed in Python; the product is written in TypeScript. I packaged a dependency-free reference scorer and a set of reference examples, so the product implementation is tested against exact expected outputs instead of being trusted by inspection.",
      },
    ],
    evaluation: {
      intro:
        "The goal was to report how the score behaves under several realistic conditions, not one flattering number.",
      items: [
        {
          title: "Untouched held-out test set",
          body: "Set aside before any modeling and used for the final comparison only.",
        },
        {
          title: "Temporal and backward checks",
          body: "Trained on one period and tested on another — both later and earlier outcomes that never touched training — to see whether the ranking survives a change of period.",
        },
        {
          title: "Prospective forward check",
          body: "Tested on outcomes that occurred after the data snapshot was taken, the closest analogue to real use.",
        },
        {
          title: "Baseline comparison",
          body: "Compared with the existing signals on the same records and the same protocol.",
        },
        {
          title: "Leakage and selection-bias review",
          body: "Checked whether missing-value handling, or the matching process itself, was manufacturing signal. Larger businesses are easier to match, for example, which can make size look predictive for the wrong reason. The frame was corrected where it was.",
        },
        {
          title: "Reproducible scoring",
          body: "The Python reference and the TypeScript implementation agree on every reference example.",
        },
      ],
    },
    outcome: [
      "The score is integrated into a business-credit product as a customer-facing ranking.",
      "For the overall verdict shown to customers, the product needed something a reader could reconcile with the individual scores on the page. The shipped verdict is a transparent rule chosen by systematic search over candidate rules, not one of the research models.",
    ],
    subwork: [
      {
        title: "Ranking score",
        status: { label: "Shipped", kind: "shipped" },
        body: "Customer-facing ranking score with Python/TypeScript parity tests.",
      },
      {
        title: "Additional model families",
        status: { label: "Research", kind: "research" },
        body: "Explored more flexible models to understand the performance ceiling and test assumptions. Not shipped.",
      },
      {
        title: "Overall verdict",
        status: { label: "Shipped · rule-based", kind: "shipped" },
        body: "A transparent rule designed so the verdict never contradicts the scores beside it.",
      },
    ],
    limitations: [
      "Labels depend on matching. Outcomes that could not be linked confidently are missing, and matching is easier for some kinds of businesses than others.",
      "How comparison records are sampled shapes what the evaluation measures.",
      "This is a ranking tool. It is not a calibrated probability of default, and it is not deep learning.",
      "A forward period was checked, but performance needs ongoing monitoring as data and conditions change.",
    ],
    lessons: [
      "Most of the difficulty was in constructing trustworthy labels, not in fitting the model.",
      "Several validation views reported together are more honest than a single best result.",
      "Leakage checks earned their keep: one apparent improvement came from how missing data was handled, not from risk.",
    ],
    tools: ["Python", "DuckDB", "NumPy", "pandas", "SciPy", "scikit-learn", "Jupyter", "TypeScript"],
    highlights: [
      "Outcome labels built from public filings with staged name matching",
      "Regularized logistic regression on percentile-binned inputs",
      "Held-out, temporal, backward, and forward evaluation",
      "Python ↔ TypeScript parity on reference examples",
    ],
    diagram: "credit-pipeline",
    publicMetrics: [],
  },
  {
    slug: "entity-resolution",
    title: "Cross-provider entity resolution",
    headline: "Link confidently, ask when unsure, and explain every decision.",
    summary:
      "Matched the same business across inconsistent names and addresses from multiple commercial data providers, with conflict safeguards, a review path for ambiguous cases, and readable decision trails.",
    categories: ["data-systems"],
    status: { label: "Shipped matcher · research prototype", kind: "shipped" },
    period: "2026",
    contribution:
      "I designed and built the shared normalizer and matcher, wired them into search and resolution, added a secondary search source with merged ranking, and built the review flow for ambiguous matches. Separately, I built and blind-tested a probabilistic record-linkage prototype.",
    context: [
      "A customer searches for a business by name and location. Each provider returns its own candidates in its own format: legal suffixes come and go, streets are abbreviated differently, suites appear in one record and not another, and a branch can share an address with its parent.",
      "Linking the wrong record is worse than linking none, because the customer would see information about a different business. The design goal was to link when the evidence is clear, ask when it is not, and leave a readable explanation either way.",
    ],
    decisions: [
      {
        title: "One normalizer for every provider",
        body: "Each provider's record is projected into one neutral shape: name, street, city, state, and postal code. Text gets a readable form for searching and a collapsed key for comparison. Streets are parsed into components such as house number, road, and unit. The vocabulary of abbreviations and suffixes was generated from sample data and then reviewed by hand.",
      },
      {
        title: "Standard similarity, field by field",
        body: "Names are compared with edit-distance-based similarity, street names with character n-gram overlap, and location fields exactly. A different house number is a disagreement, not a near miss.",
      },
      {
        title: "Some conflicts are logic, not similarity",
        body: "A clear geographic conflict removes a candidate instead of lowering its score. A weak name match cannot be rescued by a matching address, which stops a different business at the same location from linking.",
      },
      {
        title: "Ambiguity is a first-class outcome",
        body: "Every candidate set ends in one of three outcomes: link, review, or no link. When two strong candidates are too close to call, the case goes to review instead of being decided by a hair.",
      },
      {
        title: "Ask the user, validate on the server",
        body: "When a match needs review, the user sees a short table of candidate records and confirms the right one. The server accepts only candidates it actually offered, exposes only opaque identifiers, and records the confirmation when the user proceeds.",
      },
      {
        title: "Readable decision trails",
        body: "Each decision carries a plain-language trail of what was compared and why it ended where it did. An internal debug view shows the same trail for diagnosing hard cases.",
      },
      {
        title: "A secondary search source",
        body: "When the primary source finds nothing, search falls back to a secondary provider. A “search again” path merges results from both and re-ranks them by closeness to the query.",
      },
    ],
    evaluation: {
      intro:
        "The shipped matcher and the research prototype were evaluated differently, and the results of one do not carry over to the other.",
      items: [
        {
          title: "Prototype: blind evaluation",
          body: "For the probabilistic prototype I sampled businesses at random, collected candidates from several providers, and labelled the true links by hand after the model's predictions were locked, so labelling could not drift toward the model.",
        },
        {
          title: "Prototype: decision-level measurement",
          body: "Measured whether the final decision for each business was right, including whether it correctly declined to link, rather than only how well candidate pairs were ranked.",
        },
        {
          title: "Shipped matcher: tests and review",
          body: "Unit tests cover normalization, comparison, conflict handling, and result merging. Thresholds are hand-set starting values; no statistical accuracy result has been established for this implementation yet.",
        },
      ],
    },
    outcome: [
      "The shared normalizer, matcher, secondary-source search, and server-validated confirmation flow shipped in the product.",
      "The probabilistic prototype remains unmerged research. Its evaluation informed the design but does not validate the shipped matcher.",
    ],
    subwork: [
      {
        title: "Deterministic matcher and search integration",
        status: { label: "Shipped", kind: "shipped" },
        body: "Shared normalization and comparison across providers, with merged multi-source search.",
      },
      {
        title: "User confirmation for ambiguous matches",
        status: { label: "Shipped", kind: "shipped" },
        body: "Review table with server-side validation of the user's choice.",
      },
      {
        title: "Probabilistic linkage prototype",
        status: { label: "Research · not merged", kind: "research" },
        body: "Fellegi–Sunter-style weight table evaluated blind against hand-labelled links.",
      },
    ],
    limitations: [
      "Hand-set thresholds are a starting point and need tuning against labelled outcomes.",
      "User confirmations will create data for future evaluation; a large labelled set does not exist yet.",
      "This is a deterministic matcher, not a trained model.",
      "Providers disagree about facts as well as formatting, so some cases genuinely need a person.",
    ],
    lessons: [
      "A “no link” answer needs as much design as a “link” answer.",
      "Locking predictions before labelling is cheap and removes a whole category of self-deception.",
      "Readable decision trails made hard cases much quicker to diagnose.",
    ],
    tools: ["TypeScript", "React", "SQL", "Python", "String similarity", "Record linkage"],
    highlights: [
      "Shared normalizer with parsed street components",
      "Edit-distance and n-gram similarity with hard conflict rules",
      "Link / review / no-link outcomes with decision trails",
      "Server-validated user confirmation for ambiguous cases",
    ],
    diagram: "entity-resolution",
    example: "match-records",
    publicMetrics: [],
  },
  {
    slug: "public-business-data-pipeline",
    title: "Public-record business-data pipeline",
    headline: "How far can public records go on a laptop?",
    summary:
      "A config-driven local pipeline that combines public records into one business reference, with layered processing, provenance, record linkage, and transparent modeling experiments.",
    categories: ["data-systems", "machine-learning"],
    status: { label: "Working local prototype", kind: "prototype" },
    period: "2026",
    contribution:
      "I designed and built the pipeline end to end — ingestion, normalization, linkage, enrichment, and export — and the evaluation work around it.",
    context: [
      "Public records describe businesses from many angles: registrations, liens, loans, licences, nonprofit filings, and government spending. Each source has its own identifiers, formats, and quirks, and none of them is a business directory on its own.",
      "The question was how far public records can go toward a useful business reference, and what it takes to combine them reliably on modest hardware.",
    ],
    decisions: [
      {
        title: "Layered, immutable processing",
        body: "Raw files are kept unchanged in dated snapshots. Each run moves through staging, normalization, identity, golden-record, and export layers, so every output can be traced to its source and rebuilt.",
      },
      {
        title: "Configuration over code",
        body: "Sources and column mappings live in configuration. Adding a source means a mapping and a small adapter, while every downstream step stays on one canonical schema.",
      },
      {
        title: "Columnar tools that fit in memory",
        body: "Polars and DuckDB over Parquet keep large joins and aggregations practical on a laptop, and streaming avoids decompressing large archives to disk.",
      },
      {
        title: "Deterministic links first",
        body: "Where records share an identifier they link on it directly. Only the remainder goes to probabilistic linkage, and records that stay ambiguous are kept as provisional entities rather than silently merged or dropped.",
      },
      {
        title: "Address enrichment with caching",
        body: "Addresses are geocoded through a public batch service with a distinct-address cache, so reruns and new sources only pay for addresses not seen before.",
      },
      {
        title: "Provenance on every field",
        body: "Each output field records which source supplied it, so coverage and disagreement can be measured per source.",
      },
    ],
    evaluation: {
      intro:
        "Evaluation focused on whether links are right, whether fields agree with an independent reference, and whether the data is internally consistent.",
      items: [
        {
          title: "Known-correct pairs for linkage",
          body: "Some records carry the registry identifier of the business they refer to. Those give a set of known-correct matches to tune and test the linker against, without hand labelling.",
        },
        {
          title: "Why stale addresses matter",
          body: "Filings record the address at the time of filing, so a business that has since moved disagrees on street, city, or postal code. Address penalties tuned for current addresses wrongly reject those true matches. A separate weight profile for filing-time addresses recovered them without loosening the name requirements.",
        },
        {
          title: "Why duplicate registry entries matter",
          body: "Registries contain re-registrations and duplicate entities with identical names. They contaminate naive estimates of what a non-match looks like, and they create “wrong” links that are really duplicates. Measuring precision honestly meant auditing those cases separately.",
        },
        {
          title: "Coverage and field agreement",
          body: "Compared the output with a commercial reference dataset for coverage and agreement on overlapping fields, and examined which kinds of businesses each side is missing.",
        },
        {
          title: "Data-quality checks",
          body: "Automated checks for missing shares, dangling links between tables, and join keys that fail silently — for example identifiers exported with thousands separators.",
        },
      ],
    },
    outcome: [
      "A working local prototype that builds a business reference from public sources across several states, with a queryable local warehouse and documented, repeatable runs.",
      "It is not deployed and is not a replacement for a commercial dataset.",
    ],
    subwork: [
      {
        title: "Pipeline and record linkage",
        status: { label: "Local prototype", kind: "prototype" },
        body: "Layered processing, deterministic and probabilistic linkage, geocoding, provenance.",
      },
      {
        title: "Transparent public-data score",
        status: { label: "Research", kind: "research" },
        body: "An additive score with reason codes, built from public evidence and calibrated per state to a reference scale on held-out records. Filing-history features — how recently and how often a business files — mattered most where annual reports are not required.",
      },
      {
        title: "Industry classifier",
        status: { label: "Research", kind: "research" },
        body: "Naive Bayes on business-name tokens with abstention, so it predicts only when confident. Self-training on confident predictions extended coverage; passes were compared at matched precision on a fixed holdout.",
      },
    ],
    limitations: [
      "A local prototype, not a production system or a vendor replacement.",
      "Agreement with a vendor's score is not the same as predicting real outcomes; the score has not been validated against outcomes.",
      "Registries and commercial datasets cover different populations. Sole proprietors, branch locations, and unregistered businesses are often absent from registries.",
      "Linkage precision is bounded by duplicate entities in the source registries themselves.",
    ],
    lessons: [
      "When a standard estimation method produces strange weights, check the labels before the method.",
      "Compare classifier passes at matched precision, not matched thresholds.",
      "A join rate near zero usually means a formatting problem, not a different identifier space.",
    ],
    tools: ["Python", "Polars", "DuckDB", "Parquet", "pytest", "rapidfuzz", "YAML", "Census Geocoder"],
    highlights: [
      "Raw → staging → normalized → identity → export layers",
      "Deterministic links first, probabilistic linkage for the rest",
      "Linker tuned on known-correct identifier pairs",
      "Naive Bayes industry classifier with abstention and self-training",
    ],
    diagram: "data-layers",
    example: "linked-sources",
    publicMetrics: [],
  },
  {
    slug: "credit-data-quality-benchmarking",
    title: "Credit-data quality and benchmarking",
    headline: "Know what the data means before you show it to anyone.",
    summary:
      "Audited completeness, comparability, and meaning in commercial credit data, and turned the findings into recommendations and more interpretable score displays.",
    categories: ["data-science"],
    status: { label: "Analysis delivered · displays shipped", kind: "delivered" },
    period: "2026",
    contribution:
      "I designed the sampling, ran the field-level audit and cross-source comparisons, and built the percentile-based display logic and deterministic explanation templates.",
    context: [
      "A credit product is only as good as its understanding of the data underneath it. Before relying on a dataset, the team needed to know which fields are actually populated, what the scores mean, and how they compare with independent sources.",
      "Raw scores also arrive on arbitrary scales. A customer cannot read them without a reference point.",
    ],
    decisions: [
      {
        title: "Representative samples from large files",
        body: "Reservoir sampling streams a very large file once and draws a uniform random sample with a recorded seed. That matters because large files are often sorted, so the first rows are not representative of the rest.",
      },
      {
        title: "Missing is not zero",
        body: "Fill rates distinguish true nulls, placeholder strings, and zeros that mean “no data”. Treating a placeholder as a real value biases every statistic downstream.",
      },
      {
        title: "Look at the shape before summarizing",
        body: "Distribution fitting, normality tests, and density plots, plus checks for heaped values — many records sharing one value — which change how percentiles should be computed.",
      },
      {
        title: "Compare sources by rank, not raw scale",
        body: "Providers use different scales, so comparisons used rank correlation, weighted agreement on ordered classes, and equipercentile equating, with bootstrap intervals for uncertainty.",
      },
      {
        title: "Percentiles customers can read",
        body: "Score displays use midrank percentiles against a reference population, which places tied values fairly, with tiers set from the population distribution rather than from documentation.",
      },
      {
        title: "Deterministic explanations",
        body: "Customer-facing explanations are fixed templates selected by which condition applies, and wording strength was matched to how often independent information agrees with the statement. No generated text is involved.",
      },
    ],
    evaluation: {
      intro: "This was measurement work, so evaluation meant stating uncertainty and checking that the pipeline read the data correctly.",
      items: [
        {
          title: "Uncertainty stated",
          body: "Bootstrap intervals on key statistics, and display lookup tables checked against exact computation.",
        },
        {
          title: "Reproduction checks",
          body: "Where a provider publishes its own class labels, rebuilding them from the underlying scores confirmed the data was being read correctly.",
        },
        {
          title: "Methods chosen by test",
          body: "Normalization methods were compared with paired statistical tests rather than chosen by appearance.",
        },
      ],
    },
    outcome: [
      "Findings informed data-selection recommendations and the design of more interpretable score displays.",
      "Percentile bars, population-based tiers, explicit missing-data handling (“a missing score isn't a low score”), and deterministic explanations shipped in the product.",
    ],
    subwork: [
      {
        title: "Data-quality audit and benchmarking",
        status: { label: "Analysis delivered", kind: "delivered" },
        body: "Field-level audit, distribution analysis, and cross-source agreement study.",
      },
      {
        title: "Percentile displays and explanations",
        status: { label: "Shipped", kind: "shipped" },
        body: "Midrank percentile bars, tiers, missing-data handling, and template-based explanations.",
      },
    ],
    limitations: [
      "Agreement between providers is not ground truth. Low agreement shows uncertainty, not which source is right.",
      "A data-quality audit does not establish predictive performance.",
      "Percentile displays are relative to a reference sample and need refreshing as the population changes.",
    ],
    lessons: [
      "Documentation and data disagree more often than you would expect, so check both.",
      "“How much do independent sources agree?” is often more answerable than “is this source accurate?”",
    ],
    tools: ["Python", "pandas", "NumPy", "SciPy", "scikit-learn", "Matplotlib", "DuckDB", "Jupyter"],
    highlights: [
      "Seeded reservoir sampling from very large files",
      "Sentinel-aware fill rates and distribution analysis",
      "Rank correlation, weighted agreement, equipercentile equating",
      "Midrank percentile displays with deterministic explanations",
    ],
    diagram: "quality-flow",
    example: "midrank-percentile",
    publicMetrics: [],
  },
  {
    slug: "customer-product-analytics",
    title: "Customer and product analytics",
    headline: "Get the grain right, then let the history speak.",
    summary:
      "Analyzed usage and purchasing patterns in a legacy business-data product with SQL, to inform the design of its replacement.",
    categories: ["data-science"],
    status: { label: "Analysis and recommendations delivered", kind: "delivered" },
    period: "2026",
    contribution:
      "I wrote the analytical SQL, reconciled figures across systems, moved recurring analyses into Python, and wrote up the findings and recommendations.",
    context: [
      "Before building a replacement product, the team wanted evidence about how the existing one was actually used: who buys, what they buy, how often, and through which purchase paths.",
      "The history lived in a production relational database but had not been analyzed systematically.",
    ],
    decisions: [
      {
        title: "Define the grain first",
        body: "Orders, line items, and individual report pulls are different units. Each question was answered at an explicit grain, with distinct counts so composite orders were not double counted.",
      },
      {
        title: "Standard analytical SQL",
        body: "Multi-table joins, conditional aggregation, time bucketing, threshold filters, and cohort comparisons between periods.",
      },
      {
        title: "Reconcile before concluding",
        body: "Figures were reconciled across systems before any conclusion was drawn from them.",
      },
      {
        title: "Exclude what isn't real use",
        body: "Internal and test accounts were filtered out of every analysis.",
      },
      {
        title: "Make it repeatable",
        body: "Recurring analyses moved from ad-hoc queries into Python scripts so they could be re-run as data changed.",
      },
      {
        title: "Say what the data cannot answer",
        body: "Where the schema could not support a question — for example, events that were never recorded — the write-up said so instead of estimating.",
      },
    ],
    evaluation: {
      intro: "This was not a modeling project, so evaluation meant consistency and transparency.",
      items: [
        { title: "Explicit grain definitions", body: "Every figure states the unit it counts." },
        { title: "Reconciled totals", body: "Totals agree across the systems they were drawn from, or the difference is explained." },
        { title: "Documented exclusions and caveats", body: "What was filtered out, and what could not be measured, is written down." },
      ],
    },
    outcome: [
      "Analysis workbooks and written recommendations on adoption, product use, and what the replacement should support from the start.",
    ],
    subwork: [],
    limitations: [
      "Delivering recommendations does not establish that they were adopted or what impact they had.",
      "Historical usage reflects the old product's design; it is not a forecast for a new one.",
    ],
    lessons: [
      "Most analytics errors in SQL are grain errors.",
      "Writing down what the data cannot answer is part of the analysis.",
    ],
    tools: ["SQL", "MySQL", "DBeaver", "Python", "pandas", "Excel"],
    highlights: [
      "Explicit grain with distinct counts",
      "Conditional aggregation, time bucketing, cohort comparison",
      "Cross-system reconciliation",
      "Recurring analyses automated in Python",
    ],
    diagram: "analytics-flow",
    example: "grain-sql",
    publicMetrics: [],
  },
];

export const FLAGSHIP_SLUG = "credit-risk-modeling";

export const flagshipEvidence = [
  "Untouched held-out test set",
  "Temporal, backward, and prospective forward checks",
  "Leakage and selection-bias review",
  "Python ↔ TypeScript parity on reference examples",
];

export type Project = {
  slug: string;
  title: string;
  kind: "AI application" | "Machine learning" | "Data analysis";
  summary: string;
  points: string[];
  tech: string[];
  /** Public repository. Omitted when no public repository exists. */
  repo?: string;
};

/** Personal, public projects. Every claim here is checked against the linked repository. */
export const projects: Project[] = [
  {
    slug: "insightdesk",
    title: "InsightDesk",
    kind: "AI application",
    summary:
      "An LLM analytics assistant that answers executive questions over a SQL Server database, where every number is computed by deterministic SQL and the model only plans approved tool calls and explains the results.",
    points: [
      "The model never produces numbers itself: it plans calls to approved tools, deterministic SQL computes every figure, and the model explains what came back.",
      "Role-based tool permissions, strict JSON schemas for every tool call, and an audit trail of each request.",
      "A claim validator rejects any narrative that cites a number not present in the retrieved evidence.",
      "Seven reconciled metric contracts define how each business metric is calculated.",
      "Evaluation harness with held-out suites and release gates: scored 62% on blind cases, traced every miss to a defect, reached 16/16 on seen cases after fixes, and benchmarked against a text-to-SQL baseline.",
    ],
    tech: ["Python", "SQL Server", "SQLAlchemy", "Pydantic", "FastAPI", "OpenAI / Anthropic APIs", "pytest", "Docker"],
  },
  {
    slug: "frameguard",
    title: "FrameGuard",
    kind: "AI application",
    summary:
      "An agentic, multimodal video-compliance pipeline that uses retrieval-augmented generation to turn transcripts and on-screen text into evidence-grounded violation reports.",
    points: [
      "LangGraph workflow that indexes a video, then audits it against brand and compliance guidelines.",
      "Azure Video Indexer extracts transcripts and on-screen text (OCR); Azure AI Search retrieves the relevant guideline passages.",
      "GPT-4o produces a structured report with category, description, severity, and timestamps for each violation.",
      "Evaluated retrieval quality, groundedness, latency, cost, and failure modes with LangSmith and Azure Application Insights.",
      "FastAPI service, containerized with Docker, with CI/CD for automated testing and deployment.",
    ],
    tech: ["Python", "LangGraph", "GPT-4o", "Azure Video Indexer", "Azure AI Search", "LangSmith", "FastAPI", "Docker"],
    repo: "https://github.com/PranshuGhori/Brand-Compliance",
  },
  {
    slug: "rag-qa",
    title: "DocumentLoader — RAG Q&A",
    kind: "AI application",
    summary:
      "Ask questions about your own documents and get answers grounded in retrieved passages, with citations.",
    points: [
      "Ingests PDFs, text files, and web pages; chunks and embeds them into a persisted Chroma store.",
      "Retrieves top-k passages and answers with an xAI Grok model, streaming tokens and listing sources.",
      "Three interfaces over one core package: CLI, Streamlit chat, and a FastAPI service with server-sent events.",
      "Conversation memory across turns; Docker Compose for local runs.",
    ],
    tech: ["Python", "LangChain", "Chroma", "OpenAI embeddings", "xAI Grok", "FastAPI", "Streamlit"],
    repo: "https://github.com/PranshuGhori/documentloader",
  },
  {
    slug: "brochure-generator",
    title: "Corporate Brochure Generator",
    kind: "AI application",
    summary: "Turns a company website into a Markdown brochure using a language model at two steps.",
    points: [
      "Collects links from a homepage, then asks the model which pages are relevant (About, Products, Careers).",
      "Scrapes the selected pages and passes the combined content to the model to write the brochure.",
      "Scraping utilities kept in a separate module from the notebook that runs the pipeline.",
    ],
    tech: ["Python", "xAI Grok", "Requests", "BeautifulSoup", "Jupyter"],
    repo: "https://github.com/PranshuGhori/Corporate-Brochure-Generator",
  },
  {
    slug: "california-housing",
    title: "California Housing Price Prediction",
    kind: "Machine learning",
    summary: "A complete scikit-learn preprocessing and regression pipeline on the California Housing dataset.",
    points: [
      "Stratified train/test split, imputation, one-hot encoding, and scaling inside one ColumnTransformer pipeline.",
      "Ratio features, log transforms for heavy tails, and geographic similarity features from k-means cluster centers.",
      "Linear regression baseline evaluated with test RMSE.",
    ],
    tech: ["Python", "scikit-learn", "pandas", "NumPy"],
    repo: "https://github.com/PranshuGhori/california-housing-price-prediction",
  },
  {
    slug: "ml-from-scratch",
    title: "Machine Learning from Scratch",
    kind: "Machine learning",
    summary: "Regression algorithms implemented in NumPy with the math written out alongside the code.",
    points: [
      "Linear regression by gradient descent and by the normal equation.",
      "Locally weighted regression with a Gaussian kernel.",
    ],
    tech: ["Python", "NumPy", "Jupyter"],
    repo: "https://github.com/PranshuGhori/ml-from-scratch",
  },
  {
    slug: "flight-delays",
    title: "U.S. Flight Delays and Cancellations",
    kind: "Data analysis",
    summary: "Exploratory analysis of roughly three million U.S. flights from 2019 to 2023 (public Kaggle dataset).",
    points: [
      "Delay and cancellation patterns by airline, route, season, and time of day.",
      "Breakdown of delay minutes by reported cause.",
      "Time-based features (hour, weekday, season) and visual summaries.",
    ],
    tech: ["Python", "pandas", "NumPy", "Matplotlib", "Seaborn"],
    repo: "https://github.com/PranshuGhori/flightdata-eda",
  },
];

export type ToolGroup = { title: string; tools: string[]; usedIn: string };

/** Only technologies connected to the work shown on this site. */
export const toolkit: ToolGroup[] = [
  {
    title: "Languages and data",
    tools: ["Python", "SQL", "TypeScript", "Polars", "pandas", "NumPy", "DuckDB", "SQL Server", "Parquet", "Jupyter"],
    usedIn: "Every professional study and most personal projects.",
  },
  {
    title: "Modeling and statistics",
    tools: [
      "scikit-learn",
      "Regularized logistic regression",
      "Naive Bayes",
      "SciPy",
      "Bootstrap intervals",
      "Rank correlation",
      "Agreement measures",
    ],
    usedIn: "Credit-risk modeling, data-quality benchmarking, the public-data pipeline, and the housing model.",
  },
  {
    title: "Record linkage and evaluation",
    tools: [
      "Edit-distance similarity",
      "n-gram similarity",
      "Fellegi–Sunter linkage",
      "Blind evaluation",
      "Held-out and temporal validation",
    ],
    usedIn: "Entity resolution and the public-data pipeline.",
  },
  {
    title: "AI applications",
    tools: [
      "LangChain",
      "LangGraph",
      "Retrieval-augmented generation",
      "Tool calling",
      "LLM evaluation",
      "OpenAI / Anthropic APIs",
      "Chroma",
      "Azure OpenAI",
      "Azure AI Search",
      "Azure Video Indexer",
    ],
    usedIn: "InsightDesk, FrameGuard, the RAG Q&A app, and the brochure generator.",
  },
  {
    title: "Applications and tooling",
    tools: ["FastAPI", "Pydantic", "SQLAlchemy", "Streamlit", "React", "Next.js", "pytest", "Docker", "Git and GitHub"],
    usedIn: "Product integration work, personal project interfaces, and this site.",
  },
];

export const companyWorkNote =
  "Company work is presented through anonymized summaries and illustrative examples.";

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
