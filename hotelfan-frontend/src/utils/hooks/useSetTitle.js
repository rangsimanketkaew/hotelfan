import { PAGE_TITLE } from 'const/app';
import { useEffect } from 'react';

const useSetTitle = (pageTitle) => {

    useEffect(() => {
        document.title = pageTitle ? `${PAGE_TITLE} ${pageTitle}` : PAGE_TITLE;
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useSetTitle;