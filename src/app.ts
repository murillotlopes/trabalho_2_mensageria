import express from "express";
import registroRotas from "./project/rotasApi";
import listenForMessages from "./project/pub_sub/pubSub";

const app = express()

const subscriptionNameOrId = process.env.SUBSCRIPTIONNAMEORID
const timeout = process.env.TIMEOUTPUBSUB as unknown as number;

app.use(express.json())
registroRotas(app)

setTimeout(() => {
  listenForMessages(subscriptionNameOrId, timeout);
}, 5000);


export default app