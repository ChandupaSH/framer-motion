import { motion,useScroll, useTransform } from 'framer-motion'
import React from 'react'

const MobileLanding = () => {
    const { scrollYProgress} = useScroll()

    // const isInView = useInView(ref)
    // const view = isInView ? 1 : 0

    // const springValue = useSpring(scrollYProgress)

    const textOpacity = useTransform(scrollYProgress,[0,0.2],[1, 0])
    const backmValue = useTransform(scrollYProgress,[0,1],["0", "40vh"])
    const sunValue = useTransform(scrollYProgress,[0,1],["0", "80vh"])

    
    
  return (
    <div style={{height: '200vh'}}>
        <motion.img src={process.env.PUBLIC_URL + '/back2.png'}
        style={{
            width:'100%',
            height:'100vh',
            position: 'absolute',
            top: '0px' }} />

        <motion.img src={process.env.PUBLIC_URL + '/sun.png'}
        style={{
            y:sunValue,
            width:'20%',
            height:'auto',
            position: 'absolute',
            top: '20vh',
            left: '190px', }}/>

        <motion.img src={process.env.PUBLIC_URL + '/backm.png'}
        style={{
            y:backmValue,
            width:'100%',
            height:'auto',
            position: 'absolute',
            top: '26vh', }}/>

        <motion.img src={process.env.PUBLIC_URL + '/forground.png'}
        style={{
            width:'100%',
            height:'auto',
            position: 'absolute',
            top: '32.5vh', }}/>

        <motion.h1 style={{
            opacity: textOpacity,
            position: 'absolute',
            color: 'white',
            top: '15vh',
            left: '6vh'}}>
            Scroll me
        </motion.h1>

        <motion.div
         style={{
            position:"relative",
            backgroundColor: 'black',
            color: 'white',
            top: '100vh',
            padding: '5vh'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero doloribus quidem cupiditate laborum, impedit rerum odit, debitis, a ullam illum mollitia saepe. Ipsum consequuntur tempore maiores sed exercitationem dolorem inventore!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus reiciendis asperiores tempore, at, cum hic soluta aliquam dolorem ipsum iste non voluptas. Illo optio fugit ad animi voluptates omnis ratione.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur dolorem obcaecati reiciendis, ex provident quaerat nisi, possimus cum dicta voluptates nulla, ipsum nihil soluta et hic delectus quibusdam voluptatem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In esse eum deserunt vitae illum error odit nemo magnam debitis iusto eligendi fuga hic quas voluptate quisquam molestias, praesentium ad consequuntur!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, ut laudantium velit officiis perferendis perspiciatis, reiciendis nisi nulla doloremque sunt non eius soluta voluptatibus asperiores, ducimus exercitationem nesciunt animi beatae!
        </motion.div>
      
    </div>
  )
}

export default MobileLanding
