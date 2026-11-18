# Content templates — Case Studies, Insights, Newsletters

Use these briefs to deepen or replace first-ship copy. Layout stays the same; swap text (and add a JSON row for new articles).

**Add an insight article:** create `pages/insights/<slug>.html` + one entry in `data/insights-index.json`.  
**Add a case study:** create `pages/case-studies/<slug>.html` + card on `pages/case-studies/index.html` (and optional homepage teaser).  
**Newsletter issues:** draft offline with the issue brief below; v1 site only collects signups (FormSubmit → `hello@prodatalytics.com`). Upgrade later to Mailchimp/Buttondown/ConvertKit with the same series names.

---

## Case study brief

```text
Slug:
Title:
Industry / anonymized client label:
Service area: (Consulting | ML | Training | Statistical reporting | Workshops | Research)
One-line outcome:

Challenge: (2–4 sentences)
Approach: (bullets)
Outcome: (2–4 bullets; mark figures needing approval)
Quote: (optional — permission required)
CTA note: (default = book a consultation)
```

### Pre-filled cases (v1)

#### 1. `renewable-energy-grid-optimization`
- **Title:** Renewable Energy Demand Forecasting & Grid Optimization
- **Industry:** Energy
- **Summary:** AI/predictive models for electricity demand, renewable generation, and grid load — optimize distribution, improve stability, reduce ops cost
- **Outcomes on site:** Directional (visibility, planning, ops overhead); no client-named % / $ until approved

#### 2. `clinical-trial-patient-recruitment`
- **Title:** Clinical Trial Analytics & Patient Recruitment Optimization
- **Industry:** Life sciences
- **Summary:** ML for eligible cohorts, site selection, retention monitoring, faster trial execution with regulatory compliance
- **Outcomes on site:** Directional (enrollment speed, site selection, retention visibility); no client-named % / $ until approved

#### 3. `enterprise-ai-knowledge-assistant`
- **Title:** Enterprise AI Assistant & Intelligent Knowledge Management
- **Industry:** Enterprise
- **Summary:** Secure GenAI (LLMs + RAG) for NL search, summarization, workflow automation, contextual Q&A
- **Outcomes on site:** Directional (knowledge access, fragmentation, governed GenAI pattern); no client-named % / $ until approved

#### 4. `fraud-detection-financial-risk`
- **Title:** Fraud Detection & Financial Risk Analytics
- **Industry:** Financial services
- **Summary:** Fraud detection + risk scoring — suspicious transactions, anomalies, creditworthiness, real-time decisions
- **Outcomes on site:** Directional (detection, investigator prioritization, decision consistency); no client-named % / $ until approved

#### 5. `retail-demand-customer-intelligence`
- **Title:** Retail Demand Forecasting & Customer Intelligence
- **Industry:** Retail
- **Summary:** Demand forecast, inventory optimization, personalized recommendations, purchase-behavior analytics
- **Outcomes on site:** Directional (demand visibility, recommendations, ops link); no client-named % / $ until approved

---

## Insight / article brief

```text
Slug:
Title:
Date: (YYYY-MM-DD)
Tags: (3 max)
Excerpt: (1–2 sentences for listing + search)
Body: (600–1200 words when expanding)
Related case slug: (optional)
```

### Pre-filled articles (v1)

| Slug | Title | Date | Tags |
|------|-------|------|------|
| `ai-chatbots-to-ai-agents-2026` | From AI Chatbots to AI Agents: What Businesses Need to Know in 2026 | 2026-01-15 | Agentic AI, Strategy |
| `why-enterprise-ai-projects-fail` | Why Most Enterprise AI Projects Fail—and How to Make Yours Successful | 2026-02-12 | Enterprise AI, Best practices |
| `rag-enterprise-knowledge-management` | Retrieval-Augmented Generation (RAG): The Future of Enterprise Knowledge Management | 2026-03-10 | RAG, GenAI, Knowledge |
| `predictive-analytics-alongside-genai` | Predictive Analytics in the Age of Generative AI: Why Machine Learning Still Matters | 2026-04-08 | ML, Predictive analytics |
| `ai-readiness-assessment` | AI Readiness Assessment: Is Your Organization Ready for Enterprise AI? | 2026-05-06 | Strategy, Governance |

Article bodies ship as concise sectioned insights (not full 600–1200 word drafts yet). Expand HTML sections when longer drafts are ready; keep excerpts in `data/insights-index.json` in sync.

---

## Newsletter series (short-form, 2–5 min)

Distinct from long-form Insights articles. On-site: series descriptions + signup. Issues are emailed later (ESP upgrade).

| Series | Cadence | Focus |
|--------|---------|--------|
| **AI Pulse** | Monthly roundup | AI / GenAI / data science trends and business implications |
| **Data Science in Action** | Practical stories | Success stories, use cases, deployment lessons |
| **Tech Spotlight** | One tech / month | Agents, MCP, GraphRAG, vector DBs, LLMOps, multimodal — business angle |
| **The Data-Driven Enterprise** | Tips & checklists | Governance, MLOps, AI adoption, analytics maturity |
| **AI Myth vs Reality** | Myth-busting | What today’s AI/DS can and cannot realistically achieve |

### Newsletter issue brief

```text
Series: (AI Pulse | Data Science in Action | Tech Spotlight | The Data-Driven Enterprise | AI Myth vs Reality)
Issue title:
Month / date:
Hook: (1–2 sentences)
Body: (400–800 words max; scannable; 2–5 min read)
One takeaway / CTA:
Related article slug: (optional)
Related case slug: (optional)
```
