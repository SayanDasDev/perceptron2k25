import useFonts from "@/hooks/use-fonts";

import { faqData } from "@/config/faqs";
import { cn } from "@/lib/utils";

import Heading from "../heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  const { mono, serif_font } = useFonts();
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-12">
      <Heading heading="FAQs" />
      <Accordion
        type="single"
        collapsible
        className="max-w-[800px] w-[75vw] text-primary-foreground text-left"
      >
        {faqData.map((faq, i) => (
          <AccordionItem key={i} value={`item ${i}`}>
            <AccordionTrigger className="hover:text-primary [&[data-state=open]]:text-primary text-xl text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent
              className={cn(
                "text-lg font-normal text-primary-foreground/70",
                serif_font.className
              )}
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
