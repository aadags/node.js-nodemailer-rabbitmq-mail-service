FROM node:16
# Create app directory
RUN mkdir /app
WORKDIR /app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
EXPOSE 7000
CMD [ "npm", "run", "start" ]