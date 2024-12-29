export const Sparkle = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      className={`w-16 h-16 animate-sparkle ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}
