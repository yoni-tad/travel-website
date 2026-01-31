import { motion } from "framer-motion";
import { Plane } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-16 border-t border-border/30">
            <div className="container px-6">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary">
                            <Plane className="w-6 h-6 text-background" />
                        </div>
                        <span className="font-display text-xl font-bold">Get On Travel</span>
                    </div>

                    {/* Project name */}
                    <h3 className="font-display text-2xl font-bold text-gradient mb-2">
                        Ticket Agency
                    </h3>

                    <p className="text-muted-foreground mb-8">
                        Database-Driven Travel Management System
                    </p>

                    {/* Divider */}
                    <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />

                    {/* Credits */}
                    <p className="text-sm text-muted-foreground">
                        © Made by Yoni,  {new Date().getFullYear()} Get On Travel Ticket Agency.
                        <br className="md:hidden" />
                        <span className="md:ml-1">Designed for excellence in travel booking.</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
