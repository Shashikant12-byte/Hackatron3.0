import React from "react";
import { Phone } from "lucide-react";
import hnccLogo from "../../assets/images/Navbar/hncc.png";

const contacts = [
    {
        name: "Anshuman",
        phone: "+91 84093 70501",
    },
    {
        name: "Anuj",
        phone: "+91 62058 11362",
    },
];

export default function ContactUs() {
    return (
        <section
            id="contact"
            className="relative z-[1] py-16 px-6 text-white scroll-mt-[120px]"
        >
            <div className="max-w-7xl mx-auto">
                <h1 className="py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]">
                    $ cat{" "}
                    <span className="text-white">CONTACT_US</span>.txt
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-start items-center sm:items-stretch w-full">
                    {contacts.map((person, idx) => (
                        <div
                            key={idx}
                            className="w-full max-w-[260px] md:max-w-[300px] border-2 border-dashed border-[#16a34a] bg-[#1e293b]
                         p-4 md:p-5 transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(0,255,0,0.4)] hover:bg-[#243447]
                         flex flex-col items-center text-center gap-2 md:gap-3"
                        >
                            {/* HnCC Logo */}
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#16a34a]
                              flex items-center justify-center overflow-hidden
                              shadow-[0_0_12px_rgba(0,255,0,0.3)] bg-[#0f172a] shrink-0">
                                <img src={hnccLogo} alt="HnCC Logo" className="w-7 h-7 md:w-8 md:h-8 object-contain" />
                            </div>

                            <h3 className="text-base md:text-lg font-semibold text-white">
                                {person.name}
                            </h3>

                            <div className="flex flex-col gap-1 w-full">
                                <a
                                    href={`tel:${person.phone.replace(/\s/g, "")}`}
                                    className="flex items-center justify-center gap-2 text-[#BEBEBE] hover:text-white transition-colors duration-200 text-[13px] md:text-sm"
                                >
                                    <Phone size={14} className="text-[#00FF00]" />
                                    {person.phone}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
