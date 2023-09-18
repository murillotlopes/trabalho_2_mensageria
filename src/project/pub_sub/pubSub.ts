import { Pedido } from "../../entities/pedido"
import pedidoRepositorio from "../pedido/pedido.repositorio"
import { geradorDePedidos } from "./geradorFake";
const { PubSub } = require('@google-cloud/pubsub')


const credentials = process.env.CREDENTIALS
const projectId = process.env.PROJECTID;


const pubSubClient = new PubSub({ projectId, credentials });

async function listenForMessages(subscriptionNameOrId: string, timeout: number) {
  const subscription = pubSubClient.subscription(subscriptionNameOrId);

  let messageCount = 0;

  let pedido: Pedido = await geradorDePedidos()

  const pedidoSalvo = await pedidoRepositorio.salvar(pedido)

  const messageHandler = async message => {
    messageCount += 1;

    // let pedido = JSON.parse(message.data);
    // let pedido: Pedido = geradorDePedidos()
    // console.log(pedido)

    // const pedidoSalvo = await pedidoRepositorio.salvar(pedido)
    // console.log(pedido)

    // "Ack" (acknowledge receipt of) the message
    //message.ack();
  };

  // Listen for new messages until timeout is hit
  // subscription.on('message', messageHandler);

  // Wait a while for the subscription to run. (Part of the sample only.)
  // setTimeout(() => {
  //   subscription.removeListener('message', messageHandler);
  //   console.log(`${messageCount} message(s) received.`);
  // }, timeout * 1000);
}

// listenForMessages(subscriptionNameOrId, timeout);

export default listenForMessages