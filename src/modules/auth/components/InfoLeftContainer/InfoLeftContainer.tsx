import React from 'react';
import styles from './InfoLeftContainer.module.css';

const InfoLeftContainer: React.FC = () => {
    const arrowImg = (
        <img 
            src={'/static/icons/arrow.svg'} 
            alt={'arrow'} 
            width={35} 
            height={20} 
        />
    );

    return (
        <div className={styles.leftContainer}>
            <div className={styles.imageContainer}>
                <div className={styles.blur}>
                    <div className={styles.introText}>
                        <span>Clash</span>
                        <label>
                            Make your cash 1x {arrowImg} 2x with your coding expertise
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(InfoLeftContainer);
