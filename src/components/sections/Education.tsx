import Image from "next/image";

const educationData = [
  {
    id: 1,
    degree: "Computer Science and Engineering",
    institution: "Indian Institute of Information Technology (IIIT) Nagpur",
    date: "2028",
    logoUrl: "/iiitn.png",
  },
];

export default function Education() {
  return (
    <section className="w-full py-12 font-sans sm:py-14">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight text-white">
          Education
        </h2>

        <div className="flex flex-col items-center gap-6">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="flex w-full max-w-2xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-5"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white">
                <Image
                  src={item.logoUrl}
                  alt={`${item.institution} logo`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>

              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-300 sm:text-base">
                  {item.institution}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Expected {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
