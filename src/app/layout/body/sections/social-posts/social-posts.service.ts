import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, take, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { LastPostsResponse, GetMediaResponse, Datum } from './InstagramApi.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialPostsService {
  private urlBase = environment.igGraph.urlBase
  private _dataMedia!: any[]

  constructor(
    private http: HttpClient
  ) { }

  get dataMedia() {
    return { ...this._dataMedia }
  }

  lastPosts() {
    const url = `${this.urlBase}/me/media`
    const fields = "id,caption"
    const accessToken = "IGQVJVX3E0Ti1VbWV3MjQ0bVRkTGswZA3JuOWRHcHlCNU1Wa2o5WFVuYlVVS3ZAYLW1Pa0t3SVBBdm1DWFdrS2FmSldOa3dKM2plRlNaRjlBSXFrdEFneG1hMTN4dXlhX0xka0YtOG1R"

    return this.http.get<LastPostsResponse>(url, { params: { "fields": fields, "access_token": accessToken } }).pipe(
      map(res => {
        res.data.map(data => {
          this._getMedia(data.id).subscribe((r: any) => {
            if (data.id === r.id) {
              data.url = r.media_url;
            }
          })
        })
        console.log(res.data);
        return res.data;
      }),
      catchError(err => err)
    )
  }

  private _getMedia(id: string) {
    const url = `${this.urlBase}/${id}`
    const fields = "id,media_type,media_url,username,timestamp"
    const accessToken = "IGQVJVX3E0Ti1VbWV3MjQ0bVRkTGswZA3JuOWRHcHlCNU1Wa2o5WFVuYlVVS3ZAYLW1Pa0t3SVBBdm1DWFdrS2FmSldOa3dKM2plRlNaRjlBSXFrdEFneG1hMTN4dXlhX0xka0YtOG1R"

    return this.http.get<GetMediaResponse>(url, { params: { "fields": fields, "access_token": accessToken } }).pipe(
      map(res => {
        return res
      }),
      catchError(err => err)
    )
  }
}
