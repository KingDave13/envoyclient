import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper3 = (Component, idName) => function HOC(props) {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding3} max-w-[68rem] mx-auto`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component {...props}/>
        </motion.section>
    )
};

export default SectionWrapper3;