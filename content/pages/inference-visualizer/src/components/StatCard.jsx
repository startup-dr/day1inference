import React from 'react';

export default function StatCard({ label, value, color }) {
  return (
    <div className={`viz-stat-card ${color}`}>
      <div className="viz-stat-label">{label}</div>
      <div className="viz-stat-value">{value}</div>
    </div>
  );
}
