'use client'
import { MouseEvent } from 'react'

interface DrawingCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>
  startDrawing: (e: MouseEvent<HTMLCanvasElement>) => void
  draw: (e: MouseEvent<HTMLCanvasElement>) => void
  stopDrawing: () => void
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  canvasRef,
  startDrawing,
  draw,
  stopDrawing,
}) => {
  return (
    <canvas
      ref={canvasRef}
      height={500}
      width={500}
      style={{ border: '1px solid black' }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      className="my-4"
    />
  )
}

export default DrawingCanvas
