
import React, { useState } from "react";
// import "./Data.css";

const oceanData = {
    Pacific: {
        region: "Pacific Ocean",

        // Ocean data
        temperature: "24.6 °C",
        salinity: "35.1 PSU",
        depth: "4,280 m",
        waterLevel: "0.8 m",
        pressure: "428 bar",
        conductivity: "4.8 S/m",
        oxygen: "6.8 mg/L",
        currentSpeed: "1.4 m/s",
        currentDirection: "NE",
        chlorophyll: "0.42 mg/m³",
        ph: "8.1",
        density: "1025 kg/m³",

        // Sea surface temperature
        sst3m: "24.4 °C",
        sstSkin: "24.8 °C",

        // Waves
        waveHeight: "1.8 m",
        wavePeriod: "8.4 s",
        waveDirection: "NE",

        // Atmosphere
        airTemperature: "28.3 °C",
        airPressure: "1012 hPa",
        humidity: "76%",

        // Wind
        windSpeed: "6.2 m/s",
        windDirection: "E",

        // Location
        latitude: "10.2° N",
        longitude: "150.4° W",

        observation: "04 Sep 2026, 10:30"
    },

    Atlantic: {
        region: "Atlantic Ocean",

        temperature: "22.8 °C",
        salinity: "35.4 PSU",
        depth: "3,646 m",
        waterLevel: "0.6 m",
        pressure: "365 bar",
        conductivity: "4.7 S/m",
        oxygen: "7.1 mg/L",
        currentSpeed: "1.1 m/s",
        currentDirection: "E",
        chlorophyll: "0.38 mg/m³",
        ph: "8.0",
        density: "1026 kg/m³",

        sst3m: "22.6 °C",
        sstSkin: "23.0 °C",

        waveHeight: "2.1 m",
        wavePeriod: "9.2 s",
        waveDirection: "E",

        airTemperature: "26.7 °C",
        airPressure: "1015 hPa",
        humidity: "72%",

        windSpeed: "5.8 m/s",
        windDirection: "NE",

        latitude: "25.1° N",
        longitude: "40.2° W",

        observation: "04 Sep 2026, 10:30"
    },

    Indian: {
        region: "Indian Ocean",

        temperature: "26.3 °C",
        salinity: "34.8 PSU",
        depth: "3,741 m",
        waterLevel: "0.7 m",
        pressure: "374 bar",
        conductivity: "4.6 S/m",
        oxygen: "6.4 mg/L",
        currentSpeed: "1.2 m/s",
        currentDirection: "SW",
        chlorophyll: "0.51 mg/m³",
        ph: "8.1",
        density: "1024 kg/m³",

        sst3m: "26.1 °C",
        sstSkin: "26.6 °C",

        waveHeight: "1.6 m",
        wavePeriod: "7.8 s",
        waveDirection: "SW",

        airTemperature: "29.1 °C",
        airPressure: "1010 hPa",
        humidity: "79%",

        windSpeed: "7.1 m/s",
        windDirection: "SW",

        latitude: "12.5° S",
        longitude: "78.3° E",

        observation: "04 Sep 2026, 10:30"
    },

    Arctic: {
        region: "Arctic Ocean",

        temperature: "-1.2 °C",
        salinity: "32.0 PSU",
        depth: "1,205 m",
        waterLevel: "0.4 m",
        pressure: "120 bar",
        conductivity: "3.9 S/m",
        oxygen: "8.2 mg/L",
        currentSpeed: "0.5 m/s",
        currentDirection: "NW",
        chlorophyll: "0.29 mg/m³",
        ph: "8.0",
        density: "1027 kg/m³",

        sst3m: "-1.4 °C",
        sstSkin: "-1.1 °C",

        waveHeight: "0.9 m",
        wavePeriod: "6.2 s",
        waveDirection: "NW",

        airTemperature: "-2.8 °C",
        airPressure: "1008 hPa",
        humidity: "88%",

        windSpeed: "4.2 m/s",
        windDirection: "NW",

        latitude: "82.1° N",
        longitude: "30.5° E",

        observation: "04 Sep 2026, 10:30"
    }
};


const Data = () => {

    const [selectedOcean, setSelectedOcean] = useState("Pacific");

    const data = oceanData[selectedOcean];

    return (
        <div className="data" id="data">

            {/* Header */}

            <div className="data_header">

                <div>
                    <span>Ocean Monitoring</span>

                    <h2>{data.region}</h2>
                </div>

                <div className="data_selector">

                    <label>Select Ocean</label>

                    <select
                        value={selectedOcean}
                        onChange={(e) =>
                            setSelectedOcean(e.target.value)
                        }
                    >
                        <option value="Pacific">
                            Pacific Ocean
                        </option>

                        <option value="Atlantic">
                            Atlantic Ocean
                        </option>

                        <option value="Indian">
                            Indian Ocean
                        </option>

                        <option value="Arctic">
                            Arctic Ocean
                        </option>
                    </select>

                </div>

            </div>


            {/* Data Cards */}

            <div className="data_grid">

                {/* Ocean */}

                <DataBox
                    title="Temperature"
                    value={data.temperature}
                />

                <DataBox
                    title="Salinity"
                    value={data.salinity}
                />

                <DataBox
                    title="Depth"
                    value={data.depth}
                />

                <DataBox
                    title="Water Level"
                    value={data.waterLevel}
                />

                <DataBox
                    title="Conductivity"
                    value={data.conductivity}
                />

                <DataBox
                    title="Water Pressure"
                    value={data.pressure}
                />

                <DataBox
                    title="Dissolved Oxygen"
                    value={data.oxygen}
                />

                <DataBox
                    title="Water Density"
                    value={data.density}
                />


                {/* Current */}

                <DataBox
                    title="Current Speed"
                    value={data.currentSpeed}
                />

                <DataBox
                    title="Current Direction"
                    value={data.currentDirection}
                />

                <DataBox
                    title="pH Level"
                    value={data.ph}
                />

                <DataBox
                    title="Chlorophyll"
                    value={data.chlorophyll}
                />


                {/* SST */}

                <DataBox
                    title="SST — 3 Meter"
                    value={data.sst3m}
                />

                <DataBox
                    title="SST — Skin"
                    value={data.sstSkin}
                />


                {/* Waves */}

                <DataBox
                    title="Wave Height"
                    value={data.waveHeight}
                />

                <DataBox
                    title="Wave Period"
                    value={data.wavePeriod}
                />

                <DataBox
                    title="Wave Direction"
                    value={data.waveDirection}
                />


                {/* Atmosphere */}

                <DataBox
                    title="Air Temperature"
                    value={data.airTemperature}
                />

                <DataBox
                    title="Air Pressure"
                    value={data.airPressure}
                />

                <DataBox
                    title="Humidity"
                    value={data.humidity}
                />


                {/* Wind */}

                <DataBox
                    title="Wind Speed"
                    value={data.windSpeed}
                />

                <DataBox
                    title="Wind Direction"
                    value={data.windDirection}
                />


                {/* Location */}

                <DataBox
                    title="Latitude"
                    value={data.latitude}
                />

                <DataBox
                    title="Longitude"
                    value={data.longitude}
                />


                {/* Time */}

                {/* <DataBox
                    title="Last Observation"
                    value={data.observation}
                /> */}

            </div>

        </div>
    );
};


/* Reusable Data Box */

const DataBox = ({ title, value }) => {

    return (
        <div className="data_box">

            <span>{title}</span>

            <strong>{value}</strong>

        </div>
    );
};


export default Data;
