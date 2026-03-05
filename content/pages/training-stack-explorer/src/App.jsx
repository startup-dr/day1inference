import { useState, useEffect, useRef } from "react";

// Color palette
const C = {
  bg: "#0a0e17", panel: "#111827", panelBorder: "#1e293b",
  accent: "#22d3ee", accentDim: "#0e7490", warm: "#f59e0b",
  warmDim: "#92400e", compute: "#10b981", computeDim: "#065f46",
  network: "#8b5cf6", networkDim: "#4c1d95", danger: "#ef4444",
  text: "#e2e8f0", textDim: "#64748b", textMuted: "#475569", grid: "#1e293b",
};

const TabBar = ({ tabs, active, onChange }) => (
  <div style={{display: "flex", gap: 2, padding: "4px", background: C.bg, borderRadius: 8, marginBottom: 24,
    border: `1px solid ${C.panelBorder}`, flexWrap: "wrap"}}>
    {tabs.map((t) => (
      <button key={t.id} onClick={() => onChange(t.id)} style={{
        padding: "10px 18px", borderRadius: 6, border: "none",
        background: active === t.id ? C.panelBorder : "transparent",
        color: active === t.id ? C.accent : C.textDim,
        fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
        fontSize: 13, fontWeight: active === t.id ? 600 : 400,
        cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.02em", whiteSpace: "nowrap"}}>
        {t.icon} {t.label}
      </button>
    ))}
  </div>
);

const Card = ({ children, style = {}, glow }) => (
  <div style={{background: C.panel, border: `1px solid ${C.panelBorder}`,
    borderRadius: 10, padding: 20, boxShadow: glow ? `0 0 20px ${glow}33` : "none", ...style}}>
    {children}
  </div>
);

const Label = ({ children, color = C.textDim, size = 11 }) => (
  <span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: size,
    color, textTransform: "uppercase", letterSpacing: "0.08em"}}>
    {children}
  </span>
);

const WaterfallView = () => {
  const [phase, setPhase] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const timerRef = useRef(null);

  const layers = [
    { id: "launch", label: "CUDA Kernel Launch", detail: "CPU schedules NCCL comm kernel onto GPU stream",
      time: "3–5 μs", timeVal: 4, color: C.warm, tool: "nsys", metric: "CUDA API trace → kernel launch gap" },
    { id: "hbm_read", label: "HBM Read", detail: "GPU SMs read gradient data from HBM3",
      time: "~120 ns", timeVal: 0.12, color: C.compute, tool: "ncu", metric: "l2_hit_rate" },
    { id: "pcie_out", label: "PCIe → NIC", detail: "DMA from GPU HBM through PCIe switch to NIC",
      time: "2–5 μs", timeVal: 3.5, color: C.danger, tool: "nvidia-smi topo", metric: "PIX vs PXB topology" },
    { id: "nic_tx", label: "NIC TX", detail: "RDMA verb, segmentation, TX",
      time: "0.6–2 μs", timeVal: 1.3, color: C.network, tool: "ibstat", metric: "port_xmit_data" },
    { id: "fabric", label: "Network Fabric", detail: "ToR → Spine → ToR",
      time: "0.5–2 μs", timeVal: 1.2, color: C.network, tool: "ibdiagnet", metric: "IB ~230ns, EFA ~500ns" },
    { id: "nic_rx", label: "NIC RX", detail: "Receives, reassembles, signals DMA",
      time: "0.6–2 μs", timeVal: 1.3, color: C.network, tool: "rdma stat", metric: "port_rcv_data" },
    { id: "pcie_in", label: "NIC → GPU", detail: "DMA write to dest GPU HBM",
      time: "2–5 μs", timeVal: 3.5, color: C.danger, tool: "nvidia-smi topo", metric: "PCIe Gen5 x16" },
    { id: "hbm_write", label: "HBM Write", detail: "Result written to destination buffer",
      time: "~120 ns", timeVal: 0.12, color: C.compute, tool: "ncu", metric: "dram_write_throughput" },
  ];

  const totalTime = layers.reduce((s, l) => s + l.timeVal, 0);
  const maxBarWidth = 400;

  useEffect(() => {
    if (autoPlay) {
      timerRef.current = setInterval(() => setPhase(p => (p + 1) % (layers.length + 1)), 1200);
    }
    return () => clearInterval(timerRef.current);
  }, [autoPlay]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <h2 style={{ color: C.text, fontSize: 22, margin: 0 }}>Latency Waterfall</h2>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setAutoPlay(!autoPlay)} style={{
            padding: "8px 16px", borderRadius: 6, border: `1px solid ${C.accent}`,
            background: autoPlay ? C.accentDim : "transparent", color: C.accent,
            fontFamily: "monospace", fontSize: 12, cursor: "pointer"}}>
            {autoPlay ? "⏸ Pause" : "▶ Animate"}
          </button>
          <button onClick={() => setPhase(layers.length)} style={{
            padding: "8px 16px", borderRadius: 6, border: `1px solid ${C.panelBorder}`,
            background: "transparent", color: C.textDim, fontFamily: "monospace", fontSize: 12, cursor: "pointer"}}>
            Show All
          </button>
        </div>
      </div>
      <div>{layers.map((layer, i) => {
        const visible = i < phase || phase >= layers.length;
        return <div key={layer.id} style={{marginBottom: 8, opacity: visible ? 1 : 0.2}}>
          {layer.label}: {layer.time}
        </div>;
      })}</div>
    </div>
  );
};

const tabs = [
  { id: "waterfall", label: "Latency Stack", icon: "⏱" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("waterfall");
  return (
    <div style={{minHeight: "100vh", background: C.bg, color: C.text, padding: "20px 24px"}}>
      <h1 style={{fontSize: 26, fontWeight: 800}}>GPU Training Stack Explorer</h1>
      <TabBar tabs={tabs} active={activeTab} onChange={setActiveTab} />
      {activeTab === "waterfall" && <WaterfallView />}
    </div>
  );
}
