import { SubscriptionClient } from "subscriptions-transport-ws";
import { Environment, Network, RecordSource, Store } from "relay-runtime";


import { getToken } from "./utils/jwt"

/**
 * Create store for relay connection
 */
export const store = new Store(new RecordSource());

/**
 * Load Environment Configuration
 */
const host = process.env.GRAPH_QL_HTTP_SERVER_HOST.toString()
const port = process.env.GRAPH_QL_HTTP_SERVER_PORT
const httpEndPointUrl = process.env.GRAPH_QL_HTTP_SERVER_URL
const wsEndPointUrl = process.env.GRAPH_QL_SUBSCRIPTION_SERVER_URL
const httpEndPoint = `http://${host}:${port}/${httpEndPointUrl}`
const socketEndPoint = `ws://${host}:${port}/${wsEndPointUrl}`

/**
 * Fetch query from relay server
 * @param {*} operation 
 * @param {*} variables 
 */
const fetchQuery = (operation, variables) => {
  return fetch(`${httpEndPoint}`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": getToken()
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
};

/**
 * Setup subscription server
 * @param {*} config 
 * @param {*} variables 
 * @param {*} cacheConfig 
 * @param {*} observer 
 */
const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text;
  const { onNext, onError, onCompleted } = observer;
  const subscriptionClient = new SubscriptionClient(
    `${socketEndPoint}`,
    { reconnect: true }
  );
  subscriptionClient
    .request({ query, variables })
    .subscribe(onNext, onError, onCompleted);
};

/**
 * Initialize network with fetch query and subscription
 */
const network = Network.create(fetchQuery, setupSubscription);

const environment = new Environment({
  network,
  store
});

export default environment;


