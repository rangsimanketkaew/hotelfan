import clsx from "clsx";
import { memo, useCallback, useMemo, useState } from "react";
import { MdSms, MdSend } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useRecoilState } from "recoil";
import { chatbotOpen } from "states/app";

const Chatbot = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useRecoilState(chatbotOpen);
  const [message, setMessage] = useState("");
  const messages = [{text: "hello", type:"human"}, {text: "hello", type:"human"}, {text: "hello", type:"chatbot"}];

  const ChatBotIcon = useMemo(() => {
    return isChatbotOpen ? RxCross2 : MdSms;
  }, [isChatbotOpen]);

  const chatbotAction = useCallback(() => {
    setIsChatbotOpen(!isChatbotOpen);
  }, [isChatbotOpen, setIsChatbotOpen]);

  const submitRequest = useCallback(() => {
    console.log(message);
  }, [message]);

  return (
    <>
      <div className="chatbot" onClick={chatbotAction}>
        <ChatBotIcon size={40} color="white" className="chatbot-icon" />
      </div>
      {isChatbotOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div className="title">Jetzt am Chatten</div>
            <div>
              Willkommen bei Hotelplan. Wie dürfen wir Ihnen weiterhelfen?
            </div>
          </div>
          <div className="chatbot-body">
            <div>
              {messages.map((message) => {
                return (
                  <div
                    className={clsx(
                      "message",
                      message.type === "chatbot"
                        ? "message-chatbot"
                        : "message-human"
                    )}
                  >
                    {message.text}
                  </div>
                );
              })}
            </div>
            <div className="chatbot-form">
              <input
                name="request"
                placeholder="Ihr Anliegen"
                onChange={(e) => setMessage(e.target.value)}
              />
              <MdSend size={30} onClick={submitRequest} color="grey" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Chatbot);
