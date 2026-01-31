import { motion } from "framer-motion";
import { Key, Link, Users, ArrowRight } from "lucide-react";

const concepts = [
    {
        icon: Key,
        title: "Primary Keys",
        description: "Unique identifier for each record in a table",
        example: "customer_id, booking_id, ticket_id",
        color: "primary",
    },
    {
        icon: Link,
        title: "Foreign Keys",
        description: "Links records between related tables",
        example: "booking.customer_id → customer.customer_id",
        color: "secondary",
    },
];

const relationships = [
    {
        type: "1:1",
        name: "One-to-One",
        description: "Each booking has exactly one payment",
        example: "BOOKING ↔ PAYMENT",
    },
    {
        type: "1:M",
        name: "One-to-Many",
        description: "One customer can have many bookings",
        example: "CUSTOMER → BOOKINGS",
    },
];

const participations = [
    {
        type: "Total",
        description: "Every entity must participate in the relationship",
        example: "Every booking must have a payment",
        color: "success",
    },
    {
        type: "Partial",
        description: "Some entities may not participate",
        example: "A customer may have no bookings yet",
        color: "warning",
    },
];

const DataIntegritySection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="container px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">Database Concepts</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Data Integrity & <span className="text-gradient">Relationships</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Understanding how our database maintains accuracy and consistency.
                    </p>
                </motion.div>

                {/* Keys Section */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
                    {concepts.map((concept, index) => (
                        <motion.div
                            key={concept.title}
                            className="group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="h-full p-6 rounded-2xl bg-glass-strong border border-border/50 hover:border-primary/50 transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-3 rounded-xl bg-${concept.color}/20 border border-${concept.color}/30`}>
                                        <concept.icon className={`w-6 h-6 text-${concept.color}`} />
                                    </div>
                                    <h3 className="font-display text-xl font-bold">{concept.title}</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">{concept.description}</p>
                                <code className="text-sm text-primary bg-primary/10 px-3 py-1.5 rounded-lg">
                                    {concept.example}
                                </code>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Relationships Section */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-display text-2xl font-bold text-center mb-8">
                        Relationship <span className="text-gradient">Types</span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {relationships.map((rel, index) => (
                            <motion.div
                                key={rel.type}
                                className="group"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="p-6 rounded-2xl bg-glass-strong border border-border/50 hover:border-secondary/50 transition-all">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-3xl font-display font-bold text-gradient">{rel.type}</span>
                                        <div>
                                            <h4 className="font-semibold text-lg">{rel.name}</h4>
                                            <p className="text-sm text-muted-foreground">{rel.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-muted-foreground">Example:</span>
                                        <span className="font-mono text-secondary">{rel.example}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Participation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-display text-2xl font-bold text-center mb-8">
                        Participation <span className="text-gradient">Constraints</span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {participations.map((part, index) => (
                            <motion.div
                                key={part.type}
                                className="group"
                                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className={`p-6 rounded-2xl bg-glass-strong border border-${part.color}/30 hover:border-${part.color}/50 transition-all`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`px-4 py-2 rounded-lg bg-${part.color}/20`}>
                                            <span className={`font-display font-bold text-${part.color}`}>{part.type}</span>
                                        </div>
                                        <Users className={`w-5 h-5 text-${part.color}`} />
                                    </div>
                                    <p className="text-muted-foreground mb-3">{part.description}</p>
                                    <div className="flex items-center gap-2 text-sm">
                                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-muted-foreground italic">{part.example}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DataIntegritySection;
