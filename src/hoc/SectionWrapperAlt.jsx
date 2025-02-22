import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component) => function HOC(props) {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.10 }}
            className={`max-w-[68rem] mx-auto`}
        >
            <Component {...props}/>
        </motion.section>
    )
};

export default SectionWrapper;