import React from "react";
import {
    // Github,
    // Linkedin,
    // Twitter,
    // Instagram,
    Mail,
    ArrowUpRight
} from "lucide-react";

import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            {/* =========================
                TOP FOOTER
            ========================= */}

            <div className="footer_top">

                {/* Brand */}

                <div className="footer_brand">

                    <h1><span className="ocean_name">Jal</span><span>Aayam</span></h1>

                    <p>
                        Explore, understand and visualize our oceans
                        through interactive data and 3D technology.
                    </p>

                    <div className="footer_status">

                        <span className="status_dot"></span>

                        <span>
                            Ocean Data Platform
                        </span>

                    </div>

                </div>


                {/* Explore */}

                <div className="footer_column">

                    <h3>EXPLORE</h3>

                    <a href="#">
                        3D Ocean
                        <ArrowUpRight size={14} />
                    </a>

                    <a href="#">
                        Ocean Data
                        <ArrowUpRight size={14} />
                    </a>

                    <a href="#">
                        Ocean Regions
                        <ArrowUpRight size={14} />
                    </a>

                    <a href="#">
                        Live Monitoring
                        <ArrowUpRight size={14} />
                    </a>

                </div>


                {/* Data */}

                <div className="footer_column">

                    <h3>OCEAN DATA</h3>

                    <a href="#">Temperature</a>

                    <a href="#">Salinity</a>

                    <a href="#">Ocean Currents</a>

                    <a href="#">Waves & Wind</a>

                    <a href="#">Sea Surface Temperature</a>

                </div>


                {/* Resources */}

                <div className="footer_column">

                    <h3>RESOURCES</h3>

                    <a href="#">Learning Resources</a>

                    <a href="#">Articles</a>

                    <a href="#">Tutorials</a>

                    <a href="#">Research</a>

                    <a href="#">Documentation</a>

                </div>

            </div>


            {/* =========================
                MIDDLE SECTION
            ========================= */}

            <div className="footer_middle">

                <div className="footer_middle_text">

                    <span>STAY CONNECTED</span>

                    <h2>
                        Discover what's happening
                        beneath the surface.
                    </h2>

                </div>


                {/* Newsletter */}

                <div className="newsletter">

                    <Mail size={20} />

                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                    <button>
                        Join                   
                    </button>

                </div>

            </div>


            {/* =========================
                BOTTOM FOOTER
            ========================= */}

            <div className="footer_bottom">

                <p>
                    © 2026 JalAyam. All rights reserved.
                </p>


                <div className="footer_social">

                    {/* <a href="#">
                        <Github size={18} />
                    </a> */}
{/* 
                    <a href="#">
                        <Linkedin size={18} />
                    </a>

                    <a href="#">
                        <Twitter size={18} />
                    </a>

                    <a href="#">
                        <Instagram size={18} />
                    </a> */}

                </div>


                <div className="footer_legal">

                    <a href="#">Privacy</a>

                    <a href="#">Terms</a>

                    <a href="#">Contact</a>

                </div>

            </div>

        </footer>
    );
};

export default Footer;