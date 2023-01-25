import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url)
      .pipe(
        tap(res => res),
        tap(res => {
          res.results.map((resPokemons: any) => {

            this.apiGetPokemon(resPokemons.url).subscribe({
              next: (res) => resPokemons.status = res,
              error: (err) => console.log(err)
            });

          });
        })
      );
  }

  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url)
      .pipe(map(res => res));
  }

}
