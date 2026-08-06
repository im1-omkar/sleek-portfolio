import Image from 'next/image';

const educationData = [
    {
        id: 1,
        degree: "Computer Science and Engineering",
        institution: "Indian Institute of Information Technology (IIIT) Nagpur",
        date: "2028",
        logoUrl: "/iiitn.png", 
    }
];

export default function Education() {
    return (
        <section className="w-full bg-black py-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-3xl font-semibold text-white text-center mb-16 tracking-wide">
                    Education
                </h2>

                {/* Education List */}
                <div className="flex flex-col gap-10">
                    {educationData.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full"
                        >

                            <div className="flex items-center gap-6">
                                {/* University Logo */}
                                <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-full overflow-hidden border border-gray-800">
                                    <Image
                                        src={item.logoUrl}
                                        alt={`${item.institution} logo`}
                                        fill
                                        className="object-cover"
                                        sizes="64px"
                                    />
                                </div>

                                {/* Degree & Institution Details */}
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-bold text-white tracking-wide">
                                        {item.degree}
                                    </h3>
                                    <p className="text-lg text-gray-300 mt-1">
                                        {item.institution}
                                    </p>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="mt-4 sm:mt-0 sm:ml-4">
                                <span className="text-sm font-medium text-gray-200">
                                    {item.date}
                                </span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}