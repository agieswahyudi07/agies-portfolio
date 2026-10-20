/**
 * v-reveal: fade a block in once as it scrolls into view.
 * Used at section level only. CSS in style.css handles reduced motion.
 */
export default {
  mounted(el) {
    el.classList.add('reveal')

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    observer.observe(el)
  },
}
