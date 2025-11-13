import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

/* FAQ data */
const FAQ = [
    {
        title: "A DRIVE FOR EXCELLENCE!",
        body:
            "We believe striving for perfection pushes us closer to excellence. " +
            "This principle guides everything we do. Our commitment is simple: " +
            "deliver rendering services that not only meet expectations but rise above industry standards, " +
            "setting a benchmark beyond our competitors.",
    },
    {
        title: "YOUR INVESTMENT MATTERS",
        body:
            "Speed is at the heart of our values. We understand that architectural projects often carry pressing timelines, whether for competitions or government-backed ventures. " +
            " From the very first brief to the final delivery, we align with your goals and deadlines, ensuring you receive results that arrive on time and make an impact worth celebrating.",

    },
    {
        title: "GREAT EXPERIENCES COME FROM GREAT TEAMS",
        body:
            "We are a team-focused business, always searching for outstanding talent. It is a continuous quest to bring together brilliant minds and skilled artists " +
            "This collective expertise ensures your project is shaped by superb creativity and collaboration.",
    },
];

/* Services dropdown */
const SERVICES = [
    "Services",
    "3D WALKTHROUGHS",
    "3D EXTERIOR RENDERS",
    "3D INTERIOR RENDERS",
    "360 VIRTUAL TOURS",
    "BRAND IDENTITY DESIGN",
    "OUTDOOR MEDIA DESIGN",
];

export default function WhyChooseUsAndQuote() {
    const [openIdx, setOpenIdx] = useState(0);
    const [ok, setOk] = useState(null);
    const [form, setForm] = useState({
        name: "",
        service: SERVICES[0],
        phone: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setOk(null);

        if (!form.name || !form.phone || form.service === "Services") {
            setOk({ type: "error", text: "Please fill all required fields." });
            return;
        }

        // simulate success (you can replace this with EmailJS later)
        setTimeout(() => {
            setOk({ type: "success", text: "Your enquiry has been submitted successfully!" });
            setForm({ name: "", service: SERVICES[0], phone: "" });
        }, 800);
    };

    return (
        <section className="max-w-[1330px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
            {/* WHY CHOOSE US */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-black/80 mb-6 text-center md:text-left">
                WHY CHOOSE US?
            </h2>

            <div className="rounded-md overflow-hidden border border-black/10">
                {FAQ.map((item, i) => {
                    const open = openIdx === i;
                    return (
                        <div key={i} className="border-b border-black/10 last:border-0">
                            <button
                                type="button"
                                onClick={() => setOpenIdx(open ? -1 : i)}
                                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 bg-[#e9e9e9] text-[15px] sm:text-[16px] text-black/80"
                            >
                                <span className="font-medium tracking-wide">{item.title}</span>
                                {open ? <Minus size={18} /> : <Plus size={18} />}
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-4 sm:px-6 py-4 bg-white text-[14px] sm:text-[15px] leading-7 text-black/70">
                                        {item.body}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* GET A QUOTE */}
            <div className="mt-12 md:mt-16">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-black/80 mb-2 text-center md:text-left">
                    GET A QUOTE
                </h3>
                <p className="text-sm sm:text-[15px] text-black/60 mb-6 text-center md:text-left">
                    Our team works closely with you to create a bespoke 3D visualization experience tailored to your needs.
                </p>

                <form
                    onSubmit={onSubmit}
                    className="space-y-4 bg-white border border-black/10 rounded-md p-4 sm:p-6 shadow-sm"
                >
                    {/* first row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <input
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-black/20 rounded px-4 py-3 focus:outline-none focus:border-black/40 text-sm sm:text-base"
                        />
                        <select
                            name="service"
                            value={form.service}
                            onChange={onChange}
                            className="w-full border border-black/20 rounded px-4 py-3 focus:outline-none focus:border-black/40 bg-white text-sm sm:text-base"
                        >
                            {SERVICES.map((s) => (
                                <option key={s} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={onChange}
                            type="text"
                            placeholder="Contact No."
                            className="w-full border border-black/20 rounded px-4 py-3 focus:outline-none focus:border-black/40 text-sm sm:text-base"
                        />
                    </div>

                    {/* submit row */}
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-end">
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-3 rounded bg-gradient-to-r from-[#727272] to-[#2d2d2d] text-white font-semibold tracking-wide hover:opacity-95 transition text-sm sm:text-base"
                        >
                            SEND ENQUIRY
                        </button>
                    </div>

                    {ok && (
                        <div
                            className={`text-sm mt-2 ${ok.type === "success" ? "text-green-600" : "text-red-600"
                                }`}
                        >
                            {ok.text}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
