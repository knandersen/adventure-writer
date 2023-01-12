
import { requestCompletion } from "./openai";

const htmlToText = (html) => {
    let tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
};

export const getCompletionStart = async () => {
    await requestCompletion("Start a fictional fairytale story:");
};

export const getCompletionMore = async (p) => {
    let prompt = htmlToText("continue this story: " + p);
    await requestCompletion(prompt);
};