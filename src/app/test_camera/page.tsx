import Camera from '../../components/cameraSample'
import QrReader from './test_readQR';

export default function GET() {
    return (
        <div>
            <Camera />
            <QrReader />
        </div>
    );
}
