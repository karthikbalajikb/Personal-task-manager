# example
# create a production build
FROM mhart/alpine-node AS build
WORKDIR /app
COPY . .
RUN npm run build

#serve the built app
FROM mhart/alpine-node
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/build .
CMD [ "serve", "-p 80", "-s", "."]
