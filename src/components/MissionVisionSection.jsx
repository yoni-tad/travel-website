import { motion } from "framer-motion";
import { Target, Telescope, Zap, Shield, Globe, TrendingUp } from "lucide-react";

const MissionVisionSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="container px-6 relative">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
                        Mission & <span className="text-gradient">Vision</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Mission */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full p-10 rounded-3xl bg-glass-strong border border-primary/20 hover:border-primary/40 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-neon-blue">
                                    <Target className="w-8 h-8 text-background" />
                                </div>
                                <h3 className="font-display text-3xl font-bold">Mission</h3>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                To provide reliable, fast, and customer-friendly travel ticket services
                                using modern technology that simplifies the booking experience.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Zap, label: "Fast Service" },
                                    { icon: Shield, label: "Reliable" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                                        <item.icon className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full p-10 rounded-3xl bg-glass-strong border border-secondary/20 hover:border-secondary/40 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary to-neon-purple">
                                    <Telescope className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-display text-3xl font-bold">Vision</h3>
                            </div>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                To become one of the leading digital travel agencies by offering
                                efficient, transparent, and secure travel booking solutions.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Globe, label: "Global Reach" },
                                    { icon: TrendingUp, label: "Industry Leader" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                                        <item.icon className="w-5 h-5 text-secondary" />
                                        <span className="text-sm font-medium">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;
