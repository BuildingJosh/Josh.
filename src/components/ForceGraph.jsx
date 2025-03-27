import React, { useState, useCallback, useRef, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

const ForceGraph = ({ data, onNodeClick }) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['Consciousness', 'Reality', 'Time', 'Technology', 'Robotics', 'Identity', 'Travel', 'Mind']));
  const [hoveredLink, setHoveredLink] = useState(null);
  const fgRef = useRef();

  useEffect(() => {
    // Set initial node positions in a circle
    const radius = 400; // Increased from 200 to spread nodes out more
    const angleStep = (2 * Math.PI) / data.nodes.filter(n => n.level === 0).length;
    let angle = 0;
    
    data.nodes.forEach(node => {
      if (node.level === 0) {
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
        angle += angleStep;
      }
    });

    // Reheat the simulation with stronger forces
    fgRef.current.d3Force('charge').strength(-200); // Increased repulsion
    fgRef.current.d3Force('link').distance(150); // Increased link distance
    fgRef.current.d3Force('center').strength(0.2); // Reduced center pull
    fgRef.current.d3ReheatSimulation();
  }, [data.nodes]);

  // Filter nodes and links based on expanded state
  const visibleNodes = data.nodes.filter(node => 
    node.level === 0 || expandedNodes.has(node.group)
  );
  
  const visibleLinks = data.links.filter(link => {
    const sourceNode = data.nodes.find(n => n.id === link.source);
    const targetNode = data.nodes.find(n => n.id === link.target);
    return (sourceNode?.level === 0 && targetNode?.level === 0) || 
           (expandedNodes.has(sourceNode?.group) && expandedNodes.has(targetNode?.group));
  });

  const graphData = {
    nodes: visibleNodes.map(node => ({
      ...node,
      x: node.x || Math.random() * 800 - 400,
      y: node.y || Math.random() * 800 - 400
    })),
    links: visibleLinks
  };

  const handleNodeClick = useCallback((node) => {
    if (node.level === 0) {
      setExpandedNodes(prev => {
        const newSet = new Set(prev);
        if (newSet.has(node.id)) {
          // Collapse: remove this node's children
          data.nodes.forEach(n => {
            if (n.group === node.id) {
              newSet.delete(n.id);
            }
          });
        } else {
          // Expand: add this node's children
          data.nodes.forEach(n => {
            if (n.group === node.id) {
              newSet.add(n.id);
            }
          });
        }
        return newSet;
      });
    } else {
      onNodeClick?.(node);
    }
  }, [data.nodes, onNodeClick]);

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={graphData}
      backgroundColor="#0e0e10"
      nodeCanvasObject={(node, ctx, globalScale) => {
        const label = node.id;
        const fontSize = node.level === 0 ? 16 : 12;
        ctx.font = `${fontSize}px "Space Mono", monospace`;
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

        // Draw node circle with glow
        ctx.beginPath();
        const size = node.level === 0 ? 8 : 4;
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Add glow effect
        const glowStrength = node.level === 0 ? 20 : 10;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = glowStrength;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw text background
        ctx.fillStyle = 'rgba(14, 14, 16, 0.8)';
        ctx.fillRect(
          node.x - bckgDimensions[0] / 2,
          node.y - bckgDimensions[1] / 2,
          ...bckgDimensions
        );

        // Draw text
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = node.color;
        ctx.fillText(label, node.x, node.y);
      }}
      linkWidth={link => link === hoveredLink ? 4 : 1}
      linkColor={link => link === hoveredLink ? '#6ee7b7' : 'rgba(110, 231, 183, 0.2)'}
      onNodeClick={handleNodeClick}
      onLinkHover={setHoveredLink}
      linkCanvasObjectMode={() => 'after'}
      linkCanvasObject={(link, ctx) => {
        if (hoveredLink === link) {
          const start = link.source;
          const end = link.target;
          const textPos = {
            x: (start.x + end.x) / 2,
            y: (start.y + end.y) / 2
          };

          // Draw link description
          const label = link.description;
          ctx.font = '10px "Space Mono", monospace';
          const textWidth = ctx.measureText(label).width;
          const bckgDimensions = [textWidth, 10].map(n => n + 10 * 0.2);

          ctx.fillStyle = 'rgba(14, 14, 16, 0.8)';
          ctx.fillRect(
            textPos.x - bckgDimensions[0] / 2,
            textPos.y - bckgDimensions[1] / 2,
            ...bckgDimensions
          );

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#6ee7b7';
          ctx.fillText(label, textPos.x, textPos.y);
        }
      }}
      cooldownTicks={100}
      d3AlphaDecay={0.02}
      d3VelocityDecay={0.3}
      warmupTicks={100}
      enableNodeDrag={true}
      enableZoom={true}
      minZoom={0.5}
      maxZoom={2}
      linkDistance={100}
      nodeRelSize={6}
    />
  );
};

export default ForceGraph;
