"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";
import { FaGithub } from "react-icons/fa";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs font-light text-cyan-400 tracking-widest">
      {time.toLocaleTimeString()}
    </div>
  );
}

export default function Widgets() {
  const [weather, setWeather] = useState<{
    temp?: number;
    condition?: string;
  }>();
  const [github, setGithub] = useState<{
    contributions?: number;
    repos?: number;
  }>();
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(
    null
  );

  // ✅ Geolocation (runs once)
  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lon } = pos.coords;
        setCoords({ lat, lon });
      },
      (err) => console.warn("Geolocation error:", err)
    );
  }, []);

  // ✅ Weather
  useEffect(() => {
    if (!coords) return;
    async function fetchWeather() {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current=temperature_2m,weathercode`
        );
        const data = await res.json();
        const temp = data.current?.temperature_2m ?? 0;
        const code = data.current?.weathercode ?? 0;
        const condition =
          code < 3
            ? "Clear"
            : code < 50
            ? "Cloudy"
            : code < 70
            ? "Rain"
            : "Snow";
        setWeather({ temp, condition });
      } catch {
        setWeather({ temp: 0, condition: "Error" });
      }
    }
    fetchWeather();
  }, [coords]);

  // ✅ GitHub
  useEffect(() => {
    async function fetchGitHub() {
      try {
        const res = await fetch("https://api.github.com/users/Christophers27");
        const data = await res.json();
        setGithub({
          repos: data.public_repos,
          contributions: 812, // Automate this later
        });
      } catch {
        setGithub({ repos: 0, contributions: 0 });
      }
    }
    fetchGitHub();
  }, []);

  // ✅ Weather icon
  const WeatherIcon =
    weather?.condition === "Clear"
      ? WiDaySunny
      : weather?.condition === "Cloudy"
      ? WiCloud
      : weather?.condition === "Rain"
      ? WiRain
      : WiSnow;

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
      className="bg-white/10 p-4 rounded-md border border-cyan-400/20 shadow-[0_0_8px_rgba(34,211,238,0.1)] flex flex-col gap-2 text-cyan-200"
    >
      <h3 className="text-cyan-300 font-bold text-sm tracking-widest">
        WIDGETS
      </h3>

      {/* CLOCK */}
      <div className="flex items-center justify-end">
        <Clock />
      </div>

      {/* WEATHER */}
      {weather && (
        <div className="flex items-center justify-between text-xs font-light text-cyan-400 tracking-widest">
          <div className="flex items-center gap-2">
            <WeatherIcon size={24} className="text-cyan-400" />
            <span>{weather.condition}</span>
          </div>
          <span>{weather.temp}°C</span>
        </div>
      )}

      {/* GITHUB */}
      {github && (
        <div className="flex flex-col items-start justify-between text-xs font-light text-cyan-400 tracking-widest">
          <div className="flex items-center gap-2">
            <FaGithub size={16} className="text-cyan-400" />
            <span>GitHub</span>
          </div>
          <div className="flex flex-col ml-auto text-right text-xs leading-tight">
            <span>{github.repos} repos</span>
            <span>{github.contributions} contributions</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
