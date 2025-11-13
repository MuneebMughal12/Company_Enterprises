import React from "react";
import { motion } from "framer-motion";
import Services1 from "../assets/Homepage/services1.png";
import Services2 from "../assets/Homepage/services2.jpg";
import Services3 from "../assets/Homepage/Services3.png";

export default function ServicesSection() {
    const services = [
        "Single Source for Multi-Disciplinary",
        "Design & Documentation",
        "Design Management & Lead Consultancy",
        "Master Planning & Urban Design",
        "Architectural Design",
        "Project Management",
        "Site Supervision",
        "Contract Administration",
        "Design Peer Reviews",
        "Legal Technical Advisory",
        "Design & Build",
        "International Collaborations",
        "Cost Management",
    ];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6 },
        }),
    };

    return (
        <section className="bg-white py-16 px-6 md:px-16 max-w-[1600px] mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Services Text */}
                <motion.div
                    className="items-center flex justify-center flex-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl font-bold mb-6 text-gray-800"
                        variants={fadeInUp}
                        custom={0.1}
                    >
                        Services
                    </motion.h2>

                    <ul className="space-y-2 text-gray-700">
                        {services.map((service, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start"
                                variants={fadeInUp}
                                custom={index * 0.1 + 0.2}
                            >
                                <span className="text-blue-500 text-xl mr-2">•</span>
                                <span>{service}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right - Images Grid */}
                <div className="grid gap-4">
                    <motion.div
                        className="rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={Services1}
                            alt="Modern Building"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <motion.div
                            className="rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={Services3}
                                alt="Residential Project"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={Services2}
                                alt="Winter Design"
                                className="w-[500px] h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
