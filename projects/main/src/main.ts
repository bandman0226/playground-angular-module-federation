import {loadRemoteEntry} from "@angular-architects/module-federation";

// load metadata up front to help with version negotiation between micro front ends
// can point this to an endpoint that has metadata of all micro front ends and only one request.
loadRemoteEntry('http://localhost:5000/remoteEntry.js', 'orders')
  .catch(err => console.log(err))
  .then(_ => import('./bootstrap'))
	.catch(err => console.error(err));
