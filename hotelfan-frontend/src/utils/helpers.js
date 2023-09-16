export const getPlainText = (text) => {
    let baseString = text.replace("<p>", "");
    baseString = baseString.replace("</p>", "");
    return baseString;
};