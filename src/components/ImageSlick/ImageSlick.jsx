

import './ImageSlick.css'
import Projects from './projects';
const ImageSlick = ({images}) => {
    return (
        <div className=''>
            <Projects images={images} />
        </div>
    );
};

export default ImageSlick;