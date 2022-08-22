import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../types/types';

interface quiz{
  question:string
  explanation:string
  selection: {
    sentence:string
    is_correct:boolean
    sort_num:number
  }[]
}[]

//データベースのデータ 一時的に
let questions: {
  question:string,
  explanation:string,
  selection: {
    sentence: string,
    is_correct: boolean,
    sort_num: number,
  }[],
}[] = [
  {
    question : "私が一番幸せに感じる時は？",
    explanation : "動かないだろなーって思って自分が思った通りに機能した時がプログラミングをして楽しい時",
    selection:[
      {
        sentence : "ゲームをしている時",
        is_correct : false,
        sort_num : 1,
      },
      {
        sentence: "ご飯を食べている時",
        is_correct : false,
        sort_num : 2,
      },
      {
        sentence: "初回コンパイルでプログラムが動いたとき",
        is_correct : true,
        sort_num : 3,
      },
      {
        sentence: "寝ている時",
        is_correct : false,
        sort_num : 4,
      },
    ]
  },

  {
    question : "私が特技と呼べないものは？",
    explanation : "家族で遊ぶ時がある。",
    selection:[
      {
        sentence : "バドミントン",
        is_correct : false,
        sort_num : 1,
      },
      {
        sentence: "将棋",
        is_correct : false,
        sort_num : 2,
      },
      {
        sentence: "麻雀",
        is_correct : true,
        sort_num : 3,
      },
      {
        sentence: "PCゲーム",
        is_correct : false,
        sort_num : 4,
      },
    ]
  },

  {
    question : "私が家で一番落ち着く場所は？",
    explanation : "クローゼットの防湿剤の匂いと暗さが好き",
    selection:[
      {
        sentence : "自室",
        is_correct : false,
        sort_num : 1,
      },
      {
        sentence: "クローゼット",
        is_correct : true,
        sort_num : 2,
      },
      {
        sentence: "トイレ",
        is_correct : false,
        sort_num : 3,
      },
      {
        sentence: "お風呂",
        is_correct : false,
        sort_num : 4,
      },
    ]
  },

]





@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:1337/Users/1';  // Web APIのURL

  constructor(
    private http: HttpClient,
  ) { }


  /** サーバーからヒーローを取得する */
  getUser(): Observable<User> {

    return this.http.get<User>(this.userUrl);
  }

}
