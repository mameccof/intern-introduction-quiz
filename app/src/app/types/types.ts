export interface Profile{
  name: string;
  birth_date: string;
  birth_place: string;
  affilition: string;
  icon_url: string;
}

export interface User{
  mailadress: string;
  user_name: string;
  birth_date: string;
  birth_place: string;
  affilition: string;
  icon_url: string;
  questions:any[]
}

export const PROFILE: User =
  {
    user_name:"吉田新",
    birth_date:"2002/05/07",
    birth_place:"福島県",
    affilition:"国際情報工科自動車大学校",
    icon_url:"https://material.angular.io/assets/img/examples/shiba2.jpg",
    mailadress:"",
    questions:[],
  }
