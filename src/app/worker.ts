self.onmessage = onMessage;

function onMessage(msg: MessageEvent) {
  postMessage('reply to ' + JSON.stringify(msg.data), '*');
}
