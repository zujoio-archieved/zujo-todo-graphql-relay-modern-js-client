import { SubscriptionClient } from "subscriptions-transport-ws";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

import { LocalStorage } from './common/common.localstorage'

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
 * @param {*} operation  operation use for query 
 * @param {*} variables  variable is used for what kind of input needed for operation
 */
const fetchQuery = async (operation, variables, cacheConfig, uploadables) => {

  const token =  await LocalStorage.getToken()
  const request = {
    method: 'POST',
    headers: {
      ["Authorization"]: token,

    },
};


if (uploadables) {
  if (!window.FormData) {
      throw new Error('Uploading files without `FormData` not supported.');
  }
  
  const formData = new FormData();
  const opr = {
    query: operation.text,
    variables: variables
  }
  formData.append('operations', JSON.stringify(opr));
  formData.append('map', JSON.stringify({"nfile":["variables.file"]}));

  Object.keys(uploadables).forEach(key => {
   
    if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
    
      formData.append(key, uploadables[key])
    }
  })

 request.body = formData;

  
} else {
  request.headers['Content-Type'] = 'application/json';
  request.body = JSON.stringify({
      query: operation.text,
      variables,
  });
}



return fetch(`${httpEndPoint}`, request)
.then(response => {
 
    if (response.status === 200) {
        return response.json();
    }
    return response.json();
})
.catch(error => {
    console.log(error);
});
}



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

