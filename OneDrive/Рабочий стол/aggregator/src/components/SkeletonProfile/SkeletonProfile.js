import React from 'react';
import styles from './sceleton.module.css'

const SkeletonProfile = () => {
    return (
        <div className='container'>
            <div className={styles.header}>
                <div className={styles.skeleton}>
                    <div className={styles.skeleton0}>
                        <div className={styles.skeleton1}></div>
                        <div className={styles.skeleton2}></div>
                        <div className={styles.skeleton2}></div>
                        <div className={styles.skeleton2}></div>
                    </div>
                    <div className={styles.skeleton3}>
                        <div className={styles.skeletons}></div>
                        <div className={styles.skeletons}></div>
                    </div>
                </div>
            </div>
            <div className={styles.allSkeleton}>
                <div className={styles.block}>
                    <div className={styles.block1}></div>
                    <div className={styles.block2}></div>
                    <div className={styles.block3}></div>
                </div>
                <div className={styles.bigBlock}></div>
            </div>
            <div className={styles.foot}>
                <div className={styles.foot1}></div>
                <div className={styles.foot2}></div>
            </div>
        </div>
    );
};

export default SkeletonProfile;