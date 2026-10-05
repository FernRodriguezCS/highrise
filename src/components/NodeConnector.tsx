interface Position {
  x: number;
  y: number;
}

interface NodeConnectorProps {
  from: Position;
  to: Position;
  color?: string;
  strokeWidth?: number;
}

export const NodeConnector: React.FC<NodeConnectorProps> = ({ from, to, color = '#3b82f6', strokeWidth = 2, }) => {
  // Calculate bounding box dimensions
  const minX = Math.min(from.x, to.x);
  const minY = Math.min(from.y, to.y);

  const width = Math.abs(from.x - to.x) || 1;
  const height = Math.abs(from.y - to.y) || 1;

  // Map global cooridnates
  const startX = from.x - minX;
  const startY = from.y - minY;
  const endX = to.x - minX;
  const endY = to.y - minY;

  return (
    <svg
      style={{
        position: 'absolute',
        left: minX,
        top: minY,
        width: width,
        height: height,
        pointerEvents: 'none',
        zIndex: -1,
      }}>
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );

}
