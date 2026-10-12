import type { ExampleId } from "@/content/public";
import { cn } from "@/lib/utils";

/**
 * Fully synthetic teaching examples. Names, addresses, identifiers, and values
 * are invented and do not describe any real business or system.
 */

function SyntheticLabel({ schema = false }: { schema?: boolean }) {
  return (
    <p className="eyebrow mb-4 inline-flex items-center gap-2 rounded-full border border-dashed border-line-strong px-3 py-1 text-muted">
      Illustrative example — synthetic {schema ? "schema" : "data"}
    </p>
  );
}

function Result({ tone, children }: { tone: "agree" | "partial" | "disagree" | "absent"; children: React.ReactNode }) {
  const styles = {
    agree: "text-accent",
    partial: "text-research",
    disagree: "text-ink-2 line-through decoration-line-strong",
    absent: "text-muted",
  }[tone];
  return <span className={cn("font-mono text-[0.72rem] uppercase tracking-[0.08em]", styles)}>{children}</span>;
}

function MatchRecords() {
  const rows = [
    { field: "Name", q: "Juniper Ridge Bakery LLC", a: "JUNIPER RIDGE BAKERY", ar: ["agree", "Agrees · suffix ignored"], b: "Juniper Ridge Catering Co", br: ["partial", "Partial"] },
    { field: "Street", q: "120 N Example St Ste 4", a: "120 North Example Street", ar: ["agree", "Agrees · unit absent"], b: "120 N Example St", br: ["agree", "Agrees"] },
    { field: "City", q: "Sampleton", a: "Sampleton", ar: ["agree", "Agrees"], b: "Sampleton", br: ["agree", "Agrees"] },
    { field: "State", q: "AZ", a: "AZ", ar: ["agree", "Agrees"], b: "AZ", br: ["agree", "Agrees"] },
  ] as const;

  return (
    <div>
      <SyntheticLabel />
      <div className="overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption className="sr-only">Comparing a search against two synthetic candidate records</caption>
          <thead className="bg-paper-2">
            <tr className="eyebrow text-muted">
              <th scope="col" className="px-4 py-3 font-normal">Field</th>
              <th scope="col" className="px-4 py-3 font-normal">Search</th>
              <th scope="col" className="px-4 py-3 font-normal">Candidate A</th>
              <th scope="col" className="px-4 py-3 font-normal">Candidate B</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.field} className="border-t border-line align-top">
                <th scope="row" className="eyebrow px-4 py-3 font-normal text-ink">{r.field}</th>
                <td className="px-4 py-3 text-ink-2">{r.q}</td>
                <td className="px-4 py-3">
                  <div className="text-ink-2">{r.a}</div>
                  <Result tone={r.ar[0]}>{r.ar[1]}</Result>
                </td>
                <td className="px-4 py-3">
                  <div className="text-ink-2">{r.b}</div>
                  <Result tone={r.br[0]}>{r.br[1]}</Result>
                </td>
              </tr>
            ))}
            <tr className="border-t border-line-strong bg-paper-2 align-top">
              <th scope="row" className="eyebrow px-4 py-3 font-normal text-ink">Outcome</th>
              <td className="px-4 py-3 text-muted">—</td>
              <td className="px-4 py-3"><Result tone="agree">Link</Result></td>
              <td className="px-4 py-3">
                <Result tone="partial">No link</Result>
                <p className="mt-1 text-[0.8rem] text-muted">Same address, different business: an address cannot rescue a weak name.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-muted">
        Normalized forms compared: <code className="font-mono text-[0.8rem] text-ink-2">juniper ridge bakery</code> ·{" "}
        <code className="font-mono text-[0.8rem] text-ink-2">{"{120, N, example, st, unit 4}"}</code>
      </p>
    </div>
  );
}

function LinkedSources() {
  const sources = [
    { source: "Registry", name: "Copper Kettle Tea Co", address: "88 Mesa Rd Ste 210", link: "Anchor record", tone: "agree" as const },
    { source: "Lien filing", name: "Copper Kettle Tea Company", address: "15 Old Mill Ln (at filing time)", link: "Deterministic · carries registry ID", tone: "agree" as const },
    { source: "Loan record", name: "Copper Kettle Tea Co LLC", address: "88 Mesa Rd", link: "Probabilistic · name and address agree", tone: "agree" as const },
    { source: "Licence", name: "The Copper Kettle", address: "88 Mesa Rd Ste 210", link: "Review · name only partly agrees", tone: "partial" as const },
  ];
  return (
    <div>
      <SyntheticLabel />
      <ul className="divide-y divide-line rounded-md border border-line">
        {sources.map((s) => (
          <li key={s.source} className="grid gap-1 px-4 py-3 sm:grid-cols-[120px_1fr_1fr] sm:gap-4">
            <span className="eyebrow pt-0.5 text-ink">{s.source}</span>
            <span className="text-sm text-ink-2">
              {s.name}
              <span className="block text-muted">{s.address}</span>
            </span>
            <Result tone={s.tone}>{s.link}</Result>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-muted">
        The lien filing still shows an old address. Penalizing that disagreement as if it were a current address would
        reject a true match, which is why filing-time sources get their own address weights.
      </p>
    </div>
  );
}

function MidrankPercentile() {
  const values = [410, 455, 455, 455, 455, 520, 560, 610, 640, 700];
  return (
    <div>
      <SyntheticLabel />
      <p className="text-sm text-ink-2">Ten synthetic scores. Four businesses share the value 455.</p>
      <ol className="mt-3 flex flex-wrap gap-1.5" aria-label="Synthetic scores in ascending order">
        {values.map((v, i) => (
          <li
            key={i}
            className={cn(
              "rounded border px-2.5 py-1 font-mono text-[0.78rem]",
              v === 455 ? "border-research/50 bg-research-soft text-research" : "border-line-strong bg-card text-ink-2",
            )}
          >
            {v}
          </li>
        ))}
      </ol>
      <div className="mt-4 overflow-x-auto rounded-md border border-line">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <caption className="sr-only">Three ways to compute the percentile of the value 455</caption>
          <thead className="bg-paper-2">
            <tr className="eyebrow text-muted">
              <th scope="col" className="px-4 py-3 font-normal">Method</th>
              <th scope="col" className="px-4 py-3 font-normal">Percentile of 455</th>
              <th scope="col" className="px-4 py-3 font-normal">Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-line">
              <td className="px-4 py-3 text-ink-2">Share strictly below</td>
              <td className="px-4 py-3 font-mono">10%</td>
              <td className="px-4 py-3 text-muted">Ties look worse than they are</td>
            </tr>
            <tr className="border-t border-line">
              <td className="px-4 py-3 text-ink-2">Share at or below</td>
              <td className="px-4 py-3 font-mono">50%</td>
              <td className="px-4 py-3 text-muted">Ties look better than they are</td>
            </tr>
            <tr className="border-t border-line bg-paper-2">
              <td className="px-4 py-3 text-ink">Midrank: below + ½ × equal</td>
              <td className="px-4 py-3 font-mono text-ink">30%</td>
              <td className="px-4 py-3 text-muted">Places ties fairly in the middle</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GrainSql() {
  const sql = `-- Orders and line items are different grains.
SELECT
  DATE_FORMAT(o.ordered_at, '%Y-%m')          AS month,
  COUNT(DISTINCT o.order_id)                   AS orders,
  COUNT(*)                                     AS line_items,
  COUNT(DISTINCT CASE WHEN o.channel = 'web'
                      THEN o.order_id END)     AS web_orders
FROM orders o
JOIN order_lines l ON l.order_id   = o.order_id
JOIN accounts    a ON a.account_id = o.account_id
WHERE a.is_internal = FALSE
GROUP BY month
ORDER BY month;`;
  return (
    <div>
      <SyntheticLabel schema />
      <pre className="overflow-x-auto rounded-md border border-line bg-card p-4 font-mono text-[0.78rem] leading-relaxed text-ink-2">
        <code>{sql}</code>
      </pre>
      <p className="mt-3 text-sm text-muted">
        Counting rows after the join would count line items, not orders. Distinct counts and conditional aggregation keep
        each figure at the grain it claims.
      </p>
    </div>
  );
}

export function Example({ id }: { id: ExampleId }) {
  switch (id) {
    case "match-records":
      return <MatchRecords />;
    case "linked-sources":
      return <LinkedSources />;
    case "midrank-percentile":
      return <MidrankPercentile />;
    case "grain-sql":
      return <GrainSql />;
  }
}
