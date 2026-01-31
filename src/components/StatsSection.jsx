import { motion } from "framer-motion";
import { Target, Zap, TrendingUp, Shield, Settings } from "lucide-react";

const stats = [
    {
        icon: Target,
        title: "High Accuracy",
        description: "Automated validation ensures data consistency",
        value: "99.9%",
    },
    {
        icon: Zap,
        title: "Fast Reporting",
        description: "Generate reports in seconds, not hours",
        value: "10x",
    },
    {
        icon: TrendingUp,
        title: "Scalable Design",
        description: "Grows with your business needs",
        value: "∞",
    },
    {
        icon: Shield,
        title: "Secure Payments",
        description: "Encrypted transactions and data protection",
        value: "256-bit",
    },
    {
        icon: Settings,
        title: "Efficient Management",
        description: "Streamlined booking and customer management",
        value: "24/7",
    },
];

const StatsSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

            <div className="container px-6 relative">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">Benefits</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Why This Database <span className="text-gradient">Design Works</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our carefully architected database delivers real business value.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="h-full p-8 rounded-2xl bg-glass-strong border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:glow-primary">
                                {/* Value */}
                                <div className="text-4xl font-display font-bold text-gradient mb-4">
                                    {stat.value}
                                </div>

                                {/* Icon & Title */}
                                <div className="flex items-center gap-3 mb-3">
                                    <stat.icon className="w-5 h-5 text-primary" />
                                    <h3 className="font-display text-lg font-semibold">{stat.title}</h3>
                                </div>

                                <p className="text-muted-foreground text-sm">{stat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
