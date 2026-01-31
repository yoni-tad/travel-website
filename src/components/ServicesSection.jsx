import { motion } from "framer-motion";
import { Plane, Bus, Hotel, Headphones } from "lucide-react";

const services = [
    {
        icon: Plane,
        title: "Airline Ticket Booking",
        description: "Book domestic and international flights with real-time availability and instant confirmation.",
        gradient: "from-neon-cyan to-neon-blue",
    },
    {
        icon: Bus,
        title: "Bus Ticket Booking",
        description: "Reserve seats on intercity and local bus routes with flexible scheduling options.",
        gradient: "from-neon-purple to-neon-cyan",
    },
    {
        icon: Hotel,
        title: "Hotel Reservations",
        description: "Find and book accommodations from budget to luxury with verified reviews.",
        gradient: "from-neon-blue to-neon-purple",
    },
    {
        icon: Headphones,
        title: "24/7 Customer Support",
        description: "Round-the-clock assistance for bookings, cancellations, and travel queries.",
        gradient: "from-neon-cyan to-neon-purple",
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-32 relative">
            <div className="container px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Complete Travel <span className="text-gradient">Solutions</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Everything you need for seamless travel planning, all in one platform.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="h-full p-8 rounded-2xl bg-glass-strong border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                                {/* Icon */}
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
