export const viewport = {
  once: true,
  margin: "0% 0% -60% 0%"  
}
export const childrenViewport = {
  once: true,
  margin: "0% 0% -50% 0%"  
}
export const parentVariant = {
  visible: { opacity:1,transition:{staggerChildren:.1} },
  hidden: {opacity:0}
}
export const cardsParentVariant = {
  visible: { opacity:1,transition:{staggerChildren:.1} },
  hidden: {opacity:0}
}
export const slideUpVariant = {
  visible: {y:0,transition:{duration:.6}},
  hidden: {y:"100vh"},
}
export const cardSlideUpVariant = {
  visible: {y:0,transition:{duration:.7}},
  hidden: {y:1000},
}
export const slideRightVariant = {
  visible: {opacity:1,x:0},
  hidden: { opacity:0, x:-200}
}
export const imageSlideUpVariant = {
  visible:{opacity:1, y:0},
  hidden:{opacity:0, y:100}
}

export const slideLeftVariant = {
  visible: {opacity:1,x:0},
  hidden: { opacity:0, x:200}
}
