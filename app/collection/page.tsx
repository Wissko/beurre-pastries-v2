import Image from "next/image";
import FooterSection from "@/components/FooterSection";

const menuSections = [
  {
    title: "Viennoiserie",
    eyebrow: "Daily classics",
    items: [
      {
        name: "Croissant",
        description:
          "Classic laminated dough, 72 hour process, AOP butter, honey-brown crust and an open crumb.",
      },
      {
        name: "Pain au Chocolat",
        description:
          "Belgian dark chocolate wrapped twice in buttery layers. Best enjoyed warm, first thing.",
      },
      {
        name: "Pain Suisse",
        description:
          "Peanut butter, Belgian chocolate and morello cherries. Familiar in shape, bolder in flavour.",
      },
    ],
  },
  {
    title: "Signature bakes",
    eyebrow: "A little more unexpected",
    items: [
      {
        name: "Cinnamon Monkey Cube",
        description:
          "Pull-apart brioche with cinnamon sugar, baked into a neat block with a soft, layered centre.",
      },
      {
        name: "Black Sesame Morning Bun",
        description:
          "Rolled in black sesame and finished with yuzu glaze. Toasted, bright and quietly sharp.",
      },
    ],
  },
  {
    title: "Seasonal",
    eyebrow: "Rotating selection",
    items: [
      {
        name: "Seasonal Specials",
        description:
          "Limited bakes shaped by the season and the kitchen mood. Ask in store for the current line-up.",
      },
    ],
  },
];

export default function CollectionPage() {
  return (
    <main style={{ backgroundColor: "#f0ede8", color: "#1a1208" }}>
      <section className="px-4 pt-24 pb-10 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32 lg:pb-14">
        <div className="mx-auto max-w-6xl">
          <div
            className="relative overflow-hidden rounded-[28px] border"
            style={{
              borderColor: "rgba(26, 18, 8, 0.08)",
              boxShadow: "0 24px 80px rgba(26, 18, 8, 0.08)",
            }}
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[18/8]">
              <Image
                src="/images/cafecroissant.jpg"
                alt="Coffee and croissant at Beurre"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 1200px, 100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(240,237,232,0.08) 0%, rgba(26,18,8,0.1) 42%, rgba(26,18,8,0.58) 100%)",
                }}
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="max-w-2xl">
                <p
                  className="mb-4 font-jost text-[11px] uppercase tracking-[0.36em]"
                  style={{ color: "rgba(240, 237, 232, 0.78)", fontWeight: 300 }}
                >
                  Beurre Pastries
                </p>
                <h1
                  className="font-cormorant italic leading-[0.92]"
                  style={{
                    color: "#f0ede8",
                    fontSize: "clamp(52px, 9vw, 108px)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Menu
                </h1>
                <p
                  className="mt-3 max-w-xl font-jost leading-[1.8] text-[14px] sm:text-[15px]"
                  style={{ color: "rgba(240, 237, 232, 0.82)", fontWeight: 300 }}
                >
                  A concise edit of our daily pastries, signature bakes and seasonal pieces. Made with a classic French base and a little room for surprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-6xl space-y-6">
          {menuSections.map((section, index) => (
            <div
              key={section.title}
              className="rounded-[28px] border px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
              style={{
                backgroundColor: index % 2 === 0 ? "#f7f3ed" : "#ede8e0",
                borderColor: "rgba(26, 18, 8, 0.08)",
              }}
            >
              <div className="grid gap-8 lg:grid-cols-[0.36fr_1fr] lg:gap-12">
                <div>
                  <p
                    className="font-jost text-[11px] uppercase tracking-[0.34em] opacity-50"
                    style={{ fontWeight: 300 }}
                  >
                    {section.eyebrow}
                  </p>
                  <h2
                    className="mt-4 font-cormorant italic leading-[0.95]"
                    style={{
                      fontSize: "clamp(34px, 4vw, 58px)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {section.title}
                  </h2>
                </div>

                <div>
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={item.name}
                      className="grid gap-4 border-t py-5 first:border-t-0 first:pt-0 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-6"
                      style={{ borderColor: "rgba(26, 18, 8, 0.08)" }}
                    >
                      <span
                        className="font-jost text-[11px] uppercase tracking-[0.32em]"
                        style={{ color: "rgba(194, 96, 31, 0.72)", fontWeight: 300 }}
                      >
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3
                          className="font-cormorant italic"
                          style={{
                            fontSize: "clamp(28px, 3vw, 42px)",
                            letterSpacing: "-0.015em",
                            lineHeight: 0.98,
                          }}
                        >
                          {item.name}
                        </h3>
                        <p
                          className="mt-3 max-w-2xl font-jost text-[14px] leading-[1.9] sm:text-[15px]"
                          style={{ color: "rgba(26, 18, 8, 0.7)", fontWeight: 300 }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
