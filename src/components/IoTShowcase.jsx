import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { FiThermometer, FiDroplet, FiSun, FiMoon, FiWifi } from 'react-icons/fi';

const genData = () => Array.from({ length: 8 }, (_, i) => ({
    time: `${i * 3}:00`,
    temperature: Math.floor(Math.random() * 10) + 22,
    humidity: Math.floor(Math.random() * 20) + 50,
}));

const IoTShowcase = () => {
    const [data, setData] = useState(genData());
    const [light, setLight] = useState(true);
    const [temp, setTemp] = useState(26);
    const [hum, setHum] = useState(65);
    const [live, setLive] = useState(true);

    useEffect(() => {
        if (!live) return;
        const iv = setInterval(() => {
            setData((d) => {
                const nd = [...d.slice(1)];
                const lt = parseInt(d[d.length - 1].time);
                nd.push({ time: `${(lt + 3) % 24}:00`, temperature: Math.floor(Math.random() * 10) + 22, humidity: Math.floor(Math.random() * 20) + 50 });
                return nd;
            });
            setTemp(Math.floor(Math.random() * 5) + 24);
            setHum(Math.floor(Math.random() * 10) + 60);
        }, 3000);
        return () => clearInterval(iv);
    }, [live]);

    const Tip = ({ active, payload, label }) => {
        if (!active || !payload?.length) return null;
        return (
            <div className="glass-subtle rounded-lg p-2.5">
                <p className="text-[10px] mb-1" style={{ color: 'rgba(226,224,240,0.4)' }}>{label}</p>
                {payload.map((e, i) => (
                    <p key={i} className="text-xs font-medium" style={{ color: e.name === 'Temperature' ? '#f87171' : '#22d3ee' }}>
                        {e.name}: {e.value}{e.name === 'Temperature' ? '°C' : '%'}
                    </p>
                ))}
            </div>
        );
    };

    return (
        <section id="iot" className="section-deep mesh-iot py-24 md:py-36 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="text-xs tracking-[0.4em] uppercase mb-4 font-medium" style={{ color: 'rgba(129,140,248,0.5)' }}
                >IoT Showcase</motion.p>

                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold font-outfit mb-10" style={{ color: '#f0eef8' }}
                >Smart Home <span className="gradient-text">Dashboard</span></motion.h2>

                {/* Dashboard */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="glass-panel rounded-2xl p-5 md:p-8"
                >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 relative z-10">
                        <div className="flex items-center gap-2.5">
                            <FiWifi size={14} style={{ color: live ? '#4ade80' : 'rgba(226,224,240,0.3)' }} />
                            <span className="text-xs font-medium" style={{ color: live ? 'rgba(74,222,128,0.7)' : 'rgba(226,224,240,0.3)' }}>
                                {live ? 'Live' : 'Paused'}
                            </span>
                            {live && (
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#4ade80' }} />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: '#4ade80' }} />
                                </span>
                            )}
                        </div>
                        <button onClick={() => setLive(!live)}
                            className="px-3.5 py-1.5 rounded-full text-xs font-medium cursor-hover transition-all"
                            style={{
                                background: live ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255,255,255,0.03)',
                                color: live ? '#fff' : 'rgba(226,224,240,0.4)',
                                border: live ? 'none' : '1px solid rgba(255,255,255,0.06)',
                            }}
                        >{live ? 'Pause' : 'Resume'}</button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6 relative z-10">
                        <div className="glass-subtle rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <FiThermometer size={14} style={{ color: '#f87171' }} />
                                <span className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(226,224,240,0.3)' }}>Temp</span>
                            </div>
                            <motion.p key={temp} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold font-outfit" style={{ color: '#f0eef8' }}>{temp}°C</motion.p>
                        </div>
                        <div className="glass-subtle rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <FiDroplet size={14} style={{ color: '#22d3ee' }} />
                                <span className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(226,224,240,0.3)' }}>Humidity</span>
                            </div>
                            <motion.p key={hum} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold font-outfit" style={{ color: '#f0eef8' }}>{hum}%</motion.p>
                        </div>
                        <div className="glass-subtle rounded-xl p-4 col-span-2 lg:col-span-2">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        {light ? <FiSun size={14} style={{ color: '#fbbf24' }} /> : <FiMoon size={14} style={{ color: 'rgba(226,224,240,0.3)' }} />}
                                        <span className="text-[10px] uppercase tracking-wider" style={{ color: 'rgba(226,224,240,0.3)' }}>Light</span>
                                    </div>
                                    <p className="text-lg font-bold" style={{ color: light ? '#fbbf24' : 'rgba(226,224,240,0.3)' }}>{light ? 'On' : 'Off'}</p>
                                </div>
                                <button onClick={() => setLight(!light)} className="relative w-12 h-6 rounded-full cursor-hover transition-all"
                                    style={{ background: light ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255,255,255,0.06)' }}
                                >
                                    <motion.div className="absolute top-1 w-4 h-4 rounded-full shadow" style={{ backgroundColor: '#fff' }}
                                        animate={{ left: light ? '1.625rem' : '0.25rem' }}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Charts */}
                    <div className="grid lg:grid-cols-2 gap-4 relative z-10">
                        <div className="glass-subtle rounded-xl p-4">
                            <p className="text-xs font-medium mb-3 flex items-center gap-1.5" style={{ color: 'rgba(226,224,240,0.5)' }}>
                                <FiThermometer size={12} style={{ color: '#f87171' }} /> Temperature
                            </p>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                                        <XAxis dataKey="time" stroke="rgba(226,224,240,0.2)" fontSize={10} />
                                        <YAxis stroke="rgba(226,224,240,0.2)" fontSize={10} domain={[18, 35]} />
                                        <Tooltip content={<Tip />} />
                                        <Line type="monotone" dataKey="temperature" name="Temperature" stroke="#f87171" strokeWidth={1.5} dot={{ fill: '#f87171', r: 2 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="glass-subtle rounded-xl p-4">
                            <p className="text-xs font-medium mb-3 flex items-center gap-1.5" style={{ color: 'rgba(226,224,240,0.5)' }}>
                                <FiDroplet size={12} style={{ color: '#22d3ee' }} /> Humidity
                            </p>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                                        <XAxis dataKey="time" stroke="rgba(226,224,240,0.2)" fontSize={10} />
                                        <YAxis stroke="rgba(226,224,240,0.2)" fontSize={10} domain={[40, 80]} />
                                        <Tooltip content={<Tip />} />
                                        <defs>
                                            <linearGradient id="humGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.15} />
                                                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <Area type="monotone" dataKey="humidity" name="Humidity" stroke="#22d3ee" strokeWidth={1.5} fill="url(#humGrad)" dot={{ fill: '#22d3ee', r: 2 }} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IoTShowcase;
