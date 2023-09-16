import { memo } from 'react';
import useSetTitle from 'utils/hooks/useSetTitle';

const Explore = () => {

    useSetTitle("Explore");

    return(
        <div>
            Explore
        </div>
    )
}

export default memo(Explore);