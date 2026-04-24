/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Info, ExternalLink, Settings, Download, Search, Globe, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [testUrl, setTestUrl] = useState('https://maybank2u-secure-login.net');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

const simulateScan = () => {
    setIsScanning(true);
    setScanResult(null);
    
    // Simulating AI processing or Grounding check
    setTimeout(() => {
      const isBlacklisted = testUrl.includes('maybank2u-secure.net');
      const isMalicious = isBlacklisted || testUrl.includes('lazada-gift') || testUrl.includes('secure-login');
      
      setScanResult({
        risk: isMalicious ? 'danger' : 'safe',
        confidence: isBlacklisted ? 100 : (isMalicious ? 98 : 95),
        isGrounded: isBlacklisted,
        reason: isBlacklisted 
          ? "RAG GROUNDING: Matched verified scam database (MCMC/PDRM)."
          : (isMalicious 
            ? "AI ANALYSIS: This domain impersonates a Malaysian banking portal. DNS records and SSL do not match official sources."
            : "AI ANALYSIS: Legitimate domain. No known phishing patterns or suspicious scripts detected."),
        action: isMalicious
          ? "CLOSE THIS PAGE IMMEDIATELY. This is a high-risk phishing site."
          : "Stay vigilant, but no threats were detected."
      });
      setIsScanning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-[#003893] text-white py-6 px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg">
              <ShieldAlert className="text-[#003893] w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">AntiScammer AI</h1>
              <p className="text-xs opacity-80 uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-[#CC0001] rounded-full"></span>
                Malaysian Threat Intelligence Agent
              </p>
            </div>
          </div>
          <nav className="flex gap-6">
            {['overview', 'demo', 'installation', 'scams-101'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize text-sm font-medium transition-colors hover:text-white/80 ${
                  activeTab === tab ? 'border-b-2 border-white pb-1' : 'opacity-70'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-8">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-5xl font-extrabold mb-6 leading-tight text-slate-800">
                   Real-time Protection <br /> Against <span className="text-[#CC0001]">Malaysian Scams</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  AntiScammer is a specialized Chrome Extension powered by Gemini 2.0 Flash. 
                  It detects phishing clones (Maybank2u, Shopee), APK fraud, and social engineering 
                  schemes specifically targeting Malaysian citizens.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveTab('installation')}
                    className="bg-[#003893] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl hover:bg-[#002b70] transition-all"
                  >
                    <Download className="w-5 h-5" /> Download Extension
                  </button>
                  <button 
                    onClick={() => setActiveTab('demo')}
                    className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-md hover:bg-slate-50 transition-all"
                  >
                    <Search className="w-5 h-5" /> Try Live Scan
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#003893]/5 rounded-3xl p-8 border-2 border-dashed border-[#003893]/20">
                  <img 
                    src="https://picsum.photos/seed/cybersecurity/800/600" 
                    alt="Cybersecurity Malaysian Context" 
                    className="rounded-2xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -top-6 -right-6 bg-red-600 text-white p-4 rounded-2xl shadow-xl animate-bounce">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'demo' && (activeTab === 'demo' && (
            <motion.div
              key="demo"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold mb-2">Simulate AI Analysis</h3>
                  <p className="text-slate-500 text-lg">Test how AntiScammer detects malicious patterns</p>
                </div>

                <div className="flex gap-2 p-2 bg-slate-100 rounded-2xl mb-8 border border-slate-200">
                  <div className="flex items-center px-4 text-slate-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    value={testUrl}
                    onChange={(e) => setTestUrl(e.target.value)}
                    className="flex-1 bg-transparent py-3 outline-none text-slate-700 font-medium"
                    placeholder="Enter website URL to test..."
                  />
                  <button 
                    onClick={simulateScan}
                    disabled={isScanning}
                    className="bg-[#003893] text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50"
                  >
                    {isScanning ? 'Analyzing...' : 'Scan Now'}
                  </button>
                </div>

                {scanResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-8 rounded-2xl border-l-8 ${
                      scanResult.risk === 'danger' ? 'bg-red-50 border-red-500' : 'bg-emerald-50 border-emerald-500'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        {scanResult.risk === 'danger' ? (
                          <AlertTriangle className="w-12 h-12 text-red-600" />
                        ) : (
                          <CheckCircle className="w-12 h-12 text-emerald-600" />
                        )}
                        <div>
                          <h4 className={`text-2xl font-black uppercase ${
                            scanResult.risk === 'danger' ? 'text-red-700' : 'text-emerald-700'
                          }`}>
                            {scanResult.risk} detected
                          </h4>
                          <p className="text-slate-500 font-bold">Confidence: {scanResult.confidence}%</p>
                        </div>
                      </div>
                      <div className="bg-white/50 px-4 py-2 rounded-lg text-xs font-bold text-slate-500 uppercase tracking-widest border border-black/5">
                        Scan ID: #{Math.floor(Math.random()*10000)}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-tighter mb-1 block">Analysis Result</label>
                        <p className="text-slate-700 leading-relaxed font-medium">{scanResult.reason}</p>
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-tighter mb-1 block">Expert Advice</label>
                        <p className={`font-bold ${scanResult.risk === 'danger' ? 'text-red-800' : 'text-emerald-800'}`}>
                          {scanResult.action}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}

          {activeTab === 'installation' && (
            <motion.div
              key="installation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-3xl mx-auto"
            >
              <h3 className="text-3xl font-bold mb-4 text-center">Chrome Extension Installation</h3>
              <p className="text-slate-500 text-center mb-10">Follow these steps to load AntiScammer with your new branded icon.</p>
              
              <div className="space-y-6">
                {[
                  { 
                    step: 1, 
                    title: 'Export Project', 
                    desc: 'Copy this link "https://github.com/VinothNaidu/AntiScammer_Project2030Hackathon" and download the file as zip.' 
                  },

                  { 
                    step: 2, 
                    title: 'Open Chrome Extensions', 
                    desc: 'Navigate to chrome://extensions in your Google Chrome browser.' 
                  },
                  { 
                    step: 3, 
                    title: 'Developer Mode', 
                    desc: 'In the top-right corner, ensure "Developer mode" is toggled to ON.' 
                  },
                  { 
                    step: 4, 
                    title: 'Load Unpacked', 
                    desc: 'Click "Load unpacked" and select the "/extension" folder that now contains your icon and scripts.' 
                  },
                  { 
                    step: 5, 
                    title: 'Activate Protection', 
                    desc: 'Pin the extension to your toolbar, set your API key in Settings, and you are protected!' 
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-[#003893]/30 transition-colors">
                    <div className="w-12 h-12 bg-[#003893] text-white rounded-full flex items-center justify-center font-bold shrink-0 shadow-lg shadow-[#003893]/20">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-slate-800">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'scams-101' && (
            <motion.div
              key="scams"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { 
                  title: 'APK Scams', 
                  desc: 'Criminals trick you into downloading "Cleaning Service" or "PDRM" APK files which steal your SMS TAC numbers.',
                  icon: <Settings className="text-[#CC0001]" />
                },
                { 
                  title: 'Phishing Clones', 
                  desc: 'Fake banking or EPF websites that look 99% identical to the real ones to steal your login credentials.',
                  icon: <Globe className="text-[#003893]" />
                },
                { 
                  title: 'Mule Accounts', 
                  desc: 'Offers for "Easy Money" that involve using your bank account to move illegal funds.',
                  icon: <Shield className="text-[#F27D26]" />
                }
              ].map((scam, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">{scam.icon}</div>
                  <h4 className="text-xl font-bold mb-3">{scam.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{scam.desc}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-[#003893] w-6 h-6" />
            <span className="font-bold text-slate-800">AntiScammer AI Project</span>
          </div>
          <div className="text-slate-400 text-sm">
            &copy; 2026 AntiScammer Malaysia. Built for public awareness.
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"><Globe className="w-5 h-5 text-slate-600" /></a>
            <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"><Settings className="w-5 h-5 text-slate-600" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

