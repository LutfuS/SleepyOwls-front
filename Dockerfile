ARG NODE_VERSION=20.15.0-alpine

FROM node:${NODE_VERSION} AS deps
USER node
WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm ci

FROM deps AS development
COPY --chown=node:node ./ ./
# copy script to install dependencies after container is up
COPY --chown=node:node scripts/install-docker.sh /usr/local/bin/
# give permission to execute the script
RUN chmod +x /usr/local/bin/install-docker.sh
EXPOSE 3000
# run the script to install dependencies after container is up, if only the node_module folder is empty
ENTRYPOINT ["install-docker.sh"]
CMD ["npm", "run", "dev"]
