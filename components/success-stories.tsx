const stories = [
  {
    tag: "CMS Transformation",
    title: "Bihar Tourism — CMS & Adobe Experience Cloud",
    image: "/assets/successtory1.svg",
    description:
      "Modernizing regional tourism with a globally accessible digital experience platform built on Adobe Experience Cloud.",
  },
  {
    tag: "AI Automation",
    title: "Enterprise AI Agentic Implementation",
    image: "/assets/successtory2.svg",
    description:
      "Reducing operational costs by 40% through custom AI workflow automation and intelligent agent orchestration.",
  },
]

export function SuccessStories() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="type-label font-semibold section-label-light">
              Case Studies
            </span>
            <h2 className="mt-2 text-balance type-heading font-bold text-primary">
              Success Stories
            </h2>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-secondary">
              Explore how Beno Support helps businesses accelerate innovation,
              optimize operations, modernize infrastructure, and achieve
              measurable digital transformation outcomes.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.title}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative h-60 overflow-hidden">
  <img
    src={story.image}
    alt={story.title}
    className="h-full w-full object-cover"
  />
  <span className="absolute bottom-3 left-3 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-primary-foreground">
    {story.tag}
  </span>
</div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold text-primary">
                  {story.title}
                </h3>
                <p className="type-body text-secondary">
                  {story.description}
                </p>
                <span className="mt-2 w-fit text-sm font-medium text-button">
                  Read Case Study →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
