'use client'
import { MouseEvent } from 'react'

interface DrawingCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>
  startDrawing: (e: MouseEvent<HTMLCanvasElement>) => void
  draw: (e: MouseEvent<HTMLCanvasElement>) => void
  stopDrawing: () => void
  height: number
  width: number
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  canvasRef,
  startDrawing,
  draw,
  stopDrawing,
  height,
  width,
}) => {
  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      className="hidden lg:block"
    />
  )
}

export default DrawingCanvas
