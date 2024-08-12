'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

<motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 lg:right-[30%]  right-5 s rounded-20 w-[150px]  p-[6px] bg-[#5d6680] rounded-2xl ">
        <div className="gradient-01" />
          <img src="mask-group-1.png" alt="people" className="w-full h-full" />
          <div className="absolute text-white bottom-3 left-4 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <img src="people-01.png" className="w-[17px] h-[17px] z-30" alt="small-people" />
                <img src="people-02.png" className="w-[17px] h-[17px] z-20 -ml-4" alt="small-people" />
                <img src="people-03.png" className="w-[17px] h-[17px] z-10 -ml-4" alt="small-people" />
                <p className="text-[8px]  ">+264 has joined</p>
              </div>
              <p className="text-[12px] font-semibold ">The Upside Down</p>
          </div>
        </div>
        <div className="absolute top-1/3 left-[10%] rounded-20 w-[150px]  p-[6px] bg-[#5d6680] rounded-2xl  ">
          <img src="mask-group-2.png" alt="people" className="w-full h-full" />
          <div className="absolute text-white bottom-3 left-4 flex flex-col gap-1">
              <div className="flex justify-between items-center min-w-[100px]">
                <img src="people-01.png" className="w-[17px] h-[17px] z-30" alt="small-people" />
                <img src="people-02.png" className="w-[17px] h-[17px] z-20 -ml-4" alt="small-people" />
                <img src="people-03.png" className="w-[17px] h-[17px] z-10 -ml-4" alt="small-people" />
                <p className="text-[8px]  ">+264 has joined</p>
              </div>
              <p className="text-[12px] font-semibold ">Hawkins Labs</p>
          </div>
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
