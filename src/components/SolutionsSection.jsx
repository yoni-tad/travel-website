import { motion } from "framer-motion";
import { Database, CheckCircle2, Users, ShieldCheck, Globe } from "lucide-react";

const solutions = [
    {
        icon: Database,
        title: "Centralized Data Storage",
        description: "All information in one secure, accessible database",
        progress: 100,
    },
    {
        icon: CheckCircle2,
        title: "Accurate Tracking",
        description: "Real-time booking and payment status monitoring",
        progress: 100,
    },
    {
        icon: Users,
        title: "Enhanced Customer Service",
        description: "Quick access to customer history and preferences",
        progress: 100,
    },
    {
        icon: ShieldCheck,
        title: "Reduced Errors",
        description: "Automated validation prevents data inconsistencies",
        progress: 100,
    },
    {
        icon: Globe,
        title: "Online Booking & Payments",
        description: "Seamless digital transactions from anywhere",
        progress: 100,
    },
];

const SolutionsSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Success background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-success/5 to-transparent" />

            <div className="container px-6 relative">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-success font-semibold text-sm uppercase tracking-wider">The Solution</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Database <span className="text-success">Goals Achieved</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our digital system transforms travel booking with modern database architecture.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="h-full p-6 rounded-2xl bg-glass-strong border border-success/20 hover:border-success/50 transition-all duration-300 group-hover:glow-success">
                                {/* Icon */}
                                <div className="inline-flex p-3 rounded-xl bg-success/10 border border-success/30 mb-4">
                                    <solution.icon className="w-6 h-6 text-success" />
                                </div>

                                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-success transition-colors">
                                    {solution.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {solution.description}
                                </p>

                                {/* Progress bar */}
                                <div className="relative h-1.5 bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-success to-primary rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${solution.progress}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                    />
                                </div>

                                {/* Checkmark indicator */}
                                <div className="absolute top-4 right-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-success" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
