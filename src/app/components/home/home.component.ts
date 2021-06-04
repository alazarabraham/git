import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cities =
    [
      {
        cityName: "New York",
        cityDescription: "Located where the Hudson and East rivers empty into one of the world's premier harbours, New York is both the gateway to the North American continent and its preferred exit to the oceans of the globe. Area 305 square miles (790 square km).",
        cityPicture: "https://i.pinimg.com/originals/a9/72/d5/a972d577de9dfd2c304ad6df671d027e.jpg"

      },
      {
        cityName: "London",
        cityDescription: "London, city, capital of the United Kingdom. It is among the oldest of the world's great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. By far Britain's largest metropolis, it is also the country's economic, transportation, and cultural centre.",
        cityPicture: "http://cdn.cnn.com/cnnnext/dam/assets/190912110131-01-trendy-london-restaurants.jpg"

      },
      {
        cityName: "Tokyo",
        cityDescription: "Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous metropolis. It is also one of Japan's 47 prefectures, consisting of 23 central city wards and multiple cities, towns and villages west of the city center. The Izu and Ogasawara Islands are also part of Tokyo.",
        cityPicture: "https://cdn.theculturetrip.com/wp-content/uploads/2013/09/4214974706_c08285fdff_b-1024x768.jpg"

      },
    ]

  ngOnInit(): void {
  }

}
