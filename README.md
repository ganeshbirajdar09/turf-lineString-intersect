# TURF Intersection API

The Intersections API finds intersections between a given linestring and a set of randomly spread lines on the plane. It uses Express-NodeJS with TypeScript, Turf.js.

## Installation

- Make sure you have node installed on your machine
- Clone this repository.
- Install dependencies:

```bash
  cd turf-lineString-intersect
  npm install
```

## Run Locally

- Clone the project

```bash
  git clone https://github.com/ganeshbirajdar09/turf-lineString-intersect
```

- Go to the project directory

```bash
  cd turf-lineString-intersect
```

- Install dependencies

```bash
  npm install
```

- Start the server

```bash
  npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `PORT`

- `ACCESS_TOKEN_EXPIRATION_TIME`

## API Reference

### Login

- This endpoint is used to authenticate users and generate an access token.

```http
  POST http://localhost:3000/auth/login
```

**Body**

```typescript
{
  "email": "ganesh@google.com",
  "password": "123"
}
```

**Response
Status**: **_200 OK _**

- Body (in case of successful login):

```json
{
  "accessToken": "your_access_token_here",
  "user": {
    "id": "user_id",
    "role": "user_role"
  }
}
```

**Status**: **_400 Bad Request_**

- Body (in case of invalid credentials):

```json
{
  "error": "Invalid Credentials"
}
```

### Intersection

- This endpoint finds intersections between the provided linestring and a set of randomly spread lines.

```http
  POST http://localhost:3000/lines/intersection
```

**Headers** :

- Bearer Token: YOUR_ACCESS_TOKEN_HERE

**Body**

```typescript
{
  "lineString": {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [longitude, latitude],
        ...
        [longitude, latitude]
      ]
    }
  }
}
```

**Response
Status**: **_200 OK _**

- Body (in case of successful login):

```json
[
  {
    "lineId": "L01",
    "intersection": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [longitude, latitude]
          }
        },
        ...
      ]
    }
  },
  ...
]
```

- Body (in case of no intersections):

```json
[]
```

**Status**: **_400 Bad Request_**

- Body (in case of invalid inestring format)):

```json
{
  "error": "Please provide a valid linestring format"
}
```
