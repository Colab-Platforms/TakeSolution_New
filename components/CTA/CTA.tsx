import { ArrowRight } from "lucide-react";

export const CTA = () => (
    <section id="contact" className="container">
        <div className="rounded-[2rem] bg-secondary text-secondary-foreground p-10 lg:p-16 grid lg:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
                    Let's build the next chapter of healthcare — together.
                </h2>
            </div>
            <div className="lg:justify-self-end">
                <p className="text-secondary-foreground/80 mb-6 max-w-md">
                    Partner with Take Solutions to bring AI-native platforms to your
                    clinical, research or preventive-care workflows.
                </p>
                <a
                    href="mailto:hello@takesolutions.com"
                    className="group inline-flex items-center gap-3 rounded-full bg-secondary text-secondary-foreground px-7 py-4 hover:bg-accent transition-colors"
                >
                    <span className="font-medium">Request a Demo</span>
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    </section>
);

export default CTA;
