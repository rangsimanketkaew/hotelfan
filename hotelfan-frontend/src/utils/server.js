import { CHAT_VERSION_1, CHAT_VERSION_2 } from "const/mock/chatbot";
import { getRandomAmountHotel } from "./helpers";

export const getHotels = (number) => {
    return getRandomAmountHotel(number);
};

export const getChatBotConversation = (data) => {
    const version = data.version;
    const index = data.index;

    switch(version) {
        case 1:
            return CHAT_VERSION_1[index];
        case 2:
            return CHAT_VERSION_2[index];
        default:
            return CHAT_VERSION_1[index];
    }
}