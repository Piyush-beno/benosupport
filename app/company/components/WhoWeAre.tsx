import ParallaxImageBreak from "./ParallaxImageBreak"

export default function WhoWeAre() {
  return (
    <ParallaxImageBreak
      src="/assets/benobuilding.svg"
      alt="Beno Support Office Building"
      side="left"
      label="About Us"
      heading="Who We Are"
      bg="#ffffff"
      body={
        <>
          <p>
            Beno Support is an engineering-led technology company focused on helping businesses build
            scalable digital ecosystems, modernize infrastructure, and accelerate innovation through
            AI-first transformation strategies.
          </p>
          <p>
            From enterprise software development and cloud modernization to cybersecurity and
            intelligent automation, we partner with organizations to solve complex technology
            challenges with scalable engineering solutions.
          </p>
          <p>
            Our teams combine consulting expertise, agile delivery models, cloud-native engineering,
            and product-focused execution to deliver measurable business outcomes.
          </p>
        </>
      }
    />
  )
}
