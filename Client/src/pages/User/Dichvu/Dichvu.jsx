import BigBanner from './BigBanner';
import Dichvu_Links from './Dichvu_Links';
import './Dichvu.scss';
import BoxDichvu from './BoxDichvu';
import Comment from './Comment';
const Dichvu = () => {
    return (
        <div>
            <BigBanner></BigBanner>
            <Dichvu_Links></Dichvu_Links>
            <BoxDichvu></BoxDichvu>
        </div>
    );
};
export default Dichvu;
