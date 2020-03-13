FROM mhart/alpine-node:11 AS builder
WORKDIR /src
COPY . .
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /src
COPY --from=builder /src/build .
CMD ["serve", "-p", "80", "-s", "."]
