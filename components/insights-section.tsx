const articles = [
  {
    category: "AI Automation",
    readTime: "5 min read",
    title: "The Shift to Agentic AI: Beyond Simple Automation",
    description:
      "How businesses are leveraging autonomous agents to handle complex multi-step tasks and reshape operational efficiency.",
  },
  {
    category: "Cloud Platform",
    readTime: "6 min read",
    title: "FinOps in 2026: Mastering Cloud Unit Economics",
    description:
      "Proven strategies for enterprises to regain control over their cloud spending while scaling intelligently.",
  },
  {
    category: "Cybersecurity",
    readTime: "4 min read",
    title: "Building Cyber Resilience in the AI-Threat Landscape",
    description:
      "Protecting enterprise data against the next generation of automated cybersecurity threats.",
  },
]

export function InsightsSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="type-label font-semibold text-accent">
              Blog &amp; Resources
            </span>
            <h2 className="mt-2 text-balance type-heading font-bold text-primary">
              AI, Engineering &amp; Technology Insights
            </h2>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-secondary">
              Explore expert perspectives on the future of AI transformation and
              engineering best practices.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="h-40 bg-accent/20" />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-muted px-2.5 py-1 font-medium text-accent">
                    {article.category}
                  </span>
                  <span className="text-secondary">{article.readTime}</span>
                </div>
                <h3 className="text-base font-semibold text-primary">
                  {article.title}
                </h3>
                <p className="flex-1 type-body text-secondary">
                  {article.description}
                </p>
                <span className="mt-2 w-fit text-sm font-medium text-button">
                  Read Article →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
