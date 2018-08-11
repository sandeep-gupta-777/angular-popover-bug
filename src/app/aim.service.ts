import { Injectable } from '@angular/core';
import {IAIModule} from '../interfaces/ai-module';
import {ServerService} from './server.service';
import {ConstantsService} from './constants.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AimService {

  public aiModules$:Observable<IAIModule[]>;
  // private aiModules:IAIModule[] =  [
  //   {
  //     "id": "Spacy NER",
  //     "type": "item",
  //     "module": "ner",
  //     "library": "spacy"
  //   },
  //   {
  //     "id": "Spacy Parts of Speech",
  //     "type": "item",
  //     "module": "pos",
  //     "library": "spacy"
  //   },
  //   {
  //     "id": "Spacy Parse Tree",
  //     "type": "item",
  //     "module": "parsetree",
  //     "library": "spacy"
  //   },
  //   {
  //     "id": "IMIbot Spell Check",
  //     "type": "item",
  //     "module": "spell_check",
  //     "library": "botman_textblob"
  //   },
  //   {
  //     "id": "Spacy Word Tokenization",
  //     "type": "item",
  //     "module": "word_tokenization",
  //     "library": "spacy"
  //   },
  //   {
  //     "id": "NLTK Sentence Tokenization",
  //     "type": "item",
  //     "module": "sentence_tokenization",
  //     "library": "nltk"
  //   },
  //   {
  //     "id": "Spacy Sentence Tokenization",
  //     "type": "item",
  //     "module": "sentence_tokenization",
  //     "library": "spacy"
  //   },
  //   {
  //     "id": "Spacy Lemmatization",
  //     "type": "item",
  //     "module": "lemmatization",
  //     "library": "spacy"
  //   },
  //   {
  //     "id": "Spacy Chunking",
  //     "type": "item",
  //     "module": "chunking",
  //     "library": "spacy"
  //   },
  //   {
  //     "id": "Azure Text to Speech",
  //     "type": "item",
  //     "module": "texttospeech",
  //     "library": "azure"
  //   },
  //   {
  //     "id": "Amazon Text to Speech",
  //     "type": "item",
  //     "module": "texttospeech",
  //     "library": "amazon"
  //   },
  //   {
  //     "id": "Google Text to Speech",
  //     "type": "item",
  //     "module": "texttospeech",
  //     "library": "google"
  //   },
  //   {
  //     "id": "Google Speech to Text",
  //     "type": "item",
  //     "module": "speechtotext",
  //     "library": "google"
  //   }
  //   ];
  constructor(
    private serverService:ServerService,
    private constantsService:ConstantsService
  ) {
    let url = this.constantsService.getAllPipelineModuleUrl();
    this.aiModules$ = this.serverService.makeGetReq<{objects:IAIModule[]}>({url})
      .map(value => value.objects)
    this.aiModules$
      .subscribe((value)=>{
        // debugger;
        console.log(value);
      })
  }

  getModules():Observable<IAIModule[]>{
    return this.aiModules$;
  }

  // getModuleById(id:string):IAIModule{
  //   for(let i=0; i< this.aiModules.length; ++i){
  //     if(this.aiModules[i].id===id){
  //       return this.aiModules[i];
  //     }
  //   }
  // }

}
