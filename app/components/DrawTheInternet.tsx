'use client'

import { MouseEvent, useEffect, useRef, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import useContainerDimensions from '../hooks/useContainerDimensions'

import Button from './Button'
import DrawingCanvas from './DrawingCanvas'

const DrawTheInternet = () => {
  const [value, setValue] = useState(2)
  const supabase = createClientComponentClient()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
  const [history, setHistory] = useState<ImageData[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.lineWidth = value
        ctx.lineCap = 'round'
        setContext(ctx)
      }
    }
  }, [value])

  const saveHistory = () => {
    if (context && canvasRef.current) {
      const imageData = context.getImageData(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      )
      setHistory((prevHistory) => [...prevHistory, imageData])
    }
  }

  const startDrawing = (e: MouseEvent<HTMLCanvasElement>) => {
    if (context) {
      saveHistory()
      context.beginPath()
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
      setIsDrawing(true)
    }
  }

  const draw = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    context.stroke()
  }

  const stopDrawing = () => {
    if (context) {
      context.closePath()
      setIsDrawing(false)
    }
  }

  const undo = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1]
      setHistory(history.slice(0, -1))
      if (context && canvasRef.current) {
        context.putImageData(lastState, 0, 0)
      }
    }
  }

  const saveCanvas = async () => {
    setLoading(true)
    if (canvasRef.current) {
      const canvas = canvasRef.current
      canvas.toBlob(async (blob) => {
        if (blob) {
          const { data, error } = await supabase.storage
            .from('maps')
            .upload(`drawings/${Date.now()}.png`, blob, {
              contentType: 'image/png',
            })

          if (error) {
            setMessage(`Error uploading image: ${error.message}`)
          } else {
            setMessage('Image uploaded successfully')
          }
          setLoading(false)
          setMessage('')

          console.log(Boolean(loading || message.length))
        }
      })
    }
  }

  const [containerRef, dimensions] = useContainerDimensions()

  return (
    <div className="boder-solid mx-[10px] mt-4 border lg:ml-8 lg:mr-6 lg:mt-6">
      <div className=" flex justify-center border  border-l-0 border-r-0 border-t-0 border-solid p-[10px]">
        <p className="font-andale text-sm font-normal leading-[19.6px] text-borderColor">
          Draw a map of the internet
        </p>
      </div>
      <div
        className="flex min-h-[500px] items-center justify-center"
        ref={containerRef}
      >
        <DrawingCanvas
          canvasRef={canvasRef}
          height={dimensions.height}
          width={dimensions.width}
          startDrawing={startDrawing}
          draw={draw}
          stopDrawing={stopDrawing}
        />
        <p className="block text-center font-andale text-sm font-normal leading-[19.6px] text-borderColor lg:hidden">
          Currently not available on mobile. Please use a desktop browser to
          draw.{' '}
        </p>
      </div>
      <div className="flex flex-col justify-between border border-b-0 border-l-0 border-r-0 border-solid p-[10px] lg:flex-row lg:p-[20px]">
        <div>
          <div className="flex h-[20px] items-center justify-center rounded-lg border-solid border-ink lg:w-[128px] lg:border">
            <input
              type="range"
              min="2"
              max="25"
              id="bush-size"
              step="1"
              value={value}
              onChange={handleChange}
            />
          </div>
          <label
            htmlFor="bush-size"
            className="mt-2 text-center font-andale text-[14px] text-ink"
          >
            Brush size
          </label>
        </div>
        <div className="mt-4 flex flex-col gap-4 lg:mt-0 lg:flex-row lg:gap-6">
          <button
            onClick={undo}
            className="leading-[22.4px ] font-andale text-base font-normal uppercase text-borderColor"
          >
            Undo
          </button>
          <div className="relative flex flex-col">
            <Button
              onClick={saveCanvas}
              type="submit"
              disabled={false}
              text="submit"
            ></Button>
            {Boolean(loading || message.length) && (
              <p className="absolute top-full mt-[-8px] font-andale text-[14px] text-ink">
                loading...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DrawTheInternet
