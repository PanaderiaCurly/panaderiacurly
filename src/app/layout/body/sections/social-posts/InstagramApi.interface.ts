export interface LastPostsResponse {
  data:   Datum[];
  paging: Paging;
}

export interface Datum {
  id:      string;
  caption: string;
  url?:    string;
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
