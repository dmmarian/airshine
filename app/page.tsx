import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import AirshineHeader from "./AirshineHeader";
import AirshineEnhancements from "./AirshineEnhancements";

const navLinks = [
  { href: "#interior", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#coverage", label: "Coverage" },
  { href: "#fleet", label: "Fleet" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const approachItems = [
  {
    title: "Documented",
    copy: "Before / after and defect photo reports on every aircraft.",
  },
  {
    title: "Aviation-safe",
    copy: "Manufacturer-compatible products with SDS on file.",
  },
  {
    title: "Confirmed on-site",
    copy: "Final scope and price are set after inspection of condition and access.",
  },
];

const interiorLevels = [
  {
    level: "LEVEL 1",
    name: "Basic",
    price: "€150",
    copy: "Essential cabin reset and a documented baseline.",
    features: [
      "Before/after & visible-defect photo report",
      "Cabin vacuuming & waste removal",
      "High-touch surface wipe-down: tables, panels, cup holders",
      "Interior window & windshield cleaning",
      "Light seat cleaning · cabin arrangement",
      "Lavatory cleaning & cockpit light wipe — if equipped / permitted",
    ],
  },
  {
    level: "LEVEL 2",
    name: "Detailed",
    price: "€300",
    copy: "Everything in Basic, plus deep cleaning and material care.",
    dark: true,
    delay: 120,
    features: [
      "Everything in Level 1 — Basic",
      "Detailed seat & seatbelt cleaning",
      "Carpet stain cleaning",
      "Lavatory deep steam cleaning — if equipped",
      "Leather treatment — if material allows",
      "Detailed cockpit cleaning — explicit approval, no critical systems",
    ],
  },
];

const interiorPrices = [
  ["1–3", "€150", "€300"],
  ["3–6", "€250", "€450"],
  ["6–8", "€350", "€650"],
  ["8–10", "€450", "€800"],
  ["10+", "Custom quote", "Custom quote"],
];

const exteriorLevels = [
  { level: "LEVEL 1", name: "Basic", price: "from €100" },
  { level: "LEVEL 2", name: "Standard", price: "from €200" },
  {
    level: "LEVEL 3",
    name: "Full Dry Wash",
    price: "from €600",
    featured: true,
  },
  {
    level: "LEVEL 4",
    name: "Polish / Paint Correction",
    price: "Custom quote",
  },
];

const exteriorRows = [
  ["Before/after & defect photo report", true, true, true, true],
  ["Exterior window cleaning: windshield + windows", true, true, true, true],
  [
    "Dry wash of wing leading edges & tail surfaces (if accessible)",
    true,
    true,
    true,
    true,
  ],
  ["Nose / radome / propeller; bug & dirt removal", true, true, true, true],
  ["Wheel cleaning", false, true, true, true],
  ["Dry wash of engine cowls / propeller area", false, true, true, true],
  ["Belly spot-cleaning", false, true, true, true],
  ["Full fuselage dry wash", false, false, true, true],
  ["Full wing dry wash", false, false, true, true],
  ["Full aircraft belly dry wash", false, false, true, true],
  [
    "Detailed defect / dent & buckle report (not P145 / EASA approved)",
    false,
    false,
    true,
    true,
  ],
  ["Fine scratch removal / polish", false, false, false, true],
] satisfies [string, boolean, boolean, boolean, boolean][];

const exteriorPrices = [
  ["1–3", "€100", "€200", "€600", "Custom"],
  ["3–6", "€200", "€400", "€800", "Custom"],
  ["6–8", "€300", "€600", "€1,000", "Custom"],
  ["8–10", "€400", "€800", "€1,200", "Custom"],
  ["10+", "Custom", "Custom", "Custom", "Custom"],
];

const airportFeesNote =
  "Note: Airport, FBO, hangar or handler fees may be added where charged by the location.";

const packages = [
  {
    kicker: "INT L1 · EXT L1",
    title: "Basic Maintenance",
    copy: "For recurring upkeep of already-clean aircraft.",
    count: 250,
    price: "€250",
    delay: 0,
  },
  {
    kicker: "INT L2 · EXT L2",
    title: "Standard Maintenance",
    copy: "A full clean inside and out, without polishing.",
    count: 500,
    price: "€500",
    delay: 90,
  },
  {
    kicker: "INT L2 · EXT L3",
    title: "First Clean",
    copy: "The baseline for new cooperation — a documented, deep first clean before any maintenance plan.",
    count: 900,
    price: "€900",
    recommended: true,
    delay: 180,
  },
  {
    kicker: "INT L2 · EXT L4",
    title: "Premium / Polish",
    copy: "Full detail with paint correction — only after inspection, approval and a surface test.",
    custom: "Custom quote",
    delay: 270,
  },
];

const coverageRoutes = [
  ["București Henri Coandă", "LROP", "Otopeni", "€60"],
  ["Brașov-Ghimbav", "LRBV", "Brașov", "€170"],
  ["Craiova", "LRCV", "Craiova", "€230"],
  ["Constanța Mihail Kogălniceanu", "LRCK", "Constanța", "€240"],
  ["Tulcea Delta Dunării", "LRTC", "Tulcea", "€270"],
  ["Sibiu", "LRSB", "Sibiu", "€260"],
  ["Bacău George Enescu", "LRBC", "Bacău", "€280"],
  ["Iași", "LRIA", "Iași", "€350"],
  ["Suceava Ștefan cel Mare", "LRSV", "Suceava", "€390"],
  ["Cluj-Napoca Avram Iancu", "LRCL", "Cluj-Napoca", "€390"],
  ["Târgu Mureș Transilvania", "LRTM", "Târgu Mureș", "€300"],
  ["Oradea", "LROD", "Oradea", "€510"],
  ["Arad", "LRAR", "Arad", "€470"],
  ["Timișoara Traian Vuia", "LRTR", "Timișoara", "€460"],
  ["Satu Mare", "LRSM", "Satu Mare", "€520"],
  ["Baia Mare Maramureș", "LRBM", "Baia Mare", "€510"],
  ["Caransebeș", "LRCS", "Caransebeș", "€400"],
  ["Aerodrom Clinceni", "LRCN", "Ilfov", "€70"],
  ["Aerodrom Strejnic", "LRPW", "Ploiești", "€100"],
  ["Aerodrom Alexeni", "LRAX", "Ialomița", "€110"],
  ["Aerodrom Tuzla", "LRTZ", "Constanța", "€260"],
  ["Aerodrom Ghimbav", "LRGB", "Brașov", "€170"],
  ["Aerodrom Deva-Săulești", "LRDV", "Hunedoara", "€350"],
  ["Aerodrom Frătăuți", "-", "Suceava", "€400"],
] satisfies [string, string, string, string][];

const fleetItems = [
  {
    cat: "CAT 8–10",
    title: "Super-midsize & large-cabin jets",
    copy: "≈ 8–10 passengers · lavatory",
  },
  {
    cat: "CAT 6–8",
    title: "Midsize & light jets",
    copy: "≈ 6–9 passengers · lavatory",
    delay: 70,
  },
  {
    cat: "CAT 3–6",
    title: "Very-light & personal jets",
    copy: "≈ 4–6 passengers · config-dependent",
    delay: 140,
  },
  {
    cat: "CAT 1–3",
    title: "Single-engine aircraft",
    copy: "≈ 1–3 passengers + pilot",
    delay: 210,
  },
];

const processItems = [
  {
    icon: "search",
    title: "Inspection",
    copy: "We check configuration, condition, hangar access and water/dry-wash rules, then confirm scope and price.",
  },
  {
    icon: "check",
    title: "First Clean",
    copy: "The recommended Interior L2 + Exterior L3 baseline, delivered with a full before/after photo report.",
    delay: 120,
  },
  {
    icon: "clock",
    title: "Recurring Maintenance",
    copy: "A monthly or bi-weekly plan, usually Level 1–2 exterior depending on how the aircraft is used.",
    delay: 240,
  },
];

const safetyItems = [
  {
    title: "Manufacturer-compatible",
    copy: "Products compatible with aircraft manufacturer or operator recommendations, with SDS available on request.",
  },
  {
    title: "Ammonia-free glass",
    copy: "Aviation-specific, ammonia-free window products applied with clean microfiber towels.",
    delay: 70,
  },
  {
    title: "pH-neutral dry wash",
    copy: "Paint-compatible dry-wash solutions — never aggressive automotive degreasers.",
    delay: 140,
  },
  {
    title: "Cabin-safe materials",
    copy: "Interior products suited to aviation leather, plastics, carpets and flame-retardant materials.",
  },
  {
    title: "Critical systems protected",
    copy: "No work on sensors, pitot/static ports, antennas, avionics or panels without operator approval.",
    delay: 70,
  },
  {
    title: "Tested before polish",
    copy: "Before Level 4, a local test and written confirmation protect paint, coating and composites.",
    delay: 140,
  },
];

const adjustments = [
  {
    title: "Heavy contamination",
    copy: "Severe dirt, oil, hardened insects, mold or odors: 20–60% surcharge, confirmed before work.",
  },
  {
    title: "Access & timing",
    copy: "Night, weekend, urgent deadlines or difficult hangar access: may add up to 15–30% surcharge.",
  },
  {
    title: "Special configurations",
    copy: "10+ passenger category and special configurations are quoted individually.",
  },
];

const darkIntroVars = {
  "--eyebrow-line": "#3F5A78",
  "--eyebrow-color": "#7FA3C8",
  "--heading-color": "#fff",
  "--copy-color": "#AFC0D0",
} as CSSProperties;

function SectionIntro({
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <div data-reveal style={dark ? darkIntroVars : undefined}>
      <div className="airshine-eyebrow">
        <span>{eyebrow}</span>
      </div>
      <h2 className="airshine-heading">{title}</h2>
      {copy ? <p className="airshine-copy">{copy}</p> : null}
    </div>
  );
}

function CheckIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 8 L6 11 L12.5 3.5"
        stroke={muted ? "#7FA3C8" : "#1F5C99"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.5 1 V11 M2 7 L6.5 11.5 L11 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ProcessIcon({ name }: { name: string }) {
  if (name === "search") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="13" cy="13" r="8.5" stroke="#1F5C99" strokeWidth="1.6" />
        <path
          d="M19.2 19.2 L25 25"
          stroke="#1F5C99"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="15" cy="15" r="11" stroke="#1F5C99" strokeWidth="1.6" />
        <path
          d="M15 9 V15 L19 17.5"
          stroke="#1F5C99"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="15" cy="15" r="11" stroke="#1F5C99" strokeWidth="1.6" />
      <path
        d="M9.5 15 L13.5 19 L20.5 11"
        stroke="#1F5C99"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function PriceTable({
  title,
  note,
  headers,
  rows,
  minWidth = "520px",
  footnote,
  spacious = false,
}: {
  title: string;
  note: string;
  headers: string[];
  rows: string[][];
  minWidth?: string;
  footnote?: string;
  spacious?: boolean;
}) {
  return (
    <div
      className={`airshine-table-card${spacious ? " airshine-table-card--spacious" : ""}`}
      data-reveal
    >
      <div className="airshine-table-head">
        <strong>{title}</strong>
        <span>{note}</span>
      </div>
      <div className="airshine-table-scroll">
        <table
          className="airshine-table"
          style={{ "--table-min": minWidth } as CSSProperties}
        >
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${cell}-${index}`}
                    className={
                      cell === "Custom" || cell === "Custom quote"
                        ? "muted"
                        : undefined
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote ? <div className="airshine-table-note">{footnote}</div> : null}
    </div>
  );
}

function CoverageTable() {
  return (
    <div className="airshine-coverage-table">
      <input
        aria-label="Show or hide all coverage routes"
        className="airshine-coverage-toggle"
        id="coverage-routes-toggle"
        type="checkbox"
      />
      <div
        className="airshine-table-card airshine-table-card--spacious"
        data-reveal
      >
        <div className="airshine-table-head">
          <strong>ROMANIA COVERAGE · TRAVEL FEES</strong>
          <span>estimated from LRBS</span>
        </div>
        <div className="airshine-table-scroll">
          <table
            className="airshine-table"
            style={{ "--table-min": "680px" } as CSSProperties}
          >
            <thead>
              <tr>
                <th>Airport / Aerodrome</th>
                <th>ICAO</th>
                <th>Locality</th>
                <th>Travel fee</th>
              </tr>
            </thead>
            <tbody>
              {coverageRoutes.map((row, index) => (
                <tr
                  className={
                    index >= 4 ? "airshine-coverage-extra-row" : undefined
                  }
                  key={row.join("-")}
                >
                  {row.map((cell) => (
                    <td key={`${row[0]}-${cell}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <label
          className="airshine-coverage-toggle-label"
          htmlFor="coverage-routes-toggle"
        >
          <span className="airshine-coverage-toggle-label__show">
            Show all routes
          </span>
          <span className="airshine-coverage-toggle-label__hide">
            Collapse routes
          </span>
          <ArrowDownIcon />
        </label>
        <div className="airshine-table-note">
          Estimated travel fees in EUR. Final availability and timing are
          confirmed after access, aircraft location and work-scope review.
        </div>
      </div>
    </div>
  );
}

function ContactEmail({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={footer ? undefined : "airshine-contact-card"}
      data-email-anchor
      data-email-domain="airshine.online"
      data-email-user="office"
      href="#contact"
    >
      {footer ? (
        <span data-email-fill>office at airshine.online</span>
      ) : (
        <>
          <div className="airshine-contact-card__label">EMAIL</div>
          <div className="airshine-contact-card__value" data-email-fill>
            office at airshine.online
          </div>
        </>
      )}
    </a>
  );
}

function Section({
  id,
  children,
  soft = false,
  dark = false,
}: {
  id: string;
  children: ReactNode;
  soft?: boolean;
  dark?: boolean;
}) {
  const className = [
    "airshine-section",
    soft ? "airshine-section--soft" : "",
    dark ? "airshine-section--dark" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={className} id={id}>
      <div className="airshine-container">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="airshine-page">
      <AirshineEnhancements />

      <AirshineHeader navLinks={navLinks} />

      <section className="airshine-hero" id="top">
        <Image
          alt=""
          aria-hidden="true"
          className="airshine-hero__image"
          fill
          preload
          sizes="100vw"
          src="/airplane.jpg"
        />
        <div className="airshine-hero__shade" aria-hidden="true" />
        <div className="airshine-hero__content">
          <div className="airshine-hero__label" data-delay="0" data-reveal>
            <span>Private Aviation Detailing · Europe</span>
          </div>
          <h1 data-delay="120" data-reveal>
            A spotless fleet, at altitude
            <br />
            or on the apron.
          </h1>
          <p data-delay="240" data-reveal>
            Premium, aviation-safe interior and exterior detailing for private
            jets — from single-engine aircraft to super-midsize cabins.
            Documented before and after. Confirmed on-site.
          </p>
          <a
            className="airshine-cta"
            data-delay="360"
            data-reveal
            href="#interior"
          >
            VIEW SERVICES
            <ArrowDownIcon />
          </a>
        </div>
      </section>

      <Section id="about">
        <div
          className="airshine-grid"
          style={
            {
              "--min": "320px",
              "--gap": "clamp(40px, 6vw, 90px)",
            } as CSSProperties
          }
        >
          <SectionIntro
            eyebrow="Our Approach"
            title="Precision, documented — and confirmed on-site."
          />
          <div data-delay="120" data-reveal>
            <p className="airshine-copy" style={{ marginTop: 0 }}>
              AirShine is a B2B detailing service built around aviation-grade
              products and verifiable results. Every clean begins and ends with
              a photo report — before, after, and any visible defects, scratches
              or dents we find along the way. Final offers are confirmed only
              after an on-site inspection of configuration, condition and access
              — never quoted blind.
            </p>
            <div className="airshine-approach-list">
              {approachItems.map((item, index) => (
                <div className="airshine-approach-item" key={item.title}>
                  <span className="airshine-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="airshine-item-title">{item.title}</div>
                    <div className="airshine-item-copy">{item.copy}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="interior" soft>
        <div>
          <SectionIntro
            eyebrow="Interior Detailing"
            title="Two levels of cabin care."
            copy="Both levels include a full photo report. Lavatory and cockpit work apply only where equipped and permitted."
          />
        </div>

        <div
          className="airshine-grid"
          style={
            {
              "--min": "330px",
              "--gap": "24px",
              marginTop: 52,
            } as CSSProperties
          }
        >
          {interiorLevels.map((level) => (
            <div
              className={`airshine-card${level.dark ? " airshine-card--dark" : ""}`}
              data-delay={level.delay}
              data-reveal
              key={level.name}
            >
              <div className="airshine-level-head">
                <div>
                  <div className="airshine-level-kicker">{level.level}</div>
                  <div className="airshine-level-name">{level.name}</div>
                </div>
                <div className="airshine-price-from">
                  from
                  <br />
                  <strong>{level.price}</strong>
                </div>
              </div>
              <p className="airshine-card-copy">{level.copy}</p>
              <div className="airshine-check-list">
                {level.features.map((feature) => (
                  <div className="airshine-check-item" key={feature}>
                    <CheckIcon muted={level.dark} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <PriceTable
          headers={[
            "Passenger category",
            "Level 1 · Basic",
            "Level 2 · Detailed",
          ]}
          footnote={airportFeesNote}
          note="by passenger category (seats)"
          rows={interiorPrices}
          spacious
          title="INTERIOR PRICES · EUR · PER AIRCRAFT"
        />
      </Section>

      <Section id="exterior">
        <div>
          <SectionIntro
            eyebrow="Exterior Detailing"
            title="Four exterior levels, dry-wash first."
            copy="From a window-and-leading-edge refresh to a full dry wash and, on approval, fine paint correction. Wet wash is used only where the hangar permits water use and wastewater handling — otherwise we dry wash."
          />
        </div>

        <div className="airshine-grid airshine-exterior-levels" data-reveal>
          {exteriorLevels.map((level) => (
            <div
              className={`airshine-mini-card${level.featured ? " airshine-mini-card--featured" : ""}`}
              key={level.name}
            >
              <div className="airshine-mini-card__kicker">{level.level}</div>
              <div className="airshine-mini-card__title">{level.name}</div>
              <div className="airshine-mini-card__price">{level.price}</div>
            </div>
          ))}
        </div>

        <div className="airshine-table-card" data-reveal>
          <div className="airshine-table-scroll">
            <table className="airshine-table airshine-matrix">
              <thead>
                <tr>
                  <th>What&apos;s included</th>
                  <th>L1</th>
                  <th>L2</th>
                  <th className="highlight">L3</th>
                  <th>L4</th>
                </tr>
              </thead>
              <tbody>
                {exteriorRows.map(([label, l1, l2, l3, l4]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    {[l1, l2, l3, l4].map((included, index) => (
                      <td
                        className={index === 2 ? "highlight" : undefined}
                        key={`${label}-${index}`}
                      >
                        {included ? (
                          <CheckIcon />
                        ) : (
                          <span className="muted">–</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="airshine-table-note">
            L4 fine scratch removal / polish is performed only after surface
            inspection, a local test and written approval.
          </div>
        </div>

        <PriceTable
          headers={[
            "Passenger category",
            "L1 Basic",
            "L2 Standard",
            "L3 Full Dry Wash",
            "L4 Polish",
          ]}
          footnote={airportFeesNote}
          minWidth="620px"
          note="by passenger category (seats)"
          rows={exteriorPrices}
          title="EXTERIOR PRICES · EUR · PER AIRCRAFT"
        />

        <div className="airshine-exterior-policy-note" data-reveal>
          <div className="airshine-table-note">
            Exterior Level 1 Basic is available only when paired with an
            interior cleaning level. This keeps setup, travel and aircraft
            access efficient while giving the aircraft a complete maintenance
            refresh.
          </div>
        </div>
      </Section>

      <Section id="packages" dark>
        <div>
          <SectionIntro
            dark
            eyebrow="Packages"
            title="Bundled service, one baseline to start."
            copy="Combine interior and exterior levels into a single plan. New fleets begin with the Recommended First Clean to set a documented baseline before moving to recurring maintenance."
          />
        </div>

        <div className="airshine-grid airshine-packages">
          {packages.map((item) => (
            <div
              className={`airshine-package${item.recommended ? " airshine-package--recommended" : ""}`}
              data-delay={item.delay}
              data-reveal
              key={item.title}
            >
              {item.recommended ? (
                <div className="airshine-badge">RECOMMENDED</div>
              ) : null}
              <div className="airshine-package__kicker">{item.kicker}</div>
              <div className="airshine-package__title">{item.title}</div>
              <p className="airshine-package__copy">{item.copy}</p>
              {item.custom ? (
                <div className="airshine-package__custom">{item.custom}</div>
              ) : (
                <div className="airshine-package__price">
                  from{" "}
                  <strong data-count={item.count} data-prefix="€">
                    {item.price}
                  </strong>{" "}
                  <span>/ aircraft</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="airshine-package-summary" data-reveal>
          <p>
            Per-aircraft pricing scales with passenger category — see the tables
            above. Airport fees may apply where charged by the location.
          </p>
          <span>PRICES IN EUR · ESTIMATES · AIRPORT FEES MAY APPLY</span>
        </div>
      </Section>

      <Section id="coverage" soft>
        <div
          className="airshine-grid airshine-coverage-intro"
          style={
            {
              "--min": "320px",
              "--gap": "clamp(32px, 5vw, 72px)",
            } as CSSProperties
          }
        >
          <SectionIntro
            eyebrow="Romania Coverage"
            title="Airport support from our Bucharest base."
            copy="AirShine can support detailing work at Romanian airports and aerodromes from LRBS, with travel fees estimated by road distance. Availability, timing and final access requirements are confirmed before dispatch."
          />
          <div className="airshine-coverage-notes" data-delay="120" data-reveal>
            <div>
              <span>BASE</span>
              <strong>Bucharest / LRBS</strong>
            </div>
            <div>
              <span>ROUTES LISTED</span>
              <strong>{coverageRoutes.length} destinations</strong>
            </div>
            <p>
              Travel fees are separate from detailing package prices and exclude
              airport, FBO, hangar, handler or access fees charged by the
              location.
            </p>
          </div>
        </div>

        <CoverageTable />
      </Section>

      <Section id="fleet">
        <div>
          <SectionIntro
            eyebrow="Fleet We Service"
            title="From single-engine to super-midsize."
            copy="We work across the private fleet spectrum. Pricing follows passenger category — exact cabin configuration is confirmed before work starts."
          />
        </div>

        <div className="airshine-grid airshine-fleet">
          {fleetItems.map((item) => (
            <div
              className="airshine-fleet-card"
              data-delay={item.delay}
              data-reveal
              key={item.cat}
            >
              <div className="airshine-fleet-card__cat">{item.cat}</div>
              <div className="airshine-fleet-card__title">{item.title}</div>
              <div className="airshine-fleet-card__copy">{item.copy}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="process" soft>
        <div style={{ maxWidth: 720 }}>
          <SectionIntro
            eyebrow="How It Works"
            title="Inspection. Baseline. Maintenance."
          />
        </div>

        <div className="airshine-grid airshine-process">
          {processItems.map((item, index) => (
            <div
              className="airshine-process-card"
              data-delay={item.delay}
              data-reveal
              key={item.title}
            >
              <div className="airshine-process-card__top">
                <ProcessIcon name={item.icon} />
                <span className="airshine-process-card__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="airshine-process-card__title">{item.title}</div>
              <p className="airshine-process-card__copy">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="safety">
        <div style={{ maxWidth: 720 }}>
          <SectionIntro
            eyebrow="Safety & Products"
            title="Aviation-safe by default."
          />
        </div>

        <div className="airshine-grid airshine-safety">
          {safetyItems.map((item) => (
            <div
              className="airshine-safety-item"
              data-delay={item.delay}
              data-reveal
              key={item.title}
            >
              <div className="airshine-safety-item__title">{item.title}</div>
              <p className="airshine-safety-item__copy">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="airshine-grid airshine-adjustments" data-reveal>
          <div className="airshine-adjustments__title">
            PRICING &amp; ADJUSTMENTS
          </div>
          {adjustments.map((item) => (
            <div key={item.title}>
              <div className="airshine-adjustment__title">{item.title}</div>
              <p className="airshine-adjustment__copy">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" dark>
        <div>
          <SectionIntro
            dark
            eyebrow="Contact"
            title="Speak with AirShine."
            copy="Tell us your fleet, base and access requirements. We'll arrange an inspection and confirm a detailed offer."
          />
        </div>

        <div className="airshine-contact-grid" data-reveal>
          <ContactEmail />
          <a className="airshine-contact-card" href="tel:+40736070042">
            <div className="airshine-contact-card__label">PHONE</div>
            <div className="airshine-contact-card__value">+40 736 070 042</div>
          </a>
          <div className="airshine-contact-card">
            <div className="airshine-contact-card__label">LOCATION</div>
            <div className="airshine-contact-card__value">
              Bucharest, Romania
            </div>
          </div>
        </div>

        <p className="airshine-contact-note" data-reveal>
          Estimated offers in EUR, excluding airport fees. Final offer confirmed
          after on-site inspection and approval of working procedures.
        </p>
      </Section>

      <footer className="airshine-footer">
        <div className="airshine-footer__inner">
          <div className="airshine-footer__brand">
            <Image
              src="/airshine-logo-white.png"
              alt="AirShine"
              width={119}
              height={30}
            />
            <p>
              Premium, aviation-safe interior and exterior detailing for private
              fleets across Europe.
            </p>
          </div>
          <div className="airshine-footer__links">
            <div className="airshine-footer__group">
              <span className="airshine-footer__label">NAVIGATE</span>
              {navLinks.slice(0, 4).map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="airshine-footer__group">
              <span className="airshine-footer__label">CONTACT</span>
              <ContactEmail footer />
              <a href="tel:+40736070042">+40 736 070 042</a>
              <span>Bucharest, Romania</span>
            </div>
          </div>
        </div>
        <div className="airshine-footer__bottom">
          <span>© 2026 AirShine. All rights reserved.</span>
          <span>Prices estimated · EUR · airport fees may apply</span>
        </div>
      </footer>
    </main>
  );
}
