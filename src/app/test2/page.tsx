import Link from 'next/link';
import styles from './Home.module.css';
import SampleDataInput from './sampleDatePicker'

export default function Home() {
    return (
        <div className={styles.container}>
            <h1>HOME</h1>

            <div className={styles.buttonsWrapper}>
                <Link href="/page1">
                    <div className={styles.button}>製品の説明</div>
                </Link>
                <Link href="/page2">
                    <div className={styles.button}>製品データ</div>
                </Link>
                <Link href="/test_camera">
                    <div className={styles.button}>監視カメラ</div>
                </Link>
                <Link href="/page4">
                    <div className={styles.button}>ユーザー管理</div>
                </Link>
                <br />
                <SampleDataInput />
            </div>

        </div>
    );
}
