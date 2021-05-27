// @ts-nocheck
import { Server, Model, Response } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {
    const server = new Server({
        environment,

        models: {
            user: Model
        },

        seeds(server) {
            server.create("user", { username: "mitja.jancic", password: "test" });
        },

        routes() {
            this.urlPrefix = process.env.VUE_APP_BASE_API_URL;
            this.namespace = "api"

            this.post("/Auth/Authenticate", (schema, request) => {
                const body = JSON.parse(request.requestBody);
                const user = schema.users.findBy({ username: body.username, password: body.password });

                if (user !== null) {
                    return new Response(200,
                        { some: 'header' },
                        {
                            "userId": 0,
                            "userLevel": "ViewOnlyUser",
                            "token": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3"
                        });
                } else {
                    return new Response(401,
                        { some: 'header' },
                        {
                            "error": "invalid_client",
                            "message": "Invalid user credentials."
                        });
                }
            });

        },
    })

    return server;
}
