import { Injectable } from '@angular/core';
import {Character} from "../../models/character";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private BASE_URL: string = 'https://dragonball-api.com/api';

  constructor(private http: HttpClient) {}

  getCharacter(){
    return this.http.get<Character>(`${this.BASE_URL}/characters/1`)
  }
}
