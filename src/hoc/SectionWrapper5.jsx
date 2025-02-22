import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const SectionWrapper5 = (Component) => function HOC(props) {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.10 }}
        >
            <Component {...props}/>
        </motion.section>
    )
};

export default SectionWrapper5;