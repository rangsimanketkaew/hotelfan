import { useCallback, useMemo } from "react";
import { MdSms } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useRecoilState } from "recoil";
import { chatbotOpen } from "states/app";
import Chatbot from "./Chatbot";

const ChatbotAction = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useRecoilState(chatbotOpen);

  const ChatBotIcon = useMemo(() => {
    return isChatbotOpen ? RxCross2 : MdSms;
  }, [isChatbotOpen]);

  const chatbotAction = useCallback(() => {
    setIsChatbotOpen(!isChatbotOpen);
  }, [isChatbotOpen, setIsChatbotOpen]);
  return (
    <>
      <div className="chatbot" onClick={chatbotAction}>
        <ChatBotIcon size={40} color="white" className="chatbot-icon" />
      </div>
      {isChatbotOpen && <Chatbot />}
    </>
  );
};

export default ChatbotAction;
