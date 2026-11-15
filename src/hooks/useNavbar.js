import { useEffect, useState } from 'react'

export function useNavbar() {
  const [scrolled, setScrolled] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrolled }
}
