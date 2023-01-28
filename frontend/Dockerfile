FROM node:slim

ENV NODE_ENV=production

# Create app directory
WORKDIR /home/node

# Install app dependencies
COPY --chown=node:node package*.json ./

# RUN npm install
RUN npm install --force && npm ci --only=production --force

# Bundle app source
COPY --chown=node:node . .

# Expose the port
EXPOSE 3000

RUN npm run build && \
    npm install -g serve

# Use the node user to run the app
USER node:node

CMD [ "serve", "-s", "build" ]
