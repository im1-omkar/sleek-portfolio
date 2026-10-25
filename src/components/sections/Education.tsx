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
    <section className="w-full rounded-3xl border border-white/10 bg-[#0a0a0a] px-5 py-16 font-sans sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-white sm:mb-12">
          Education
        </h2>

        <div className="flex flex-col gap-6">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:flex-row sm:justify-center sm:gap-6 sm:text-left"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-gray-800 bg-white">
                <Image
                  src={item.logoUrl}
                  alt={`${item.institution} logo`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-300 sm:text-base">
                  {item.institution}
                </p>
                <span className="mt-3 rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                  Expected {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
