import { memo, useEffect } from 'react';
import { getHotels } from 'utils/server';

const Chatbot = () => {

    useEffect(() => {
        getHotels();
    }, [])
    
    return(
        <div>
            Chatbot
        </div>
    )
}

export default memo(Chatbot);