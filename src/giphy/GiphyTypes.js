// @flow

export type Giphy = {
  id: string,
  title: string,
  create_datetime: string,
  images: {
    original: {
      webp: string,
    },
  },
};

export type GiphyResponse = {|
  data: Array<Giphy>,
  meta: {|
    msg: string,
    status: number,
    response_id: string,
  |},
  pagination: {|
    count: number,
    offset: number,
    total_count: number,
  |},
|};
