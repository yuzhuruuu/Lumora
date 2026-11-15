import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to a container ref.
 * All children with class "fade-up" inside it will animate in
 * when they scroll into view.
 */
export function useFadeUp() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll('.fade-up')

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((t) => obs.observe(t))
    return () => obs.disconnect()
  }, [])

  return ref
}
