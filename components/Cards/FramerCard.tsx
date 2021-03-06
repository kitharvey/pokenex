import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion"
import React from "react"

interface FramerCardProps {
  initial?: {
    scale: number
    y: number
    opacity: number
  }
  animate?: {
    scale: number
    y: number
    opacity: number
  }
  transition?: {
    scale?: { duration: number }
    opacity?: { duration: number }
    type?: "inertia" | "spring" | "tween"
    stiffness?: number
    damping?: number
  }
  drag?: boolean | "x" | "y"
  exitX?: number
  setExitX?: (x: number) => void
  index: number
  setIndex?: (x: number) => void
  handleDragEnd?: (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void
  whileHover?: {
    scale?: number
    cursor?: string
  }
  whileTap?: {
    cursor?: string
    scale?: number
  }
}

const FramerCard: React.FC<FramerCardProps> = (props) => {
  const maximumX = 200
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-maximumX, 0, maximumX], [-10, 0, 10], {
    clamp: false,
  })

  const {
    initial,
    animate,
    transition,
    exitX,
    drag,
    whileHover,
    whileTap,
    children,
    handleDragEnd,
  } = props

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        borderRadius: "20px",
        x,
        rotate,
      }}
      whileHover={whileHover}
      whileTap={whileTap}
      drag={drag}
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      onDragEnd={handleDragEnd}
      initial={initial}
      animate={animate}
      transition={transition}
      exit={{
        x: exitX,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FramerCard
