# Use a lighter version of Node as a parent image
FROM node as web
# Set the working directory to /client
WORKDIR /userlist
# copy package.json into the container at /client
COPY package*.json /userlist/
# install dependencies
RUN npm install

RUN npm install react-scripts -g --silent

# Copy the current directory contents into the container at /client
COPY . .

# build production instance
RUN yarn build

# build nginx server
FROM nginx

# Make port 80 available to the world outside this container
EXPOSE 80

COPY from web/userlist/build/ /var/www/html

COPY nginx/default.conf /etc/nginx/conf.d

# Run the app when the container launches
CMD ["nginx", "-g", "daemon off"]