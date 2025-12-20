import { Variants } from "motion";

 export const sentence = "Love leaves light in the places it can't stay.";
  export const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: -1,
        delayChildren: 0.12,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.12,
      },
    },
  };

  export const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 1,
      filter: 'blur(40px)',
      transition: {
        duration: 0.35,
        ease: 'easeOut',
        filter: {
          duration: 0.4,
          ease: 'easeOut',
        },
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.35,
        ease: 'easeOut',
        filter: {
          duration: 0.4,
          ease: 'easeOut',
        },
      },
    },
  };

