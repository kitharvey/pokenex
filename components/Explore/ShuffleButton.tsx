import { motion } from 'framer-motion';
import React from 'react'

interface ShuffleButtonProps {
    handleShuffle: () => void
}

const ShuffleButton: React.FC<ShuffleButtonProps> = ({handleShuffle}) => {
        return (
            <motion.div
                className="item-wrapper"
                onClick={() => handleShuffle()}
                style={{
                borderRadius: "50px",
                padding: "5px 10px",
                }}
                whileTap={{
                    scale: .95,
                  }}
                whileHover={{
                cursor: "pointer",
                }}
            >
                <p>shuffle</p>
            </motion.div>
        );
}


export default ShuffleButton