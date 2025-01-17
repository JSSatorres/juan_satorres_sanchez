import { ReactNode, MouseEventHandler } from "react"

interface MainButtonProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export default function MainButton({ children, onClick }: MainButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-main-600 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-secondary-700"
    >
      {children}
    </button>
  )
}
