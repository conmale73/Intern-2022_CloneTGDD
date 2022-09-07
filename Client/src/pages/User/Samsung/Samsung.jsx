import BigBanner from './BigBanner';
import Content2 from './Content-2';
import Comment from './Comment';
import './samsung.scss';

const Samsung = () => {
    return (
        <div>
            <BigBanner />
            <Content2 />
            <div className="commentSamsung">
                <Comment />
            </div>
        </div>
    );
};
export default Samsung;
