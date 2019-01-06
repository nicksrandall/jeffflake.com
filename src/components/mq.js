import facepaint from 'facepaint'

const breakpoints = [768, 1024, 1440, 1920]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export default mq
