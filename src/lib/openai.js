
import { textBuffer, appStatus } from "./store";

const url = "https://openai-server-n8us.onrender.com";
// const url = "http://localhost:10231";

const endpointConnect = url + "/connect";
const endpointCompletion = url + "/completion";

export const checkConnection = async () => {
    await fetch(endpointConnect)
        .then((response) => response.text())
        .then((data) => {
            if (appStatus != "working") {
                if (data === "connected") {
                    appStatus.set("connected");
                } else {
                    appStatus.set("disconnected");
                }
            }
        })
        .catch((error) => {
            console.error(error);
            appStatus.set("disconnected");
        });
};

export const requestCompletion = async (prompt) => {
    appStatus.set("working");
    await fetch(endpointCompletion + `?prompt=${prompt}`)
        .then((response) => response.text())
        .then((data) => {
            appStatus.set("connected");
            textBuffer.set(data)
        })
        .catch((error) => {
            console.error(error);
        });
};
