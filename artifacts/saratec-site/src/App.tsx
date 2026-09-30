import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  Cloud,
  Clock3,
  Database,
  Factory,
  FileCheck2,
  FolderLock,
  GraduationCap,
  Headset,
  Laptop,
  LifeBuoy,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Monitor,
  Network,
  Router as RouterIcon,
  Server,
  Share2,
  ShieldCheck,
  Stethoscope,
  Store,
  UserRoundCheck,
  Wrench,
  X,
} from 'lucide-react';
import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import brandLogo from '@assets/heb_1790771890057.svg';

const queryClient = new QueryClient();
const whatsappHref =
  'https://wa.me/?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A1%D7%90%D7%A8%D7%90%D7%98%D7%A7%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%20%D7%94%D7%9E%D7%97%D7%A9%D7%91%20%D7%95%D7%94%D7%AA%D7%A9%D7%AA%D7%99%D7%AA';

type IconType = typeof Server;

const services: Array<{
  title: string;
  description: string;
  icon: IconType;
}> = [
  {
    title: 'ניהול IT שוטף',
    description: 'איש קשר מקצועי שמכיר את העסק, מטפל בתקלות ומונע אותן מראש.',
    icon: Headset,
  },
  {
    title: 'שרתים ותשתיות',
    description: 'תכנון, הקמה ותחזוקה של שרתים, עמדות עבודה וסביבת מחשוב יציבה.',
    icon: Server,
  },
  {
    title: 'רשתות ותקשורת',
    description: 'רשת מהירה ומאובטחת למשרד, כולל Wi-Fi, מתגים, נתבים וחיבורים.',
    icon: Network,
  },
  {
    title: 'Microsoft 365',
    description: 'הטמעה, ניהול ואבטחה של Outlook, Teams, SharePoint ו-OneDrive.',
    icon: Monitor,
  },
  {
    title: 'גיבוי והתאוששות',
    description: 'גיבוי מסודר, בדוק ונגיש כדי שהעסק יוכל לחזור לעבוד בכל מצב.',
    icon: Database,
  },
  {
    title: 'אבטחת מידע',
    description: 'הקשחת מערכות, הרשאות, עדכונים ונהלים שמגנים על המידע החשוב.',
    icon: ShieldCheck,
  },
];

const industries: Array<{ title: string; icon: IconType }> = [
  { title: 'משרדי עורכי דין', icon: BriefcaseBusiness },
  { title: 'מרפאות וקליניקות', icon: Stethoscope },
  { title: 'עסקי מסחר ושירות', icon: Store },
  { title: 'מפעלים וחברות', icon: Factory },
  { title: 'מוסדות חינוך', icon: GraduationCap },
  { title: 'ארגונים ומשרדים', icon: Building2 },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = 'he';
    document.documentElement.dir = 'rtl';
    document.title = 'סאראטק | IT ותשתיות לעסקים בצפון';
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        'content',
        'סאראטק מספקת שירותי IT, תשתיות, גיבויים, רשתות, שרתים, Microsoft 365 ותמיכה אישית לעסקים קטנים ובינוניים בצפון הארץ.',
      );
    }
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" dir="rtl">
      <header className="site-header">
        <div className="container-site header-inner">
          <a
            href="#top"
            className="brand-mark"
            onClick={closeMenu}
            aria-label="סאראטק, לדף הבית"
            data-testid="link-brand-home"
          >
            <img src={brandLogo} alt="סאראטק - שירותי מחשוב מקצועיים" data-testid="img-brand-logo" />
          </a>

          <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="ניווט ראשי">
            <a href="#services" onClick={closeMenu} data-testid="link-nav-services">
              שירותים
            </a>
            <a href="#backup" onClick={closeMenu} data-testid="link-nav-backup">
              גיבוי ואבטחה
            </a>
            <a href="#why-saratec" onClick={closeMenu} data-testid="link-nav-why">
              למה סאראטק
            </a>
            <a href="#process" onClick={closeMenu} data-testid="link-nav-process">
              איך זה עובד
            </a>
            <a href="#contact" onClick={closeMenu} data-testid="link-nav-contact">
              צור קשר
            </a>
          </nav>

          <a
            className="header-contact"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            data-testid="link-header-whatsapp"
          >
            <MessageCircle size={16} aria-hidden="true" />
            דברו איתנו ב-WhatsApp
          </a>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
            aria-expanded={menuOpen}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container-site hero-layout">
            <div className="hero-copy">
              <div className="hero-kicker">IT ותשתיות לעסקים בצפון</div>
              <h1 id="hero-title">
                כשהטכנולוגיה
                <br />
                <strong>פשוט צריכה לעבוד.</strong>
              </h1>
              <p className="hero-lede">
                סאראטק היא שותפת ה-IT האישית של העסק שלכם — תשתיות, אבטחה, גיבויים
                ותמיכה מקצועית, עם אדם אמיתי שמכיר אתכם וזמין כשצריך.
              </p>
              <div className="hero-actions">
                <a
                  className="primary-button"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-hero-whatsapp"
                >
                  בואו נדבר על העסק
                  <ArrowLeft size={18} aria-hidden="true" />
                </a>
                <a className="outline-button" href="#services" data-testid="link-hero-services">
                  לראות את השירותים
                </a>
              </div>
              <div className="hero-note">
                <CheckCircle2 size={16} aria-hidden="true" />
                שירות אישי ומקצועי לעסקים קטנים ובינוניים
              </div>
            </div>

            <div className="systems-visual" aria-label="המחשה של תשתית IT מחוברת ומנוהלת">
              <div className="server-board">
                <div className="board-content">
                  <div className="board-header">
                    <span>תשתית העסק / לוח בקרה</span>
                    <span className="status-dot">הכול תקין</span>
                  </div>
                  <div className="network-map" aria-hidden="true">
                    <div className="node node-main">
                      <Server size={29} />
                    </div>
                    <div className="node node-top">
                      <Cloud size={23} />
                    </div>
                    <div className="node node-left">
                      <Laptop size={22} />
                    </div>
                    <div className="node node-right">
                      <RouterIcon size={22} />
                    </div>
                    <div className="node node-bottom">
                      <ShieldCheck size={22} />
                    </div>
                  </div>
                  <div className="board-footer">
                    <div className="board-metric">
                      <strong>24/7</strong>
                      <span>ניטור והגנה</span>
                    </div>
                    <div className="board-metric">
                      <strong>ענן</strong>
                      <span>גישה מאובטחת</span>
                    </div>
                    <div className="board-metric">
                      <strong>אישי</strong>
                      <span>תמיכה ישירה</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-badge">
                <div className="floating-badge-icon">
                  <LifeBuoy size={17} aria-hidden="true" />
                </div>
                <div>
                  <strong>יש עם מי לדבר</strong>
                  <span>לא נשארים לבד עם תקלה</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="הערך של שירותי סאראטק">
          <div className="container-site trust-grid">
            <div className="trust-intro">
              תשתית נכונה היא שקט לעסק
              <span>אנחנו דואגים לצד הטכנולוגי, אתם מתמקדים בעסק.</span>
            </div>
            <div className="trust-item">
              <UserRoundCheck size={19} aria-hidden="true" />
              איש קשר שמכיר אתכם
            </div>
            <div className="trust-item">
              <ShieldCheck size={19} aria-hidden="true" />
              אבטחה בלי פשרות
            </div>
            <div className="trust-item">
              <Clock3 size={19} aria-hidden="true" />
              זמינות כשצריך
            </div>
          </div>
        </section>

        <section className="intro-section section-pad" aria-labelledby="intro-title">
          <div className="container-site intro-layout">
            <div>
              <div className="eyebrow">השותף הטכנולוגי שלכם</div>
              <div className="intro-statement">
                לא עוד טכנאי שמגיע רק כשמשהו התקלקל. שותף שמכיר את העסק ושומר עליו מוכן.
              </div>
            </div>
            <div className="intro-content">
              <h2 id="intro-title" className="sr-only">
                IT שעובד בשביל העסק
              </h2>
              <p>
                עסק קטן לא צריך מחלקת IT שלמה. הוא צריך אדם מקצועי, אחראי וזמין שיידע
                להקים תשתית נכונה, לשמור עליה ולתת תשובה ברורה בכל שאלה.
              </p>
              <p>
                בסאראטק אנחנו מחברים בין ראייה טכנית רחבה לבין היכרות אישית עם האנשים
                והעבודה שלכם. בלי מילים גדולות ובלי פתרונות מיותרים — רק מחשוב שעובד.
              </p>
              <div className="stats-row" aria-label="היתרונות של סאראטק">
                <div className="stat-item" data-testid="text-benefit-practical">
                  <strong>פתרונות פרקטיים</strong>
                  <span>מותאמים לצרכים ולתקציב</span>
                </div>
                <div className="stat-item" data-testid="text-benefit-personal">
                  <strong>שירות אישי</strong>
                  <span>תקשורת בגובה העיניים</span>
                </div>
                <div className="stat-item" data-testid="text-benefit-northern">
                  <strong>קרובים לעסק</strong>
                  <span>שירות לעסקים בצפון</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-pad" aria-labelledby="services-title">
          <div className="container-site">
            <div className="section-heading">
              <div className="eyebrow">מה אנחנו עושים</div>
              <h2 id="services-title">כל התשתית שעסק צריך. במקום אחד.</h2>
              <p>
                משדרוג מחשב ועד תכנון סביבת עבודה שלמה — מקבלים פתרון מקצועי שמתחבר
                באמת לאופן שבו העסק עובד.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title} data-testid={`card-service-${index + 1}`}>
                    <div>
                      <div className="service-number">0{index + 1}</div>
                      <div className="service-icon">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="backup" className="backup-section section-pad" aria-labelledby="backup-title">
          <div className="container-site backup-layout">
            <div>
              <div className="eyebrow">הבסיס לכל עסק אחראי</div>
              <h2 id="backup-title">
                המידע שלכם הוא העסק.
                <br />
                <span>שמרו עליו.</span>
              </h2>
              <p>
                מחיקה בטעות, תקלה, כופר או שרת שנפל — לא צריך להפוך למשבר. אנחנו
                בונים מערך גיבוי אוטומטי ומוצפן, בודקים שהוא באמת עובד ויודעים איך
                לשחזר כשצריך.
              </p>
              <ul className="backup-list">
                <li>
                  <Check size={17} aria-hidden="true" />
                  גיבוי מקומי וענן לפי צורכי העסק
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  הצפנה, הרשאות ובדיקות שחזור תקופתיות
                </li>
                <li>
                  <Check size={17} aria-hidden="true" />
                  תכנית התאוששות ברורה, לא רק תקווה
                </li>
              </ul>
            </div>
            <div className="backup-diagram" aria-label="מערך גיבוי רב-שכבתי">
              <div className="backup-ring">
                <div className="backup-core">
                  <Database size={38} aria-hidden="true" />
                </div>
                <span className="backup-label one">גיבוי ענן</span>
                <span className="backup-label two">עותק מקומי</span>
                <span className="backup-label three">שחזור מהיר</span>
              </div>
            </div>
          </div>
        </section>

        <section className="share-section section-pad" aria-labelledby="share-title">
          <div className="container-site share-layout">
            <div className="share-panel" aria-label="המחשה של שיתוף קבצים מאובטח">
              <div className="share-panel-top">
                <span>תיקיית פרויקטים</span>
                <span className="share-lock">
                  <LockKeyhole size={17} aria-hidden="true" />
                </span>
              </div>
              <div className="file-list">
                <div className="file-row">
                  <FileCheck2 size={19} aria-hidden="true" />
                  <div>
                    <span>הצעת מחיר מעודכנת.pdf</span>
                    <small>גישה לצוות הנהלה בלבד</small>
                  </div>
                </div>
                <div className="file-row">
                  <FolderLock size={19} aria-hidden="true" />
                  <div>
                    <span>חומרים ללקוח</span>
                    <small>שיתוף מאובטח בקישור</small>
                  </div>
                </div>
                <div className="file-row">
                  <Share2 size={19} aria-hidden="true" />
                  <div>
                    <span>הרשאות גישה</span>
                    <small>נבדק לפני כל שיתוף</small>
                  </div>
                </div>
              </div>
              <div className="shield-mark">
                <ShieldCheck size={28} aria-hidden="true" />
              </div>
            </div>
            <div>
              <div className="eyebrow">שיתוף קבצים מאובטח</div>
              <h2 id="share-title" className="section-heading-title">
                הקבצים שלכם, אצל האנשים הנכונים בלבד.
              </h2>
              <p className="section-body">
                משתפים מסמכים עם עובדים, לקוחות וספקים בלי לשלוח קבצים רגישים לכל
                העולם. אנחנו מסדרים את התיקיות, ההרשאות והגישה — כדי שהצוות יעבוד
                מהר, בלי לאבד שליטה על המידע.
              </p>
              <a className="outline-button" href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-share-whatsapp">
                בואו נסדר את המידע
                <ArrowLeft size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="why-saratec" className="why-section section-pad" aria-labelledby="why-title">
          <div className="container-site">
            <div className="section-heading">
              <div className="eyebrow">למה סאראטק</div>
              <h2 id="why-title">מקצועיות טכנית. אחריות אישית.</h2>
              <p>כי לעסק שלכם מגיע לדעת מי עומד בצד השני — ומה בדיוק הוא עושה.</p>
            </div>
            <div className="why-grid">
              <article className="why-card" data-testid="card-why-personal">
                <UserRoundCheck size={25} aria-hidden="true" />
                <h3>מכירים אתכם באמת</h3>
                <p>לומדים את העסק, את הצוות ואת הרגישויות שלו — לא מתחילים מאפס בכל פנייה.</p>
              </article>
              <article className="why-card" data-testid="card-why-clear">
                <Wrench size={25} aria-hidden="true" />
                <h3>מדברים ברור</h3>
                <p>מסבירים מה קרה, מה הפתרון ומה העלות. בלי ז׳רגון ובלי לדחוף מה שלא צריך.</p>
              </article>
              <article className="why-card" data-testid="card-why-proactive">
                <ShieldCheck size={25} aria-hidden="true" />
                <h3>מונעים לפני שמתקנים</h3>
                <p>ניטור, תחזוקה וסדר בתשתית מפחיתים תקלות ושומרים על רציפות העבודה.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="process" className="process-section section-pad" aria-labelledby="process-title">
          <div className="container-site">
            <div className="section-heading">
              <div className="eyebrow">איך זה עובד</div>
              <h2 id="process-title">מתחילים פשוט. מתקדמים בטוח.</h2>
              <p>שלושה צעדים כדי להפוך את המחשוב של העסק לשקט תפעולי.</p>
            </div>
            <div className="process-grid">
              <article className="process-step" data-testid="step-process-1">
                <div className="step-number">01</div>
                <h3>מכירים את העסק</h3>
                <p>שיחה קצרה ומיפוי של המערכות, האנשים והאתגרים שמפריעים לעבודה.</p>
              </article>
              <article className="process-step" data-testid="step-process-2">
                <div className="step-number">02</div>
                <h3>בונים סדר עדיפויות</h3>
                <p>מקבלים תמונת מצב והמלצות ברורות — מה חשוב עכשיו ומה יכול לחכות.</p>
              </article>
              <article className="process-step" data-testid="step-process-3">
                <div className="step-number">03</div>
                <h3>נשארים בתמונה</h3>
                <p>מיישמים, מתעדים ומלווים אתכם לאורך זמן. יש כתובת, גם אחרי ההקמה.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="industries-section section-pad" aria-labelledby="industries-title">
          <div className="container-site industry-layout">
            <div>
              <div className="eyebrow">מכירים את הקצב שלכם</div>
              <h2 id="industries-title" className="section-heading-title">
                תשתית שמתאימה לאופן שבו אתם עובדים.
              </h2>
              <p className="section-body">
                לכל תחום יש צרכים אחרים, אבל לכולם יש דבר משותף: כשהמערכות עובדות,
                אפשר להתמקד בלקוחות. סאראטק עובדת עם עסקים ומשרדים בצפון במגוון תחומים.
              </p>
            </div>
            <div className="industry-list">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div className="industry-item" key={industry.title} data-testid={`item-industry-${index + 1}`}>
                    <Icon size={19} aria-hidden="true" />
                    <span>{industry.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="cta-section section-pad" aria-labelledby="contact-title">
          <div className="container-site cta-layout">
            <div>
              <h2 id="contact-title">מוכנים שה-IT יעבוד בשבילכם?</h2>
              <p>ספרו לנו בכמה מילים מה העסק צריך. נחזור אליכם עם כיוון ברור.</p>
            </div>
            <div className="cta-actions">
              <a
                className="primary-button"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                data-testid="link-contact-whatsapp"
              >
                <MessageCircle size={18} aria-hidden="true" />
                כתבו לנו ב-WhatsApp
              </a>
              <a className="outline-button" href="mailto:info@saratec.net" data-testid="link-contact-email">
                <Mail size={17} aria-hidden="true" />
                info@saratec.net
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container-site">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={brandLogo} alt="סאראטק" data-testid="img-footer-logo" />
              <p>שירותי IT ותשתיות לעסקים קטנים ובינוניים בצפון ישראל. מקצועיות שאפשר לדבר איתה.</p>
            </div>
            <div className="footer-column">
              <h3>ניווט</h3>
              <div className="footer-links">
                <a href="#services" data-testid="link-footer-services">שירותים</a>
                <a href="#backup" data-testid="link-footer-backup">גיבוי ואבטחה</a>
                <a href="#why-saratec" data-testid="link-footer-why">למה סאראטק</a>
                <a href="#contact" data-testid="link-footer-contact">צור קשר</a>
              </div>
            </div>
            <div className="footer-column">
              <h3>דברו איתנו</h3>
              <div className="footer-contact">
                <a href="mailto:info@saratec.net" data-testid="link-footer-email">
                  <Mail size={15} aria-hidden="true" />
                  info@saratec.net
                </a>
                <a href={whatsappHref} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp">
                  <MessageCircle size={15} aria-hidden="true" />
                  WhatsApp — פנייה מהירה
                </a>
                <span className="footer-location">
                  <MapPin size={15} aria-hidden="true" />
                  שירות לעסקים בצפון ישראל
                </span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} סאראטק. כל הזכויות שמורות.</span>
            <span>מחשוב שעובד. עסק שממשיך לעבוד.</span>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="יצירת קשר עם סאראטק ב-WhatsApp"
        data-testid="link-floating-whatsapp"
      >
        <MessageCircle size={19} aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;