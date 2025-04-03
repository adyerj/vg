import React from "react";
import { motion } from "framer-motion";

interface DataPoint {
  netRetention: number;
  valuation: number;
}

export const RetentionValueChart = () => {
  const data: DataPoint[] = [
    { netRetention: 100, valuation: 5 },
    { netRetention: 105, valuation: 6.5 },
    { netRetention: 110, valuation: 8 },
    { netRetention: 115, valuation: 9.5 },
    { netRetention: 120, valuation: 10.5 },
    { netRetention: 125, valuation: 12 },
    { netRetention: 130, valuation: 13 },
  ];

  // Chart dimensions
  const width = 100;
  const height = 100;
  const padding = 10;
  
  // Calculate x and y scales
  const xMin = Math.min(...data.map(d => d.netRetention));
  const xMax = Math.max(...data.map(d => d.netRetention));
  const yMin = 0; // Always start from 0
  const yMax = Math.max(...data.map(d => d.valuation));
  
  // Function to convert data point to SVG coordinates
  const toSvgX = (x: number) => (
    ((x - xMin) / (xMax - xMin)) * (width - 2 * padding) + padding
  );
  
  const toSvgY = (y: number) => (
    height - (((y - yMin) / (yMax - yMin)) * (height - 2 * padding) + padding)
  );

  // Generate SVG path for the line
  const pathData = data.map((d, i) => 
    `${i === 0 ? 'M' : 'L'} ${toSvgX(d.netRetention)} ${toSvgY(d.valuation)}`
  ).join(' ');

  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6">
      <div className="text-center mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800">Retention Impact on Valuation</h3>
      </div>
      
      <div className="relative aspect-video mb-6">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full text-primary"
          preserveAspectRatio="none"
        >
          {/* X-axis */}
          <line 
            x1={padding} 
            y1={height - padding} 
            x2={width - padding} 
            y2={height - padding} 
            stroke="#94a3b8" 
            strokeWidth="0.5" 
          />
          
          {/* Y-axis */}
          <line 
            x1={padding} 
            y1={padding} 
            x2={padding} 
            y2={height - padding} 
            stroke="#94a3b8" 
            strokeWidth="0.5" 
          />
          
          {/* Grid lines */}
          {[100, 110, 120, 130].map(value => (
            <line 
              key={`x-${value}`}
              x1={toSvgX(value)} 
              y1={height - padding} 
              x2={toSvgX(value)} 
              y2={padding} 
              stroke="#e2e8f0" 
              strokeWidth="0.5" 
              strokeDasharray="2,2"
            />
          ))}
          
          {[0, 4, 8, 12, 16].map(value => (
            <line 
              key={`y-${value}`}
              x1={padding} 
              y1={toSvgY(value)} 
              x2={width - padding} 
              y2={toSvgY(value)} 
              stroke="#e2e8f0" 
              strokeWidth="0.5" 
              strokeDasharray="2,2"
            />
          ))}
          
          {/* Data line */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {/* Area under the curve for mobile visibility */}
          <motion.path
            d={`${pathData} L ${toSvgX(130)} ${height - padding} L ${toSvgX(100)} ${height - padding} Z`}
            fill="currentColor"
            fillOpacity="0.1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
          
          {/* Data points */}
          {data.map((d, i) => (
            <motion.circle
              key={i}
              cx={toSvgX(d.netRetention)}
              cy={toSvgY(d.valuation)}
              r="1.5"
              fill="#fff"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
            />
          ))}
          
          {/* X-axis labels */}
          {[100, 110, 120, 130].map(value => (
            <text
              key={`x-label-${value}`}
              x={toSvgX(value)}
              y={height - padding + 5}
              textAnchor="middle"
              fill="#64748b"
              fontSize="3"
            >
              {value}%
            </text>
          ))}
          
          {/* Y-axis labels */}
          {[0, 4, 8, 12, 16].map(value => (
            <text
              key={`y-label-${value}`}
              x={padding - 2}
              y={toSvgY(value) + 1}
              textAnchor="end"
              fill="#64748b"
              fontSize="3"
            >
              {value}x
            </text>
          ))}
          
          {/* Axis labels */}
          <text
            x={width/2}
            y={height - 1}
            textAnchor="middle"
            fill="#64748b"
            fontSize="3"
          >
            Net Retention Rate
          </text>
          
          <text
            x={2}
            y={height/2}
            textAnchor="middle"
            fill="#64748b"
            fontSize="3"
            transform={`rotate(-90, 2, ${height/2})`}
          >
            Valuation Multiple
          </text>
        </svg>
      </div>
      
      <div className="text-sm text-slate-600">
        <p className="mb-3 text-center">
          Each 5% improvement in Net Retention Rate correlates to a 1-2x increase in valuation multiple.
        </p>
        <div className="p-3 sm:p-4 bg-primary/5 rounded-lg">
          <div className="font-medium text-center mb-2">Example Value Growth</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-md p-2 shadow-sm">
              <div className="text-center font-medium mb-1">95% Retention</div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">$10M Revenue:</span>
                <span className="font-bold">$50M valuation</span>
              </div>
            </div>
            <div className="bg-white rounded-md p-2 shadow-sm border border-primary/10">
              <div className="text-center font-medium text-primary mb-1">115% Retention</div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">$10M Revenue:</span>
                <span className="font-bold text-primary">$95M valuation</span>
              </div>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-primary/10 text-center">
            <span className="font-medium">Value Gap: </span>
            <span className="text-primary font-bold">$45 million</span>
          </div>
        </div>
      </div>
    </div>
  );
};