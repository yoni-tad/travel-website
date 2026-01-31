import { motion } from "framer-motion";
import { User, Calendar, Ticket, MapPin, CreditCard } from "lucide-react";
import { useState } from "react";

const entities = [
    {
        id: "customer",
        name: "CUSTOMER",
        icon: User,
        color: "from-neon-cyan to-neon-blue",
        attributes: ["customer_id (PK)", "name", "email", "phone", "address"],
        position: { x: 0, y: 0 },
    },
    {
        id: "booking",
        name: "BOOKING",
        icon: Calendar,
        color: "from-neon-purple to-neon-cyan",
        attributes: ["booking_id (PK)", "customer_id (FK)", "booking_date", "status"],
        position: { x: 1, y: 0 },
    },
    {
        id: "ticket",
        name: "TICKET",
        icon: Ticket,
        color: "from-neon-blue to-neon-purple",
        attributes: ["ticket_id (PK)", "ticket_type", "price", "seat_number"],
        position: { x: 2, y: 0 },
    },
    {
        id: "destination",
        name: "DESTINATION",
        icon: MapPin,
        color: "from-success to-neon-cyan",
        attributes: ["destination_id (PK)", "city", "country", "airport_code"],
        position: { x: 2, y: 1 },
    },
    {
        id: "payment",
        name: "PAYMENT",
        icon: CreditCard,
        color: "from-warning to-neon-purple",
        attributes: ["payment_id (PK)", "booking_id (FK)", "amount", "method", "status"],
        position: { x: 1, y: 1 },
    },
];

const relationships = [
    {
        from: "customer",
        to: "booking",
        label: "makes",
        type: "1:M",
        participation: "Partial – Total",
        description: "One customer can make many bookings",
    },
    {
        from: "booking",
        to: "ticket",
        label: "contains",
        type: "M:1",
        participation: "Total – Total",
        description: "Each booking must have a ticket",
    },
    {
        from: "ticket",
        to: "destination",
        label: "has",
        type: "M:1",
        participation: "Total – Partial",
        description: "Each ticket is for a destination",
    },
    {
        from: "booking",
        to: "payment",
        label: "requires",
        type: "1:1",
        participation: "Total – Total",
        description: "Each booking must have a payment",
    },
];

const ERDiagramSection = () => {
    const [activeEntity, setActiveEntity] = useState(null);
    const [activeRelation, setActiveRelation] = useState(null);

    return (
        <section id="er-diagram" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

            <div className="container px-6 relative">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">System Architecture</span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Interactive <span className="text-gradient">ER Diagram</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our database structure. Hover over entities and relationships to learn more.
                    </p>
                </motion.div>

                {/* Entity Cards Grid */}
                <div className="max-w-6xl mx-auto mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {entities.slice(0, 3).map((entity, index) => (
                            <motion.div
                                key={entity.id}
                                className={`group cursor-pointer transition-all duration-300 ${activeEntity === entity.id ? 'scale-105' : ''
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setActiveEntity(entity.id)}
                                onMouseLeave={() => setActiveEntity(null)}
                            >
                                <div className={`h-full p-6 rounded-2xl bg-glass-strong border transition-all duration-300 ${activeEntity === entity.id
                                        ? 'border-primary glow-primary'
                                        : 'border-border/50 hover:border-primary/50'
                                    }`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${entity.color}`}>
                                            <entity.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="font-display text-lg font-bold">{entity.name}</h3>
                                    </div>

                                    <div className="space-y-1">
                                        {entity.attributes.map((attr, i) => (
                                            <div
                                                key={i}
                                                className={`text-sm py-1 px-2 rounded ${attr.includes('PK')
                                                        ? 'text-primary bg-primary/10'
                                                        : attr.includes('FK')
                                                            ? 'text-secondary bg-secondary/10'
                                                            : 'text-muted-foreground'
                                                    }`}
                                            >
                                                {attr}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {entities.slice(3).map((entity, index) => (
                            <motion.div
                                key={entity.id}
                                className={`group cursor-pointer transition-all duration-300 ${activeEntity === entity.id ? 'scale-105' : ''
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index + 3) * 0.1 }}
                                onMouseEnter={() => setActiveEntity(entity.id)}
                                onMouseLeave={() => setActiveEntity(null)}
                            >
                                <div className={`h-full p-6 rounded-2xl bg-glass-strong border transition-all duration-300 ${activeEntity === entity.id
                                        ? 'border-primary glow-primary'
                                        : 'border-border/50 hover:border-primary/50'
                                    }`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${entity.color}`}>
                                            <entity.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="font-display text-lg font-bold">{entity.name}</h3>
                                    </div>

                                    <div className="space-y-1">
                                        {entity.attributes.map((attr, i) => (
                                            <div
                                                key={i}
                                                className={`text-sm py-1 px-2 rounded ${attr.includes('PK')
                                                        ? 'text-primary bg-primary/10'
                                                        : attr.includes('FK')
                                                            ? 'text-secondary bg-secondary/10'
                                                            : 'text-muted-foreground'
                                                    }`}
                                            >
                                                {attr}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Relationships */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-display text-2xl font-bold text-center mb-8">
                        Entity <span className="text-gradient">Relationships</span>
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        {relationships.map((rel, index) => (
                            <motion.div
                                key={`${rel.from}-${rel.to}`}
                                className="group"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setActiveRelation(`${rel.from}-${rel.to}`)}
                                onMouseLeave={() => setActiveRelation(null)}
                            >
                                <div className={`p-5 rounded-xl bg-glass-strong border transition-all duration-300 ${activeRelation === `${rel.from}-${rel.to}`
                                        ? 'border-primary/50 bg-primary/5'
                                        : 'border-border/30 hover:border-primary/30'
                                    }`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 rounded-lg bg-primary/20 text-primary font-mono text-sm font-semibold">
                                            {rel.from.toUpperCase()}
                                        </span>
                                        <div className="flex-1 flex items-center gap-2">
                                            <div className="flex-1 h-px bg-gradient-to-r from-primary to-secondary" />
                                            <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                                {rel.label}
                                            </span>
                                            <div className="flex-1 h-px bg-gradient-to-r from-secondary to-primary" />
                                        </div>
                                        <span className="px-3 py-1 rounded-lg bg-secondary/20 text-secondary font-mono text-sm font-semibold">
                                            {rel.to.toUpperCase()}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-primary font-semibold">{rel.type}</span>
                                        <span className="text-muted-foreground">{rel.participation}</span>
                                    </div>

                                    <p className="text-sm text-muted-foreground mt-2 italic">
                                        "{rel.description}"
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Legend */}
                <motion.div
                    className="mt-12 flex flex-wrap justify-center gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-primary/30 border border-primary" />
                        <span className="text-sm text-muted-foreground">Primary Key (PK)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-secondary/30 border border-secondary" />
                        <span className="text-sm text-muted-foreground">Foreign Key (FK)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-px bg-gradient-to-r from-primary to-secondary" />
                        <span className="text-sm text-muted-foreground">Relationship</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ERDiagramSection;
