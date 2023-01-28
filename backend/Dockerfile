FROM node:slim

ENV NODE_ENV=production

# Create app directory
WORKDIR /home/node

# Use the node user to run the app
USER node:node

# Install app dependencies
COPY --chown=node:node package*.json ./

# RUN npm install
RUN npm ci --only=production

# Bundle app source
COPY --chown=node:node . .

# Expose the port
EXPOSE 5000

CMD [ "node", "server.js" ]