import { motion } from "framer-motion";
import { UserPlus, Calendar, Ticket, MapPin, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Customer Registers",
    description: "New customer creates an account",
    icon: UserPlus,
    table: "CUSTOMER",
    color: "from-neon-cyan to-neon-blue",
  },
  {
    step: 2,
    title: "Creates Booking",
    description: "Customer initiates a travel booking",
    icon: Calendar,
    table: "BOOKING",
    color: "from-neon-purple to-neon-cyan",
  },
  {
    step: 3,
    title: "Ticket Selected",
    description: "Choose flight, bus, or hotel",
    icon: Ticket,
    table: "TICKET",
    color: "from-neon-blue to-neon-purple",
  },
  {
    step: 4,
    title: "Destination Confirmed",
    description: "Travel destination is set",
    icon: MapPin,
    table: "DESTINATION",
    color: "from-success to-neon-cyan",
  },
  {
    step: 5,
    title: "Payment Completed",
    description: "Secure payment processed",
    icon: CreditCard,
    table: "PAYMENT",
    color: "from-warning to-neon-purple",
  },
];

const BookingFlowSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container px-6 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">User Journey</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Booking <span className="text-gradient">Flow Demo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow the step-by-step booking process and see which database tables are used.
          </p>
        </motion.div>

        {/* Flow Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-success hidden lg:block" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Content card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="inline-block p-6 rounded-2xl bg-glass-strong border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color}`}>
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-xs text-primary font-semibold">Step {step.step}</span>
                        <h3 className="font-display text-lg font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30">
                      <span className="text-xs text-muted-foreground">Table:</span>
                      <span className="font-mono text-sm text-primary font-semibold">{step.table}</span>
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-background font-bold text-lg z-10">
                  {step.step}
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}

            {/* Success indicator */}
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-success/10 border border-success/30">
                <CheckCircle className="w-6 h-6 text-success" />
                <span className="font-semibold text-success">Booking Complete!</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFlowSection;
