import { motion } from "framer-motion";
import { Sparkles, ArrowUp } from "lucide-react";

const ConclusionSection = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="container px-6 relative">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Icon */}
                    <motion.div
                        className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-8"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <Sparkles className="w-10 h-10 text-background" />
                    </motion.div>

                    {/* Main statement */}
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        A smart database powers a{" "}
                        <span className="text-gradient-hero">smarter travel experience.</span>
                    </h2>

                    {/* Description */}
                    <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 space-y-4">
                        <p>
                            Our database-driven approach fundamentally transforms how travel bookings
                            are managed. By centralizing data, enforcing integrity constraints, and
                            automating workflows, we've created a system that:
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
                            {[
                                {
                                    title: "Reduces Errors",
                                    desc: "Automated validation eliminates manual mistakes",
                                },
                                {
                                    title: "Improves Experience",
                                    desc: "Faster bookings and better customer service",
                                },
                                {
                                    title: "Enables Growth",
                                    desc: "Scalable architecture for future expansion",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="p-5 rounded-xl bg-glass-strong border border-border/30"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.3 }}
                                >
                                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-glass-strong border border-primary/30 hover:border-primary/60 transition-all hover:glow-primary"
                        whileHover={{ y: -5 }}
                    >
                        <ArrowUp className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">Back to Top</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ConclusionSection;
