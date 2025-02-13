This repository demonstrates a common issue with nested routes in React Router Dom v6.  When using a wildcard path parameter (*) in a nested route, it will take precedence over a more specific parent route, even if the URL matches the parent route exactly. This can lead to unexpected routing behavior. The solution demonstrates how to correct this behavior by reordering or restructuring the routes.