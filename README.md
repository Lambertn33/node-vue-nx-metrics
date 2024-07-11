# NodeVueProm

A node-vue monorepo with NX that displays data from the server, and monitors the Server with prometheus to check the server metrics.

# how to run the project

After cloning the project

- run npm i
- for running the server: npx nx serve server
- for running the UI: npx nx serve ui

the server runs on http://localhost:3000
the ui runs on http://localhost:4200

to check the metrics: http://localhost:3000/metrics

# Test

to test the server: npx nx e2e server-e2e
to test the UI: npx nx e2e ui-e2e
