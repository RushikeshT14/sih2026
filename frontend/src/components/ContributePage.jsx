import React, { useState } from "react";
import "./ContributePage.css";
import {
  FileText, Database, Building2, Waves, AlertTriangle,
  Lightbulb, Users, ChevronDown, CheckCircle2
} from "lucide-react";

const CONTRIBUTE_OPTIONS = [
  {
    id: "paper",
    icon: FileText,
    title: "Submit Research Paper",
    description: "Share relevant marine or oceanography research papers to be reviewed and added to the platform's knowledge base.",
    fields: [
      { name: "title", label: "Paper Title", type: "text", placeholder: "e.g. Thermal Variability in the Arabian Sea" },
      { name: "authors", label: "Author(s)", type: "text", placeholder: "e.g. R. Todkari, A. Sharma" },
      { name: "abstract", label: "Abstract / Summary", type: "textarea", placeholder: "Brief summary of the paper..." },
      { name: "link", label: "Link to Paper / DOI", type: "text", placeholder: "https:// or DOI" },
      { name: "file", label: "Upload PDF (optional)", type: "file" },
    ],
  },
  {
    id: "dataset",
    icon: Database,
    title: "Share Dataset",
    description: "Upload or provide links to ocean datasets — NetCDF, CSV, Argo, Glider, CTD and other observational formats.",
    fields: [
      { name: "name", label: "Dataset Name", type: "text", placeholder: "e.g. Bay of Bengal Salinity Profiles 2025" },
      { name: "format", label: "Data Format", type: "select", options: ["NetCDF", "CSV / ASCII", "Argo", "Glider", "CTD", "Other"] },
      { name: "link", label: "Dataset Link (if hosted elsewhere)", type: "text", placeholder: "https://..." },
      { name: "file", label: "Upload File (optional)", type: "file" },
      { name: "description", label: "Description", type: "textarea", placeholder: "What does this dataset cover?" },
    ],
  },
  {
    id: "institution",
    icon: Building2,
    title: "Add Research Institution",
    description: "Suggest Indian marine research institutes or centres to be listed and credited on the platform.",
    fields: [
      { name: "institutionName", label: "Institution Name", type: "text", placeholder: "e.g. National Institute of Oceanography" },
      { name: "location", label: "Location / City", type: "text", placeholder: "e.g. Goa" },
      { name: "website", label: "Website", type: "text", placeholder: "https://..." },
      { name: "description", label: "About the Institution", type: "textarea", placeholder: "Focus areas, research groups, etc." },
    ],
  },
  {
    id: "observation",
    icon: Waves,
    title: "Submit Ocean Observation",
    description: "Contribute observational data collected from instruments, buoys, or field surveys.",
    fields: [
      { name: "instrument", label: "Instrument / Method Used", type: "text", placeholder: "e.g. CTD sensor, drone survey" },
      { name: "location", label: "Location (Lat, Long)", type: "text", placeholder: "e.g. 15.29°N, 73.95°E" },
      { name: "date", label: "Date of Observation", type: "date" },
      { name: "file", label: "Upload Data File", type: "file" },
      { name: "notes", label: "Notes", type: "textarea", placeholder: "Conditions, anomalies, context..." },
    ],
  },
  {
    id: "issue",
    icon: AlertTriangle,
    title: "Report an Issue",
    description: "Flag incorrect data, visualization glitches, or technical bugs you've encountered on the platform.",
    fields: [
      { name: "issueType", label: "Issue Type", type: "select", options: ["Incorrect Data", "Visualization Problem", "Technical Bug", "Other"] },
      { name: "location", label: "Where did you see this?", type: "text", placeholder: "e.g. Data page, Ocean chart" },
      { name: "description", label: "Describe the Issue", type: "textarea", placeholder: "What went wrong?" },
    ],
  },
  {
    id: "feature",
    icon: Lightbulb,
    title: "Suggest a Feature",
    description: "Propose new visualization tools, variables, sensors, or analysis features you'd like to see added.",
    fields: [
      { name: "featureTitle", label: "Feature Title", type: "text", placeholder: "e.g. Depth-wise temperature animation" },
      { name: "category", label: "Category", type: "select", options: ["Visualization", "New Variable", "Sensor Support", "Analysis Tool", "Other"] },
      { name: "description", label: "Describe your idea", type: "textarea", placeholder: "How would this help researchers?" },
    ],
  },
  {
    id: "collaborate",
    icon: Users,
    title: "Collaborate With Us",
    description: "Researchers, institutions, and developers can reach out to partner on data, research, or platform development.",
    fields: [
      { name: "name", label: "Your Name", type: "text", placeholder: "Full name" },
      { name: "email", label: "Email", type: "text", placeholder: "you@example.com" },
      { name: "organization", label: "Organization / Institution", type: "text", placeholder: "Optional" },
      { name: "message", label: "Message", type: "textarea", placeholder: "Tell us what you'd like to collaborate on..." },
    ],
  },
];

const ContributePage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [formData, setFormData] = useState({});
  const [submittedIds, setSubmittedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleChange = (optionId, fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [optionId]: { ...prev[optionId], [fieldName]: value },
    }));
  };

  const handleSubmit = (optionId) => {
    setSubmittedIds((prev) => [...prev, optionId]);
    setTimeout(() => {
      setSubmittedIds((prev) => prev.filter((id) => id !== optionId));
      setExpandedId(null);
      setFormData((prev) => ({ ...prev, [optionId]: {} }));
    }, 2200);
  };

  return (
    <div className="contribute_page">

      <div className="contribute_header">
        <span>Get Involved</span>
        <h2>Contribute to JalAayam</h2>
        <p>
          Help expand and improve ocean data access for researchers, institutions, and the public.
          Choose an option below to get started.
        </p>
      </div>

      <div className="contribute_grid">
        {CONTRIBUTE_OPTIONS.map((option) => {
          const Icon = option.icon;
          const isOpen = expandedId === option.id;
          const isSubmitted = submittedIds.includes(option.id);

          return (
            <div key={option.id} className={`contribute_card ${isOpen ? "open" : ""}`}>

              <div className="contribute_card_head" onClick={() => toggleExpand(option.id)}>
                <div className="contribute_card_icon">
                  <Icon size={20} />
                </div>

                <div className="contribute_card_text">
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </div>

                <ChevronDown size={18} className={`contribute_chevron ${isOpen ? "rotated" : ""}`} />
              </div>

              {isOpen && (
                <div className="contribute_form" onClick={(e) => e.stopPropagation()}>

                  {isSubmitted ? (
                    <div className="contribute_success">
                      <CheckCircle2 size={16} />
                      Submitted successfully (mock — backend not connected yet).
                    </div>
                  ) : (
                    <>
                      {option.fields.map((field) => (
                        <div key={field.name} className="contribute_field">
                          <label>{field.label}</label>

                          {field.type === "textarea" ? (
                            <textarea
                              rows={3}
                              placeholder={field.placeholder}
                              value={formData[option.id]?.[field.name] || ""}
                              onChange={(e) => handleChange(option.id, field.name, e.target.value)}
                            />
                          ) : field.type === "select" ? (
                            <select
                              value={formData[option.id]?.[field.name] || ""}
                              onChange={(e) => handleChange(option.id, field.name, e.target.value)}
                            >
                              <option value="" disabled>Select an option</option>
                              {field.options.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          ) : field.type === "file" ? (
                            <input
                              type="file"
                              onChange={(e) => handleChange(option.id, field.name, e.target.files?.[0]?.name || "")}
                            />
                          ) : (
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              value={formData[option.id]?.[field.name] || ""}
                              onChange={(e) => handleChange(option.id, field.name, e.target.value)}
                            />
                          )}
                        </div>
                      ))}

                      <button
                        className="contribute_submitbtn"
                        onClick={() => handleSubmit(option.id)}
                      >
                        Submit
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContributePage;