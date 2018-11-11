# sample-node-app
A sample node app.

## Build the Container

`docker build -t my-container .`

## Run the Container

`docker run --rm -it -e PORT=4000 -p 4000:4000 my-container`
