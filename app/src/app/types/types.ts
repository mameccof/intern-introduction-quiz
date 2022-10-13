export interface User {
  id: number;
  email: string;
  password: string;
  profile_name: string;
  birth_date: string;
  birth_place: string;
  affilition: string;
  icon_url: string;
  questions: Question[];
  username?: string;
}

export interface Question {
  id: number;
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
  profile_name: '',
  birth_date: '',
  password: '',
  birth_place: '',
  affilition: '',
  icon_url: '',
  email: '',
  questions: [],
};
