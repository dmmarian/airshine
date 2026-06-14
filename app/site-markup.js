// Static site markup, ported from the Claude Design export.
//
// This is now a FUNCTION of a translation dictionary `t` (see app/i18n.js): all
// user-visible copy comes from `t`, the structure/inline-styles stay here. Edit
// wording/prices in i18n.js; edit layout/structure here. Swap the gradient
// placeholder panels for real <img> / background-image as before.
//
// `app/page.js` calls siteHtml(dict[lang]) and re-renders on language change.
import { locales } from "./i18n";

export function siteHtml(t) {
  const langButtons = locales
    .map((l, i) => {
      const active = l.code === t.lang;
      const color = active ? "#c6a667" : "rgba(159,168,184,0.7)";
      const weight = active ? "700" : "500";
      const sep =
        i < locales.length - 1
          ? '<span style="color:rgba(159,168,184,0.35);">/</span>'
          : "";
      return (
        '<button data-lang="' +
        l.code +
        '" type="button" aria-pressed="' +
        active +
        '" style="background:transparent;border:none;cursor:pointer;font-family:inherit;font-size:11px;letter-spacing:0.12em;color:' +
        color +
        ";font-weight:" +
        weight +
        ';padding:2px 2px;transition:color .3s;">' +
        l.label +
        "</button>" +
        sep
      );
    })
    .join("");

  return `
<div id="acsite" style="background:#070b13;font-family:'Manrope',system-ui,sans-serif;color:#97a2b3;-webkit-font-smoothing:antialiased;overflow-x:hidden;">

  <!-- ================= NAV ================= -->
  <nav id="acnav" style="position:fixed;top:0;left:0;right:0;z-index:60;display:flex;align-items:center;justify-content:space-between;padding:20px 48px;border-bottom:1px solid rgba(198,166,103,0);transition:background .4s ease,border-color .4s ease,box-shadow .4s ease;">
    <a href="#top" style="text-decoration:none;display:flex;align-items:center;">
      <img src="/white_logo.png" alt="AirShine" style="height:38px;width:auto;display:block;" />
    </a>
    <div style="display:flex;gap:26px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;white-space:nowrap;">
      <a data-navlink href="#about" style="text-decoration:none;color:rgba(159,168,184,0.85);transition:color .3s;">${t.nav.about}</a>
      <a data-navlink href="#services" style="text-decoration:none;color:rgba(159,168,184,0.85);transition:color .3s;">${t.nav.services}</a>
      <a data-navlink href="#pricing" style="text-decoration:none;color:rgba(159,168,184,0.85);transition:color .3s;">${t.nav.pricing}</a>
      <a data-navlink href="#fleet" style="text-decoration:none;color:rgba(159,168,184,0.85);transition:color .3s;">${t.nav.fleet}</a>
      <a data-navlink href="#gallery" style="text-decoration:none;color:rgba(159,168,184,0.85);transition:color .3s;">${t.nav.gallery}</a>
      <a data-navlink href="#contact" style="text-decoration:none;color:rgba(159,168,184,0.85);transition:color .3s;">${t.nav.contact}</a>
    </div>
    <div style="display:flex;align-items:center;gap:18px;white-space:nowrap;">
      <div style="text-align:right;line-height:1.5;">
        <div style="font-size:12.5px;color:#c6dceb;letter-spacing:0.02em;">office<span style="opacity:0.85;">@</span>airshine.online</div>
        <div style="font-size:12.5px;color:#7e8a9c;letter-spacing:0.04em;">0736 070 042</div>
      </div>
      <div data-langsel style="display:flex;align-items:center;gap:7px;border-left:1px solid rgba(198,166,103,0.22);padding-left:16px;">${langButtons}</div>
    </div>
  </nav>

  <!-- ================= HERO ================= -->
  <section id="top" style="position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#05080f;">
    <div id="achero-img" style="position:absolute;inset:-10%;transform:scale(1.12);background:repeating-linear-gradient(118deg,rgba(255,255,255,0.018) 0 2px,transparent 2px 30px),radial-gradient(120% 90% at 70% 10%,#1b2942 0%,#0a1120 45%,#05080f 80%);will-change:transform;"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,8,15,0.55) 0%,rgba(5,8,15,0.2) 35%,rgba(5,8,15,0.7) 100%);"></div>
    <div style="position:absolute;left:34px;right:34px;top:96px;bottom:40px;border:1px solid rgba(198,166,103,0.18);pointer-events:none;"></div>
    <div style="position:absolute;top:112px;right:54px;font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.12em;color:rgba(198,166,103,0.55);text-transform:uppercase;">${t.hero.imgLabel}</div>

    <div style="position:relative;z-index:2;text-align:center;padding:0 32px;max-width:1100px;">
      <div data-reveal style="opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(.2,.6,.2,1),transform .9s cubic-bezier(.2,.6,.2,1);font-size:11.5px;letter-spacing:0.42em;text-transform:uppercase;color:#c6a667;font-weight:600;margin-bottom:30px;">${t.hero.eyebrow}</div>
      <h1 data-reveal data-reveal-delay="120" style="opacity:0;transform:translateY(28px);transition:opacity 1s cubic-bezier(.2,.6,.2,1),transform 1s cubic-bezier(.2,.6,.2,1);font-family:'Libre Caslon Display',serif;font-weight:400;font-size:clamp(36px,5.4vw,68px);line-height:1.06;letter-spacing:0;color:#f6f4ee;margin:0 0 26px;">${t.hero.title}</h1>
      <p data-reveal data-reveal-delay="240" style="opacity:0;transform:translateY(28px);transition:opacity 1.1s cubic-bezier(.2,.6,.2,1),transform 1.1s cubic-bezier(.2,.6,.2,1);font-size:17px;line-height:1.75;color:#b9c2d0;max-width:54ch;margin:0 auto 38px;font-weight:300;">${t.hero.subtitle}</p>
      <a data-reveal data-reveal-delay="360" href="#contact" style="opacity:0;transform:translateY(28px);transition:opacity 1.2s cubic-bezier(.2,.6,.2,1),transform 1.2s cubic-bezier(.2,.6,.2,1);display:inline-flex;align-items:center;gap:12px;font-size:12.5px;letter-spacing:0.2em;text-transform:uppercase;color:#e7ddc4;text-decoration:none;border:1px solid rgba(198,166,103,0.55);padding:15px 32px;font-weight:500;transition:background .3s,color .3s,border-color .3s;" style-hover="background:#c6a667;color:#0a1120;border-color:#c6a667;">${t.hero.cta}</a>
    </div>

    <div style="position:absolute;bottom:30px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;z-index:2;">
      <span style="font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(159,168,184,0.6);">${t.hero.scroll}</span>
      <span style="width:1px;height:34px;background:linear-gradient(#c6a667,transparent);animation:acFloat 2.4s ease-in-out infinite;"></span>
    </div>
  </section>

  <!-- ================= ABOUT / WHY US ================= -->
  <section id="about" style="scroll-margin-top:90px;background:#070b13;padding:130px 48px;border-top:1px solid rgba(255,255,255,0.04);">
    <div style="max-width:1240px;margin:0 auto;display:grid;grid-template-columns:0.85fr 1.15fr;gap:80px;align-items:start;">
      <div>
        <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);display:flex;align-items:center;gap:12px;margin-bottom:24px;">
          <span style="width:26px;height:1px;background:#c6a667;"></span>
          <span style="font-size:11.5px;letter-spacing:0.36em;text-transform:uppercase;color:#c6a667;font-weight:600;">${t.about.eyebrow}</span>
        </div>
        <h2 data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-family:'Libre Caslon Display',serif;font-weight:400;font-size:clamp(30px,3.7vw,46px);line-height:1.12;color:#f4f1ea;margin:0 0 28px;">${t.about.title}</h2>
        <p data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-size:16.5px;line-height:1.8;color:#97a2b3;font-weight:300;margin:0 0 32px;max-width:46ch;">${t.about.body}</p>
        <a data-reveal data-reveal-delay="240" href="#contact" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);display:inline-flex;align-items:center;gap:10px;font-size:12.5px;letter-spacing:0.16em;text-transform:uppercase;color:#c6a667;text-decoration:none;border-bottom:1px solid rgba(198,166,103,0.4);padding-bottom:5px;">${t.about.link}</a>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(198,166,103,0.14);border:1px solid rgba(198,166,103,0.14);">
        <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);background:#0b1322;padding:38px 34px;">
          <div style="font-family:'Libre Caslon Display',serif;font-size:24px;color:#c6a667;margin-bottom:18px;">01</div>
          <h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:21px;color:#f4f1ea;margin:0 0 12px;">${t.about.cards[0].title}</h3>
          <p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.about.cards[0].body}</p>
        </div>
        <div data-reveal data-reveal-delay="100" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);background:#0b1322;padding:38px 34px;">
          <div style="font-family:'Libre Caslon Display',serif;font-size:24px;color:#c6a667;margin-bottom:18px;">02</div>
          <h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:21px;color:#f4f1ea;margin:0 0 12px;">${t.about.cards[1].title}</h3>
          <p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.about.cards[1].body}</p>
        </div>
        <div data-reveal data-reveal-delay="60" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);background:#0b1322;padding:38px 34px;">
          <div style="font-family:'Libre Caslon Display',serif;font-size:24px;color:#c6a667;margin-bottom:18px;">03</div>
          <h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:21px;color:#f4f1ea;margin:0 0 12px;">${t.about.cards[2].title}</h3>
          <p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.about.cards[2].body}</p>
        </div>
        <div data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);background:#0b1322;padding:38px 34px;">
          <div style="font-family:'Libre Caslon Display',serif;font-size:24px;color:#c6a667;margin-bottom:18px;">04</div>
          <h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:21px;color:#f4f1ea;margin:0 0 12px;">${t.about.cards[3].title}</h3>
          <p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.about.cards[3].body}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= STAT STRIP ================= -->
  <section style="background:#05080f;padding:64px 48px;border-top:1px solid rgba(198,166,103,0.12);border-bottom:1px solid rgba(198,166,103,0.12);">
    <div style="max-width:1240px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:40px;">
      <div data-reveal style="opacity:0;transform:translateY(20px);transition:all .8s cubic-bezier(.2,.6,.2,1);text-align:center;">
        <div style="font-family:'Libre Caslon Display',serif;font-size:52px;color:#c6a667;line-height:1;"><span data-count="100" data-suffix="%"></span></div>
        <div style="font-size:12.5px;letter-spacing:0.1em;text-transform:uppercase;color:#8b96a8;margin-top:14px;font-weight:500;">${t.stats.labels[0]}</div>
      </div>
      <div data-reveal data-reveal-delay="90" style="opacity:0;transform:translateY(20px);transition:all .8s cubic-bezier(.2,.6,.2,1);text-align:center;border-left:1px solid rgba(255,255,255,0.06);">
        <div style="font-family:'Libre Caslon Display',serif;font-size:52px;color:#c6a667;line-height:1;"><span data-count="0"></span></div>
        <div style="font-size:12.5px;letter-spacing:0.1em;text-transform:uppercase;color:#8b96a8;margin-top:14px;font-weight:500;">${t.stats.labels[1]}</div>
      </div>
      <div data-reveal data-reveal-delay="180" style="opacity:0;transform:translateY(20px);transition:all .8s cubic-bezier(.2,.6,.2,1);text-align:center;border-left:1px solid rgba(255,255,255,0.06);">
        <div style="font-family:'Libre Caslon Display',serif;font-size:52px;color:#c6a667;line-height:1;">1&#8202;:&#8202;1</div>
        <div style="font-size:12.5px;letter-spacing:0.1em;text-transform:uppercase;color:#8b96a8;margin-top:14px;font-weight:500;">${t.stats.labels[2]}</div>
      </div>
      <div data-reveal data-reveal-delay="270" style="opacity:0;transform:translateY(20px);transition:all .8s cubic-bezier(.2,.6,.2,1);text-align:center;border-left:1px solid rgba(255,255,255,0.06);">
        <div style="font-family:'Libre Caslon Display',serif;font-size:52px;color:#c6a667;line-height:1;">${t.stats.fully}</div>
        <div style="font-size:12.5px;letter-spacing:0.1em;text-transform:uppercase;color:#8b96a8;margin-top:14px;font-weight:500;">${t.stats.labels[3]}</div>
      </div>
    </div>
  </section>

  <!-- ================= SERVICES ================= -->
  <section id="services" style="scroll-margin-top:90px;background:#070b13;padding:130px 48px;">
    <div style="max-width:1240px;margin:0 auto;">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:40px;margin-bottom:60px;flex-wrap:wrap;">
        <div>
          <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);display:flex;align-items:center;gap:12px;margin-bottom:24px;">
            <span style="width:26px;height:1px;background:#c6a667;"></span>
            <span style="font-size:11.5px;letter-spacing:0.36em;text-transform:uppercase;color:#c6a667;font-weight:600;">${t.services.eyebrow}</span>
          </div>
          <h2 data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-family:'Libre Caslon Display',serif;font-weight:400;font-size:clamp(30px,3.7vw,46px);line-height:1.12;color:#f4f1ea;margin:0;max-width:18ch;">${t.services.title}</h2>
        </div>
        <p data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-size:15px;line-height:1.8;color:#8b96a8;font-weight:300;max-width:38ch;margin:0;">${t.services.intro}</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(198,166,103,0.12);border:1px solid rgba(198,166,103,0.12);">
        <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);background:#0a1120;padding:44px 38px;cursor:default;transition:background .4s,transform .4s;" style-hover="background:#0e1727;">
          <div style="width:46px;height:46px;border:1px solid rgba(198,166,103,0.5);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:26px;"><span style="width:7px;height:7px;background:#c6a667;transform:rotate(45deg);display:inline-block;"></span></div>
          <h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:23px;color:#f4f1ea;margin:0 0 12px;">${t.services.items[0].title}</h3>
          <p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.services.items[0].body}</p>
        </div>
        <div data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);background:#0a1120;padding:44px 38px;cursor:default;" style-hover="background:#0e1727;">
          <div style="width:46px;height:46px;border:1px solid rgba(198,166,103,0.5);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:26px;"><span style="width:14px;height:14px;border:1px solid #c6a667;border-radius:50%;display:inline-block;"></span></div>
          <h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:23px;color:#f4f1ea;margin:0 0 12px;">${t.services.items[1].title}</h3>
          <p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.services.items[1].body}</p>
        </div>
        <div data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);background:#0a1120;padding:44px 38px;cursor:default;" style-hover="background:#0e1727;">
          <div style="width:46px;height:46px;border:1px solid rgba(198,166,103,0.5);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:26px;"><span style="width:16px;height:2px;background:#c6a667;display:inline-block;"></span></div>
          <h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:23px;color:#f4f1ea;margin:0 0 12px;">${t.services.items[2].title}</h3>
          <p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.services.items[2].body}</p>
        </div>
        <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);background:#0a1120;padding:44px 38px;cursor:default;" style-hover="background:#0e1727;">
          <div style="width:46px;height:46px;border:1px solid rgba(198,166,103,0.5);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:26px;"><span style="width:12px;height:12px;background:#c6a667;display:inline-block;"></span></div>
          <h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:23px;color:#f4f1ea;margin:0 0 12px;">${t.services.items[3].title}</h3>
          <p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.services.items[3].body}</p>
        </div>
        <div data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);background:#0a1120;padding:44px 38px;cursor:default;" style-hover="background:#0e1727;">
          <div style="width:46px;height:46px;border:1px solid rgba(198,166,103,0.5);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:26px;"><span style="display:flex;gap:3px;"><span style="width:4px;height:4px;border-radius:50%;background:#c6a667;"></span><span style="width:4px;height:4px;border-radius:50%;background:#c6a667;"></span><span style="width:4px;height:4px;border-radius:50%;background:#c6a667;"></span></span></div>
          <h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:23px;color:#f4f1ea;margin:0 0 12px;">${t.services.items[4].title}</h3>
          <p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.services.items[4].body}</p>
        </div>
        <div data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);background:#0a1120;padding:44px 38px;cursor:default;" style-hover="background:#0e1727;">
          <div style="width:46px;height:46px;border:1px solid rgba(198,166,103,0.5);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:26px;"><span style="width:14px;height:10px;border:1px solid #c6a667;display:inline-block;position:relative;"><span style="position:absolute;left:2px;top:2px;width:4px;height:4px;background:#c6a667;"></span></span></div>
          <h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:23px;color:#f4f1ea;margin:0 0 12px;">${t.services.items[5].title}</h3>
          <p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.services.items[5].body}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= PRICING ================= -->
  <section id="pricing" style="scroll-margin-top:90px;background:#05080f;padding:130px 48px;border-top:1px solid rgba(255,255,255,0.04);">
    <div style="max-width:1240px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:18px;">
        <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);display:inline-flex;align-items:center;gap:12px;margin-bottom:24px;">
          <span style="width:26px;height:1px;background:#c6a667;"></span>
          <span style="font-size:11.5px;letter-spacing:0.36em;text-transform:uppercase;color:#c6a667;font-weight:600;">${t.pricing.eyebrow}</span>
          <span style="width:26px;height:1px;background:#c6a667;"></span>
        </div>
        <h2 data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-family:'Libre Caslon Display',serif;font-weight:400;font-size:clamp(30px,3.7vw,46px);line-height:1.12;color:#f4f1ea;margin:0 auto 18px;max-width:22ch;">${t.pricing.title}</h2>
        <p data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;max-width:66ch;margin:0 auto;font-style:italic;">${t.pricing.intro}</p>
      </div>

      <!-- ===== Commercial packages ===== -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:56px;">
        <!-- Basic -->
        <div data-reveal style="opacity:0;transform:translateY(26px);transition:all .8s cubic-bezier(.2,.6,.2,1);background:#0a1120;border:1px solid rgba(255,255,255,0.07);padding:32px 26px;display:flex;flex-direction:column;">
          <div style="font-family:'Libre Caslon Display',serif;font-size:23px;color:#f4f1ea;margin-bottom:16px;">${t.pricing.packages[0].name}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
            <span style="font-size:10px;letter-spacing:0.04em;color:#a4aebd;border:1px solid rgba(255,255,255,0.13);padding:5px 9px;">${t.pricing.packages[0].tags[0]}</span>
            <span style="font-size:10px;letter-spacing:0.04em;color:#a4aebd;border:1px solid rgba(255,255,255,0.13);padding:5px 9px;">${t.pricing.packages[0].tags[1]}</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:7px;margin-bottom:4px;"><span style="font-size:12px;color:#8b96a8;letter-spacing:0.06em;">${t.pricing.from}</span><span style="font-family:'Libre Caslon Display',serif;font-size:38px;color:#f4f1ea;">€250</span></div>
          <div style="font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#6f7a8c;margin-bottom:18px;">${t.pricing.perAircraft}</div>
          <div style="height:1px;background:rgba(255,255,255,0.07);margin-bottom:18px;"></div>
          <p style="font-size:13.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.pricing.packages[0].desc}</p>
        </div>
        <!-- Standard -->
        <div data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(26px);transition:all .8s cubic-bezier(.2,.6,.2,1);background:#0a1120;border:1px solid rgba(255,255,255,0.07);padding:32px 26px;display:flex;flex-direction:column;">
          <div style="font-family:'Libre Caslon Display',serif;font-size:23px;color:#f4f1ea;margin-bottom:16px;">${t.pricing.packages[1].name}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
            <span style="font-size:10px;letter-spacing:0.04em;color:#a4aebd;border:1px solid rgba(255,255,255,0.13);padding:5px 9px;">${t.pricing.packages[1].tags[0]}</span>
            <span style="font-size:10px;letter-spacing:0.04em;color:#a4aebd;border:1px solid rgba(255,255,255,0.13);padding:5px 9px;">${t.pricing.packages[1].tags[1]}</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:7px;margin-bottom:4px;"><span style="font-size:12px;color:#8b96a8;letter-spacing:0.06em;">${t.pricing.from}</span><span style="font-family:'Libre Caslon Display',serif;font-size:38px;color:#f4f1ea;">€500</span></div>
          <div style="font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#6f7a8c;margin-bottom:18px;">${t.pricing.perAircraft}</div>
          <div style="height:1px;background:rgba(255,255,255,0.07);margin-bottom:18px;"></div>
          <p style="font-size:13.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.pricing.packages[1].desc}</p>
        </div>
        <!-- Recommended First Clean (featured) -->
        <div data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(26px);transition:all .8s cubic-bezier(.2,.6,.2,1);background:linear-gradient(180deg,#13192a 0%,#0c1322 100%);border:1px solid rgba(198,166,103,0.55);padding:32px 26px;display:flex;flex-direction:column;position:relative;box-shadow:0 24px 60px -30px rgba(198,166,103,0.4);">
          <div style="position:absolute;top:-1px;right:20px;background:#c6a667;color:#0a1120;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;font-weight:700;padding:7px 12px;">${t.pricing.recommended}</div>
          <div style="font-family:'Libre Caslon Display',serif;font-size:23px;color:#f6f1e4;margin-bottom:16px;">${t.pricing.packages[2].name}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
            <span style="font-size:10px;letter-spacing:0.04em;color:#d8c08a;border:1px solid rgba(198,166,103,0.4);padding:5px 9px;">${t.pricing.packages[2].tags[0]}</span>
            <span style="font-size:10px;letter-spacing:0.04em;color:#d8c08a;border:1px solid rgba(198,166,103,0.4);padding:5px 9px;">${t.pricing.packages[2].tags[1]}</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:7px;margin-bottom:4px;"><span style="font-size:12px;color:#b39a64;letter-spacing:0.06em;">${t.pricing.from}</span><span style="font-family:'Libre Caslon Display',serif;font-size:40px;color:#f6f1e4;">€900</span></div>
          <div style="font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#a98f5e;margin-bottom:18px;">${t.pricing.perAircraft}</div>
          <div style="height:1px;background:rgba(198,166,103,0.3);margin-bottom:18px;"></div>
          <p style="font-size:13.5px;line-height:1.7;color:#c2cad6;font-weight:300;margin:0;">${t.pricing.packages[2].desc}</p>
        </div>
        <!-- Premium / Polish -->
        <div data-reveal data-reveal-delay="240" style="opacity:0;transform:translateY(26px);transition:all .8s cubic-bezier(.2,.6,.2,1);background:#0a1120;border:1px solid rgba(255,255,255,0.07);padding:32px 26px;display:flex;flex-direction:column;">
          <div style="font-family:'Libre Caslon Display',serif;font-size:23px;color:#f4f1ea;margin-bottom:16px;">${t.pricing.packages[3].name}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
            <span style="font-size:10px;letter-spacing:0.04em;color:#a4aebd;border:1px solid rgba(255,255,255,0.13);padding:5px 9px;">${t.pricing.packages[3].tags[0]}</span>
            <span style="font-size:10px;letter-spacing:0.04em;color:#a4aebd;border:1px solid rgba(255,255,255,0.13);padding:5px 9px;">${t.pricing.packages[3].tags[1]}</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:7px;margin-bottom:4px;"><span style="font-family:'Libre Caslon Display',serif;font-size:30px;color:#f4f1ea;">${t.pricing.packages[3].priceText}</span></div>
          <div style="font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#6f7a8c;margin-bottom:18px;">${t.pricing.packages[3].unitText}</div>
          <div style="height:1px;background:rgba(255,255,255,0.07);margin-bottom:18px;"></div>
          <p style="font-size:13.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.pricing.packages[3].desc}</p>
        </div>
      </div>
      <p data-reveal style="opacity:0;transform:translateY(20px);transition:all .8s cubic-bezier(.2,.6,.2,1);text-align:center;font-size:13px;color:#7e8a9c;margin:26px auto 0;max-width:78ch;font-weight:300;line-height:1.7;">${t.pricing.packagesNote}</p>

      <!-- ===== Price matrix ===== -->
      <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);margin-top:96px;display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <span style="width:26px;height:1px;background:#c6a667;"></span>
        <span style="font-size:11.5px;letter-spacing:0.36em;text-transform:uppercase;color:#c6a667;font-weight:600;">${t.pricing.levelsEyebrow}</span>
      </div>
      <h3 data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-family:'Libre Caslon Display',serif;font-weight:400;font-size:clamp(26px,3vw,38px);line-height:1.12;color:#f4f1ea;margin:0 0 8px;max-width:24ch;">${t.pricing.levelsTitle}</h3>
      <p data-reveal data-reveal-delay="140" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-size:14px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0 0 18px;max-width:60ch;">${t.pricing.levelsIntro}</p>

      <!-- Interior table -->
      <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);margin-top:30px;">
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-bottom:14px;flex-wrap:wrap;">
          <h4 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:22px;color:#f4f1ea;margin:0;">${t.pricing.interiorTable.heading}</h4>
          <span style="font-size:12px;color:#8b96a8;font-weight:300;">${t.pricing.interiorTable.sub}</span>
        </div>
        <div style="border:1px solid rgba(198,166,103,0.16);background:#0a1120;overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;min-width:520px;">
            <thead><tr>
              <th style="text-align:left;padding:16px 22px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">${t.pricing.interiorTable.thSize}</th>
              <th style="text-align:center;padding:16px 18px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">${t.pricing.interiorTable.thL1} <span style="color:#6f7a8c;">${t.pricing.interiorTable.thL1sub}</span></th>
              <th style="text-align:center;padding:16px 18px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#c6a667;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);background:rgba(198,166,103,0.07);">${t.pricing.interiorTable.thL2} <span style="color:#b39a64;">${t.pricing.interiorTable.thL2sub}</span></th>
            </tr></thead>
            <tbody>
              <tr><td style="padding:14px 22px;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:#e7ebf1;font-size:15px;">1&ndash;3</span> &nbsp;<span style="color:#6f7a8c;font-size:11.5px;">${t.pricing.interiorTable.rows[0]}</span></td><td style="text-align:center;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:20px;color:#dfe4ec;">€150</td><td style="text-align:center;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:20px;color:#f4f1ea;background:rgba(198,166,103,0.07);">€300</td></tr>
              <tr><td style="padding:14px 22px;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:#e7ebf1;font-size:15px;">3&ndash;6</span> &nbsp;<span style="color:#6f7a8c;font-size:11.5px;">${t.pricing.interiorTable.rows[1]}</span></td><td style="text-align:center;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:20px;color:#dfe4ec;">€250</td><td style="text-align:center;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:20px;color:#f4f1ea;background:rgba(198,166,103,0.07);">€450</td></tr>
              <tr><td style="padding:14px 22px;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:#e7ebf1;font-size:15px;">6&ndash;8</span> &nbsp;<span style="color:#6f7a8c;font-size:11.5px;">${t.pricing.interiorTable.rows[2]}</span></td><td style="text-align:center;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:20px;color:#dfe4ec;">€350</td><td style="text-align:center;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:20px;color:#f4f1ea;background:rgba(198,166,103,0.07);">€650</td></tr>
              <tr><td style="padding:14px 22px;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:#e7ebf1;font-size:15px;">8&ndash;10</span> &nbsp;<span style="color:#6f7a8c;font-size:11.5px;">${t.pricing.interiorTable.rows[3]}</span></td><td style="text-align:center;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:20px;color:#dfe4ec;">€450</td><td style="text-align:center;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:20px;color:#f4f1ea;background:rgba(198,166,103,0.07);">€800</td></tr>
              <tr><td style="padding:14px 22px;"><span style="color:#e7ebf1;font-size:15px;">10+</span> &nbsp;<span style="color:#6f7a8c;font-size:11.5px;">${t.pricing.interiorTable.rows[4]}</span></td><td style="text-align:center;padding:14px 18px;font-size:12px;font-style:italic;color:#b39a64;">${t.pricing.interiorTable.customQuote}</td><td style="text-align:center;padding:14px 18px;font-size:12px;font-style:italic;color:#b39a64;background:rgba(198,166,103,0.07);">${t.pricing.interiorTable.customQuote}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Exterior table -->
      <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);margin-top:36px;">
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-bottom:14px;flex-wrap:wrap;">
          <h4 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:22px;color:#f4f1ea;margin:0;">${t.pricing.exteriorTable.heading}</h4>
          <span style="font-size:12px;color:#8b96a8;font-weight:300;">${t.pricing.exteriorTable.sub}</span>
        </div>
        <div style="border:1px solid rgba(198,166,103,0.16);background:#0a1120;overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;min-width:680px;">
            <thead><tr>
              <th style="text-align:left;padding:16px 22px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">${t.pricing.exteriorTable.thSize}</th>
              <th style="text-align:center;padding:16px 14px;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">L1 <span style="color:#6f7a8c;">${t.pricing.exteriorTable.l1}</span></th>
              <th style="text-align:center;padding:16px 14px;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">L2 <span style="color:#6f7a8c;">${t.pricing.exteriorTable.l2}</span></th>
              <th style="text-align:center;padding:16px 14px;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#c6a667;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);background:rgba(198,166,103,0.07);">L3 <span style="color:#b39a64;">${t.pricing.exteriorTable.l3}</span></th>
              <th style="text-align:center;padding:16px 14px;font-size:10.5px;letter-spacing:0.08em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">L4 <span style="color:#6f7a8c;">${t.pricing.exteriorTable.l4}</span></th>
            </tr></thead>
            <tbody>
              <tr><td style="padding:14px 22px;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:#e7ebf1;font-size:15px;">1&ndash;3</span> &nbsp;<span style="color:#6f7a8c;font-size:11.5px;">${t.pricing.exteriorTable.rows[0]}</span></td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#dfe4ec;">€100</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#dfe4ec;">€200</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#f4f1ea;background:rgba(198,166,103,0.07);">€600</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;font-style:italic;color:#b39a64;">${t.pricing.exteriorTable.custom}</td></tr>
              <tr><td style="padding:14px 22px;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:#e7ebf1;font-size:15px;">3&ndash;6</span> &nbsp;<span style="color:#6f7a8c;font-size:11.5px;">${t.pricing.exteriorTable.rows[1]}</span></td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#dfe4ec;">€200</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#dfe4ec;">€400</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#f4f1ea;background:rgba(198,166,103,0.07);">€800</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;font-style:italic;color:#b39a64;">${t.pricing.exteriorTable.custom}</td></tr>
              <tr><td style="padding:14px 22px;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:#e7ebf1;font-size:15px;">6&ndash;8</span> &nbsp;<span style="color:#6f7a8c;font-size:11.5px;">${t.pricing.exteriorTable.rows[2]}</span></td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#dfe4ec;">€300</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#dfe4ec;">€600</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#f4f1ea;background:rgba(198,166,103,0.07);">€1,000</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;font-style:italic;color:#b39a64;">${t.pricing.exteriorTable.custom}</td></tr>
              <tr><td style="padding:14px 22px;border-bottom:1px solid rgba(255,255,255,0.05);"><span style="color:#e7ebf1;font-size:15px;">8&ndash;10</span> &nbsp;<span style="color:#6f7a8c;font-size:11.5px;">${t.pricing.exteriorTable.rows[3]}</span></td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#dfe4ec;">€400</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#dfe4ec;">€800</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-family:'Libre Caslon Display',serif;font-size:19px;color:#f4f1ea;background:rgba(198,166,103,0.07);">€1,200</td><td style="text-align:center;padding:14px 14px;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;font-style:italic;color:#b39a64;">${t.pricing.exteriorTable.custom}</td></tr>
              <tr><td style="padding:14px 22px;"><span style="color:#e7ebf1;font-size:15px;">10+</span> &nbsp;<span style="color:#6f7a8c;font-size:11.5px;">${t.pricing.exteriorTable.rows[4]}</span></td><td style="text-align:center;padding:14px 14px;font-size:12px;font-style:italic;color:#b39a64;">${t.pricing.exteriorTable.custom}</td><td style="text-align:center;padding:14px 14px;font-size:12px;font-style:italic;color:#b39a64;">${t.pricing.exteriorTable.custom}</td><td style="text-align:center;padding:14px 14px;font-size:12px;font-style:italic;color:#b39a64;background:rgba(198,166,103,0.07);">${t.pricing.exteriorTable.custom}</td><td style="text-align:center;padding:14px 14px;font-size:12px;font-style:italic;color:#b39a64;">${t.pricing.exteriorTable.custom}</td></tr>
            </tbody>
          </table>
        </div>
        <p style="font-size:12px;color:#6f7a8c;margin:14px 0 0;font-weight:300;line-height:1.6;">${t.pricing.exteriorTable.note}</p>
      </div>

      <!-- ===== What's included ===== -->
      <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);margin-top:96px;display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <span style="width:26px;height:1px;background:#c6a667;"></span>
        <span style="font-size:11.5px;letter-spacing:0.36em;text-transform:uppercase;color:#c6a667;font-weight:600;">${t.pricing.included.eyebrow}</span>
      </div>
      <h3 data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-family:'Libre Caslon Display',serif;font-weight:400;font-size:clamp(26px,3vw,38px);line-height:1.12;color:#f4f1ea;margin:0 0 22px;max-width:22ch;">${t.pricing.included.title}</h3>

      <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);">
        <div style="display:inline-flex;border:1px solid rgba(198,166,103,0.3);margin-bottom:26px;">
          <button data-inc-btn="interior" type="button" style="background:transparent;border:none;cursor:pointer;font-family:inherit;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#cdd5e0;padding:12px 28px;">${t.pricing.included.tabInterior}</button>
          <button data-inc-btn="exterior" type="button" style="background:transparent;border:none;border-left:1px solid rgba(198,166,103,0.3);cursor:pointer;font-family:inherit;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#cdd5e0;padding:12px 28px;">${t.pricing.included.tabExterior}</button>
        </div>

        <!-- Interior panel -->
        <div data-inc-panel="interior">
          <div style="border:1px solid rgba(198,166,103,0.16);background:#0a1120;overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;min-width:560px;">
              <thead><tr>
                <th style="text-align:left;padding:15px 22px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">${t.pricing.included.thService}</th>
                <th style="text-align:center;padding:15px 16px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);width:130px;">${t.pricing.included.interiorL1}</th>
                <th style="text-align:center;padding:15px 16px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#c6a667;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);background:rgba(198,166,103,0.07);width:130px;">${t.pricing.included.interiorL2}</th>
              </tr></thead>
              <tbody>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[0]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[1]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[2]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[3]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[4]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[5]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[6]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[7]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);font-size:9.5px;letter-spacing:0.06em;text-transform:uppercase;color:#7e8a9c;">${t.pricing.included.yes}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);font-size:9.5px;letter-spacing:0.06em;text-transform:uppercase;color:#9a8a64;background:rgba(198,166,103,0.05);">${t.pricing.included.yes}</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[8]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[9]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[10]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:15px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[11]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:15px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:15px;background:rgba(198,166,103,0.05);">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[12]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:15px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);font-size:9.5px;letter-spacing:0.06em;text-transform:uppercase;color:#9a8a64;background:rgba(198,166,103,0.05);">${t.pricing.included.yes}</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.interiorRows[13]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:15px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);font-size:9.5px;letter-spacing:0.06em;text-transform:uppercase;color:#9a8a64;background:rgba(198,166,103,0.05);">${t.pricing.included.ifMaterial}</td></tr>
                <tr><td style="padding:12px 22px;font-size:13.5px;color:#bcc5d2;font-weight:300;">${t.pricing.included.interiorRows[14]}</td><td style="text-align:center;color:#3a4456;font-size:15px;">—</td><td style="text-align:center;font-size:9.5px;letter-spacing:0.06em;text-transform:uppercase;color:#9a8a64;background:rgba(198,166,103,0.05);">${t.pricing.included.onApproval}</td></tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:12px;color:#6f7a8c;margin:14px 0 0;font-weight:300;line-height:1.6;">${t.pricing.included.interiorNote}</p>
        </div>

        <!-- Exterior panel -->
        <div data-inc-panel="exterior">
          <div style="border:1px solid rgba(198,166,103,0.16);background:#0a1120;overflow-x:auto;">
            <table style="width:100%;border-collapse:collapse;min-width:720px;">
              <thead><tr>
                <th style="text-align:left;padding:15px 22px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">${t.pricing.included.thService}</th>
                <th style="text-align:center;padding:15px 12px;font-size:10.5px;letter-spacing:0.06em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">L1<br><span style="color:#6f7a8c;font-size:9px;">${t.pricing.included.exteriorL1}</span></th>
                <th style="text-align:center;padding:15px 12px;font-size:10.5px;letter-spacing:0.06em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">L2<br><span style="color:#6f7a8c;font-size:9px;">${t.pricing.included.exteriorL2}</span></th>
                <th style="text-align:center;padding:15px 12px;font-size:10.5px;letter-spacing:0.06em;text-transform:uppercase;color:#c6a667;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);background:rgba(198,166,103,0.07);">L3<br><span style="color:#b39a64;font-size:9px;">${t.pricing.included.exteriorL3}</span></th>
                <th style="text-align:center;padding:15px 12px;font-size:10.5px;letter-spacing:0.06em;text-transform:uppercase;color:#8b96a8;font-weight:600;border-bottom:1px solid rgba(198,166,103,0.22);">L4<br><span style="color:#6f7a8c;font-size:9px;">${t.pricing.included.exteriorL4}</span></th>
              </tr></thead>
              <tbody>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[0]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[1]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[2]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[3]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[4]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[5]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[6]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[7]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[8]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[9]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[10]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;border-bottom:1px solid rgba(255,255,255,0.05);">${t.pricing.included.exteriorRows[11]}</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#3a4456;font-size:14px;">—</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;background:rgba(198,166,103,0.05);">✓</td><td style="text-align:center;border-bottom:1px solid rgba(255,255,255,0.05);color:#c6a667;font-size:14px;">✓</td></tr>
                <tr><td style="padding:12px 22px;font-size:13px;color:#bcc5d2;font-weight:300;">${t.pricing.included.exteriorRows[12]}</td><td style="text-align:center;color:#3a4456;font-size:14px;">—</td><td style="text-align:center;color:#3a4456;font-size:14px;">—</td><td style="text-align:center;color:#3a4456;font-size:14px;background:rgba(198,166,103,0.05);">—</td><td style="text-align:center;font-size:9px;letter-spacing:0.05em;text-transform:uppercase;color:#9a8a64;">${t.pricing.included.afterApproval}</td></tr>
              </tbody>
            </table>
          </div>
          <p style="font-size:12px;color:#6f7a8c;margin:14px 0 0;font-weight:300;line-height:1.6;">${t.pricing.included.exteriorNote}</p>
        </div>
      </div>

      <!-- ===== Good to know ===== -->
      <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);margin-top:96px;display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <span style="width:26px;height:1px;background:#c6a667;"></span>
        <span style="font-size:11.5px;letter-spacing:0.36em;text-transform:uppercase;color:#c6a667;font-weight:600;">${t.pricing.goodToKnow.eyebrow}</span>
      </div>
      <h3 data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-family:'Libre Caslon Display',serif;font-weight:400;font-size:clamp(26px,3vw,38px);line-height:1.12;color:#f4f1ea;margin:0 0 30px;max-width:22ch;">${t.pricing.goodToKnow.title}</h3>
      <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1px;background:rgba(198,166,103,0.14);border:1px solid rgba(198,166,103,0.14);">
        <div style="background:#0a1120;padding:28px 28px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span style="width:6px;height:6px;background:#c6a667;transform:rotate(45deg);"></span><span style="font-size:13px;letter-spacing:0.06em;color:#e7ebf1;font-weight:600;">${t.pricing.goodToKnow.cards[0].title}</span></div><p style="font-size:13.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.pricing.goodToKnow.cards[0].body}</p></div>
        <div style="background:#0a1120;padding:28px 28px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span style="width:6px;height:6px;background:#c6a667;transform:rotate(45deg);"></span><span style="font-size:13px;letter-spacing:0.06em;color:#e7ebf1;font-weight:600;">${t.pricing.goodToKnow.cards[1].title}</span></div><p style="font-size:13.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.pricing.goodToKnow.cards[1].body}</p></div>
        <div style="background:#0a1120;padding:28px 28px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span style="width:6px;height:6px;background:#c6a667;transform:rotate(45deg);"></span><span style="font-size:13px;letter-spacing:0.06em;color:#e7ebf1;font-weight:600;">${t.pricing.goodToKnow.cards[2].title}</span></div><p style="font-size:13.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.pricing.goodToKnow.cards[2].body}</p></div>
        <div style="background:#0a1120;padding:28px 28px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span style="width:6px;height:6px;background:#c6a667;transform:rotate(45deg);"></span><span style="font-size:13px;letter-spacing:0.06em;color:#e7ebf1;font-weight:600;">${t.pricing.goodToKnow.cards[3].title}</span></div><p style="font-size:13.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.pricing.goodToKnow.cards[3].body}</p></div>
        <div style="background:#0a1120;padding:28px 28px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span style="width:6px;height:6px;background:#c6a667;transform:rotate(45deg);"></span><span style="font-size:13px;letter-spacing:0.06em;color:#e7ebf1;font-weight:600;">${t.pricing.goodToKnow.cards[4].title}</span></div><p style="font-size:13.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.pricing.goodToKnow.cards[4].body}</p></div>
        <div style="background:#0a1120;padding:28px 28px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span style="width:6px;height:6px;background:#c6a667;transform:rotate(45deg);"></span><span style="font-size:13px;letter-spacing:0.06em;color:#e7ebf1;font-weight:600;">${t.pricing.goodToKnow.cards[5].title}</span></div><p style="font-size:13.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.pricing.goodToKnow.cards[5].body}</p></div>
      </div>

      <p data-reveal style="opacity:0;transform:translateY(20px);transition:all .8s cubic-bezier(.2,.6,.2,1);text-align:center;font-size:13.5px;color:#7e8a9c;margin:48px 0 0;font-weight:300;">${t.pricing.ctaPre}<a href="#contact" style="color:#c6a667;text-decoration:none;border-bottom:1px solid rgba(198,166,103,0.4);">${t.pricing.ctaLink}</a>${t.pricing.ctaPost}</p>
    </div>
  </section>

  <!-- ================= FLEET / RECURRING ================= -->
  <section id="fleet" style="scroll-margin-top:90px;background:#070b13;padding:130px 48px;">
    <div style="max-width:1240px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
      <div>
        <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);display:flex;align-items:center;gap:12px;margin-bottom:24px;">
          <span style="width:26px;height:1px;background:#c6a667;"></span>
          <span style="font-size:11.5px;letter-spacing:0.36em;text-transform:uppercase;color:#c6a667;font-weight:600;">${t.fleet.eyebrow}</span>
        </div>
        <h2 data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-family:'Libre Caslon Display',serif;font-weight:400;font-size:clamp(30px,3.7vw,46px);line-height:1.12;color:#f4f1ea;margin:0 0 26px;">${t.fleet.title}</h2>
        <p data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-size:16.5px;line-height:1.8;color:#97a2b3;font-weight:300;margin:0 0 30px;max-width:46ch;">${t.fleet.body}</p>
        <a data-reveal data-reveal-delay="240" href="#contact" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);display:inline-flex;align-items:center;gap:10px;font-size:12.5px;letter-spacing:0.16em;text-transform:uppercase;color:#e7ddc4;text-decoration:none;border:1px solid rgba(198,166,103,0.55);padding:15px 30px;font-weight:500;transition:background .3s,color .3s;" style-hover="background:#c6a667;color:#0a1120;">${t.fleet.cta}</a>
      </div>
      <div data-reveal data-reveal-delay="120" style="opacity:0;transform:translateY(26px);transition:all .9s cubic-bezier(.2,.6,.2,1);display:flex;flex-direction:column;gap:1px;background:rgba(198,166,103,0.14);border:1px solid rgba(198,166,103,0.14);">
        <div style="background:#0b1322;padding:32px 36px;display:flex;gap:24px;align-items:flex-start;">
          <span style="font-family:'Libre Caslon Display',serif;font-size:30px;color:#c6a667;line-height:1;">01</span>
          <div><h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:21px;color:#f4f1ea;margin:0 0 8px;">${t.fleet.steps[0].title}</h3><p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.fleet.steps[0].body}</p></div>
        </div>
        <div style="background:#0b1322;padding:32px 36px;display:flex;gap:24px;align-items:flex-start;">
          <span style="font-family:'Libre Caslon Display',serif;font-size:30px;color:#c6a667;line-height:1;">02</span>
          <div><h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:21px;color:#f4f1ea;margin:0 0 8px;">${t.fleet.steps[1].title}</h3><p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.fleet.steps[1].body}</p></div>
        </div>
        <div style="background:#0b1322;padding:32px 36px;display:flex;gap:24px;align-items:flex-start;">
          <span style="font-family:'Libre Caslon Display',serif;font-size:30px;color:#c6a667;line-height:1;">03</span>
          <div><h3 style="font-family:'Libre Caslon Display',serif;font-weight:400;font-size:21px;color:#f4f1ea;margin:0 0 8px;">${t.fleet.steps[2].title}</h3><p style="font-size:14.5px;line-height:1.7;color:#8b96a8;font-weight:300;margin:0;">${t.fleet.steps[2].body}</p></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= GALLERY ================= -->
  <section id="gallery" style="scroll-margin-top:90px;background:#05080f;padding:130px 48px;border-top:1px solid rgba(255,255,255,0.04);">
    <div style="max-width:1240px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:56px;">
        <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);display:inline-flex;align-items:center;gap:12px;margin-bottom:24px;">
          <span style="width:26px;height:1px;background:#c6a667;"></span>
          <span style="font-size:11.5px;letter-spacing:0.36em;text-transform:uppercase;color:#c6a667;font-weight:600;">${t.gallery.eyebrow}</span>
          <span style="width:26px;height:1px;background:#c6a667;"></span>
        </div>
        <h2 data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-family:'Libre Caslon Display',serif;font-weight:400;font-size:clamp(30px,3.7vw,46px);line-height:1.12;color:#f4f1ea;margin:0 auto 14px;max-width:20ch;">${t.gallery.title}</h2>
        <p data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-size:15px;line-height:1.7;color:#8b96a8;font-weight:300;max-width:50ch;margin:0 auto;">${t.gallery.intro}</p>
      </div>

      <!-- before/after sliders -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-bottom:22px;">
        <div data-reveal data-ba style="opacity:0;transform:translateY(26px);transition:all .8s cubic-bezier(.2,.6,.2,1);position:relative;aspect-ratio:16/10;overflow:hidden;border:1px solid rgba(198,166,103,0.16);user-select:none;cursor:ew-resize;touch-action:none;">
          <div style="position:absolute;inset:0;background:repeating-linear-gradient(118deg,rgba(255,255,255,0.025) 0 2px,transparent 2px 24px),linear-gradient(150deg,#27344f 0%,#101a2c 85%);display:flex;align-items:flex-end;justify-content:flex-end;padding:18px;"><span style="font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:0.1em;color:rgba(214,221,231,0.7);text-transform:uppercase;background:rgba(5,8,15,0.5);padding:6px 10px;">${t.gallery.ba1After}</span></div>
          <div data-ba-before style="position:absolute;inset:0;clip-path:inset(0 50% 0 0);background:repeating-linear-gradient(118deg,rgba(0,0,0,0.12) 0 2px,transparent 2px 18px),linear-gradient(150deg,#1a2030 0%,#0a0d15 90%);display:flex;align-items:flex-end;padding:18px;"><span style="font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:0.1em;color:rgba(198,166,103,0.7);text-transform:uppercase;background:rgba(5,8,15,0.5);padding:6px 10px;">${t.gallery.before}</span></div>
          <div data-ba-handle style="position:absolute;top:0;bottom:0;left:50%;width:2px;background:#c6a667;transform:translateX(-50%);pointer-events:none;"><span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;border-radius:50%;background:#c6a667;display:flex;align-items:center;justify-content:center;color:#0a1120;font-size:14px;box-shadow:0 6px 20px rgba(0,0,0,0.45);">⇆</span></div>
        </div>
        <div data-reveal data-reveal-delay="120" data-ba style="opacity:0;transform:translateY(26px);transition:all .8s cubic-bezier(.2,.6,.2,1);position:relative;aspect-ratio:16/10;overflow:hidden;border:1px solid rgba(198,166,103,0.16);user-select:none;cursor:ew-resize;touch-action:none;">
          <div style="position:absolute;inset:0;background:repeating-linear-gradient(118deg,rgba(255,255,255,0.025) 0 2px,transparent 2px 24px),linear-gradient(150deg,#2c3142 0%,#14171f 85%);display:flex;align-items:flex-end;justify-content:flex-end;padding:18px;"><span style="font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:0.1em;color:rgba(214,221,231,0.7);text-transform:uppercase;background:rgba(5,8,15,0.5);padding:6px 10px;">${t.gallery.ba2After}</span></div>
          <div data-ba-before style="position:absolute;inset:0;clip-path:inset(0 50% 0 0);background:repeating-linear-gradient(118deg,rgba(0,0,0,0.12) 0 2px,transparent 2px 18px),linear-gradient(150deg,#211d18 0%,#0d0b08 90%);display:flex;align-items:flex-end;padding:18px;"><span style="font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:0.1em;color:rgba(198,166,103,0.7);text-transform:uppercase;background:rgba(5,8,15,0.5);padding:6px 10px;">${t.gallery.before}</span></div>
          <div data-ba-handle style="position:absolute;top:0;bottom:0;left:50%;width:2px;background:#c6a667;transform:translateX(-50%);pointer-events:none;"><span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:40px;height:40px;border-radius:50%;background:#c6a667;display:flex;align-items:center;justify-content:center;color:#0a1120;font-size:14px;box-shadow:0 6px 20px rgba(0,0,0,0.45);">⇆</span></div>
        </div>
      </div>

      <!-- mosaic -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:200px;gap:14px;">
        <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);grid-column:span 2;grid-row:span 2;position:relative;overflow:hidden;border:1px solid rgba(198,166,103,0.12);background:repeating-linear-gradient(118deg,rgba(255,255,255,0.02) 0 2px,transparent 2px 26px),linear-gradient(155deg,#1c2942 0%,#0a1120 80%);"><span style="position:absolute;left:16px;bottom:14px;font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:0.1em;color:rgba(198,166,103,0.6);text-transform:uppercase;">${t.gallery.mosaic[0]}</span></div>
        <div data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);position:relative;overflow:hidden;border:1px solid rgba(198,166,103,0.12);background:repeating-linear-gradient(118deg,rgba(255,255,255,0.02) 0 2px,transparent 2px 26px),linear-gradient(155deg,#26303f 0%,#10141c 80%);"><span style="position:absolute;left:16px;bottom:14px;font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:0.1em;color:rgba(198,166,103,0.6);text-transform:uppercase;">${t.gallery.mosaic[1]}</span></div>
        <div data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);position:relative;overflow:hidden;border:1px solid rgba(198,166,103,0.12);background:repeating-linear-gradient(118deg,rgba(255,255,255,0.02) 0 2px,transparent 2px 26px),linear-gradient(155deg,#1f2b3e 0%,#0c1019 80%);"><span style="position:absolute;left:16px;bottom:14px;font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:0.1em;color:rgba(198,166,103,0.6);text-transform:uppercase;">${t.gallery.mosaic[2]}</span></div>
        <div data-reveal data-reveal-delay="100" style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);position:relative;overflow:hidden;border:1px solid rgba(198,166,103,0.12);background:repeating-linear-gradient(118deg,rgba(255,255,255,0.02) 0 2px,transparent 2px 26px),linear-gradient(155deg,#28323f 0%,#11151c 80%);"><span style="position:absolute;left:16px;bottom:14px;font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:0.1em;color:rgba(198,166,103,0.6);text-transform:uppercase;">${t.gallery.mosaic[3]}</span></div>
        <div data-reveal data-reveal-delay="180" style="opacity:0;transform:translateY(24px);transition:all .8s cubic-bezier(.2,.6,.2,1);position:relative;overflow:hidden;border:1px solid rgba(198,166,103,0.12);background:repeating-linear-gradient(118deg,rgba(255,255,255,0.02) 0 2px,transparent 2px 26px),linear-gradient(155deg,#202c40 0%,#0b0f17 80%);"><span style="position:absolute;left:16px;bottom:14px;font-family:ui-monospace,monospace;font-size:10.5px;letter-spacing:0.1em;color:rgba(198,166,103,0.6);text-transform:uppercase;">${t.gallery.mosaic[4]}</span></div>
      </div>
    </div>
  </section>

  <!-- ================= TRUST STRIP ================= -->
  <section style="background:#0b1322;padding:46px 48px;border-top:1px solid rgba(198,166,103,0.14);border-bottom:1px solid rgba(198,166,103,0.14);">
    <div style="max-width:1240px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:30px;">
      <div style="display:flex;align-items:center;gap:13px;"><span style="width:7px;height:7px;background:#c6a667;transform:rotate(45deg);"></span><span style="font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#c4cedb;font-weight:500;">${t.trust[0]}</span></div>
      <span style="width:1px;height:16px;background:rgba(255,255,255,0.12);"></span>
      <div style="display:flex;align-items:center;gap:13px;"><span style="width:7px;height:7px;background:#c6a667;transform:rotate(45deg);"></span><span style="font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#c4cedb;font-weight:500;">${t.trust[1]}</span></div>
      <span style="width:1px;height:16px;background:rgba(255,255,255,0.12);"></span>
      <div style="display:flex;align-items:center;gap:13px;"><span style="width:7px;height:7px;background:#c6a667;transform:rotate(45deg);"></span><span style="font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#c4cedb;font-weight:500;">${t.trust[2]}</span></div>
      <span style="width:1px;height:16px;background:rgba(255,255,255,0.12);"></span>
      <div style="display:flex;align-items:center;gap:13px;"><span style="width:7px;height:7px;background:#c6a667;transform:rotate(45deg);"></span><span style="font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#c4cedb;font-weight:500;">${t.trust[3]}</span></div>
    </div>
  </section>

  <!-- ================= CONTACT / FOOTER ================= -->
  <footer id="contact" style="scroll-margin-top:90px;background:#05080f;padding:120px 48px 48px;position:relative;overflow:hidden;">
    <div style="position:absolute;left:34px;right:34px;top:48px;bottom:120px;border:1px solid rgba(198,166,103,0.1);pointer-events:none;"></div>
    <div style="max-width:1100px;margin:0 auto;text-align:center;position:relative;">
      <div data-reveal style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-size:11.5px;letter-spacing:0.42em;text-transform:uppercase;color:#c6a667;font-weight:600;margin-bottom:28px;">${t.contact.eyebrow}</div>
      <h2 data-reveal data-reveal-delay="80" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-family:'Libre Caslon Display',serif;font-weight:400;font-size:clamp(32px,4.2vw,52px);line-height:1.08;color:#f6f4ee;margin:0 0 24px;">${t.contact.title}</h2>
      <p data-reveal data-reveal-delay="160" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);font-size:16.5px;line-height:1.8;color:#a4aebd;font-weight:300;max-width:54ch;margin:0 auto 48px;">${t.contact.body}</p>

      <div data-reveal data-reveal-delay="220" style="opacity:0;transform:translateY(24px);transition:all .9s cubic-bezier(.2,.6,.2,1);display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:18px 56px;margin-bottom:64px;">
        <div style="text-align:center;">
          <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#7e8a9c;margin-bottom:8px;">${t.contact.emailLabel}</div>
          <div style="font-family:'Libre Caslon Display',serif;font-size:26px;color:#e7ddc4;">office<span style="opacity:0.8;">@</span>airshine.online</div>
        </div>
        <span style="width:1px;height:40px;background:rgba(198,166,103,0.25);"></span>
        <div style="text-align:center;">
          <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#7e8a9c;margin-bottom:8px;">${t.contact.phoneLabel}</div>
          <div style="font-family:'Libre Caslon Display',serif;font-size:26px;color:#e7ddc4;">0736 070 042</div>
        </div>
        <span style="width:1px;height:40px;background:rgba(198,166,103,0.25);"></span>
        <div style="text-align:center;">
          <div style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#7e8a9c;margin-bottom:8px;">${t.contact.areaLabel}</div>
          <div style="font-family:'Libre Caslon Display',serif;font-size:26px;color:#e7ddc4;">${t.contact.areaValue}</div>
        </div>
      </div>
    </div>

    <div style="max-width:1240px;margin:0 auto;padding-top:36px;border-top:1px solid rgba(255,255,255,0.07);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px;position:relative;">
      <div style="display:flex;align-items:center;gap:11px;">
        <span style="width:8px;height:8px;background:#c6a667;transform:rotate(45deg);display:inline-block;"></span>
        <span style="font-family:'Libre Caslon Display',serif;font-size:17px;letter-spacing:0.05em;color:#f4f1ea;">AirShine</span>
      </div>
      <p style="font-size:12.5px;color:#6f7a8c;margin:0;font-weight:300;letter-spacing:0.02em;">${t.footer.tagline}</p>
      <p style="font-size:12.5px;color:#6f7a8c;margin:0;font-weight:300;">${t.footer.copyright}</p>
    </div>
  </footer>

</div>
`;
}
