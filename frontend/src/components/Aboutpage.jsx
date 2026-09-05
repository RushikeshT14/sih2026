import React from "react";
import "./AboutPage.css";
import {
  Waves, Target, Eye, Users, Layers, Database,
  Globe2, GraduationCap, Award, Rocket
} from "lucide-react";

const MISSION_POINTS = [
  {
    icon: Layers,
    title: "Unified Ocean Visualization",
    description: "One interactive platform that brings together numerical ocean model outputs and real-world instrument observations, instead of forcing users to switch between disconnected tools.",
  },
  {
    icon: Database,
    title: "Open Data, Open Access",
    description: "Support for NetCDF, CSV/ASCII, Argo, Glider, and CTD formats — with room to plug in future sensors and model variables as ocean science evolves.",
  },
  {
    icon: Globe2,
    title: "Built for the Web",
    description: "No desktop software, no installations — just a browser-native platform that works wherever researchers, students, or the public need it.",
  },
  {
    icon: GraduationCap,
    title: "Science for Everyone",
    description: "Complex 3D ocean data made intuitive enough for students, educators, and the general public — not just specialists.",
  },
];

const AboutPage = () => {
  return (
    <div className="about_page">

      {/* Header */}
      <div className="about_header">
        <span>Who We Are</span>
        <h2>About JalAayam</h2>
        <p>
          JalAayam is a web-based ocean data visualization platform built to make India's
          oceanographic data — model outputs, buoy readings, Argo floats, and glider profiles —
          easy to explore, understand, and act on. We're building this as our submission for
          <strong> Smart India Hackathon 2026</strong>, under Problem Statement
          <strong> SIH26067</strong>, floated by the Ministry of Earth Sciences through INCOIS.
        </p>
      </div>

      {/* Mission */}
      <div className="about_section">
        <div className="about_section_head">
          <Target size={20} />
          <h3>Our Mission</h3>
        </div>
        <p>
          Ocean data in India is rich but scattered — locked away in NetCDF files, ASCII dumps,
          and instrument logs that only a handful of specialists know how to work with. We want
          to change that by giving researchers, students, and decision-makers a single place to
          upload, visualize, and understand ocean data — in 3D, in the browser, without needing
          specialized desktop software.
        </p>
      </div>

      {/* Vision */}
      <div className="about_section">
        <div className="about_section_head">
          <Eye size={20} />
          <h3>Our Vision</h3>
        </div>
        <p>
          We see JalAayam growing beyond a hackathon project into a genuinely useful tool for
          India's ocean science community — supporting hazard assessment, fishery advisories,
          climate monitoring, and public science outreach, the same way 3D visualization
          transformed how people understand weather forecasts.
        </p>
      </div>

      {/* What we're building */}
      <div className="about_section">
        <div className="about_section_head">
          <Rocket size={20} />
          <h3>What We're Building</h3>
        </div>

        <div className="about_features_grid">
          {MISSION_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="about_feature_card">
                <div className="about_feature_icon">
                  <Icon size={18} />
                </div>
                <h4>{point.title}</h4>
                <p>{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Origin / SIH context - kept brief */}
      <div className="about_section">
        <div className="about_section_head">
          <Award size={20} />
          <h3>Where This Started</h3>
        </div>
        <p>
          JalAayam began as our response to <strong>SIH26067</strong> — a Smart India Hackathon
          2026 problem statement from the Ministry of Earth Sciences (via INCOIS), calling for a
          web-based 3D platform to visualize ocean model data alongside real instrument readings.
          It's the reason this project exists, but our goal is to build something that outlives
          the hackathon itself.
        </p>
      </div>

      {/* Team placeholder */}
      <div className="about_section">
        <div className="about_section_head">
          <Users size={20} />
          <h3>The Team</h3>
        </div>
        <p>
          We're a small team of students building JalAayam end-to-end — from data pipelines to
          the 3D visualization layer you see in the browser.
        </p>
      </div>

    </div>
  );
};

export default AboutPage;