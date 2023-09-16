import { MOCK_HOTELS } from "const/mock/hotels";

export const getPlainText = (text) => {
    let baseString = text.replace("<p>", "");
    baseString = baseString.replace("</p>", "");
    return baseString;
};

export const getRandomAmountHotel = (number) => {
    const shuffled = MOCK_HOTELS.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, number);
    return selected;
}