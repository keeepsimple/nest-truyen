FROM node:22.3

# Create app directory
WORKDIR /usr/src/app

# Copy files
COPY . .

# Install app dependencies
RUN npm install

EXPOSE 3000

# run the app
CMD ["npm", "run", "start"]