import { motion } from "framer-motion";
import { FileX, Search, Database, AlertTriangle, Clock } from "lucide-react";

const problems = [
    {
        icon: FileX,
        title: "Manual Record Keeping",
        description: "Paper-based systems prone to loss and damage",
    },
    {
        icon: Search,
        title: "Tracking Difficulties",
        description: "Hard to find customer and booking information quickly",
    },
    {
        icon: Database,
        title: "No Centralized Data",
        description: "Information scattered across multiple locations",
    },
    {
        icon: AlertTriangle,
        title: "Data Integrity Issues",
        description: "Duplicate entries and inconsistent records",
    },
    {
        icon: Clock,
        title: "Slow Reporting",
        description: "Time-consuming to generate business reports",
    },
];

const ProblemsSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Warning background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-transparent" />

            <div className="container px-6 relative">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-destructive font-semibold text-sm uppercase tracking-wider">The Challenge</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Before the <span className="text-destructive">Digital System</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Traditional travel agencies faced numerous challenges with manual operations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            className="group relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="h-full p-6 rounded-2xl bg-glass-strong border border-destructive/20 hover:border-destructive/50 transition-all duration-300 group-hover:glow-warning">
                                {/* Glitch effect overlay */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute inset-0 bg-destructive/5 animate-pulse" />
                                </div>

                                <div className="relative">
                                    {/* Icon with warning style */}
                                    <div className="inline-flex p-3 rounded-xl bg-destructive/10 border border-destructive/30 mb-4 group-hover:animate-pulse">
                                        <problem.icon className="w-6 h-6 text-destructive" />
                                    </div>

                                    <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-destructive transition-colors">
                                        {problem.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm">
                                        {problem.description}
                                    </p>

                                    {/* Warning indicator */}
                                    <div className="absolute top-0 right-0 w-3 h-3">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-destructive/40 animate-ping" />
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Transition arrow */}
                <motion.div
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-muted-foreground text-sm">The Solution</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemsSection;
