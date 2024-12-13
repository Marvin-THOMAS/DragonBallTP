import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {Character} from "../../models/character";
import {CharacterService} from "../../services/character/character.service";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, HttpClientModule,
  ],
  providers: [CharacterService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent{

  public character?: Character;


  constructor(private characterService: CharacterService) {

    this.getCharacter()
  }

  public getCharacter(){
    this.characterService.getCharacter().subscribe(
      character => {this.character = character},
    )
  }


}
