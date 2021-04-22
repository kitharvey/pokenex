import { SortKey } from '@lib/useRefineItems';
import { motion } from 'framer-motion';
import React from 'react'

interface SortButtonProps {
    title: string
    sortKey: SortKey
    handleSort: (key: SortKey) => void
}

const SortButton: React.FC<SortButtonProps> = ({title, sortKey, handleSort}) => {
        return (
            <motion.div
                className="item-wrapper"
                onClick={() => handleSort(sortKey)}
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
                <p>{title}</p>
            </motion.div>
        );
}


export default SortButton