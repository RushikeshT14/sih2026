import React from "react";
import "./AboutPage.css";
import {
  Waves, Layers, Database, Globe2, Clock, SlidersHorizontal,
  Thermometer, Droplets, ArrowUpDown, Compass, Leaf, Gauge,
  Zap, Activity, Wind, MapPin, CloudRain, Navigation,
  Microscope, Radar, Users, GraduationCap, ShieldAlert,
  LifeBuoy, Ship, Fish, Globe, BookOpen, Megaphone,
  ArrowRight, Box, Server, Cable, Eye, CheckCircle2, Circle
} from "lucide-react";

/* ---------------------------------------------
   Reusable: FeatureCard
--------------------------------------------- */
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="about_card fade_in">
    <div className="about_card_icon">
      <Icon size={20} />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

/* ---------------------------------------------
   Reusable: DataSourceCard
--------------------------------------------- */
const DataSourceCard = ({ icon: Icon, title, description, status }) => (
  <div className="about_card fade_in">
    <div className="about_card_icon">
      <Icon size={20} />
    </div>
    <div className="about_card_title_row">
      <h4>{title}</h4>
      {status === "planned" && <span className="about_badge planned">Planned</span>}
      {status === "active" && <span className="about_badge active">Active</span>}
    </div>
    <p>{description}</p>
  </div>
);

/* ---------------------------------------------
   Reusable: StepCard
--------------------------------------------- */
const StepCard = ({ number, icon: Icon, title, description }) => (
  <div className="about_step fade_in">
    <div className="about_step_number">{number}</div>
    <div className="about_step_icon">
      <Icon size={18} />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

/* ---------------------------------------------
   Reusable: ApplicationCard
--------------------------------------------- */
const ApplicationCard = ({ icon: Icon, title, description }) => (
  <div className="about_app_card fade_in">
    <Icon size={22} />
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

/* ---------------------------------------------
   Data definitions
--------------------------------------------- */
const WHY_CARDS = [
  {
    icon: Layers,
    title: "Complex Data",
    description: "Ocean datasets span latitude, longitude, depth and time simultaneously — traditional tools struggle to represent all four dimensions at once.",
  },
  {
    icon: Database,
    title: "Disconnected Sources",
    description: "Model outputs and observational instrument data are usually analyzed in separate tools, making it hard to cross-check one against the other.",
  },
  {
    icon: Eye,
    title: "Difficult 2D Interpretation",
    description: "Depth-dependent phenomena like thermoclines or current shear are hard to read from flat, plan-view charts alone.",
  },
  {
    icon: Zap,
    title: "Need for Rapid Analysis",
    description: "Forecasting and hazard response depend on quickly understanding ocean conditions — not toggling between disconnected software.",
  },
];

const WHAT_WE_DO = [
  { icon: Box, title: "3D Ocean Visualization", description: "Interactive rendering of ocean conditions across geographic position and depth." },
  { icon: Activity, title: "Model Data Visualization", description: "Display numerical ocean model variables such as temperature, salinity and currents." },
  { icon: Radar, title: "In-Situ Observations", description: "Argo floats, Gliders, CTD and BGC readings shown as interactive geospatial points." },
  { icon: ArrowUpDown, title: "Depth Exploration", description: "Move through different ocean depth levels to see how conditions change with depth." },
  { icon: Clock, title: "Time-Based Exploration", description: "Step through available time steps to observe how ocean conditions evolve." },
  { icon: SlidersHorizontal, title: "Interactive Variables", description: "Switch between variables and customize visualization parameters on the fly." },
];

const DATA_SOURCES = [
  { icon: Server, title: "Numerical Ocean Models", description: "Temperature, salinity, currents, chlorophyll and other modeled ocean variables from NetCDF outputs.", status: "planned" },
  { icon: Waves, title: "Argo Floats", description: "Temperature, salinity, depth, position and time-based profile observations from autonomous floats.", status: "planned" },
  { icon: Navigation, title: "Gliders", description: "Underwater observations collected across varying locations and depths.", status: "planned" },
  { icon: Microscope, title: "CTD / BGC", description: "Additional physical and biogeochemical ocean observations from CTD and BGC instruments.", status: "planned" },
];

const STEPS = [
  { icon: Database, title: "Data Ingestion", description: "Ocean datasets are collected from supported scientific data sources." },
  { icon: Server, title: "Data Processing", description: "The backend processes and prepares data for visualization." },
  { icon: Cable, title: "API Layer", description: "Processed data is delivered to the browser through REST APIs." },
  { icon: Box, title: "3D Visualization", description: "The platform converts data into interactive 3D visualizations." },
  { icon: Eye, title: "User Exploration", description: "Users explore variables, locations, depths and time." },
  { icon: Activity, title: "Analysis", description: "Users compare model outputs against real observational measurements." },
];

const OCEAN_PARAMETERS = [
  { icon: Thermometer, name: "Temperature", description: "Water temperature at a given depth", unit: "°C" },
  { icon: Droplets, name: "Salinity", description: "Salt concentration in seawater", unit: "PSU" },
  { icon: ArrowUpDown, name: "Depth", description: "Vertical distance below the surface", unit: "m" },
  { icon: Compass, name: "Current Speed", description: "Rate of water movement", unit: "m/s" },
  { icon: Navigation, name: "Current Direction", description: "Direction of water flow", unit: "°" },
  { icon: Leaf, name: "Chlorophyll", description: "Phytoplankton concentration indicator", unit: "mg/m³" },
  { icon: Gauge, name: "Pressure", description: "Water pressure at depth", unit: "dbar" },
  { icon: Zap, name: "Conductivity", description: "Electrical conductivity of seawater", unit: "S/m" },
  { icon: Thermometer, name: "Sea Surface Temperature", description: "Temperature at the ocean surface", unit: "°C" },
  { icon: Activity, name: "Dissolved Oxygen", description: "Oxygen available in seawater", unit: "µmol/kg" },
  { icon: Droplets, name: "pH", description: "Acidity or alkalinity of seawater", unit: "pH scale" },
  { icon: Waves, name: "Wave Height", description: "Vertical wave crest-to-trough distance", unit: "m" },
  { icon: Clock, name: "Wave Period", description: "Time between successive wave crests", unit: "s" },
  { icon: Navigation, name: "Wave Direction", description: "Direction waves are traveling toward", unit: "°" },
  { icon: Wind, name: "Wind Speed", description: "Speed of surface wind", unit: "m/s" },
  { icon: Wind, name: "Wind Direction", description: "Direction wind is blowing from", unit: "°" },
  { icon: Thermometer, name: "Air Temperature", description: "Temperature of air above the surface", unit: "°C" },
  { icon: Gauge, name: "Air Pressure", description: "Atmospheric pressure at sea level", unit: "hPa" },
  { icon: CloudRain, name: "Humidity", description: "Moisture content in the air", unit: "%" },
  { icon: MapPin, name: "Latitude", description: "North-south geographic position", unit: "°N/S" },
  { icon: MapPin, name: "Longitude", description: "East-west geographic position", unit: "°E/W" },
];

const WHO_USES = [
  { icon: Microscope, title: "Oceanographers", description: "For analyzing ocean model outputs and observations." },
  { icon: CloudRain, title: "Forecasters", description: "For rapid understanding of ocean conditions." },
  { icon: BookOpen, title: "Researchers", description: "For comparing datasets and studying ocean phenomena." },
  { icon: GraduationCap, title: "Students", description: "For learning ocean science through interactive visualization." },
  { icon: Users, title: "Decision Makers", description: "For understanding marine conditions and supporting informed decisions." },
];

const APPLICATIONS = [
  { icon: ShieldAlert, title: "Disaster Management", description: "Supporting hazard assessment and early warning workflows." },
  { icon: LifeBuoy, title: "Search and Rescue", description: "Helping responders understand ocean conditions during operations." },
  { icon: Ship, title: "Marine Forecasting", description: "Assisting forecasters correlate model predictions with real data." },
  { icon: Fish, title: "Fisheries", description: "Informing fishing advisories based on ocean conditions." },
  { icon: Globe, title: "Climate Monitoring", description: "Tracking long-term ocean variable trends." },
  { icon: Microscope, title: "Ocean Research", description: "Supporting scientific study of ocean phenomena." },
  { icon: GraduationCap, title: "Education", description: "Teaching ocean science through interactive exploration." },
  { icon: Megaphone, title: "Public Science Communication", description: "Making ocean data accessible to the general public." },
];

const ROADMAP = [
  {
    label: "Current",
    items: ["3D Earth visualization", "Ocean data dashboard", "Variable visualization", "Resource section"],
    status: "active",
  },
  {
    label: "Next",
    items: ["NetCDF integration", "Argo float integration", "Glider integration", "Depth profile charts"],
    status: "planned",
  },
  {
    label: "Future",
    items: ["Real-time observations", "Advanced volumetric rendering", "Model vs observation comparison", "AI/ML derived ocean products"],
    status: "planned",
  },
];

/* ---------------------------------------------
   Main Component
--------------------------------------------- */
const About = () => {
  return (
    <div className="about_wrapper">

      {/* 1. HERO */}
      <section className="about_hero fade_in">
        <h1>Understanding the Ocean Through Data</h1>
        <p className="about_hero_sub">
          An interactive 3D platform for exploring ocean model outputs and real-world observations.
        </p>
        <p className="about_hero_text">
          Our platform brings complex oceanographic datasets into an interactive browser-based
          environment, allowing users to explore temperature, salinity, currents, depth and other
          ocean variables in three dimensions.
        </p>
        <div className="about_hero_buttons">
          <button className="about_btn primary">Explore 3D Ocean</button>
          <button className="about_btn secondary">Explore Data</button>
        </div>
      </section>

      {/* 2. WHY THIS PLATFORM */}
      <section className="about_section">
        <h2 className="about_section_title">Why Ocean Data Visualization Matters</h2>
        <p className="about_section_intro">
          Ocean datasets contain information across latitude, longitude, depth and time.
          Traditional tools can make these datasets difficult to explore and compare. Our platform
          provides a unified environment where numerical ocean model outputs and observations can
          be viewed together.
        </p>
        <div className="about_grid cols_4">
          {WHY_CARDS.map((card, i) => (
            <FeatureCard key={i} {...card} />
          ))}
        </div>
      </section>

      {/* 3. WHAT OUR PLATFORM DOES */}
      <section className="about_section">
        <h2 className="about_section_title">What Our Platform Does</h2>
        <div className="about_grid cols_3">
          {WHAT_WE_DO.map((card, i) => (
            <FeatureCard key={i} {...card} />
          ))}
        </div>
      </section>

      {/* 4. DATA SOURCES */}
      <section className="about_section">
        <h2 className="about_section_title">Bringing Multiple Ocean Data Sources Together</h2>

        <div className="about_flow_diagram fade_in">
          <div className="about_flow_node">NetCDF Ocean Models</div>
          <ArrowRight className="about_flow_arrow down" size={18} />
          <div className="about_flow_node">Data Processing</div>
          <ArrowRight className="about_flow_arrow down" size={18} />
          <div className="about_flow_node">REST API</div>
          <ArrowRight className="about_flow_arrow down" size={18} />
          <div className="about_flow_node highlight">3D Visualization</div>
          <ArrowRight className="about_flow_arrow up" size={18} />
          <div className="about_flow_node">Argo / Glider / CTD / BGC Observations</div>
        </div>

        <div className="about_grid cols_4">
          <DataSourceCard
            icon={Server}
            title="Numerical Ocean Models"
            description="Temperature, salinity, currents, chlorophyll and other modeled ocean variables."
            status="planned"
          />
          <DataSourceCard
            icon={Waves}
            title="Argo Floats"
            description="Temperature, salinity, depth, position and time-based profile observations."
            status="planned"
          />
          <DataSourceCard
            icon={Navigation}
            title="Gliders"
            description="Underwater observations collected across different locations and depths."
            status="planned"
          />
          <DataSourceCard
            icon={Microscope}
            title="CTD / BGC"
            description="Additional physical and biogeochemical ocean observations."
            status="planned"
          />
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="about_section">
        <h2 className="about_section_title">How It Works</h2>
        <div className="about_steps_row">
          {STEPS.map((step, i) => (
            <StepCard key={i} number={String(i + 1).padStart(2, "0")} {...step} />
          ))}
        </div>
      </section>

      {/* 6. KEY OCEAN PARAMETERS */}
      <section className="about_section">
        <h2 className="about_section_title">Key Ocean Parameters</h2>
        <p className="about_section_intro">
          These are the variables our platform is designed to visualize as data integration
          progresses.
        </p>
        <div className="about_grid cols_5 params_grid">
          {OCEAN_PARAMETERS.map((param, i) => {
            const Icon = param.icon;
            return (
              <div key={i} className="about_param_card fade_in">
                <Icon size={16} />
                <h5>{param.name}</h5>
                <p>{param.description}</p>
                <span className="about_param_unit">{param.unit}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. MODEL VS OBSERVATION */}
      <section className="about_section">
        <h2 className="about_section_title">Model vs Observation</h2>
        <div className="about_compare_grid">
          <div className="about_compare_card fade_in">
            <h3>Numerical Model</h3>
            <ul>
              <li>Continuous spatial coverage</li>
              <li>Multiple depth levels</li>
              <li>Multiple time steps</li>
              <li>Predicted / simulated ocean conditions</li>
            </ul>
          </div>
          <div className="about_compare_card fade_in">
            <h3>In-Situ Observation</h3>
            <ul>
              <li>Real measurements</li>
              <li>Specific geographic locations</li>
              <li>Depth profiles</li>
              <li>Time-stamped observations</li>
            </ul>
          </div>
        </div>
        <div className="about_compare_result fade_in">
          <span>Model</span>
          <span className="plus">+</span>
          <span>Observation</span>
          <span className="equals">=</span>
          <span className="highlight">Better Understanding</span>
        </div>
        <p className="about_section_intro center">
          Comparing modeled conditions with real observations helps users understand differences
          between predicted and observed ocean states.
        </p>
      </section>

      {/* 8. INTERACTIVE 3D EXPERIENCE */}
      <section className="about_section">
        <h2 className="about_section_title">Interactive 3D Experience</h2>
        <div className="about_3d_preview fade_in">
          <Box size={36} />
          <span>3D Ocean Visualization</span>
        </div>
        <div className="about_3d_features">
          {["Rotate", "Zoom", "Select locations", "Explore depth", "Change variables", "Inspect observations"].map((f, i) => (
            <span key={i} className="about_pill">{f}</span>
          ))}
        </div>
      </section>

      {/* 9. WHO CAN USE IT */}
      <section className="about_section">
        <h2 className="about_section_title">Who Can Use It?</h2>
        <div className="about_grid cols_5">
          {WHO_USES.map((card, i) => (
            <FeatureCard key={i} {...card} />
          ))}
        </div>
      </section>

      {/* 10. REAL-WORLD APPLICATIONS */}
      <section className="about_section">
        <h2 className="about_section_title">Real-World Applications</h2>
        <div className="about_grid cols_4">
          {APPLICATIONS.map((app, i) => (
            <ApplicationCard key={i} {...app} />
          ))}
        </div>
      </section>

      {/* 11. DESIGN PHILOSOPHY */}
      <section className="about_section about_philosophy fade_in">
        <h2 className="about_section_title">From Complex Data to Intuitive Understanding</h2>
        <p className="about_philosophy_statement">
          Ocean data should not only be available.<br />It should be understandable.
        </p>
        <p className="about_section_intro center">
          Our goal is to transform complex scientific datasets into intuitive, visual experiences
          that make ocean science accessible to everyone who needs it.
        </p>
      </section>

      {/* 12. FUTURE ROADMAP */}
      <section className="about_section">
        <h2 className="about_section_title">Future Roadmap</h2>
        <div className="about_roadmap">
          {ROADMAP.map((stage, i) => (
            <div key={i} className="about_roadmap_col fade_in">
              <h4>{stage.label}</h4>
              <ul>
                {stage.items.map((item, j) => (
                  <li key={j}>
                    {stage.status === "active" ? (
                      <CheckCircle2 size={14} className="roadmap_icon active" />
                    ) : (
                      <Circle size={14} className="roadmap_icon planned" />
                    )}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="about_cta fade_in">
        <h2>Explore the Ocean in a New Dimension</h2>
        <p>
          Turn complex oceanographic data into an interactive experience. Explore the ocean,
          examine observations and understand what is happening beneath the surface.
        </p>
        <div className="about_hero_buttons">
          <button className="about_btn primary">Explore 3D Ocean</button>
          <button className="about_btn secondary">View Ocean Data</button>
        </div>
      </section>

    </div>
  );
};

export default About;