import { createServer } from "miragejs";

export const mockServerRun = () => createServer({
  routes () {
    this.post("/api/login", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      if (attrs.username === "Okay" && attrs.password === "okay") {
        return ['Logged in successfully']
      } else {
        return ['logged in failed']
      }
    })
  },
})