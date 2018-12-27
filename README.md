## Why SSR

*SSR(Server-side rendering)* is a solution for better loading content for users on the browser. The traditional way would look something like this:

```
- time
  |
  |  browser requests page
  |          |
  |        pause
  |          |
  |  browser requests js file
  |          |
  |        pause
  |          |
  |  react app boots, requests json from b/e
  |          |
  |        pause
  |          |
  |  content visible!
  |
  | -----------------------------------------
+
```

Using *SSR* we can cut most of this diagram out of the picture. The focus for using SSR is to make content visible as fast as possible by rendering the HTML on the server and then serving the React app for the client:

```
- time
  |
  |  browser requests page
  |          |
  |        pause
  |          |
  |   content visible!
  |
  |
  |
  |
  |
  |
  |
  |
  | -----------------------------------------
+
```

## App Architecture

```
| ------- flow -------- |
| ------- begin ------- |
|                       |
|      API Server       |
|    (Business Logic)   |
|           |           |
|           |           |
|           |           |
|    Rendering Server   |
|      (React App)      |
|           |           |
|           |           |
|           |           |
|    Users Browser      |
|                       |
| ------- flow -------- |
| -------- end -------- |
```

The **API server** will come from a boiler plate code but the **rendering server** will be built from scratch. This architecture will give better insight on why SSR is useful. By leaving the business logic(DB access; validation; auth; logging) to the API server and only consuming that on the rendering server, makes it flexible enough in case the rendering server transitions to a Angular application, for example.