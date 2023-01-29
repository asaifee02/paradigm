FROM node:slim

ENV NODE_ENV=production

# Create app directory
WORKDIR /home/node

# Install app dependencies
COPY --chown=node:node package*.json ./

# RUN npm install
RUN npm ci --only=production

# Bundle app source
COPY --chown=node:node . .

# Expose the port
EXPOSE 8800

# Install python and dependencies
RUN apt update && \
    apt install python3 python3-pip -y && \
    ln -s /usr/bin/python3 /usr/bin/python && \
    pip install pandas scikit-learn

# Use the node user to run the app
USER node:node

CMD [ "node", "index.js" ]
