import { useEffect } from 'react'

export const useClickOutside = (ref: React.RefObject<HTMLDivElement>, callback: () => void) => {
  useEffect(() => {
    if (ref.current) {
      const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
          callback()
        }
      }
      document.addEventListener('click', handleClick)
      return () => {
        document.removeEventListener('click', handleClick)
      }
    }
  }, [callback, ref])
}
