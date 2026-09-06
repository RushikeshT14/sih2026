import React, { useState } from "react";
import "./ContactPage.css";
import {
  MessageCircle,
  Database,
  Bug,
  Lightbulb,
  Send,
  Waves,
  Layers3,
  Globe2,
  ChevronDown,
  Mail,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

/* ---------------------------------------------
   Reusable: ContactCard
--------------------------------------------- */
const ContactCard = ({ icon: Icon, title, description }) => (
  <div className="contactpg_infocard">
    <div className="contactpg_infocard_icon">
      <Icon size={18} />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

/* ---------------------------------------------
   Reusable: SupportItem
--------------------------------------------- */
const SupportItem = ({ title, description }) => (
  <div className="contactpg_supportitem">
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

/* ---------------------------------------------
   Reusable: FAQItem
--------------------------------------------- */
const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className={`contactpg_faqitem ${isOpen ? "open" : ""}`}>
    <button className="contactpg_faqquestion" onClick={onToggle}>
      <span>{question}</span>
      <ChevronDown size={18} className="contactpg_faqchevron" />
    </button>
    <div className="contactpg_faqanswer_wrap">
      <p className="contactpg_faqanswer">{answer}</p>
    </div>
  </div>
);

/* ---------------------------------------------
   Data definitions
--------------------------------------------- */
const CONTACT_CARDS = [
  {
    icon: MessageCircle,
    title: "General Questions",
    description: "Questions about the platform, features, navigation, or ocean visualization.",
  },
  {
    icon: Database,
    title: "Data & Observations",
    description: "Questions related to ocean model outputs, observations, variables, or datasets.",
  },
  {
    icon: Bug,
    title: "Report an Issue",
    description: "Found incorrect data, a visualization problem, or something that isn't working?",
  },
  {
    icon: Lightbulb,
    title: "Suggestions & Feedback",
    description: "Have an idea that could make the platform more useful or easier to explore?",
  },
];

const SUPPORT_ITEMS = [
  { title: "Data Questions", description: "Ask about variables, observations and datasets." },
  { title: "Technical Support", description: "Report issues with visualization or platform functionality." },
  { title: "Feedback", description: "Help us improve the platform and user experience." },
];

const FAQ_DATA = [
  {
    question: "What kind of ocean data does the platform visualize?",
    answer: "The platform is designed to visualize numerical ocean model outputs and in-situ observations such as Argo floats, Gliders, CTD/BGC observations and related ocean variables.",
  },
  {
    question: "Can I explore different ocean depths?",
    answer: "Yes. The platform is designed around multidimensional ocean data, allowing users to explore information across different depths and spatial locations.",
  },
  {
    question: "Can I compare model data with observations?",
    answer: "Yes. One of the key goals of the platform is to bring numerical model outputs and in-situ observations together for easier comparison and exploration.",
  },
  {
    question: "How can I report a problem?",
    answer: "Use the contact form and select 'Technical Issue' as the query type. Include as much information as possible about the problem.",
  },
];

const QUERY_OPTIONS = [
  "General Question",
  "Ocean Data",
  "Visualization",
  "Technical Issue",
  "Feedback",
  "Other",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
  queryType: "",
  agree: false,
};

/* ---------------------------------------------
   Main Component
--------------------------------------------- */
const ContactPage = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    if (!formData.agree) newErrors.agree = "Please confirm you agree to be contacted.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // NOTE: No backend connected yet.
    // Replace this block with a real API call, e.g.:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
    console.log("Contact form submitted (mock):", formData);

    setSubmitted(true);
    setFormData(INITIAL_FORM);
    setErrors({});

    setTimeout(() => setSubmitted(false), 4000);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

  return (
    <div className="contactpg_wrapper">

      {/* 1. HERO */}
      <section className="contactpg_hero">
        <div className="contactpg_hero_bgfx" aria-hidden="true" />
        <span className="contactpg_eyebrow">GET IN TOUCH</span>
        <h1>Let's Explore the Ocean Together.</h1>
        <p className="contactpg_hero_text">
          Have a question about the platform, ocean data, visualizations, or observations?
          Get in touch with our team.
        </p>
        <div className="contactpg_hero_stats">
          <span className="contactpg_stat_pill">Ocean Data Platform</span>
          {/* <span className="contactpg_stat_pill">SIH 26067</span> */}
        </div>
      </section>

      {/* 2 & 3. INFO + FORM */}
      <section className="contactpg_maingrid">

        {/* LEFT: Info Cards */}
        <div className="contactpg_infocol">
          <h2>How Can We Help?</h2>
          <div className="contactpg_infogrid">
            {CONTACT_CARDS.map((card, i) => (
              <ContactCard key={i} {...card} />
            ))}
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="contactpg_formcol">
          <div className="contactpg_formcard">
            <h2>Send Us a Message</h2>
            <p className="contactpg_form_subtext">Tell us how we can help.</p>

            {submitted && (
              <div className="contactpg_success">
                <CheckCircle2 size={18} />
                Message received. Thank you for getting in touch.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="contactpg_field">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {errors.name && <span className="contactpg_error">{errors.name}</span>}
              </div>

              <div className="contactpg_field">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errors.email && <span className="contactpg_error">{errors.email}</span>}
              </div>

              <div className="contactpg_field">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                />
                {errors.subject && <span className="contactpg_error">{errors.subject}</span>}
              </div>

              <div className="contactpg_field">
                <label>What's your query about?</label>
                <select
                  value={formData.queryType}
                  onChange={(e) => handleChange("queryType", e.target.value)}
                >
                  <option value="" disabled>Select an option</option>
                  {QUERY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="contactpg_field">
                <label>Message</label>
                <textarea
                  rows={5}
                  placeholder="Share your question, feedback, or issue..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
                {errors.message && <span className="contactpg_error">{errors.message}</span>}
              </div>

              <div className="contactpg_checkbox_field">
                <input
                  type="checkbox"
                  id="agree"
                  checked={formData.agree}
                  onChange={(e) => handleChange("agree", e.target.checked)}
                />
                <label htmlFor="agree">I agree to be contacted regarding this message.</label>
              </div>
              {errors.agree && <span className="contactpg_error">{errors.agree}</span>}

              <button type="submit" className="contactpg_submitbtn">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 4. SUPPORT INFORMATION */}
      <section className="contactpg_supportsection">
        <h2>We're Here to Help</h2>
        <p className="contactpg_support_intro">
          Whether you're exploring ocean observations, comparing model outputs, or learning about
          marine data, we're interested in hearing your questions and feedback.
        </p>
        <div className="contactpg_supportgrid">
          {SUPPORT_ITEMS.map((item, i) => (
            <SupportItem key={i} {...item} />
          ))}
        </div>
      </section>

      {/* 5. OCEAN DATA CONNECTION */}
      <section className="contactpg_flowsection">
        <h2>From Ocean Data to Discovery</h2>

        <div className="contactpg_flow">
          <div className="contactpg_flownode">
            <Waves size={20} />
            <span>Ocean Observations</span>
          </div>
          <ArrowRight className="contactpg_flowarrow" size={18} />
          <div className="contactpg_flownode">
            <Database size={20} />
            <span>Data Processing</span>
          </div>
          <ArrowRight className="contactpg_flowarrow" size={18} />
          <div className="contactpg_flownode">
            <Layers3 size={20} />
            <span>Ocean Visualization</span>
          </div>
          <ArrowRight className="contactpg_flowarrow" size={18} />
          <div className="contactpg_flownode highlight">
            <Globe2 size={20} />
            <span>User Exploration</span>
          </div>
        </div>

        <p className="contactpg_flow_text">
          The platform brings complex ocean observations and model outputs together into an
          interactive environment, making multidimensional ocean data easier to explore and
          understand.
        </p>
      </section>

      {/* 6. FAQ */}
      <section className="contactpg_faqsection">
        <h2>Frequently Asked Questions</h2>
        <div className="contactpg_faqlist">
          {FAQ_DATA.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === i}
              onToggle={() => toggleFAQ(i)}
            />
          ))}
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="contactpg_cta">
        <div className="contactpg_cta_wave" aria-hidden="true" />
        <h2>Have Something to Share?</h2>
        <p>
          Your questions, observations and ideas can help make ocean data more accessible and useful.
        </p>
        <button className="contactpg_ctabtn">
          Explore Ocean Data <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
};

export default ContactPage;