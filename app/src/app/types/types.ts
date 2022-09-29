export interface Profile {
  name: string;
  birth_date: string;
  birth_place: string;
  affilition: string;
  icon_url: string;
}

export interface User {
  id: number;
  mailadress: string;
  password: string;
  user_name: string;
  birth_date: string;
  birth_place: string;
  affilition: string;
  icon_url: string;
  questions: any[];
}

export interface Question {
  id?: number;
  question: string;
  explanation: string;
  selection: Selection[];
  order: number;
  user?: number;
}

export interface Selection {
  id?: number;
  sentence: string;
  is_correct: boolean;
  sort_num: number;
}

export const PROFILE: User = {
  id: 0,
  user_name: '吉田新',
  birth_date: '2002/05/07',
  password: 'aiueo',
  birth_place: '福島県',
  affilition: '国際情報工科自動車大学校',
  icon_url: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  mailadress: '',
  questions: [],
};
