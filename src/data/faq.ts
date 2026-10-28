export const faqItems = [
  {
    question: "What kinds of projects do you design?",
    answer:
      "We work on house designs, duplex layouts, commercial building plans, front elevations, blueprints, and architectural concepts.",
  },
  {
    question: "What should I share to get started?",
    answer:
      "Start with your plot dimensions, location, number of floors, room requirements, and any design references you like. We can discuss the next steps from there.",
  },
  {
    question: "Can we discuss my project remotely?",
    answer:
      "Yes. Share your requirements over WhatsApp or arrange a phone conversation. If a site discussion is needed, we can talk about the location and availability.",
  },
  {
    question: "Does submitting the form confirm an appointment?",
    answer:
      "The form prepares a WhatsApp message for you to send. Your preferred meeting date is a request; we will confirm availability with you directly.",
  },
];

export const faqGroups = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      faqItems[0],
      faqItems[1],
      {
        question: "Do I need a finished idea before contacting you?",
        answer:
          "No. Share what you know about your plot and requirements. Design references are helpful, but the first conversation can also help you explore a direction.",
      },
    ],
  },
  {
    id: "design-and-scope",
    title: "Design & deliverables",
    items: [
      {
        question: "Can I request only an elevation or floor plan?",
        answer:
          "Yes, you can enquire about a focused design requirement. We’ll discuss the drawings you already have and agree on the scope before starting.",
      },
      {
        question: "What is included in a design package?",
        answer:
          "The package depends on the agreed scope. It may include floor plans, architectural views, elevations, or blueprint drawings. Ask us to confirm the exact deliverables for your project.",
      },
      {
        question: "How are fees, revisions, and timelines decided?",
        answer:
          "These depend on your project size, complexity, and deliverables. We discuss and agree on the scope, revision process, fees, and timeline before work begins.",
      },
      {
        question: "Are approvals and specialist engineering included?",
        answer:
          "We’ll confirm the scope with you before work begins. Permissions, structural design, and other specialist services are discussed separately from architectural concepts.",
      },
    ],
  },
  {
    id: "consultations",
    title: "Consultations & communication",
    items: [
      faqItems[2],
      faqItems[3],
      {
        question: "What happens after I complete the enquiry form?",
        answer:
          "The form prepares a WhatsApp message with your details. Review and send it in WhatsApp to share it with the studio. The website does not store your enquiry or automatically confirm a booking.",
      },
    ],
  },
];
