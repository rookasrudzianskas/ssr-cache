// @ts-nocheck
import request from "graphql-request";

export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const gqlFetcher = (query) =>
  request({
    url: 'https://saltillo.stepzen.net/api/esteemed-horse/__graphql',
    document: query,
    requestHeaders: {
      Authorization:
        'Apikey saltillo::stepzen.net+1000::c5e3ef401778df7e594c5ffa46283fea6ed840d5a4b5f489e81d8ced13cbe9bf',
    },
  });
