import { SUGGESTION_MATCH } from "const/app";
import { useCallback, useState } from "react";
import { ImCross, ImCheckmark } from "react-icons/im";

const Match = () => {
    const [index, setIndex] = useState(0);

    const nextSuggestion = useCallback(() => {
        const newIndex = index + 1 !== SUGGESTION_MATCH.length ? index + 1 : 0;
        setIndex(newIndex);
    }, [index])

    return(
        <div className="match">
            <div className="header title">What would you chose?</div>
            <div className="header">Be aware of sustainability</div>
            <div className="suggestion-match"><img src={SUGGESTION_MATCH[index]} alt="holiday" /> </div>
            <div className="match-buttons">
                <div className="dislike-suggestion suggestion-button" onClick={nextSuggestion}>
                    <ImCross color="red" size={40} />
                </div>
                <div className="like-suggestion suggestion-button" onClick={nextSuggestion}>
                    <ImCheckmark color="green" size={40} />
                </div>
            </div>
        </div>
    )
}

export default Match;