import React, { useState } from "react";
import { Search, ChevronDown, ArrowRight, Link } from "lucide-react";
import "./resource.css";

const resources = [
  {
    id: 1,
    title: "Understanding Ocean Temperature and Climate",
    description:
      "Learn how ocean temperature changes affect marine ecosystems, weather patterns, and global climate conditions.",
    type: "ARTICLE",
    date: "SEP. 04, 2026",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 2,
    title: "Exploring Ocean Salinity and Water Properties",
    description:
      "Discover how salinity, density, conductivity, and temperature interact to influence ocean circulation.",
    type: "DATA IN ACTION",
    date: "AUG. 28, 2026",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 3,
    title: "How Ocean Currents Shape Our Planet",
    description:
      "Explore the movement of ocean currents and understand their influence on climate, marine life, and coastal regions.",
    type: "WEBINAR",
    date: "AUG. 20, 2026",
    image:
      "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 4,
    title: "Satellite Monitoring of Sea Surface Temperature",
    description:
      "Understand how satellite observations are used to monitor sea surface temperature across large ocean regions.",
    type: "DATA IN ACTION",
    date: "AUG. 12, 2026",
    image:
      "https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 5,
    title: "Ocean Waves, Wind and Weather",
    description:
      "Learn how wind speed, wind direction, wave height and wave period are connected in ocean environments.",
    type: "ARTICLE",
    date: "AUG. 05, 2026",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 6,
    title: "Introduction to Ocean Observation Data",
    description:
      "A beginner-friendly introduction to ocean observation systems, scientific measurements and marine datasets.",
    type: "TUTORIAL",
    date: "JUL. 28, 2026",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
];

const Resources = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "ALL" || resource.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="resources">
      {/* Header */}

      <div className="resources_header">
        <h1>Ocean Learning Resources</h1>

        <button className="view_all">
          View All Learning Resources
          <span>
            <ArrowRight size={18} />
          </span>
        </button>
      </div>

      {/* Filters */}

      <div className="resources_tools">
        <div className="filter_section">
          {/* <p>FILTERS</p> */}

          <div className="filter_dropdown">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="ALL">ALL TYPES</option>
              <option value="ARTICLE">ARTICLE</option>
              <option value="DATA IN ACTION">DATA IN ACTION</option>
              <option value="WEBINAR">WEBINAR</option>
              <option value="TUTORIAL">TUTORIAL</option>
            </select>
            <ChevronDown size={17} />
          </div>
        </div>

        {/* Search */}

        <div className="resource_search">
          <Search size={22} />

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Cards */}

      <div className="resources_grid">
        {filteredResources.map((resource) => (
          <div className="resource_card" key={resource.id}>
            {/* Image */}

            <div className="resource_image">
              <img src={resource.image} alt={resource.title} />
            </div>

            {/* Content */}

            <div className="resource_content">
              <h2>{resource.title}</h2>

              <p>{resource.description}</p>

              {/* Bottom information */}

              <div className="resource_meta">
                <div className="resource_type">
                  <span className="type_icon">◉</span>

                  <span>{resource.type}</span>
                </div>

                <span className="resource_date">{resource.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}

      {filteredResources.length === 0 && (
        <div className="no_results">No learning resources found.</div>
      )}
    </section>
  );
};

export default Resources;
