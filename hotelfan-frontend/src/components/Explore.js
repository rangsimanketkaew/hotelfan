import { memo } from "react";
import useSetTitle from "utils/hooks/useSetTitle";

const Explore = () => {
  useSetTitle("Explore");

  return (
    <div>
      <div>Reiseziel</div>
      <div>Reisezeitraum und Dauer</div>
      <div>Zimmer und Reisende</div>
    </div>
  );
};

export default memo(Explore);
