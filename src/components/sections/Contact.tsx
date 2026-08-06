import Link from 'next/link';

export default function Contact() {
    return (
        <section className="w-full bg-[#0a0a0a] py-24 px-6 font-sans flex flex-col items-center justify-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center text-center">

                {/* Contact Badge */}
                <div className="bg-white text-black px-3 py-1 rounded-md text-sm font-medium mb-6">
                    Contact
                </div>

                {/* Heading */}
                <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                    Get in Touch
                </h2>

                {/* Description text */}
                <p className="text-[#a1a1aa] text-lg md:text-xl leading-relaxed max-w-xl">
                    Want to chat? Just shoot me a dm{' '}
                    <Link
                        href="https://twitter.com/your_twitter_handle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                    >
                        with a direct question on twitter
                    </Link>{' '}
                    and I'll respond whenever I can.
                </p>

            </div>
        </section>
    );
}