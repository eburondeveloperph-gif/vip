// Auto-extracted from /Users/eburon/Documents/file/vep/jo-files at session-build time.
// Source files: Eburon.ai BP v4.2026 (FR + EN-US) and Eburon Financial Plan v8 (FR).
// This is the static, bundled portion of Jo Lernout's office knowledge base. The
// agent should treat it as authoritative for any question about Eburon.ai,
// Ariolas BV, the business plan, financials, strategy, products, or company history.
// Runtime user uploads (from Settings → Knowledge Base) are merged on top of this
// at session start in App.tsx.

export const JO_BP_EN = `1. Summary
Eburon.ai (Ariolas BV) is a Belgian AI company that develops proprietary on-premise conversational AI and multilingual translation technologies for businesses, public institutions, and healthcare organizations. Founded by Jo Lernout, a serial tech entrepreneur, the company is led commercially by Geoffrey Ejzenberg as Business Analyst (who will become CEO in mid-2026).
Eburon’s core value proposition is based on data sovereignty at a lower cost. By deploying AI on local GPU infrastructure rather than in the cloud, customers eliminate per-token fees—achieving an estimated threefold reduction in total cost compared to cloud-native alternatives—while keeping sensitive data entirely within their own environment. The platform handles up to 6,000 to 8,000 simultaneous conversations per module across voice, chat, email, and web channels, in over 120 languages.
Three commercial product lines are currently being deployed or are in an advanced stage of development:
Conversational Contact Center — an on-premises AI agent platform designed for businesses and public sector clients. Planned deployments with Groep Caenen (Ozéa project, real estate) and Witgele Kruis (home care). Ongoing collaboration with Telenet.
Dual Translator — a triangular, dual-screen physical device offering real-time voice translation in over 120 languages. Deployed in pharmacies, hospitals, recruitment agencies, and municipal services. DOOH advertising on the customer-facing standby screen creates a secondary revenue stream.
Classroom App — AI-powered multilingual translation for training and educational environments. Licensed to Succesinvest at €100 per teacher per day.
Revenue is growing rapidly: the model projects total revenue of approximately €975,000 for fiscal year 2026, rising to €4.2 million in 2027 as deployments of the contact center and Dual Translator accelerate. EBITDA turns positive in November/December 2026 and reaches approximately €2.3 million for the 2027 fiscal year. The company is currently operating on a €1 million shareholder loan facility, with its lowest cash balance turning positive by December 2026.
Eburon is seeking investments to accelerate commercial rollouts, expand its go-to-market capacity, fund its cross-border expansion with resellers, strengthen its development capabilities to accelerate the delivery of value-added product features, and formalize the transition to the CEO role to allow Jo Lernout to focus on growing the business.
2. Company Overview
2.1 Legal Entity and Structure
2.2 Founding and Shareholding
Eburon was founded by Jo Lernout, a Belgian technology pioneer with remarkable experience in the field of speech and language technologies. The current ownership structure is as follows:
2.3 Mission and Vision
Mission: To make advanced conversational AI accessible, affordable, and sovereign, enabling any organization to deploy human-quality AI voice agents without sending its data to the cloud.
Vision: To become Europe’s leading on-premises AI platform for conversational intelligence and multilingual communication, expanding globally through strategic partnerships and a capital-efficient operating model.
3. Problem and Solution
3.1 The Problem
The current generation of cloud-based AI voice and conversational solutions suffers from three structural weaknesses that limit their adoption by businesses:
Cost unpredictability: LLM token-based pricing, combined with the cascading ASR → LLM → TTS pipeline, leads to high GPU usage, streaming fees, and billing volatility. Cloud costs for a large contact center can exceed €2,000 per month per deployment.
Poor conversation quality: Existing solutions lack embedded memory, natural prosody, and conversational intelligence. Responses sound robotic and generic, and fail to maintain context throughout a conversation.
Data sovereignty risks: Companies in regulated sectors—healthcare, finance, the public sector, and defense—cannot send sensitive customer data to U.S.-based hyperscalers. GDPR compliance, patient privacy, and national security obligations require that data remain on-premises.
In the realm of multilingual communication, the market lacks a simple, deployable hardware solution capable of serving non-native speakers in real time across more than 120 languages at the point of care—whether in a pharmacy, hospital department, recruitment agency, or municipal office.
3.2 The Eburon Solution
Eburon simultaneously addresses these three weaknesses through a proprietary technology stack:
On-premises deployment: the entire AI stack runs on local GPU hardware (NVIDIA A100 / H100). No data leaves the client’s environment. The hardware investment (€25,000 to €36,000) pays for itself in 12 to 15 months through savings on cloud costs alone.
NoTokens pricing model: Eburon charges a flat monthly license fee—no per-token, per-call, or per-minute billing. Customers can scale conversation volume without unexpected billing surprises.
Superior conversation quality: Eburon’s proprietary LLM delivers human-like conversations, passing Turing-style evaluations in 120 languages. Built-in memory, prosody control, and natural speech enable significantly higher resolution rates and CSAT scores.
Rapid deployment: A typical enterprise deployment is operational in 4 weeks—infrastructure setup (Week 1), integrations (Week 2), knowledge ingestion (Week 3), testing and commissioning (Week 4).
DualTranslator hardware device: a triangular, dual-screen physical device enabling real-time voice translation. The customer-facing screen displays DOOH advertising in standby mode, creating a secondary revenue stream that can partially offset the device’s cost for deployment partners.
DYNCA cognitive authentication: proprietary, continuous, user-centric authentication—resistant to post-quantum threats—integrated as standard across the entire platform.
4. Products and Technology
4.1 Conversational Contact Center Platform
The company’s flagship product. An on-premises conversational AI platform handling voice, chat, email, and web interactions, with up to 6,000 to 8,000 concurrent sessions per deployed module.
Key technical specifications:
Active prospects: Groep Caenen (Ozéa project — conversational AI for real estate, A100 hardware), Witgele Kruis (home care service), Telenet (in advanced discussions).
4.2 Dual Translator — Physical translation device
A triangular physical device equipped with two screens—one facing the service provider, the other facing the customer—enabling real-time voice translation in over 120 languages. Designed as a point-of-service tool for pharmacies, hospitals, recruitment agencies, health insurance providers, and municipal services.
Revenue model:
B2B monthly subscription (recommended: €49/tablet/month) — Scenario A, the only viable pricing model. Scenario B (€29/month) is structurally unprofitable.
DOOH advertising revenue on the customer screen during wait times — partnerships with iDklic/STRATACACHE (over 1,500 European pharmacies) and programmatic partners (Vistar Media, Displayce, DooH Group Benelux). No agreements have been confirmed yet; not included in the base income statement.
Active prospects: Witgele Kruis, i-Mens, Deforce Medical (in ramp-up phase). €20,000 exclusivity deposit for Deforce expected in May 2026.
4.3 Classroom Application
Live, AI-powered multilingual simultaneous translation tool designed for training and educational environments. Currently licensed to Succesinvest at a rate of €100 per teacher per day, with Succesinvest reselling it to end customers at €325 per day. The product is in the trial phase (April 2026), with revenue ramp-up beginning in May 2026.
4.4 Eburon Studio
A no-code LLM development environment enabling the generation of voice-driven applications—developers and domain experts can describe a workflow in natural language and produce ready-to-use AI applications in minutes. Reduces development lead time and time to revenue for customer onboarding.
4.5 Technological Differentiation
5. Market opportunity
5.1 Potential markets
Eburon operates in three converging market segments:
Enterprise conversational AI / Contact center automation
The global conversational AI market was valued at approximately $10 billion in 2023 and is projected to exceed $32 billion by 2030 (CAGR ~18%). Within the EU, compliance requirements under the GDPR and the upcoming AI Act are creating structural demand for the deployment of on-premises and sovereign AI—a segment in which cloud-only providers cannot compete. Belgian companies with large contact centers—telecommunications, utilities, financial services, healthcare—represent the immediate addressable market.
Order of magnitude: Telenet handles 26,000 daily customer contacts processed by 200 agents—a single contract of this scale would represent several million euros in annual licensing revenue.
Competitive landscape: Eburon’s main Belgian competitor in the real-time voice sector is limited; WEngage (Telenet’s current partner) focuses on email, chat, quality assurance, and human contact centers—not real-time voice. Eburon is initially positioning itself as a complementary player, not a competitor.
Multilingual Translation — Point of Service
Belgium has more than 200,000 people who speak neither Dutch nor French and who require language mediation each year when interacting with healthcare, public services, and social assistance. The DualTranslator addresses an immediate operational need—by replacing slow and costly telephone interpreters or ad-hoc solutions—with a specially designed device that is always available.
Target deployment channels: pharmacies (over 1,100 Belgian pharmacies identified by IQVIA), hospitals, general practitioners’ offices, recruitment agencies, municipal services, embassies.
DOOH Adjacency: The DOOH market for pharmacies and healthcare features CPMs ranging from €7 to €25 (three times higher than standard retail DOOH), offering a significant secondary revenue stream per deployed screen.
International — United Arab Emirates and the Gulf, Turkey
The government of the United Arab Emirates has made the adoption of AI a national priority, with several ministries actively seeking sovereign and multilingual AI deployments. Ministerial meetings are scheduled for April 2026, facilitated by the network of H.H. Sheikh Hamdan. Target sectors: government contact centers, ministerial service counters, defense/security, and multilingual public services. Revenue not yet quantified in the base model — potential for upside relative to current projections. Interest expressed by Turkish Telecom, E&Y Istanbul, and the Ministry of Defense (Turkish visits scheduled for the week of May 9, 2026).
5.2 Marketing Strategy
Eburon’s go-to-market strategy is deliberately capital-efficient, prioritizing high-potential reference deployments over broad market coverage:
Flagship customer strategy: win and deploy extensively with 2 to 3 flagship customers per vertical sector (Groep Caenen in real estate, Witgele Kruis in healthcare, Telenet in telecommunications). Use documented results—retention rates, cost reductions, increased CSAT—as the primary sales tool.
Distribution partners and resellers: reseller agreement scheduled to take effect in May 2026. Succesinvest for the education and training sector. Gio (One 2 Win) as an intermediary with Telenet, Witgele Kruis, among others.
International partnerships: Ministry-level channel in the United Arab Emirates for the public sector; exploring the NVIDIA Inception program to benefit from hardware discounts and increased visibility.
DOOH advertising partnerships: iDklic/STRATACACHE (primary channel), DooH Group Benelux, and registration with programmatic SSPs (Vistar Media, Displayce) to monetize the DualTranslator network of physical screens.
6. Business Model and Revenue Sources
6.1 Revenue Architecture
6.2 Pricing Philosophy
Eburon’s NoTokens model is a key differentiator. Customers pay a predictable monthly license fee, regardless of conversation volume. This aligns incentives—Eburon benefits from customers who use the platform intensively—and eliminates the main barrier to AI adoption in enterprise environments (budgetary unpredictability).
For the DualTranslator tablet, Scenario A—with a price of €49 per month per device—is the recommended launch price. With 10,000 devices installed (first year), this generates gross revenue of €3.5 million per month, of which Eburon retains 60% (€2.1 million per month). The tablet offers promising potential for additional revenue, similar to the monthly subscription rate. Outreach to media partners will begin in the second quarter of 2026.
6.3 Unit Cost — Contact Center
Setup costs per customer: €15,000 to €50,000 (flat fee, covering hardware and implementation).
Monthly license fee per customer: ranges from approximately €1,400 (initial Groep Caenen) to approximately €26,600 (large-scale Telenet).
Hardware depreciation: The client’s investment in on-site hardware (€25,000 to €36,000) is amortized in 12 to 15 months solely through savings on cloud costs, even before accounting for operational efficiency gains.
Gross margin: high — the marginal cost of handling an additional conversation is virtually zero on the deployed hardware. Eburon’s costs are primarily fixed (staff + servers).
7. Financial Projections
7.1 Revenue Summary (in thousands of euros)
7.2 Summary of the income statement (in thousands of euros)
7.3 Cash Flow and Financial Independence
The model projects a cumulative cash deficit in July and August 2026, followed by a recovery in the fourth quarter, barring additional financing. The company turns profitable in terms of cash flow in December 2026 (closing balance of approximately €41,000) and experiences strong growth throughout 2027.
Key assumptions regarding cash flow:
No revenue from DOOH advertising or the AdMob app is included in the base income statement—these are solely scenario planning figures, pending the conclusion of agreements with partners.
Revenue from the United Arab Emirates has not yet been quantified—it represents significant upside potential relative to the base projections.
The repayment schedule for the shareholder loan and interest terms have not yet been modeled—data is required.
Revenues and costs from resellers are not yet included in the cost base; they merely accelerate the return to positive cash flow.
7.4 Key Financial Indicators (KPIs) Subject to Revenue Projections
8. Cost Structure and Operating Model
8.1 Operating Cost Philosophy
Eburon was deliberately designed as a lean, computing-focused company. Jo Lernout’s founding principle is to scale through GPU computing rather than by increasing headcount—the current team consists of approximately 5 people in the Philippines (support/operations) and 3 AI/ML specialists in Belgium, with key roles outsourced rather than staffed by employees whenever possible. This keeps fixed costs low and maintains operational leverage as revenue grows.
8.2 Cost Breakdown for Fiscal Year 2026 (in thousands of euros)
9. Staff
9.1 Management
9.2 Organizational Model
Eburon has a small core team of approximately 3 AI/ML specialists in Belgium, supported by about ten operations and support staff in the Philippines. The company is deliberately scaling by focusing on computing power (GPU hardware) rather than headcount, thereby maintaining its operational leverage. Senior commercial and administrative functions (CFO, legal counsel, accountant) are outsourced.
The transition to a public limited company (scheduled for May–June 2026) will see Geoffrey Ejzenberg assume full operational control under a formally agreed mandate covering compensation, governance powers, and equity ownership. This transition ensures business continuity and allows Jo Lernout to focus on high-value-added business and international development activities.
9.3 2026–2027 Hiring Plan
Sales recruitment: to be implemented as part of the launch of the reseller network (scheduled for May 2026).
Customer Success (×2): Required as contact center deployments exceed 3 to 4 active clients.
CTO / CFO: Targeted hires for the 2027 governance structure, to be incentivized via an Employee Stock Ownership Plan (ESOP).
10. Customers, traction, and pipeline
10.1 Prospects and Active Customers
10.2 Pipeline
11. Competitive Landscape
11.1 Competitive Positioning
Eburon operates in a rapidly growing market that attracts significant capital. However, the segment for on-premises solutions and data sovereignty remains underdeveloped: most competitors receiving funding are exclusively cloud-focused and cannot serve regulated sectors or clients subject to data localization requirements.
Mistral Forge and NVIDIA KVTC were deemed non-threatening: Forge targets a different buyer profile, while NVIDIA KVTC is an infrastructure enabler that Eburon can adopt to further strengthen its hardware offering.
12. Risk Factors and Mitigation Measures
13. Investment Opportunity and Use of Proceeds
13.1 Capital Structure
To date, Eburon has raised €500,000 in Series B equity and €1 million in shareholder loans. The company is seeking additional investment to fund the transition from a startup-phase commercial deployment to scalable growth.
13.2 Use of Funds
The new investment capital will be allocated across four priority areas:
Business acceleration (40%): hiring in sales and customer success, activation of the reseller network, marketing of DualTranslator and deployment in the pharmaceutical channel, as well as international business development (United Arab Emirates, rest of the Gulf).
Technology and Infrastructure (30%): Additional GPU server capacity for deployments at new clients, integration of the AdMob SDK and release of the DualTranslator consumer app on the App Store, and improvements to Eburon Studio tools.
Operational transition (20%): formalization of the CEO’s mandate and compensation, outsourcing of the CFO role, legal and governance costs related to implementing the Employee Stock Ownership Plan (ESOP) and preparing the capitalization table.
Working capital reserve (10%): bridge the 2026 cash gap and ensure confidence in the company’s ability to secure funding until a return to positive cash flow in December 2026.
13.3 Why Invest Now
Proven technology, active enterprise customers: Eburon is launching with deployments across its three product lines.
Structural competitive advantage: On-premises AI with data sovereignty is a growing regulatory requirement, not a niche preference. Competitors that are exclusively cloud-based cannot easily adapt to this architecture.
Turning point: The company will achieve positive EBITDA in November–December 2026 and generate approximately €2.3 million in EBITDA during fiscal year 2027 according to the base case model. Investment capital accelerates the time to profitability and significantly increases the revenue ceiling.
Experienced founder: Jo Lernout’s experience in speech and language technologies—along with the thoughtful, capital-efficient architectural choices made during Eburon’s creation—provide a solid technical foundation.
Unaccounted-for international potential: Ministerial relationships in the United Arab Emirates, the reseller network, and DOOH advertising revenue are not included in the base model. Each of these elements represents significant potential for additional revenue.
14. Key Milestones and Roadmap
Appendix: Notes and Assumptions Regarding the Financial Model
The financial projections in this business plan are derived from the Eburon v4.1 financial plan (April 2026). All figures are expressed in thousands of euros, unless otherwise indicated.
Revenue Assumptions
Classroom application: €100 license fee per teacher per day paid to Eburon (Succesinvest charges end customers €325 per day). Teaching days will increase from 5 days per month (May 2026) to 40 days per month (December 2026), then to 50–125 days per quarter in 2027.
Dual Translator (B2B): Witgele Kruis at €8,000/month (stable starting June 2026); i-Mens increasing from €3,000 to €15,000/month; Deforce Medical increasing from €10,000 to €30,000/month. Recommended price for the tablet: €49/month (scenario A only).
Contact center: setup of Groep Caenen at €15,000 (April 2026) + monthly license fee increasing from €1,400; Witgele Kruis contact center setup at €15,000 (May 2026) + license; Telenet setup at €15,000 (June 2026) + license increasing to €26,600 per month.
Cost assumptions
Outsourced management (3 people): stable at €17,500/month starting in May 2026 (€12,000 in April).
Developers / Customer Service / Sales / Marketing: gradual increase from €33,000/month (April) to €43,000/month (December 2026), then between €200,000 and €600,000 per quarter in 2027.
Server hardware: gradual increase from €5,000/month to €20,000/month as deployments scale up.
Marketing and PR: includes the Dual Translator launch budget (~€24,500 one-time + recurring costs).
Items not included in the base model
DOOH advertising revenue from physical Dual Translator devices — no partnership agreements confirmed.
Revenue from the AdMob consumer app — no AdMob account, SDK integration, or App Store release has been finalized.
International revenue in the United Arab Emirates and Turkey — timeline and contractual structure not yet quantified.
Reseller commissions — not included in the cost or revenue base.
Treatment of corporate income tax and VAT — not modeled.
Compensation for the Chief Executive Officer (Geoffrey Ejzenberg, May–June 2026)
Investors should note that the base case is conservative and excludes several significant sources of revenue. These represent genuine upside scenarios that are currently being developed.
— END OF DOCUMENT —
Eburon.ai  |  Ariolas BV  |  BE0791.816.306  |  Ter Waarde 91, 8900 Ypres  |  www.eburon.ai
EBURON.AI
Business Plan for Investors
Ariolas BV  |  BE0791.816.306

On-site conversational AI and multilingual translation
Based in Belgium. Designed for the world.
April 2026  |  CONFIDENTIAL
www.eburon.ai
Domain | Details
Company Name | Ariolas BV
Trade name | Eburon.ai
Registration number | BE0791.816.306
Headquarters | Boterstraat 36, 8900 Ypres, Belgium
Founded | March 2022 (incorporated as Ariolas BV in the first quarter of 2026 for Eburon’s commercial activities)
Website | www.eburon.ai
Stage | Generating revenue — active business customers, in growth phase
Shareholder | Category | Notes
Jo Lernout | Shareholder A (33.3%) | Founder, chief technical visionary. Has stepped back from day-to-day operations to focus on the company’s growth.
Category B Shareholders | Class B Shareholders (66.7%) | Equity investors — €500,000 raised (1% Ariolas BV) and other strategic investors.
Employee stock ownership plan (planned) | 50% (target structure) | Reserved for the recruitment of the CTO, CFO, and CEO as part of post-transition governance.
Shareholder loans | Debt | An existing shareholder credit line in the amount of €1 million.
Component | Specification
GPU Hardware | NVIDIA A100 (80 GB VRAM) — primary production; H100 for scalability
Server chassis | Supermicro AS-4124GS or Dell R750xa
RAM / Storage | 256 to 512 GB of ECC RAM; 2 x 3.84 TB NVMe SSDs
Capacity | 6,000 to 8,000 concurrent conversations per module
Channels | Voice, chat, email, web (WhatsApp / social media currently in development)
Languages | Over 120 languages, including low-resource and regional languages
Integrations | Salesforce, Zendesk, Genesys, HubSpot, MS Dynamics, custom APIs
Deployment time | Typically 4 weeks from contract signing to go-live
Total hardware cost | €25,000 to €36,000 (one-time cost; hardware owned by the customer)
Capacity | Eburon | Cloud Competitors
Data sovereignty | Fully on-premises — data never leaves the customer | Exclusively in the cloud — data is sent to servers located in the United States
Pricing model | Flat-rate monthly license — NoTokens | Per-token/per-call billing
Cost compared to the cloud | Total cost of ownership approximately 3 times lower | High marginal cost at scale
Deployment speed | 4 weeks before go-live | Several months of integration work
Language coverage | Over 120 languages, including low-resource languages | Limited coverage or focused on the United States
Authentication | DYNCA — proprietary post-quantum authentication | Standard MFA / Cloud IAM
Revenue Stream | Model | Current clients | FY 2026E (in thousands of euros)
Contact Center | Setup fees + monthly license | Groep Caenen, Witgele Kruis, Telenet | 273
DualTranslator (B2B) | Monthly license fee + one-time payment | Witgele Kruis, i-Mens, Deforce | 383
Classroom application | License for €100 per teacher per day | Succesinvest | 370
TOTAL REVENUE FOR FISCAL YEAR 2026 | 975
TOTAL REVENUE FOR FISCAL YEAR 2027 | 4,711
Revenue line (in thousands of euros) | April 2026 | Q2 2026 | Q3 2026 | Q4 2026 | Fiscal Year 2026 | Fiscal Year 2027
Classroom / Succesinvest | 15 | 25 | 120 | 210 | 370 | 2,100
DualTranslator (B2B) | 0 | 32 | 127 | 224 | 383 | 1,246
Contact Center | 15 | 81 | 55 | 181 | 333 | 1,761
TOTAL REVENUE | 30 | 138 | 302 | 615 | 1,086 | 5,107
Fiscal Year 2026E | Fiscal Year 2027E | Notes
Total revenue | 975 | 4,771 | Based on financial model v4.1
Total personnel costs | (501) | (790) | Management + developers + legal/finance
Total non-personnel costs | (542) | (1,671) | Travel, servers, promotion, administration
TOTAL OPERATING COSTS | (1,044) | (2,461)
EBITDA | (69) | 2,310
EBITDA Margin | 48
€1.0 million
Revenue for fiscal year 2026
Base scenario | €4.2 million
Revenue for fiscal year 2027
4× growth | Nov.–Dec. 2026
Positive EBITDA
Break-even month | €2.3 million
EBITDA for fiscal year 2027
48% margin
Cost category | Fiscal Year 2026E (in thousands of euros) | Notes
Outsourced management (3 people) | 152 | Stable at €15,000/month starting in May 2026
Salaries for Development / Customer Service / Sales / Marketing | 243 | Gradual increase from €18,000 to €48,000 per month through 2026
Legal / CFO / Notary / Accountant | 105 | Increase to €15,000 per month in October 2026
Representation + international travel | 113 | International activities incur additional costs
Administrative / office / rent / utility costs | 66 | Ramps with team growth
Server hardware (rental or capital expenditures) | 100 | GPU infrastructure for deployments
Marketing and public relations | 135 | DualTranslator launch + follow-up
Miscellaneous (including pending invoices) | 93 | Reserve / miscellaneous
TOTAL OPERATING EXPENSES FOR FISCAL YEAR 2026 | 1,007
Name | Position | Career
Jo Lernout | Co-founder / Majority Shareholder | Belgian technology pioneer. Co-founder of Lernout & Hauspie (a pioneer in the field of voice technologies), he has extensive experience in building world-renowned companies specializing in language technologies and artificial intelligence. As a technical visionary and majority shareholder, he is now dedicated to the company’s development and international expansion.
Geoffrey Ejzenberg | Business Analyst → CEO (starting around June 2026) | Head of Sales and Operations. Moved from the role of business analyst to that of CEO, taking charge of day-to-day operations while Jo Lernout focused on growing the business. Experience in sales leadership and business development in the AI sector. (Co-)founder of several deep tech companies.
Martijn Vanlede | Technical Delivery Lead | Technical Coordinator and primary technical point of contact for deployments and client delivery. Oversees the AI/ML infrastructure, deployment architecture, and integration projects.
Emile Philippines | Senior Developer / ML | Senior ML developer specializing in the quantification of large-scale language models (LLMs), deployment pipelines, and the adaptation of AI models to client-specific knowledge bases.
Client | Product | Status 2026 | Details
Caenen Group | Contact Center | Pilot Project Planning (Ozéa Project) | Conversational AI for real estate. A100 hardware to be delivered. CRM integration and knowledge base expansion in progress. Installation costs of €15,000 to be invoiced in April 2026.
Witgele Kruis | DualTranslator + CC | Active | Home care organization. DualTranslator packaged license (€8,000/month starting in June 2026). Contact center deployment in parallel.
Succesinvest | Classroom app | In trial phase → Active | License holder for the Classroom app. Trial phase in April 2026. Gradual increase in revenue from May to December 2026. Claude Monserez (co-shareholder) is the key contact.
i-Mens | DualTranslator | Gradual increase | Gradual increase in licenses starting at €3,000 per month (May) to reach €15,000 per month (December 2026).
Deforce Medical | DualTranslator | Gradual increase + exclusivity | Gradual increase in the flat-rate license fee. Exclusivity payment of €20,000 scheduled for May 2026.
Prospect | Product | Stage | Notes
Telenet | Contact Center | First contact | Belgium’s largest telecommunications operator. 26,000 daily contacts. Host: Gio (One 2 Win). WEngage is an existing partner (complementary positioning).
Miscellaneous | Reseller (all products) | Agreement drafted | Resale agreement drafted. Activation scheduled for May 2026, subject to delivery from Caenen.
Government of the United Arab Emirates / Ministries
Managers in Turkey | Contact Center + Translator | Ministerial meetings in April 2026
Visit to Turkay in the second week of May 2026 | Via the network of H.H. Sheikh Hamdan. Target sectors: government contact centers, ministry support services, defense/security. Revenue not yet quantified.
Whise CRM | Integration into the contact center | Internal presentation drafted | Real estate CRM integration. Rudy Aernoudt identified as a potential contact. No follow-up yet.
Competitor | Deployment | Pricing | Languages | Data sovereignty
Eburon | On-premises | NoTokens / flat rate | 120+ | Full (data never leaves the customer)
WEngage (Telenet partner) | Cloud | Pay-as-you-go | Limited | Cloud only
Nuance / Microsoft | Cloud | Per token/call | Large | Cloud (Azure)
Phonely | Cloud | Per token/call | Large | Cloud
Google CCAI | Cloud | Per minute | Large | Cloud (GCP)
Ringtime.ai | Cloud | Flat rate / limited usage | EU | Cloud
Mistral Forge | Cloud API | Per token | EU-focused | Cloud API
NVIDIA KVTC | Infrastructure | Hardware | N/A | Enabler (may be adopted)
Risk | Severity | Mitigation
Available Cash | High | Revenue inflows (a one-time payment of €20,000 from Deforce, Telenet installation fees) could cover the deficit. Capital contributions from investors directly address this need. Strict budget discipline is maintained.
Reliance on a key person (Jo Lernout) | Moderate | Transition to general management is underway. Geoffrey Ejzenberg is taking operational control. The governance mandate and terms of equity participation are currently being formalized.
Sales Cycle Length (Company) | Average | Several clients currently in negotiations. The “pilot-first” approach reduces the risk associated with final validation. The reseller network strengthens distribution capacity.
Dual Translator’s DOOH revenue not confirmed | Average | The B2B licensing revenue model is self-sustaining without DOOH. DOOH/AdMob are excluded from the core income statement—only in the event of an increase. Partnerships have been established with iDklic and DooH Group; a partnership with Vistar Media is planned.
Accelerating technological competition | Medium | The on-premises competitive advantage is structural—cloud competitors cannot replicate it without fundamental changes to the architecture. DYNCA authentication and the NoTokens model are proprietary.
International revenue timeline in the United Arab Emirates and Turkey | Low to medium | Established ministerial relationships. Uptick revenue scenario only — not included in the base model. Timeline managed separately.
GDPR / AI Law Compliance | Low | The on-premises architecture is natively compliant. Data never leaves the customer’s environment. The AdMob consumer app requires legal review under the GDPR prior to launch.
Instrument | Amount | Details
Series B equity (raised) | €500,000 | Strategic investors, including Groep Caenen (1% of Ariolas BV).
Shareholder loans (outstanding) | €1,000,000 | €1 million facility. Repayment schedule and interest rate to be confirmed with Jo Lernout.
ESOP Pool (planned) | 50% of equity | Reserved for the CTO / CFO / CEO after the transition.
New investment sought | To be determined | See use of funds below.
Timeline | Milestone | Status
April 2026 | Ministerial meetings in the United Arab Emirates; planned launch of the Groep Caenen project and billing of installation costs; launch of the trial phase for the Classroom app | In progress
May 2026 | Down payment on Deforce exclusivity (€20,000); Witgele Kruis CC installation fees (€15,000); reseller activation | Pipeline
May–June 2026 | Transition of Geoffrey’s CEO; Telenet project costs; depending on | Scheduled
Nov.-Dec. 2026 | Positive EBITDA for the first time | Expected
Q3 2026 | iDklic/DOOH partnership pilot project (10 to 20 DualTranslator locations); application to the NVIDIA Inception program | Planned
Q4 2026 | Positive cash flow (December); hiring of a CFO; implementation of an employee stock ownership plan | Planned
Fiscal Year 2027 | Core revenue forecast: €4.7 million; EBITDA: €2.3 million; hiring of a CTO; contribution to revenue from the United Arab Emirates; deployment of Dual Translator on over 1,000 devices | Target`;

export const JO_BP_FR = `1. Résumé
Eburon.ai (Ariolas BV) est une entreprise belge spécialisée dans l'IA qui développe des technologies propriétaires d'IA conversationnelle sur site et de traduction multilingue destinées aux entreprises, aux institutions publiques et aux organismes de santé. Fondée par Jo Lernout, un entrepreneur technologique en série, l'entreprise est dirigée sur le plan commercial par Geoffrey Ejzenberg en tant qu'analyste commercial (qui deviendra directeur général mi-2026).
La proposition de valeur principale d'Eburon repose sur la souveraineté des données à moindre coût. En déployant l'IA sur une infrastructure GPU locale plutôt que sur le cloud, les clients éliminent les frais par token — réalisant ainsi une réduction estimée à 3 fois le coût total par rapport aux alternatives cloud natives — tout en conservant les données sensibles entièrement au sein de leur propre environnement. La plateforme gère jusqu'à 6 000 à 8 000 conversations simultanées par module sur les canaux voix, chat, e-mail et web, dans plus de 120 langues.
Trois gammes de produits commerciaux sont en cours de déploiement ou à un stade avancé de développement :
Centre de contact conversationnel — plateforme d'agents IA sur site destinée aux entreprises et aux clients du secteur public. Déploiements prévus avec Groep Caenen (projet Ozéa, immobilier) et Witgele Kruis (soins à domicile). Collaboration en cours avec Telenet.
Dual Translator — un appareil physique triangulaire à double écran offrant une traduction vocale en temps réel dans plus de 120 langues. Déployé dans les pharmacies, les hôpitaux, les agences de recrutement et les services municipaux. La publicité DOOH sur l'écran de veille orienté vers le client crée une source de revenus secondaire.
Application en classe — Traduction multilingue alimentée par l'IA pour les environnements de formation et d'enseignement. Licence accordée à Succesinvest à 100 € par enseignant et par jour.
Le chiffre d'affaires est en pleine croissance : le modèle prévoit un chiffre d'affaires total d'environ 975 000 € pour l'exercice 2026, passant à 4,2 millions d'euros en 2027 à mesure que les déploiements du centre de contact et du Dual Translator s'accélèrent. L'EBITDA devient positif en novembre/décembre 2026 et atteint environ 2,3 millions d'euros pour l'exercice 2027. La société fonctionne actuellement grâce à une facilité de prêt d'actionnaires de 1 million d'euros, sa trésorerie la plus basse devenant positive d'ici décembre 2026.
Eburon recherche des investissements pour accélérer les déploiements commerciaux, étendre sa capacité de mise sur le marché, financer son expansion transfrontalière avec des revendeurs, renforcer ses capacités de développement afin d'accélérer la livraison de fonctionnalités produit à valeur ajoutée, et officialiser la transition au poste de directeur général afin de permettre à Jo Lernout de se concentrer sur le développement de l'entreprise.
2. Présentation de la société
2.1 Entité juridique et structure
2.2 Création et actionnariat
Eburon a été fondée par Jo Lernout, un pionnier belge de la technologie qui possède une expérience remarquable dans le domaine des technologies de la parole et du langage. La structure actuelle du capital est la suivante :
2.3 Mission et vision
Mission : Rendre l'IA conversationnelle avancée accessible, abordable et souveraine, en permettant à toute organisation de déployer des agents vocaux IA de qualité humaine sans céder ses données au cloud.
Vision : Devenir la première plateforme IA sur site en Europe pour l'intelligence conversationnelle et la communication multilingue, en se développant à l'échelle mondiale grâce à des partenariats stratégiques et à un modèle opérationnel efficace en termes de capital.
3. Problématique et solution
3.1 Le problème
La génération actuelle de solutions vocales et conversationnelles basées sur l'IA dans le cloud souffre de trois faiblesses structurelles qui limitent leur adoption par les entreprises :
Imprévisibilité des coûts : la tarification LLM au token, combinée au pipeline en cascade ASR → LLM → TTS, entraîne une utilisation élevée des GPU, des frais de streaming et une volatilité de la facturation. Les coûts cloud pour un grand centre de contact peuvent dépasser 2 000 € par mois et par déploiement.
Mauvaise qualité des conversations : les solutions existantes manquent de mémoire ancrée, de prosodie naturelle et d'intelligence de prise de parole. Les réponses semblent robotiques, génériques et ne parviennent pas à conserver le contexte tout au long d'une conversation.
Risque lié à la souveraineté des données : les entreprises des secteurs réglementés — santé, finance, secteur public, défense — ne peuvent pas envoyer de données sensibles sur leurs clients à des hyperscalers basés aux États-Unis. La conformité au RGPD, la confidentialité des patients et les obligations en matière de sécurité nationale exigent que les données restent sur site.
En matière de communication multilingue, le marché manque d'un dispositif matériel simple et déployable capable de servir en temps réel des locuteurs non natifs dans plus de 120 langues sur le lieu de soins — qu'il s'agisse d'une pharmacie, d'un service hospitalier, d'une agence de recrutement ou d'un bureau municipal.
3.2 La solution Eburon
Eburon remédie simultanément à ces trois faiblesses grâce à une pile technologique propriétaire :
Déploiement sur site : l'ensemble de la pile IA fonctionne sur du matériel GPU local (NVIDIA A100 / H100). Aucune donnée ne quitte l'environnement du client. L'investissement matériel (25 000 à 36 000 €) est amorti en 12 à 15 mois grâce aux seules économies réalisées sur les coûts du cloud.
Modèle de tarification NoTokens : Eburon facture des frais de licence mensuels forfaitaires — pas de facturation au token, à l'appel ou à la minute. Les clients peuvent faire évoluer le volume de conversations sans surprise de facturation.
Qualité de conversation supérieure : le LLM propriétaire d'Eburon offre des conversations de qualité humaine, réussissant les évaluations de type Turing dans 120 langues. La mémoire intégrée, le contrôle de la prosodie et la prise de parole naturelle permettent d'obtenir des taux de résolution et des scores CSAT nettement supérieurs.
Déploiement rapide : un déploiement d'entreprise type est opérationnel en 4 semaines — configuration de l'infrastructure (semaine 1), intégrations (semaine 2), ingestion des connaissances (semaine 3), tests et mise en service (semaine 4).
Dispositif matériel DualTranslator : un appareil physique triangulaire à double écran permettant la traduction vocale en temps réel. L'écran orienté vers le client diffuse de la publicité DOOH en mode veille, créant ainsi une source de revenus secondaire qui peut partiellement compenser le coût de l'appareil pour les partenaires de déploiement.
Authentification cognitive DYNCA : authentification propriétaire continue et centrée sur l'utilisateur — résistante aux menaces post-quantiques — intégrée en standard à l'ensemble de la plateforme.
4. Produits et technologie
4.1 Plateforme de centre de contact conversationnel
Le produit phare de l'entreprise. Une plateforme d'IA conversationnelle sur site gérant les interactions vocales, par chat, par e-mail et sur le Web, avec jusqu'à 6 000 à 8 000 sessions simultanées par module déployé.
Principales spécifications techniques :
Prospects actifs : Groep Caenen (projet Ozéa — IA conversationnelle pour l'immobilier, matériel A100), Witgele Kruis (service d'assistance à domicile), Telenet (en phase de discussion avancée).
4.2 Dual Translator — Appareil de traduction physique
Appareil physique triangulaire doté de deux écrans — l’un face au prestataire de services, l’autre face au client — permettant une traduction vocale en temps réel dans plus de 120 langues. Conçu comme un outil de point de service pour les pharmacies, les hôpitaux, les agences de recrutement, les mutuelles et les services municipaux.
Modèle de revenus :
Abonnement mensuel B2B (recommandé : 49 €/tablette/mois) — Scénario A, seule tarification viable. Le scénario B (29 €/mois) est structurellement déficitaire.
Revenus publicitaires DOOH sur l'écran client pendant les périodes d'attente — partenariats avec iDklic/STRATACACHE (plus de 1 500 pharmacies européennes) et des partenaires programmatiques (Vistar Media, Displayce, DooH Group Benelux). Aucun accord n'a encore été confirmé ; non inclus dans le compte de résultat de base.
Prospects actifs : Witgele Kruis, i-Mens, Deforce Medical (en phase de montée en puissance). Acompte d'exclusivité de 20 000 € pour Deforce prévu en mai 2026.
4.3 Application en classe
Outil de traduction simultanée multilingue en direct, alimenté par l'IA, destiné aux environnements de formation et d'enseignement. Actuellement concédé sous licence à Succesinvest au prix de 100 € par enseignant et par jour, Succesinvest le revendant aux clients finaux à 325 € par jour. Le produit est en phase d'essai (avril 2026), avec une montée en puissance des revenus à partir de mai 2026.
4.4 Eburon Studio
Un environnement de développement LLM sans code permettant la génération d'applications pilotées par la voix — les développeurs et les experts métier peuvent décrire un workflow en langage naturel et produire des applications IA prêtes à l'emploi en quelques minutes. Réduit le retard de développement et le délai de rentabilisation pour l'intégration des clients.
4.5 Différenciation technologique
5. Opportunité de marché
5.1 Marchés potentiels
Eburon opère sur trois segments de marché convergents :
IA conversationnelle d'entreprise / Automatisation des centres de contact
Le marché mondial de l'IA conversationnelle était évalué à environ 10 milliards de dollars en 2023 et devrait dépasser les 32 milliards de dollars d'ici 2030 (TCAC ~18 %). Au sein de l'UE, les exigences de conformité au RGPD et à la future loi sur l'IA créent une demande structurelle pour le déploiement d'IA sur site et souveraine — un segment sur lequel les fournisseurs exclusivement cloud ne peuvent pas rivaliser. Les entreprises belges disposant de grands centres de contact — télécommunications, services publics, services financiers, soins de santé — représentent le marché adressable immédiat.
Ordre de grandeur : Telenet gère 26 000 contacts clients quotidiens traités par 200 agents — un seul contrat de cette envergure représenterait plusieurs millions d'euros de revenus annuels de licence.
Dynamique concurrentielle : le principal concurrent belge d'Eburon dans le domaine de la voix en temps réel est limité ; WEngage (partenaire actuel de Telenet) se concentre sur l'e-mail, le chat, le contrôle qualité et les centres de contact humains — et non sur la voix en temps réel. Eburon se positionne initialement comme un acteur complémentaire, et non concurrent.
Traduction multilingue — Point de service
La Belgique compte plus de 200 000 personnes ne parlant ni le néerlandais ni le français qui ont besoin chaque année d’une médiation linguistique dans le cadre de leurs interactions avec les soins de santé, les services publics et l’aide sociale. Le DualTranslator répond à un besoin opérationnel immédiat — en remplaçant les interprètes téléphoniques, lents et coûteux, ou les solutions ponctuelles — par un appareil spécialement conçu et toujours disponible.
Canaux de déploiement cibles : pharmacies (plus de 1 100 pharmacies belges recensées par IQVIA), hôpitaux, cabinets de médecins généralistes, agences de recrutement, services municipaux, ambassades.
Adjacence DOOH : le marché DOOH des pharmacies et des soins de santé affiche des CPM de 7 à 25 € (3 fois plus élevés que le DOOH standard dans le commerce de détail), offrant une source de revenus secondaire significative par écran déployé.
International — Émirats arabes unis et Golfe, Turquie
Le gouvernement des Émirats arabes unis a fait de l'adoption de l'IA une priorité nationale, plusieurs ministères recherchant activement des déploiements souverains et multilingues d'IA. Des réunions ministérielles sont prévues en avril 2026, facilitées par le réseau de S.A. Cheikh Hamdan. Secteurs cibles : centres de contact gouvernementaux, guichets de services ministériels, défense/sécurité et services publics multilingues. Chiffre d'affaires non encore quantifié dans le modèle de base — potentiel de hausse par rapport aux projections actuelles. Intérêt manifesté par Turkish Telecom, E & Y Istanbul et le ministère de la Défense (visites turques prévues pour la semaine du 9 mai 2026).
5.2 Stratégie de commercialisation
La stratégie de commercialisation d'Eburon est délibérément économe en capital, privilégiant les déploiements de référence à fort potentiel plutôt qu'une large couverture du marché :
Stratégie de clients phares : remporter et déployer en profondeur auprès de 2 à 3 clients phares par secteur vertical (Groep Caenen dans l'immobilier, Witgele Kruis dans la santé, Telenet dans les télécommunications). Utiliser les résultats documentés — taux de confinement, réduction des coûts, augmentation du CSAT — comme principal outil de vente.
Partenaires de distribution et revendeurs : contrat de revendeur dont l'entrée en vigueur est prévue en mai 2026. Succesinvest pour le secteur de l'enseignement et de la formation. Gio (One 2 Win) en tant qu'intermédiaire auprès de Telenet, Witgele Kruis, entre autres.
Partenariats internationaux : voie ministérielle aux Émirats arabes unis pour le secteur public ; exploration du programme NVIDIA Inception pour bénéficier de remises sur le matériel et d'une meilleure visibilité.
Partenariats publicitaires DOOH : iDklic/STRATACACHE (voie principale), DooH Group Benelux, et inscription à des SSP programmatiques (Vistar Media, Displayce) pour monétiser le parc d'écrans physiques DualTranslator.
6. Modèle économique et sources de revenus
6.1 Architecture des revenus
6.2 Philosophie tarifaire
Le modèle NoTokens d'Eburon constitue un facteur clé de différenciation commerciale. Les clients paient des frais de licence mensuels prévisibles, quel que soit le volume de conversations. Cela aligne les incitations — Eburon tire profit des clients qui utilisent intensivement la plateforme — et élimine le principal obstacle à l'adoption de l'IA dans les environnements d'entreprise (l'imprévisibilité budgétaire).
Pour la tablette DualTranslator, le scénario A, avec un prix de 49 € par mois et par appareil, est le tarif de lancement recommandé. Avec 10 000 appareils installés (1re année), cela génère un chiffre d'affaires brut de 3,5 millions d'euros par mois, dont Eburon conserve 60 % (2,1 millions d'euros par mois). La tablette présente un potentiel de revenus supplémentaires prometteur, similaire au tarif de l'abonnement mensuel. La prise de contact avec les partenaires médias est lancée au deuxième trimestre 2026.
6.3 Économie unitaire — Centre de contact
Frais d'installation par client : 15 000 à 50 000 € (montant forfaitaire, couvrant le matériel et la mise en œuvre).
Licence mensuelle par client : varie entre environ 1 400 € (Groep Caenen initial) et environ 26 600 € (Telenet à grande échelle).
Amortissement du matériel : l'investissement du client en matériel sur site (25 000 à 36 000 €) est amorti en 12 à 15 mois grâce aux seules économies réalisées sur les coûts du cloud, avant même de prendre en compte les gains d'efficacité opérationnelle.
Marge brute : élevée — le coût marginal de la gestion d'une conversation supplémentaire est quasi nul sur le matériel déployé. Les coûts d'Eburon sont principalement fixes (personnel + serveurs).
7. Projections financières
7.1 Résumé des revenus (en milliers d'euros)
7,2 Résumé du compte de résultat (en milliers d'euros)
7,3 Flux de trésorerie et autonomie financière
Le modèle prévoit un déficit de trésorerie cumulé en juillet et août 2026 avant une reprise au quatrième trimestre, hors financement supplémentaire. L'entreprise devient bénéficiaire en termes de flux de trésorerie en décembre 2026 (solde de clôture d'environ 41 000 €) et connaît une forte accélération tout au long de l'année 2027.
Hypothèses clés relatives aux flux de trésorerie :
Aucun revenu provenant de la publicité DOOH ou de l'application AdMob n'est inclus dans le compte de résultat de base — il s'agit uniquement de chiffres de planification de scénarios, en attendant la conclusion d'accords avec des partenaires.
Les revenus des Émirats arabes unis n'ont pas encore été quantifiés — ils représentent un potentiel de hausse significatif par rapport aux projections de base.
Le calendrier de remboursement du prêt des actionnaires et les conditions d'intérêt n'ont pas encore été modélisés — des données sont nécessaires.
Les revenus et coûts des revendeurs ne sont pas encore inclus dans la base de coûts, ils ne font qu'accélérer le retour à un flux de trésorerie positif.
7.4 Principaux indicateurs financiers (KPI) soumis aux projections de revenus
8. Structure des coûts et modèle d'exploitation
8.1 Philosophie en matière de coûts d'exploitation
Eburon a été délibérément conçue comme une entreprise allégée, axée sur le calcul. Le principe fondateur de Jo Lernout est de se développer grâce au calcul sur GPU plutôt qu'en augmentant les effectifs — l'équipe actuelle compte environ 5 personnes aux Philippines (support/opérations) et 3 spécialistes en IA/ML en Belgique, les rôles clés étant sous-traités plutôt que pourvus par des employés dans la mesure du possible. Cela permet de maintenir les coûts fixes à un niveau bas et de préserver l'effet de levier opérationnel à mesure que le chiffre d'affaires augmente.
8.2 Répartition des coûts pour l'exercice 2026 (en milliers d'euros)
9. Équipe
9.1 Direction
9.2 Modèle organisationnel
Eburon dispose d'une équipe de base réduite composée d'environ 3 spécialistes en IA/ML en Belgique, soutenue par une dizaine de collaborateurs chargés des opérations et du support aux Philippines. L'entreprise évolue délibérément en misant sur la puissance de calcul (matériel GPU) plutôt que sur les effectifs, préservant ainsi son levier opérationnel. Les fonctions commerciales et administratives de haut niveau (directeur financier, conseiller juridique, comptable) sont sous-traitées.
La transition vers le statut de société anonyme (prévue vers mai-juin 2026) verra Geoffrey Ejzenberg prendre le contrôle opérationnel total dans le cadre d'un mandat formellement convenu couvrant la rémunération, les pouvoirs de gouvernance et la participation au capital. Cette transition garantit la continuité des activités et permet à Jo Lernout de se concentrer sur des activités de développement d'entreprise et international à forte valeur ajoutée.
9.3 Plan de recrutement 2026-2027
Recrutement commercial : à mettre en œuvre dans le cadre du lancement du réseau de revendeurs (prévu en mai 2026).
Réussite client (×2) : Nécessaire à mesure que les déploiements du centre de contact dépassent 3 à 4 clients actifs.
Directeur technique / Directeur financier : recrutements ciblés pour la structure de gouvernance de 2027, à encourager via un plan d'actionnariat salarié (ESOP).
10. Clients, traction et pipeline
10.1 Prospects et clients actifs
10.2 Pipeline
11. Paysage concurrentiel
11.1 Positionnement concurrentiel
Eburon opère sur un marché en pleine croissance qui attire d'importants capitaux. Cependant, le segment des solutions sur site et de la souveraineté des données est sous-exploité : la plupart des concurrents bénéficiant de financements sont exclusivement axés sur le cloud et ne peuvent pas servir les secteurs réglementés ou les clients soumis à des exigences de localisation des données.
Mistral Forge et NVIDIA KVTC ont été jugés non menaçants : Forge cible un profil d'acheteur différent, tandis que NVIDIA KVTC est un catalyseur d'infrastructure qu'Eburon peut adopter pour renforcer davantage son offre matérielle.
12. Facteurs de risque et mesures d'atténuation
13. Opportunité d'investissement et utilisation des fonds
13.1 Structure du capital
À ce jour, Eburon a levé 500 000 € en fonds propres de catégorie B et 1 million d'euros en prêts d'actionnaires. La société recherche des investissements supplémentaires pour financer la transition d'un déploiement commercial en phase de démarrage vers une croissance évolutive.
13.2 Utilisation des fonds
Les nouveaux capitaux d'investissement seront répartis entre quatre domaines prioritaires :
Accélération commerciale (40 %) : recrutement dans les domaines des ventes et de la réussite client, activation du réseau de revendeurs, marketing de DualTranslator et déploiement sur le canal pharmaceutique, ainsi que développement commercial à l'international (Émirats arabes unis, reste du Golfe).
Technologie et infrastructure (30 %) : capacité supplémentaire de serveurs GPU pour les déploiements chez les nouveaux clients, intégration du SDK AdMob et publication sur l'App Store de l'application grand public DualTranslator, et améliorations des outils Eburon Studio.
Transition opérationnelle (20 %) : formalisation du mandat et rémunération du directeur général, sous-traitance du directeur financier, frais juridiques et de gouvernance liés à la mise en œuvre du plan d'actionnariat salarié (ESOP) et à la documentation du tableau de capitalisation.
Réserve de fonds de roulement (10 %) : combler le creux de trésorerie de 2026 et assurer la confiance dans la capacité de financement jusqu'au retour à un flux de trésorerie positif en décembre 2026.
13.3 Pourquoi investir maintenant
Une technologie éprouvée, des clients professionnels actifs : Eburon se lance avec des déploiements sur ses trois gammes de produits.
Avantage concurrentiel structurel : l'IA sur site et souveraine en matière de données est une exigence réglementaire croissante, et non une préférence de niche. Les concurrents exclusivement basés sur le cloud ne peuvent pas facilement s'adapter à cette architecture.
Point d'inflexion : l'entreprise atteindra un EBITDA positif en novembre-décembre 2026 et générera environ 2,3 millions d'euros d'EBITDA au cours de l'exercice 2027 selon le modèle de base. Les capitaux d'investissement accélèrent le délai de rentabilité et augmentent considérablement le plafond de chiffre d'affaires.
Fondateur expérimenté : L'expérience de Jo Lernout dans le domaine des technologies de la parole et du langage — ainsi que les choix architecturaux réfléchis et économes en capital effectués lors de la création d'Eburon — constituent de solides fondations techniques.
Potentiel international non pris en compte : les relations ministérielles aux Émirats arabes unis, le réseau de revendeurs et les revenus publicitaires DOOH ne sont pas inclus dans le modèle de base. Chacun de ces éléments représente un potentiel de revenus supplémentaires significatif.
14. Étapes clés et feuille de route
Annexe : Notes et hypothèses relatives au modèle financier
Les projections financières du présent plan d'affaires sont tirées du plan financier Eburon v4.1 (avril 2026). Tous les chiffres sont exprimés en milliers d'euros, sauf indication contraire.
Hypothèses de chiffre d'affaires
Application en classe : redevance de licence de 100 € par enseignant et par jour versée à Eburon (Succesinvest facture 325 € par jour aux clients finaux). Les jours d'enseignement passeront de 5 jours par mois (mai 2026) à 40 jours par mois (décembre 2026), puis à 50-125 jours par trimestre en 2027.
Dual Translator (B2B) : Witgele Kruis à 8 000 €/mois (stable à partir de juin 2026) ; i-Mens passant de 3 000 € à 15 000 €/mois ; Deforce Medical passant de 10 000 € à 30 000 €/mois. Prix recommandé pour la tablette : 49 €/mois (scénario A uniquement).
Centre de contact : mise en place de Groep Caenen à 15 000 € (avril 2026) + licence mensuelle passant de 1 400 € ; mise en place du centre de contact de Witgele Kruis à 15 000 € (mai 2026) + licence ; mise en place de Telenet à 15 000 € (juin 2026) + licence passant à 26 600 € par mois.
Hypothèses de coûts
Gestion sous-traitée (3 personnes) : stable à 17 500 €/mois à partir de mai 2026 (12 000 € en avril).
Développeurs / Service client / Ventes / Marketing : augmentation progressive de 33 000 €/mois (avril) à 43 000 €/mois (décembre 2026), puis entre 200 000 € et 600 000 € par trimestre en 2027.
Matériel serveur : augmentation progressive de 5 000 €/mois à 20 000 €/mois à mesure que les déploiements prennent de l'ampleur.
Promotion et relations publiques : comprend le budget de lancement de Dual Translator (~24 500 € en une fois + frais récurrents).
Éléments non inclus dans le modèle de base
Revenus publicitaires DOOH provenant des appareils physiques Dual Translator — aucun accord de partenariat confirmé.
Revenus de l'application grand public AdMob — aucun compte AdMob, aucune intégration SDK ni aucune publication sur l'App Store n'ont été finalisés.
Revenus internationaux aux Émirats arabes unis et en Turquie — calendrier et structure contractuelle non encore quantifiés.
Commissions des revendeurs — non incluses dans la base des coûts ou des revenus.
Traitement de l'impôt sur les sociétés et de la TVA — non modélisé.
Rémunération du directeur général (Geoffrey Ejzenberg de mai à juin 2026)
Les investisseurs doivent noter que le modèle de base est prudent et exclut plusieurs sources de revenus importantes. Celles-ci représentent de véritables scénarios haussiers qui sont en cours de développement.
— FIN DU DOCUMENT —
Eburon.ai  |  Ariolas BV  |  BE0791.816.306  |  Ter Waarde 91, 8900 Ypres  |  www.eburon.ai
EBURON.AI
Plan d'affaires pour les investisseurs
Ariolas BV  |  BE0791.816.306

IA conversationnelle sur site et traduction multilingue
Basée en Belgique. Conçue pour le monde entier.
Avril 2026  |  CONFIDENTIEL
www.eburon.ai
Domaine | Détails
Dénomination sociale | Ariolas BV
Nom commercial | Eburon.ai
Numéro d'enregistrement | BE0791.816.306
Siège social | Boterstraat 36, 8900 Ypres, Belgique
Fondée | Mars 2022 (constituée sous le nom d'Ariolas BV au premier trimestre 2026 pour les activités commerciales d'Eburon)
Site web | www.eburon.ai
Stade | Génère des revenus — clients professionnels actifs, en phase de croissance
Actionnaire | Catégorie | Remarques
Jo Lernout | Actionnaire A (33,3 %) | Fondateur, principal visionnaire technique. S'est retiré des opérations quotidiennes pour se concentrer sur le développement de l'entreprise.
Actionnaires de catégorie B | Actionnaires de catégorie B (66,7 %) | Investisseurs en capital — 500 000 € levés (1 % Ariolas BV) et autres investisseurs stratégiques.
Plan d'actionnariat salarié (prévu) | 50 % (structure cible) | Réservé au recrutement du directeur technique, du directeur financier et du PDG dans le cadre de la gouvernance post-transition.
Prêts d'actionnaires | Dette | Une ligne de crédit d'actionnaires en cours d'un montant de 1 million d'euros.
Composant | Spécification
Matériel GPU | NVIDIA A100 (80 Go de VRAM) — production principale ; H100 pour l'évolutivité
Châssis de serveur | Supermicro AS-4124GS ou Dell R750xa
Mémoire vive / Stockage | 256 à 512 Go de RAM ECC ; 2 SSD NVMe de 3,84 To
Capacité | 6 000 à 8 000 conversations simultanées par module
Canaux | Voix, chat, e-mail, Web (WhatsApp / réseaux sociaux en cours de développement)
Langues | Plus de 120 langues, y compris les langues à faible ressource et les langues régionales
Intégrations | Salesforce, Zendesk, Genesys, HubSpot, MS Dynamics, API personnalisées
Délai de déploiement | Généralement 4 semaines entre la signature du contrat et la mise en service
Coût total du matériel | 25 000 € à 36 000 € (coût unique ; matériel appartenant au client)
Capacité | Eburon | Concurrents dans le cloud
Souveraineté des données | Entièrement sur site — les données ne quittent jamais le client | Exclusivement dans le cloud — les données sont envoyées vers des serveurs situés aux États-Unis
Modèle de tarification | Licence mensuelle forfaitaire — NoTokens | Facturation au jeton / à l'appel
Coût par rapport au cloud | Coût total de possession environ 3 fois inférieur | Coût marginal élevé à grande échelle
Vitesse de déploiement | 4 semaines avant la mise en service | Plusieurs mois de travail d'intégration
Couverture linguistique | Plus de 120 langues, y compris les langues à faible ressource | Couverture limitée ou centrée sur les États-Unis
Authentification | DYNCA — authentification post-quantique propriétaire | MFA standard / IAM cloud
Ligne de revenus | Modèle | Clients actuels | Exercice 2026E (en milliers d'euros)
Centre de contact | Frais d'installation + licence mensuelle | Groep Caenen, Witgele Kruis, Telenet | 273
DualTranslator (B2B) | Licence mensuelle + paiement unique | Witgele Kruis, i-Mens, Deforce | 383
Application en classe | Licence à 100 € par enseignant et par jour | Succesinvest | 370
CHIFFRE D'AFFAIRES TOTAL EXERCICE 2026 | 975
CHIFFRE D'AFFAIRES TOTAL EXERCICE 2027 | 4 711
Ligne de chiffre d'affaires (en milliers d'euros) | Avril 2026 | T2 2026 | T3 2026 | 4e trimestre 2026 | Exercice 2026 | Exercice 2027
Salle de classe / Succesinvest | 15 | 25 | 120 | 210 | 370 | 2 100
DualTranslator (B2B) | 0 | 32 | 127 | 224 | 383 | 1 246
Centre de contact | 15 | 81 | 55 | 181 | 333 | 1 761
CHIFFRE D'AFFAIRES TOTAL | 30 | 138 | 302 | 615 | 1 086 | 5 107
Exercice 2026E | Exercice 2027E | Notes
Chiffre d'affaires total | 975 | 4 771 | D'après le modèle financier v4.1
Coûts de personnel totaux | (501) | (790) | Direction + développeurs + juridique/finances
Total des coûts hors personnel | (542) | (1 671) | Déplacements, serveurs, promotion, administration
TOTAL DES COÛTS D'EXPLOITATION | (1 044) | (2 461)
EBITDA | (69) | 2,310
Marge EBITDA | 48
1,0 million d'euros
Chiffre d'affaires pour l'exercice 2026
Scénario de base | 4,2 millions d'euros
Chiffre d'affaires de l'exercice 2027
Croissance de 4× | Nov.-déc. 2026
EBITDA positif
Mois d'équilibre | 2,3 millions d'euros
EBITDA de l'exercice 2027
Marge de 48 %
Catégorie de coûts | Exercice 2026E (en milliers d'euros) | Remarques
Gestion sous-traitée (3 personnes) | 152 | Stable à 15 000 €/mois à partir de mai 2026
Salaires Dév / CS / Ventes / Marketing | 243 | Augmentation progressive de 18 000 € à 48 000 € par mois jusqu'en 2026
Juridique / Directeur financier / Notaire / Comptable | 105 | Augmentation jusqu'à 15 000 € par mois en octobre 2026
Représentation + voyages internationaux | 113 | Les activités internationales entraînent des coûts supplémentaires
Frais administratifs / de bureau / de loyer / de charges | 66 | Rampes avec croissance de l'équipe
Matériel serveur (location ou dépenses d'investissement) | 100 | Infrastructure GPU pour les déploiements
Promotion et relations publiques | 135 | Lancement de DualTranslator + suivi
Divers (y compris les factures en suspens) | 93 | Réserve / divers
TOTAL DES DÉPENSES D'EXPLOITATION EXERCICE 2026 | 1 007
Nom | Fonction | Parcours
Jo Lernout | Co-fondateur / Actionnaire majoritaire | Pionnier belge des technologies. Cofondateur de Lernout & Hauspie (entreprise pionnière dans le domaine des technologies vocales), il possède une solide expérience dans la création d'entreprises de renommée mondiale spécialisées dans les technologies linguistiques et l'intelligence artificielle. Visionnaire technique et actionnaire majoritaire, il se consacre désormais au développement de l'entreprise et à son expansion internationale.
Geoffrey Ejzenberg | Analyste commercial → Directeur général (à partir de juin 2026 environ) | Responsable commercial et opérationnel. Passe du poste d'analyste commercial à celui de directeur général, prenant en charge la direction opérationnelle au quotidien alors que Jo Lernout se concentre sur le développement de l'entreprise. Expérience en direction commerciale et en développement commercial dans le domaine de l'IA. (Co-)fondateur de plusieurs entreprises de deep tech.
Martijn Vanlede | Responsable de la livraison technique | Coordinateur technique et interlocuteur technique principal pour les déploiements et la livraison chez les clients. Supervise l'infrastructure IA/ML, l'architecture de déploiement et les projets d'intégration.
Emile Philippines | Développeur principal / ML | Développeur ML principal spécialisé dans la quantification des modèles de langage à grande échelle (LLM), les pipelines de déploiement et l'adaptation des modèles d'IA aux bases de connaissances spécifiques aux clients.
Client | Produit | Statut 2026 | Détails
Groupe Caenen | Centre de contact | Planification du projet pilote (Projet Ozéa) | IA conversationnelle pour l'immobilier. Matériel A100 à livrer. Intégration CRM et extension de la base de connaissances en cours. Frais d'installation de 15 000 € à facturer en avril 2026.
Witgele Kruis | DualTranslator + CC | Actif | Organisme de soins à domicile. Licence packagée DualTranslator (8 000 €/mois à partir de juin 2026). Déploiement du centre de contact en parallèle.
Succesinvest | Application pour salles de classe | En phase d'essai → Actif | Titulaire d'une licence pour l'application Classroom. Phase d'essai en avril 2026. Augmentation progressive du chiffre d'affaires de mai à décembre 2026. Claude Monserez (co-actionnaire) est le contact clé.
i-Mens | DualTranslator | Augmentation progressive | Augmentation progressive des licences à partir de 3 000 € par mois (mai) pour atteindre 15 000 € par mois (décembre 2026).
Deforce Medical | DualTranslator | Augmentation progressive + exclusivité | Augmentation progressive de la licence forfaitaire. Acompte d'exclusivité de 20 000 € prévu en mai 2026.
Prospect | Produit | Étape | Remarques
Telenet | Centre de contact | Premier contact | Le plus grand opérateur de télécommunications de Belgique. 26 000 contacts quotidiens. Présentateur : Gio (One 2 Win). WEngage est un partenaire existant (positionnement complémentaire).
Divers | Revendeur (tous les produits) | Accord rédigé | Accord de revente rédigé. Activation prévue en mai 2026, sous réserve de la livraison de Caenen.
Gouvernement des Émirats arabes unis / Ministères
Responsables en Turquie | Centre de contact + Traducteur | Réunions ministérielles en avril 2026
Visite de Turkay la 2e semaine de mai 2026 | Via le réseau de S.A. Cheikh Hamdan. Secteurs cibles : centres de contact gouvernementaux, services d'assistance des ministères, défense/sécurité. Chiffre d'affaires non encore quantifié.
Whise CRM | Intégration au centre de contact | Présentation interne rédigée | Intégration CRM immobilier. Rudy Aernoudt identifié comme piste de mise en relation. Pas encore donné suite.
Concurrent | Déploiement | Tarification | Langues | Souveraineté des données
Eburon | Sur site | NoTokens / forfait | 120+ | Complète (les données ne quittent jamais le client)
WEngage (partenaire de Telenet) | Cloud | À l'utilisation | Limité | Cloud uniquement
Nuance / Microsoft | Cloud | Par jeton/appel | Large | Cloud (Azure)
Phonely | Cloud | Par jeton/appel | Large | Cloud
Google CCAI | Cloud | Par minute | Large | Cloud (GCP)
Ringtime.ai | Cloud | Forfait / utilisation limitée | UE | Cloud
Mistral Forge | API cloud | Par jeton | Axé sur l'UE | API Cloud
NVIDIA KVTC | Infrastructure | Matériel | N/A | Facilitateur (peut être adopté)
Risque | Gravité | Atténuation
Trésorerie disponible | Élevée | Le flux de recettes (paiement unique de 20 000 € de Deforce, frais d'installation de Telenet) pourrait combler le déficit. L'apport de capitaux par les investisseurs répond directement à ce besoin. Une stricte discipline budgétaire est maintenue.
Dépendance vis-à-vis d'une personne clé (Jo Lernout) | Moyenne | Transition à la direction générale en cours. Geoffrey Ejzenberg prend le contrôle opérationnel. Le mandat de gouvernance et les conditions de participation au capital sont en cours de formalisation.
Durée du cycle de vente (entreprise) | Moyenne | Plusieurs clients en cours de négociation. L'approche « pilote d'abord » réduit le risque lié à la validation finale. Le réseau de revendeurs renforce la capacité de distribution.
Chiffre d'affaires DOOH de Dual Translator non confirmé | Moyen | Le modèle de revenus par licence B2B est autonome sans DOOH. DOOH/AdMob exclus du compte de résultat de base — uniquement en cas de hausse. Partenariats conclus avec iDklic et DooH Group, partenariat prévu avec Vistar Media.
Accélération de la concurrence technologique | Moyen | L'avantage concurrentiel sur site est structurel — les concurrents du cloud ne peuvent pas le reproduire sans modifications fondamentales de l'architecture. L'authentification DYNCA et le modèle NoTokens sont exclusifs.
Calendrier des revenus internationaux aux Émirats arabes unis et en Turquie | Faible à moyen | Relations ministérielles établies. Scénario de hausse des revenus uniquement — non inclus dans le modèle de base. Calendrier géré séparément.
Conformité au RGPD / à la loi sur l'IA | Faible | L'architecture sur site est nativement conforme. Les données ne quittent jamais l'environnement du client. L'application grand public AdMob nécessite un examen juridique au regard du RGPD avant son lancement.
Instrument | Montant | Détails
Capitaux propres de catégorie B (levés) | 500 000 € | Investisseurs stratégiques, dont Groep Caenen (1 % d'Ariolas BV).
Prêts d'actionnaires (en cours) | 1 000 000 € | Facilité de 1 million d'euros. Calendrier de remboursement et taux d'intérêt à confirmer avec Jo Lernout.
Pool ESOP (prévu) | 50 % des capitaux propres | Réservé au CTO / CFO / CEO après la transition.
Nouvel investissement recherché | À déterminer | Voir l'utilisation des fonds ci-dessous.
Calendrier | Étape | Statut
Avril 2026 | Réunions ministérielles aux Émirats arabes unis ; lancement prévu du projet Groep Caenen et facturation des frais d'installation ; lancement de la phase d'essai de l'application Classroom | En cours
Mai 2026 | Acompte sur l'exclusivité Deforce (20 000 €) ; frais d'installation Witgele Kruis CC (15 000 €) ; activation du revendeur | Pipeline
Mai-juin 2026 | Transition du directeur général de Geoffrey ; frais de projet Telenet ; en fonction de | Prévu
Nov.-déc. 2026 | EBITDA positif pour la première fois | Prévu
T3 2026 | Projet pilote de partenariat iDklic/DOOH (10 à 20 emplacements DualTranslator) ; candidature au programme NVIDIA Inception | Prévu
4e trimestre 2026 | Flux de trésorerie positif (décembre) ; recrutement d'un directeur financier ; mise en place d'un plan d'actionnariat salarié | Prévu
Exercice 2027 | Prévisions de chiffre d'affaires de base : 4,7 millions d'euros ; EBITDA : 2,3 millions d'euros ; recrutement d'un directeur technique ; contribution du chiffre d'affaires des Émirats arabes unis ; déploiement de Dual Translator sur plus de 1 000 appareils | Objectif`;

export const JO_FINANCIAL = `
## SHEET: Hypothèses
EBURON.AI / ARIOLAS BV — HYPOTHÈSES DU MODÈLE FINANCIER
Tous les chiffres sont en EUR (en milliers) sauf indication contraire | Bleu = entrée | Noir = formule | Jaune = nécessite une mise à jour
A. CHIFFRE D'AFFAIRES — SUCCESINVEST / APPLICATION EN CLASSE | Valeurs
Frais de licence versés à Eburon par enseignant/jour | 100 | EUR/enseignant/jour | Taux actuel par contrat existant
Taux de vente de Succesinvest par enseignant/jour | 325 | EUR/enseignant/jour | Marge revenant à Succesinvest
Jours-enseignants — avril 2026 | test | montée en puissance | Phase d'essai, pas de revenus
Augmentation progressive des jours d'enseignement : mai→déc. 2026 | 5→50 | Accélération du nombre de jours par mois | Selon le modèle initial
Jours d'enseignement 2027 T1→T4 | 50→125 | augmentation du nombre de jours par trimestre | Selon le modèle initial
B. CHIFFRE D'AFFAIRES — DUOTRANSLATOR / DUAL TRANSLATOR
Witgele Kruis — licence mensuelle (forfait) | 8 | K EUR/mois | Stable à partir de juillet 2026 ?
i-Mens — licence mensuelle (forfait, en phase de montée en puissance) | 3→15 | K EUR/mois | Croissance progressive juin→déc. 2026
Leforce Medical — licence mensuelle (forfait) | 10→30 | K EUR/mois | Accélération juin→oct. 2026
Leforce — acompte d'exclusivité | 20 | K EUR paiement unique | Mai 2026 paiement unique
2026 trimestriel Chiffre d'affaires DuoTranslator | 169→244 | K EUR/trimestre | Selon le modèle initial
C. CHIFFRE D'AFFAIRES — DÉPLOIEMENTS DE CENTRES DE CONTACT / CENTRES D'APPELS
Groep Caenen — frais d'installation | 15 | K EUR paiement unique | Facturé en avril 2026 (matériel + mise en œuvre)
Groep Caenen — licence mensuelle | 1.4→30 | K EUR/mois | Mise en place juin→déc. 2026
Witgele Kruis CC — frais d'installation | 15 | K EUR paiement unique | Paiement unique en juin 2026
Witgele Kruis CC — licence mensuelle | 1.75→4 | K EUR/mois | Augmentation progressive à partir de juillet 2026
Telenet — frais d'installation | 15 | K EUR paiement unique | Sept. 2026 
Telenet — abonnement mensuel | 4→25 | K EUR/mois | Croissance progressive d'octobre à décembre 2026
Chiffre d'affaires trimestriel de Telenet (tous clients confondus) en 2026 | 308→1,011 | K EUR/trimestre | Selon le modèle initial
EAU / autres nouveaux déploiements 2026 | — | K EUR | Pas encore chiffré — nécessite des données
D. BASE DE COÛTS — PERSONNEL
Gestion sous-traitée (3 personnes) | 12→15 | K EUR/mois | Stable à 15 000 à partir de mai 2026
Salaires des développeurs / CS / Ventes / Marketing | 18→48 | K EUR/mois | Augmentation progressive jusqu'en 2026 ; 2027 non détaillé | à vérifier
Salaire du directeur général Geoffrey (à partir de juin 2026) | — | K EUR/mois | Sujet à négociation — nécessite des informations | à vérifier
Juridique / Directeur financier / Notaire / Comptable (sous-traitant) | 10→15 | K EUR/mois | Augmentation en octobre 2026
E. BASE DE COÛTS — OPÉRATIONS
Représentation + déplacements internationaux | 7→20 | K EUR/mois | Les activités aux Émirats arabes unis et à l'international entraînent des coûts supplémentaires
Administration / bureaux / loyer / services publics / communications | 4→10 | K EUR/mois | Augmentation liée à la croissance de l'équipe
Serveurs (location ou achat) | 5→20 | K EUR/mois | Matériel GPU pour les déploiements
Promotion et relations publiques | 0→30 | K EUR/mois | Budget de lancement de DuoTranslator inclus
Divers, y compris les factures en suspens | 5→10 | K EUR/mois | Réserve pour frais divers
F. STRUCTURE DU CAPITAL ET FINANCEMENT
Prêts d'actionnaires en cours | 1000 | K EUR | Au 26 octobre Résumé
Fonds propres levés (actionnaires de catégorie B) | 500 | K EUR | Au 26 octobre Résumé
Trésorerie d'ouverture (avril 2026, y compris 150 000 + 25 000 de prêts) | 15 | K EUR | Selon la note du modèle initial
Taux d'intérêt sur les prêts aux actionnaires | — | % | Non spécifié — à préciser
Prêt sans intérêt | — | K EUR | Montant non confirmé — à saisir
Capitaux propres de l'investisseur (1 % Ariolas BV) | — | Équivalent en milliers d'euros | Sous réserve de l'évaluation du tableau de capitalisation
G. DONNÉES MANQUANTES — ACTION REQUISE
⚠  Les données suivantes sont nécessaires pour compléter le modèle 
  ➤  Prospects aux Émirats arabes unis et en Turquie : revenus : calendrier, structure des contrats, montants | Non quantifié dans aucun document
  ➤  Revenus publicitaires de DuoTranslator (hypothèses AdMob eCPM) | DuoTranslator modélisé uniquement comme licence B2B ; revenus de l'application grand public non inclus
  ➤  Pipeline de revendeurs de David van Loo + coût des commissions | Commissions des revendeurs non incluses dans la base de coûts ni dans les revenus
  ➤  Potentiel de revenus de l'intégration CRM de Whise | Non modélisé — partenariat non encore signé
  ➤  Partage des coûts matériels avec Groep Caenen (prêt A100) | Modalités de remboursement du partage des coûts du matériel à valider
  ➤  Intérêts / échéancier de remboursement des prêts de 1 million d'euros | Aucun impact sur le compte de résultat ou la trésorerie lié au service de la dette jusqu'à fin 2027 (1,7 million d'euros TOUT COMPRIS (intérêts inclus))
Entrées de trésorerie attendues
Sacha | 0 | Avril | Collaboration sur la base d'une commission
Gio | 25 | Mei
Klaas van den Dries | 150 | Avril
Vincent de Cannière | 250 | Juin
Claude Succesinvest | 15 | Avril | Acompte sur la facturation à la consommation
Coût des bureaux aux Philippines | 2000 | EUR/mois | y compris loyer / hébergement / location de ligne téléphonique
Location de serveur UE | 3200 | EUR/mois | 2 serveurs UE
Coûts de bureau à Ypres | 2000 | EUR/mois
Mark Dedaele | 2000 | EUR/mois | 6 000 total / arriérés de commission / prêt
Frank Aernoudt | EUR | Indemnité de licenciement (6 500 EUR restant à payer)
Emile | 7000 | EUR | Avance au titre de la continuité en juin
Frais de séjour de Geoffrey à Ypres pour 2 nuits par semaine
3 options : | 125 | EUR/nuit, petit-déjeuner compris

## SHEET: Compte de résultat
EBURON.AI / ARIOLAS BV — COMPTE DE RÉSULTAT (en milliers d'euros)
Source : Estimations budgétaires d'Ariolas BV (mise à jour de mars 2025) + documents du projet Eburon | Bleu = données issues de la source | Jaune = estimation/à confirmer
en milliers d'euros | Avril 2026 | Mai 2026 | juin 2026 | Juillet 2026 | Août 2026 | sept. 2026 | Oct. 2026 | Nov. 26 | déc. 2026 | Exercice 2026 | 1er trimestre 2027 | 2e trimestre 2027 | 3e trimestre 2027 | 4e trimestre 2027 | Exercice 2027
CHIFFRE D'AFFAIRES
  Succesinvest / Application en classe
Chiffre d'affaires lié aux licences (100 € / enseignant / jour × nombre de jours) | 15 | 5 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 370 | 300 | 450 | 600 | 750 | 2100
Nouveaux prospects : Salle de classe (OTAN / UE / Défense belge)
TOTAL SALLE DE CLASSE | 15 | 5 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 370 | 300 | 450 | 600 | 750 | 2100
Traducteur bilingue
APP
Witgele Kruis (licence groupée) | 0 | 0 | 6 | 8 | 8 | 8 | 8 | 8 | 8 | 54 | 24 | 24 | 24 | 24 | 96
i-Mens (licence groupée, en phase de montée en puissance) | 0 | 0 | 0 | 3 | 4.5 | 6.75 | 10 | 12.5 | 15 | 51.75 | 45 | 45 | 45 | 45 | 180
AdMob / revenus publicitaires de l'application grand public | 1 | 1 | 1 | 2 | 5 | 15 | 15 | 15 | 15 | 60
TOTAL APP | 0 | 0 | 6 | 11 | 12.5 | 15.75 | 19 | 21.5 | 25 | 110.75 | 84 | 84 | 84 | 84 | 336
Tablette
Deforce Medical (licence groupée) | 0 | 0 | 0 | 10 | 15 | 22.5 | 30 | 30 | 30 | 137.5 | 100 | 125 | 150 | 175 | 550
Acompte d'exclusivité Deforce (paiement unique) | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0
IdClick / triangle Traducteur double ajouter des revenus | 1 | 1.1 | 1.2100000000000002 | 1.3310000000000004 | 4.641000000000001 | 5.989500000000001 | 5.989500000000001 | 5.989500000000001 | 5.989500000000001 | 23.958000000000006
TOTAL DUAL TRANSLATOR | 0 | 20 | 6 | 21 | 27.5 | 39.25 | 50.1 | 52.71 | 56.331 | 272.89099999999996 | 189.98950000000002 | 214.9895 | 239.9895 | 264.9895 | 909.9580000000001
  Déploiements de centres de contact et de services d'assistance
Groep Caenen — frais d'installation | 15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 0 | 0 | 0 | 0 | 0
Groep Caenen — licence mensuelle | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 39.2 | 39.2 | 80 | 120 | 160 | 200 | 560
Witgele Kruis CC — frais d'installation | 0 | 15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 0 | 0 | 0 | 0 | 0
Witgele Kruis CC — licence mensuelle | 0 | 0 | 1.75 | 2.625 | 3.9375 | 4 | 4 | 4 | 4 | 24.3125 | 12 | 12 | 12 | 12 | 48
Telenet — frais d'installation | 0 | 0 | 15 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 0 | 0 | 0 | 0 | 0
Telenet — abonnement mensuel | 0 | 0 | 0 | 3.5 | 5.25 | 7.875 | 11.8125 | 17.71875 | 26.578125 | 72.734375 | 119.6 | 179.4 | 269.1 | 403.7 | 971.8
Deforce Medical -- frais d'installation | 20 | 20
Deforce -- Licence mensuelle | 1.25 | 1.25 | 2.5 | 2.5 | 3.75 | 7.5 | 137.5 | 22.5 | 22.5 | 22.5 | 22.5 | 90
Plateforme internationale -- frais d'installation | 15 | 15
Plateforme internationale -- Licence mensuelle | 1.25 | 1.25 | 1.25 | 1.25 | 1.25 | 1.25 | 7.5 | 4.125 | 4.125 | 4.125 | 4.125 | 16.5
DT&T — frais d'installation | 0
DT&T — licence mensuelle | 0
Axintor & Co --- frais d'installation | 15 | 15 | 15 | 15 | 15 | 75
Axintor & Co — licence mensuelle | 1.25 | 1.25 | 1.25 | 2.5 | 3.75 | 5 | 15 | 18.75 | 18.75 | 18.75 | 18.75 | 75
Revenus des revendeurs / partenaires de mise en œuvre | 0
EAU / autres nouveaux déploiements | 0 | 1761.3
TOTAL CENTRE DE CONTACT | 15 | 15 | 66.75 | 9.875 | 12.9375 | 31.875 | 37.0625 | 45.46875 | 98.528125 | 332.496875 | 256.975 | 356.775 | 486.475 | 661.075 | 1761.3
CHIFFRE D'AFFAIRES TOTAL | 30 | 40 | 92.75 | 60.875 | 80.4375 | 121.125 | 147.1625 | 168.17875 | 234.859125 | 975.3878750000001 | 746.9645 | 1021.7645 | 1326.4645 | 1676.0645 | 4771.258
COÛTS D'EXPLOITATION — PERSONNEL
Direction sous-traitée (3 personnes) Total | 15 | 15 | 17.5 | 17.5 | 17.5 | 17.5 | 17.5 | 17.5 | 17.5 | 152.5 | 57.75 | 57.75 | 57.75 | 57.75 | 231
Jo (PDG devenu président exécutif) | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 16.5 | 16.5 | 16.5 | 16.5 | 66
Emile (Directeur technique) | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 16.5 | 16.5 | 16.5 | 16.5 | 66
Geoffrey (analyste commercial devenu directeur général) | 5 | 5 | 7.5 | 7.5 | 7.5 | 7.5 | 7.5 | 7.5 | 7.5 | 24.750000000000004 | 24.750000000000004 | 24.750000000000004 | 24.750000000000004 | 99.00000000000001
Total des salaires Dév / CS / Ventes / Marketing | 32.858000000000004 | 37.608000000000004 | 37.608000000000004 | 37.608000000000004 | 37.608000000000004 | 37.608000000000004 | 42.608000000000004 | 42.608000000000004 | 42.608000000000004 | 348.72200000000004 | 139.6064 | 139.6064 | 139.6064 | 139.6064 | 558.4256
Martijn Vanlede (Responsable de la livraison / Chef de projet) | 4.852 | 4.852 | 4.852 | 4.852 | 4.852 | 4.852 | 4.852 | 4.852 | 4.852 | 16.0116 | 16.0116 | 16.0116 | 16.0116 | 64.0464
Michael (Responsable technique) | 4.852 | 4.852 | 4.852 | 4.852 | 4.852 | 4.852 | 4.852 | 4.852 | 4.852 | 16.0116 | 16.0116 | 16.0116 | 16.0116 | 64.0464
Alex | 3.832 | 3.832 | 3.832 | 3.832 | 3.832 | 3.832 | 3.832 | 3.832 | 3.832 | 12.6456 | 12.6456 | 12.6456 | 12.6456 | 50.5824
Karsten | 4.072 | 4.072 | 4.072 | 4.072 | 4.072 | 4.072 | 4.072 | 4.072 | 4.072 | 13.437600000000002 | 13.437600000000002 | 13.437600000000002 | 13.437600000000002 | 53.750400000000006
Mohammad | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 15 | 15 | 15 | 15 | 60
Juridique / Directeur financier / Notaire / Comptable (externalisé) | 10.25 | 10 | 10 | 10 | 10 | 10 | 15 | 15 | 15 | 50 | 50 | 50 | 50 | 200
Équipe des Philippines | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 5 | 16.5 | 16.5 | 16.5 | 16.5 | 66
TOTAL des coûts de personnel | 47.858000000000004 | 52.608000000000004 | 55.108000000000004 | 55.108000000000004 | 55.108000000000004 | 55.108000000000004 | 60.108000000000004 | 60.108000000000004 | 60.108000000000004 | 501.22200000000004 | 197.3564 | 197.3564 | 197.3564 | 197.3564 | 789.4256
COÛTS D'EXPLOITATION — HORS PERSONNEL
Représentation + déplacements internationaux | 10 | 7 | 8 | 8 | 11 | 11 | 16 | 21 | 21 | 113 | 75 | 100 | 125 | 150 | 450
Administration / bureaux / loyer / services publics / communications | 4 | 4 | 6 | 6 | 6 | 10 | 10 | 10 | 10 | 66 | 50 | 50 | 50 | 50 | 200
Matériel serveur (location ou dépenses d'investissement) | 3.2 | 3.2 | 3.2 | 4.800000000000001 | 7.200000000000001 | 10.8 | 16.200000000000003 | 24.300000000000004 | 26.730000000000008 | 99.63000000000001 | 75 | 75 | 100 | 125 | 375
Part des revenus des tablettes pour préfinancer les tablettes 
Promotion et relations publiques (y compris le lancement de DuoTranslator) | 0 | 5 | 10 | 10 | 10 | 20 | 20 | 30 | 30 | 135 | 100 | 100 | 100 | 100 | 400
Partenaires de mise en œuvre
Divers, y compris les factures en suspens | 33.5 | 7 | 7 | 5 | 5 | 5 | 10 | 10 | 10 | 92.5 | 50 | 50 | 50 | 50 | 200
Coûts des revendeurs / partenaires de mise en œuvre
Avances sur rémunération variable | 2.5 | 2.5 | 10.5 | 3.5 | 3.5 | 3.5 | 3.5 | 3.5 | 3.5 | 36.5 | 11.55 | 11.55 | 11.55 | 11.55 | 46.2
TOTAL des coûts hors personnel | 53.2 | 28.7 | 44.7 | 37.3 | 42.7 | 60.3 | 75.7 | 98.80000000000001 | 101.23 | 542.63 | 361.55 | 386.55 | 436.55 | 486.55 | 1671.2
TOTAL DES COÛTS D'EXPLOITATION | 101.058 | 81.308 | 99.808 | 92.408 | 97.808 | 115.408 | 135.808 | 158.90800000000002 | 161.33800000000002 | 1043.852 | 558.9064000000001 | 583.9064000000001 | 633.9064000000001 | 683.9064000000001 | 2460.6256000000003
EBITDA (résultat d'exploitation en trésorerie) | -71.058 | -41.30800000000001 | -7.058000000000007 | -31.533 | -17.370500000000007 | 5.716999999999999 | 11.354500000000002 | 9.270749999999992 | 73.52112499999998 | -68.46412500000008 | 188.05809999999997 | 437.8580999999999 | 692.5581 | 992.1580999999999 | 2310.6323999999995 | 0.4842815877908928
HORS BILAN
Intérêts sur les prêts d'actionnaires
Amortissements (matériel serveur) | A100 linéaire | 4000
Impôt sur les sociétés (Belgique)
BÉNÉFICE NET / (PERTE)
1043.852 | 2460.6256000000003

## SHEET: Flux de trésorerie
EBURON.AI / ARIOLAS BV — TABLEAU DES FLUX DE TRÉSORERIE (en milliers d'euros)
Le solde bancaire cumulé reflète l'autonomie financière | Bleu = apport | Jaune = à confirmer
en milliers d'euros | Avril 2026 | Mai 2026 | juin 2026 | Juillet 2026 | Août 2026 | sept. 2026 | Oct. 2026 | Nov. 26 | déc. 2026 | Exercice 2026 | 1er trimestre 2027 | 2e trimestre 2027 | 3e trimestre 2027 | 4e trimestre 2027 | Exercice 2027
SOLDE DE TRÉSORERIE D'OUVERTURE
Trésorerie en début de période (y compris les prêts reçus) | -10
FLUX DE TRÉSORERIE D'EXPLOITATION
Entrées de trésorerie provenant des revenus | 30 | 40 | 92.75 | 60.875 | 80.4375 | 121.125 | 147.1625 | 168.17875 | 234.859125 | 975.3878750000001 | 746.9645 | 1021.7645 | 1326.4645 | 1676.0645 | 4771.258
Sorties de trésorerie liées aux coûts d'exploitation | -101.058 | -81.308 | -99.808 | -92.408 | -97.808 | -115.408 | -135.808 | -158.90800000000002 | -161.33800000000002 | -1043.852 | -558.9064000000001 | -583.9064000000001 | -633.9064000000001 | -683.9064000000001 | -2460.6256000000003
FLUX DE TRÉSORERIE D'EXPLOITATION NET | -71.058 | -41.30800000000001 | -7.058000000000007 | -31.533 | -17.370500000000007 | 5.716999999999999 | 11.354500000000002 | 9.270749999999992 | 73.52112499999998 | -68.46412500000008 | 188.05809999999997 | 437.8580999999999 | 692.5581 | 992.1580999999999 | 2310.6323999999995 | 2310.6323999999995
FLUX DE TRÉSORERIE LIÉS AUX INVESTISSEMENTS
Achats de matériel (Groep Caenen A100, etc.)
Autres dépenses d'investissement
FLUX DE TRÉSORERIE NETS LIÉS AUX INVESTISSEMENTS | 0
FLUX DE TRÉSORERIE LIÉS AU FINANCEMENT
Encaissements au titre des prêts d'actionnaires | 150 | 25 | 250 | 425
Remboursements de prêts | 1500
Apports en capitaux propres
Intérêts payés | 250
FLUX DE TRÉSORERIE NET DE FINANCEMENT | 150 | 25 | 250 | 0 | 0 | 0 | 0 | 0 | 0 | 425 | 0 | 0 | 0 | -1750
SOLDE DE TRÉSORERIE CUMULÉ
Solde de trésorerie / solde bancaire à la clôture (cumulé) | 68.942 | 52.633999999999986 | 295.57599999999996 | 264.04299999999995 | 246.67249999999996 | 252.38949999999994 | 263.7439999999999 | 273.01474999999994 | 346.5358749999999 | 346.5358749999999 | 534.5939749999999 | 972.4520749999998 | 1665.010175 | 907.168275 | 3217.8006749999995 | 3217.8006749999995
356.5358749999999

## SHEET: Détail des salaires - SAISIE
DÉTAILS SALAIRES ET PERSONNEL — SAISIE OBLIGATOIRE (en milliers d'euros/mois, sauf indication contraire)
⚠  TOUTES LES CELLULES DE CETTE FEUILLE DOIVENT ÊTRE REMPLIES — ces données alimentent le compte de résultat (coûts de personnel). Jaune = obligatoire.
# | Nom / Fonction | Type de contrat | Coût mensuel
(en milliers d'euros bruts) | Date de début | Fin / À confirmer | 2026 ETP
Mois | 2027 ETP
Mois | Coût annuel
2026 (en milliers d'euros) | Remarques
GESTION SOUS-TRAITÉE
1 | Jo Lernout | Sous-traitance | 5000 | par ex. Jo Lernout / frais de gestion
2 | Emile  | Sous-traitance | 5000
3 | Geoffrey Ejzenberg | Sous-traitance | 5000 | 26 juin (GM)
ÉQUIPE DE DÉVELOPPEMENT | Salaire brut | RSZ | Total
4 | Martijn Vanlede (Responsable technique) | Employé | 4852 | Confirmer le type de contrat | 160 | EUR/mois chèques-repas | 3400 | 1292 | 1452 | 4852
5 | Michael Vanderhaegen | Employé | 4852 | 160 | EUR/mois chèques-repas | 3400 | 1292 | 1452 | 4852
6 | Alex  | Employé | 3832 | 160 | EUR/mois chèques-repas | train | 200 | €/mois hors charges | 360 | 2400 | 912 | 1432 | 3832
7 | Karsten | Employé | 4072 | 160 | EUR/mois chèques-repas | indemnité de voiture | 440 | €/mois hors charges | 600 | 2400 | 912 | 1672 | 4072
COMMERCIAL / VENTES
7 | Sacha | Sous-traitance  | À la commission
8 | David | Sous-traitance | À la commission
JURIDIQUE / FINANCES / ADMINISTRATION
9 | Directeur financier (sous-traitance) | Sous-traitance | 4000
10 | Conseiller juridique | Sous-traitance | 5000
11 | Comptable | Sous-traitance | 1250
SUCCÈS CLIENT / ASSISTANCE
12 | DJ (Philippines) | Employé | 2500
13 | 2 intérimaires pour des essais en centre d'appels | Employé | 2500
 AVANCES SUR RÉMUNÉRATION VARIABLE
12 | 2500 | 3500
TOTAL (à relier aux coûts de personnel du compte de résultat) | 50358 | 0 | 0 | 0

## SHEET: Tablettes DuoTranslator
DUOTRANSLATOR — MODÈLE DE DISTRIBUTION DE TABLETTES (en milliers d'euros)
Source : simulation dual_translator_tablets | Deux scénarios : 49 €/mois (A — viable) contre 29 €/mois (B — déficitaire)
Indicateur | Année 1 | Année 2 | Année 3 | Remarque
SCÉNARIO A — 49 € par mois et par tablette (RECOMMANDÉ)
Nouvelles tablettes installées (via les distributeurs) | 10000 | 50000 | 100000
Parc installé cumulé | 10000 | 60000 | 160000
Chiffre d'affaires brut mensuel (49 €/tablette × parc installé) | 5880 | 35280 | 94080
Chiffre d'affaires net d'Ariolas (répartition des revenus à 60 %) | 3528 | 21168 | 56448
Coûts ponctuels des tablettes (200 € + 80 € de location = 280 €/tablette × nouvelles tablettes) | -2800 | -14000 | -28000
Hébergement et assistance client (5 €/tablette/mois × parc installé) | -600 | -3600 | -9600
MARGE NETTE ARIOLAS (Scénario A) | 128 | 3568 | 18848
COMPTE DE RÉSULTAT DU DISTRIBUTEUR — Scénario A
Revenus du distributeur (40 % brut = 19,60 €/tablette) | 2352 | 14112 | 37632
Coûts du distributeur (15 €/tablette/mois : marketing, ventes, assistance de première ligne) | -1800 | -10800 | -28800
MARGE NETTE DU DISTRIBUTEUR (Scénario A) | 552 | 3312 | 8832
SCÉNARIO B — 29 €/mois par tablette (NON VIABLE)
Chiffre d'affaires brut mensuel (29 €/tablette × parc installé) | 3480 | 20880 | 55680
Chiffre d'affaires net d'Ariolas (60 %) | 2088 | 12528 | 33408
Coûts liés aux tablettes (280 €/tablette × nouvelles tablettes) | -2800 | -14000 | -28000
Hébergement et assistance (5 €/tablette/mois) | -600 | -3600 | -9600
MARGE NETTE ARIOLAS (Scénario B) | -1312 | -5072 | -4192
MARGE NETTE DU DISTRIBUTEUR (Scénario B) | -408 | -2448 | -6528
QUESTIONS EN SUSPENS / HYPOTHÈSES À CONFIRMER
  !  Stratégie tarifaire : confirmation de 49 €/mois comme tarif officiel de lancement ? | Un concurrent aux États-Unis propose une offre illimitée à 69 €/mois
  !  Coûts des tablettes : qui supporte les dépenses d'investissement ? Ariolas, le distributeur ou le client final ? La société de leasing ? | À modéliser
  !  Taux d'activation : quel pourcentage de la base installée est actif et payant ? | Connu
  !  Stratégie de distribution : qui sont les partenaires visés ? Y a-t-il des lettres d'intention ou des discussions en cours ? | Sacha / David 
  !  Revenus AdMob/grand public : hypothèse eCPM + durée moyenne de session par jour ? | Connu
  !  Matériel tablette (A100 vs grand public) : quelles spécifications pour Duotranslator ? | Connu

## SHEET: Revenus de l'application DuoTra
DUOTRANSLATOR — MODÈLE DE RECETTES PUBLICITAIRES DE L'APPLICATION (GRAND PUBLIC + DOOH)
Source : Eburon Business Case v1 (mars 2026) + Modèle de revenus publicitaires v1 (avril 2026) | ⚠ Aucun accord avec des partenaires n'a été confirmé — tous les revenus sont des prévisions
PARTIE 1 — APPLICATION GRAND PUBLIC : REVENUS PUBLICITAIRES ADMOB (modèle libre d'utilisation)
⚠  STATUT : Pas de compte AdMob, pas d'intégration SDK, pas de publication sur l'App Store. Ci-dessous = scénarios de planification — revenus NON comptabilisés.
Indicateur | Prudent
(250 000 WAU) | Scénario de base
(1 million d'utilisateurs actifs hebdomadaires) | Optimiste
(2 millions d'utilisateurs actifs hebdomadaires) | Excellent
(5 millions d'utilisateurs actifs hebdomadaires) | Remarque / Source
  Hypothèses relatives aux utilisateurs
Utilisateurs actifs hebdomadaires (WAU) | 250000 | 1000000 | 2000000 | 5000000
Utilisateurs actifs mensuels (MAU ≈ WAU × 4) | 1000000 | 4000000 | 8000000 | 20000000
Sessions par utilisateur et par mois | 6 | 8 | 8 | 10
Publicités affichées par session | 1.5 | 2 | 2 | 2.5
Nombre total d'impressions mensuelles | 9000000 | 64000000 | 128000000 | 500000000
  Hypothèses eCPM (références validées — application utilitaire, mondiale)
eCPM mixte pondéré (USD) — tarif de planification | 0.8 | 1.2 | 1.4 | 2
  Référence : bannière 0,20–0,50 $ | interstitielle 1,50–3,50 $ | native 0,60–1,50 $ | Source : Playwire/Appodeal/MAF/MonetizeMore 2024-2025
  Répartition des revenus
Revenus publicitaires bruts (USD) | 7200 | 76800 | 179200 | 1000000
Part de l'éditeur à 68 % (Google conserve 32 %) | 4896 | 52224.00000000001 | 121856.00000000001 | 680000
Revenus nets de l'éditeur (EUR, taux de change 1,08) | 4533.333333333333 | 48355.55555555556 | 112829.62962962964 | 629629.6296296295
  Coûts d'infrastructure (location cloud — phase de démarrage)
Serveurs nécessaires (base : 6 000 sessions simultanées par serveur) | 2 | 5 | 8 | 15
Coûts mensuels des serveurs à 1 500 €/serveur (cloud GPU UE) | -3000 | -7500 | -12000 | -22500
  EBITDA (avant équipe / dépenses d'exploitation)
OpEx estimé / équipe minimale | -8000 | -15000 | -18000 | -25000
EBITDA NET — Application grand public AdMob | -6466.666666666667 | 25855.555555555562 | 82829.62962962964 | 582129.6296296295
Seuil de rentabilité : ~500 000–700 000 WAU
PARTIE 2 — DUOTRANSLATOR PHYSIQUE (double écran triangulaire) : REVENUS PUBLICITAIRES DOOH
⚠  STATUT : Aucun accord avec iDklic/STRATACACHE, DooH Group Benelux, Vistar Media ou Displayce. Discussions à venir. Chiffres = planification de scénarios.
Indicateur | Prudent
(50 €/écran) | Réaliste
(100 €/écran) | Premium
(200 €/écran) | Remarque | Piste partenaire
  Revenus DOOH mensuels d'Ariolas (forfait ou programmatique)
100 écrans installés | 5000 | 10000 | 20000 | Écran = temps de veille hors appels | Piste A : iDklic/STRATACACHE ou DooH Group Benelux
500 écrans installés | 25000 | 50000 | 100000 | Écran = temps de veille hors appels | Piste A : iDklic/STRATACACHE ou DooH Group Benelux
1 000 écrans installés | 50000 | 100000 | 200000 | Écran = temps de veille hors appels | Piste A : iDklic/STRATACACHE ou DooH Group Benelux
  Référence
  iDklic / PharmaSeen (Bruxelles, 2006) | Plus de 1 500 pharmacies européennes — racheté par STRATACACHE | Couverture matérielle via des publicités dès le premier jour (15 emplacements)
  Services d'activation IQVIA Belgique | Plus de 1 100 pharmacies belges équipées d'un réseau d'écrans | Les annonceurs pharmaceutiques paient de manière structurelle pour le point de service
  CPM DOOH dans le secteur de la santé (2024-2025) | 7–25 € CPM point de vente en intérieur | Tarifs 3 fois plus élevés que le DOOH standard dans le commerce de détail
  Feuille de route du partenariat (à démarrer)
  Semaines 1-2 | Contacter iDklic/STRATACACHE (Jean-Charles Figoni) + DooH Group Benelux (+31 23 8200 120) | Piste A — forfait fixe par écran
  Semaines 2 à 4 | Inscrivez-vous en tant qu'éditeur sur Vistar Media (publisher@vistarmedia.com) + Displayce (Gauthier Mine) | Piste B — SSP programmatique
  Mois 2 | Pilote : activez le mode publicité sur 10 à 20 emplacements DuoTranslator (Caenen, Witgele Kruis, ...) | Mesurez le taux de remplissage, le CPM réalisé et la réaction des clients
  Mois 3 | Conclure un partenariat formel + intégrer sous forme de remise structurelle dans le modèle tarifaire Eburon | CPM plancher minimum : 8 €
PARTIE 3 — IMPACT COMBINÉ SUR LE MODÈLE FINANCIER
⚠  Les lignes ci-dessous ne sont PAS incluses dans le compte de résultat tant qu'aucun accord n'a été confirmé. À ajouter après la première confirmation contractuelle.
Scénario | Quand cela est réaliste | Impact mensuel (EUR) | Impact annuel (EUR) | Action requise
AdMob — estimation prudente (250 000 utilisateurs actifs hebdomadaires) | Lancement + 3 mois | 4533.333333333333 | 54400 | Compte AdMob + SDK + App Store en ligne
AdMob — scénario de base (1 million d'utilisateurs actifs hebdomadaires) | Lancement + 6 à 12 mois | 48355.55555555556 | 580266.6666666667 | Développement de la base d'utilisateurs via les campagnes d'application
DOOH — 100 écrans (scénario réaliste) | Après accord iDklic/DooH (3 à 6 mois) | 10000 | 120000 | Lancer les discussions avec les partenaires
DOOH — 500 écrans (objectif réaliste) | Année 2 en cas de déploiement réussi | 50000 | 600000 | Extension de la base installée
Combiné (1 million d'utilisateurs actifs hebdomadaires + 500 écrans) | Année 2 — ambitieux mais réaliste | 98355 | 1180260 | Les deux voies en parallèle
QUESTIONS EN SUSPENS / DÉCISIONS À PRENDRE
  [Application grand public AdMob]  Allons-nous lancer DuoTranslator en tant qu'application grand public gratuite ? Une décision définitive (oui ou non) est requise. | Si nous le lançons, il sera effectivement gratuit
  [Application grand public AdMob]  Quel budget d'acquisition d'utilisateurs (UA) est disponible pour les 60 premiers jours ? Le modèle nécessite environ 500 000 utilisateurs actifs hebdomadaires (WAU) pour atteindre le seuil de rentabilité. | Sans objet
  [Application grand public AdMob]  Quand l'examen juridique du RGPD est-il prévu pour le ciblage contextuel (directive ePrivacy) ? | Vérifier la publicité avec Google Ads
  [Partenariat DOOH]  Qui initie la discussion avec iDklic/STRATACACHE et DooH Group Benelux ? Geoffrey ou Jo ? | Geoffrey a lancé le processus
  [Partenariat DOOH]  Quelles installations DuoTranslator existantes sont disponibles pour le projet pilote couvrant 10 à 20 sites ? | Non
  [Partenariat DOOH]  Eburon a-t-il déjà contacté Vistar Media ou Displayce pour l'enregistrement SSP ?
  [Tablette vs. application]  Les revenus provenant des tablettes (B2B, 49 €/mois) et ceux provenant des applications (AdMob) sont-ils complémentaires ou se cannibalisent-ils ? | complémentaires
  [Impact sur les prix]  Si les revenus DOOH permettent de couvrir les frais de licence, allons-nous baisser le prix pour les clients ou conserver la marge ? | Conserver la marge

## SHEET: Groupe Caenen
EBURON.AI — GROUPE CAENEN | Calendrier des revenus
Bleu = donnée modifiable  |  Noir = formule  |  Vert = lié au compte de résultat  |  Jaune = nécessite une mise à jour  |  Toutes les valeurs sont en milliers d'euros
Données de revenus — Valeurs mensuelles modifiables ci-dessous (en milliers d'euros)
Ligne de chiffre d'affaires / Solution | Avril 2026 | Mai 2026 | juin 2026 | Juillet 2026 | Août 2026 | sept. 2026 | Oct. 2026 | Nov. 26 | déc. 2026 | Exercice 2026 | 1er trimestre 2027 | 2e trimestre 2027 | 3e trimestre 2027 | 4e trimestre 2027 | Exercice 2027
Centre de contact — Frais d'installation | 15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 0 | 0 | 0 | 0 | 0
Centre de contact — Licence mensuelle | 0 | 39.2 | 39.2 | 80 | 120 | 160 | 200 | 560
TOTAL DES RECETTES DU GROUPE CAENEN | 15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 39.2 | 54.2 | 80 | 120 | 160 | 200 | 560
CONTRÔLES DE CALENDRIER  ←  Ajustez le mois de début, le taux de montée en puissance ou définissez les valeurs sur 0 pour reporter/supprimer une ligne de revenus
Ligne de revenus | Premier mois de chiffre d'affaires | Ramp / Modèle | Statut / Remarque
Centre de contact — Frais d'installation | Avril 2026 | Ponctuel | Matériel ponctuel + frais de mise en œuvre
Centre de contact — Licence mensuelle | Mai 2026 | Récurrent (modifiable ci-dessus) | Mise en place à partir du 26 mai (Projet Ozéa)
MODE D'EMPLOI :  ① Modifiez les cellules bleues ci-dessus pour modifier les montants des revenus mensuels.  ② Définissez la valeur sur 0 pour reporter.  ③ L'onglet P&L s'alimente à partir de la ligne TOTAL via des liens de formule — toutes les modifications sont répercutées automatiquement.
Les revenus jusqu'en novembre ne sont pas facturés afin de récupérer l'investissement en matériel informatique

## SHEET: Witgele Kruis
EBURON.AI — WITGELE KRUIS | Calendrier des revenus
Bleu = donnée modifiable  |  Noir = formule  |  Vert = lié au compte de résultat  |  Jaune = nécessite une mise à jour  |  Toutes les valeurs sont en milliers d'euros
Données de revenus — Valeurs mensuelles modifiables ci-dessous (en milliers d'euros)
Ligne de chiffre d'affaires / Solution | Avril 2026 | Mai 2026 | juin 2026 | Juillet 2026 | Août 2026 | sept. 2026 | Oct. 2026 | Nov. 26 | déc. 2026 | Exercice 2026 | 1er trimestre 2027 | 2e trimestre 2027 | 3e trimestre 2027 | 4e trimestre 2027 | Exercice 2027
Application DuoTranslator — Licence mensuelle | 0 | 6 | 8 | 8 | 8 | 8 | 8 | 8 | 54 | 24 | 24 | 24 | 24 | 96
Centre de contact — Frais d'installation | 0 | 15 | 0 | 15 | 0
Centre de contact — Licence mensuelle | 0 | 0 | 1.75 | 2.625 | 3.9375 | 4 | 4 | 4 | 4 | 24.3125 | 12 | 12 | 12 | 12 | 48
TOTAL DES RECETTES DE WITGELE KRUIS | 0 | 15 | 7.75 | 10.625 | 11.9375 | 12 | 12 | 12 | 12 | 93.3125 | 36 | 36 | 36 | 36 | 144
CONTRÔLES DE CALENDRIER  ←  Ajustez le mois de début, le taux de montée en puissance ou définissez les valeurs sur 0 pour reporter/supprimer une ligne de revenus
Ligne de revenus | Premier mois de chiffre d'affaires | Ramp / Modèle | Statut / Remarque
Application DuoTranslator — Licence mensuelle | Mai 2026 | Récurrent (modifiable ci-dessus) | Licence groupée, stable à partir de juillet 2026
Centre de contact — Frais d'installation | Mai 2026 | Ponctuel | Paiement unique en juin 2026
Centre de contact — Licence mensuelle | juin 2026 | Récurrent (modifiable ci-dessus) | 5 postes × 500 €/poste, mise en place progressive en juillet 2026
MODE D'EMPLOI :  ① Modifiez les cellules bleues ci-dessus pour modifier les montants des revenus mensuels.  ② Définissez la valeur sur 0 pour reporter.  ③ L'onglet P&L s'alimente à partir de la ligne TOTAL via des liens de formule — toutes les modifications sont répercutées automatiquement.

## SHEET: i-Mens
EBURON.AI — I-MENS | Calendrier des revenus
Bleu = donnée modifiable  |  Noir = formule  |  Vert = lié au compte de résultat  |  Jaune = nécessite une mise à jour  |  Toutes les valeurs sont en milliers d'euros
Données de revenus — Valeurs mensuelles modifiables ci-dessous (en milliers d'euros)
Ligne de chiffre d'affaires / Solution | Avril 2026 | Mai 2026 | juin 2026 | Juillet 2026 | Août 2026 | sept. 2026 | Oct. 2026 | Nov. 26 | déc. 2026 | Exercice 2026 | 1er trimestre 2027 | 2e trimestre 2027 | 3e trimestre 2027 | 4e trimestre 2027 | Exercice 2027
Application DuoTranslator — Licence mensuelle | 0 | 0 | 0 | 3 | 4.5 | 6.75 | 10 | 12.5 | 15 | 51.75 | 45 | 45 | 45 | 45 | 180
CHIFFRE D'AFFAIRES TOTAL I-MENS | 0 | 0 | 0 | 3 | 4.5 | 6.75 | 10 | 12.5 | 15 | 51.75 | 45 | 45 | 45 | 45 | 180
CONTRÔLES DE CALENDRIER  ←  Ajustez le mois de début, le taux de montée en puissance ou définissez les valeurs sur 0 pour reporter/supprimer une ligne de revenus
Ligne de revenus | Premier mois de chiffre d'affaires | Ramp / Modèle | Statut / Remarque
Application DuoTranslator — Licence mensuelle | Juillet 2026 | Récurrent (modifiable ci-dessus) | Licence groupée, mise en place progressive de juin à décembre 2026
MODE D'EMPLOI :  ① Modifiez les cellules bleues ci-dessus pour modifier les montants des revenus mensuels.  ② Définissez la valeur sur 0 pour reporter.  ③ L'onglet P&L s'alimente à partir de la ligne TOTAL via des liens de formule — toutes les modifications sont répercutées automatiquement.

## SHEET: Deforce Medical
EBURON.AI — DEFORCE MEDICAL | Calendrier des recettes
Bleu = donnée modifiable  |  Noir = formule  |  Vert = lié au compte de résultat  |  Jaune = nécessite une mise à jour  |  Toutes les valeurs sont en milliers d'euros
Données de revenus — Valeurs mensuelles modifiables ci-dessous (en milliers d'euros)
Ligne de chiffre d'affaires / Solution | Avril 2026 | Mai 2026 | juin 2026 | Juillet 2026 | Août 2026 | sept. 2026 | Oct. 2026 | Nov. 26 | déc. 2026 | Exercice 2026 | 1er trimestre 2027 | 2e trimestre 2027 | 3e trimestre 2027 | 4e trimestre 2027 | Exercice 2027
DuoTranslator Tablet — Acompte d'exclusivité | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0
Tablette DuoTranslator — Licence mensuelle | 0 | 0 | 10 | 15 | 22.5 | 30 | 30 | 30 | 137.5 | 100 | 125 | 150 | 175 | 550
CHIFFRE D'AFFAIRES TOTAL DE LEFORCE MEDICAL | 0 | 20 | 0 | 10 | 15 | 22.5 | 30 | 30 | 30 | 157.5 | 100 | 125 | 150 | 175 | 550
CONTRÔLES DE CALENDRIER  ←  Ajustez le mois de début, le taux de montée en puissance ou définissez les valeurs sur 0 pour reporter/supprimer une ligne de revenus
Ligne de revenus | Premier mois de chiffre d'affaires | Ramp / Modèle | Statut / Remarque
DuoTranslator Tablet — Acompte d'exclusivité | Mai 2026 | Ponctuel | Paiement unique d'exclusivité en mai 2026
Tablette DuoTranslator — Licence mensuelle | juin 2026 | Récurrent (modifiable ci-dessus) | Croissance progressive de juin à octobre 2026, puis stabilisation
MODE D'EMPLOI :  ① Modifiez les cellules bleues ci-dessus pour modifier les montants des revenus mensuels.  ② Définissez la valeur sur 0 pour reporter.  ③ L'onglet P&L s'alimente à partir de la ligne TOTAL via des liens de formule — toutes les modifications sont répercutées automatiquement.

## SHEET: Succesinvest
EBURON.AI — SUCCESINVEST | Barème des tarifs
Bleu = donnée modifiable  |  Noir = formule  |  Vert = lié au compte de résultat  |  Jaune = nécessite une mise à jour  |  Toutes les valeurs sont en milliers d'euros
Données de revenus — Valeurs mensuelles modifiables ci-dessous (en milliers d'euros)
Ligne de chiffre d'affaires / Solution | Avril 2026 | Mai 2026 | juin 2026 | Juillet 2026 | Août 2026 | sept. 2026 | Oct. 2026 | Nov. 26 | déc. 2026 | Exercice 2026 | 1er trimestre 2027 | 2e trimestre 2027 | 3e trimestre 2027 | 4e trimestre 2027 | Exercice 2027
Application pour la classe — Licence (100 € / enseignant / jour) | 15 | 5 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 370 | 300 | 450 | 600 | 750 | 2100
TOTAL DES RECETTES DE SUCCESINVEST | 15 | 5 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 370 | 300 | 450 | 600 | 750 | 2100
CONTRÔLES DE CALENDRIER  ←  Ajustez le mois de début, le taux de montée en puissance ou définissez les valeurs sur 0 pour reporter/supprimer une ligne de revenus
Ligne de revenus | Premier mois de chiffre d'affaires | Ramp / Modèle | Statut / Remarque
Application pour la classe — Licence (100 € / enseignant / jour) | Mai 2026 | Récurrent (modifiable ci-dessus) | Période d'essai avril 2026, montée en puissance mai→décembre 2026
MODE D'EMPLOI :  ① Modifiez les cellules bleues ci-dessus pour modifier les montants des revenus mensuels.  ② Définissez la valeur sur 0 pour reporter.  ③ L'onglet P&L s'alimente à partir de la ligne TOTAL via des liens de formule — toutes les modifications sont répercutées automatiquement.

## SHEET: Telenet
EBURON.AI — TELENET | Calendrier des revenus
Bleu = donnée modifiable  |  Noir = formule  |  Vert = lié au compte de résultat  |  Jaune = nécessite une mise à jour  |  Toutes les valeurs sont en milliers d'euros
Données de revenus — Valeurs mensuelles modifiables ci-dessous (en milliers d'euros)
Ligne de chiffre d'affaires / Solution | Avril 2026 | Mai 2026 | juin 2026 | Juillet 2026 | Août 2026 | sept. 2026 | Oct. 2026 | Nov. 26 | déc. 2026 | Exercice 2026 | 1er trimestre 2027 | 2e trimestre 2027 | 3e trimestre 2027 | 4e trimestre 2027 | Exercice 2027
Centre de contact — Frais d'installation | 0 | 0 | 15 | 0 | 0 | 0 | 0 | 0 | 0 | 15 | 0 | 0 | 0 | 0 | 0
Centre de contact — Licence mensuelle | 0 | 0 | 0 | 3.5 | 5.25 | 7.875 | 11.8125 | 17.71875 | 26.578125 | 72.734375 | 119.6 | 179.4 | 269.1 | 403.7 | 971.8
CHIFFRE D'AFFAIRES TOTAL DE TELENET | 0 | 0 | 15 | 3.5 | 5.25 | 7.875 | 11.8125 | 17.71875 | 26.578125 | 87.734375 | 119.6 | 179.4 | 269.1 | 403.7 | 971.8
CONTRÔLES DE CALENDRIER  ←  Ajustez le mois de début, le taux de montée en puissance ou définissez les valeurs sur 0 pour reporter/supprimer une ligne de revenus
Ligne de revenus | Premier mois de chiffre d'affaires | Ramp / Modèle | Statut / Remarque
Centre de contact — Frais d'installation | juin 2026 | Ponctuel | Paiement unique juin 2026 (en cours de négociation — non confirmé)
Centre de contact — Licence mensuelle | Juillet 2026 | Récurrent (modifiable ci-dessus) | 500 €/licence/mois, montée en puissance d'octobre à décembre 2026
MODE D'EMPLOI :  ① Modifiez les cellules bleues ci-dessus pour modifier les montants des revenus mensuels.  ② Définissez la valeur sur 0 pour reporter.  ③ L'onglet P&L s'alimente à partir de la ligne TOTAL via des liens de formule — toutes les modifications sont répercutées automatiquement.

## SHEET: Justification des prix unitaire
nombre de personnes | 50
h/jour | 8
min/jour | 480
total minutes/jour | 24000
minutes par mois | 528000
prix par minute | 0.05 | 26400
mois | 26400
appels traités par Eburon | 0.7
18480
salaire mensuel par personne | 2500 | 14.204545454545455 | EUR/h
salaire mensuel total | 125000
Économie réalisée grâce à Eburon | 0.7
Économie en EUR | 87500 | €
prix par minute I-mens | 0.25 | Inde | 0.67
EUR/mois | 132000 | 353760
EUR/an | 1584000 | 4245120
économies en euros/mois | 105600
Mémorandum d'investissement
Ariolas BV, opérant sous le nom de
nous avons un `;

export const JO_KNOWLEDGE_FILES = [
  {
    title: 'Eburon.ai Business Plan v4.2026 (English)',
    filename: 'Eburon.ai BP v4.2026 fr en-US.docx',
    content: JO_BP_EN,
  },
  {
    title: "Eburon.ai Plan d'affaires v4.2026 (Français)",
    filename: 'Eburon.ai BP v4.2026 fr.docx',
    content: JO_BP_FR,
  },
  {
    title: 'Eburon Financial Plan v8.Apr 2026 (Français)',
    filename: 'Eburon Financial Plan v8.Apr 2026 (1) fr.xlsx',
    content: JO_FINANCIAL,
  },
] as const;
