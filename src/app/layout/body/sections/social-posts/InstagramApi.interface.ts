export interface GetPostsResponse {
  data:   Datum[];
  paging: Paging;
}

export interface Datum {
  id:        string;
  media_url: string;
  caption:   string;
  timestamp: string;
  username:  string;
}

export interface Paging {
  cursors: Cursors;
}

export interface Cursors {
  before: string;
  after:  string;
}

export interface GetMediaResponse {
  id:         string;
  media_type: string;
  media_url:  string;
  username:   string;
  timestamp:  string;
}
