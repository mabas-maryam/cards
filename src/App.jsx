import React from 'react'
import {Card} from './component/Card'

const App = () => {
  const celebrities = [
    {
      name: "Angelina Jolie",
      country: "USA",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa607g-pprA7IM2tAaZTT7rrGAU3pc1BK6xA&s",
      lastUpdated: "3 mins ago",
    },
      {
        name: "Tom Cruise",
        country: "USA",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8FbteeKuzWhXI-HI5mkGi5TdVjwVwx55cA&s",
        lastUpdated: "11 mins ago",
      },
      {
        name: "Bimbo Adeyemi",
        country: "Nigeria",
        image: "https://cdn.pmnewsnigeria.com/wp-content/uploads/2023/04/214F6294-BAEB-433A-97FD-C0186777EF3A.jpeg",
        lastUpdated: "24 mins ago",
      },
      {
        name: "John Legend",
        country: "USA",
        image:"https://i.pinimg.com/736x/36/d7/9c/36d79c6228ad0f53b2857f50f7c00841.jpg",
        lastUpdated: "5 mins ago",
      },
      {
        name: "Usher Raymond",
        country: "USA",
        image: "https://st4.depositphotos.com/1729220/26816/i/450/depositphotos_268168814-stock-photo-usher-raymond-attendance-17th-annual.jpg",
        lastUpdated: "69 mins ago",
      },
      {
        name: "Mariah Carey",
        country: "USA",
        image: "https://theblast.prod.media.wordpress.mattersmedia.io/brand-img/123/0x0/2021/11/MEGA585176_014-scaled.jpeg?",
        lastUpdated: "33 mins ago",
      },
      {
        name: "Idris Elba",
        country: "UK",
        image: "https://images.alphacoders.com/101/1016790.jpg",
        lastUpdated: "2 mins ago",
      },
      {
        name: "James Gardiner",
        country: "Ghana",
        image: "https://i0.wp.com/www.ghanacelebrities.com/wp-content/uploads/2019/05/jamesgardinergh-20190525-0001-e1558793128933.jpg?fit=700%2C875&ssl=1",
        lastUpdated: "8 mins ago",
      
      },
      
      {
        name: "Alicia Keys",
        country: "USA",
        image: "https://i.insider.com/5c61d1f1eb3ce80b604191d2?width=800&format=jpeg&auto=webp", 
        lastUpdated: "1 mins ago",
      },
      {
        name: "John Dumelo",
        country: "Ghana",
        image: "https://www.primenewsghana.com/images/2017/july/11/john-dumelo.jpg",
        lastUpdated: "55 mins ago",
      },
      
      {
        name: "Genevive Nenji",
        country: "Nigeria",
        image: "https://insight.ng/wp-content/uploads/2023/07/images-14.jpeg",
        lastUpdated: "24 mins ago",
      },
      {
        name: "Tiwa Savage",
        country: "Nigeria",
        image: "https://wallpapercave.com/wp/wp5560332.jpg",
        lastUpdated: "54 mins ago",
      },
      {
        name: "Ali Nuhu",
        country: "Nigeria",
        image:"https://dailyrealityng.com/wp-content/uploads/2023/05/IMG-20230507-WA0004.jpg", 
        lastUpdated: "3 mins ago",
      },
      {
        name: "Rahama Sadau",
        country: "Nigeria",
        image: "https://pbs.twimg.com/profile_images/1620660168185839618/7XlyDoHl_400x400.jpg",
        lastUpdated: "2 mins ago",
      },
      {
        name: "Bruce Willis",
        country: "USA",
        image: "https://w0.peakpx.com/wallpaper/745/87/HD-wallpaper-bruce-willis-cute-male-accion-movies-actor.jpg",
        lastUpdated: "6 mins ago",
       },
      {
        name: "Jennifer Lopez",
        country: "USA",
        image:  "https://i.pinimg.com/736x/c4/44/34/c4443407782b0e1eedd68f196408a13d.jpg",
        lastUpdated: "7 mins ago", 
      },
      {
        name: "Tracy Chapman",
        country: "USA",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZp7UFlPdQMlYdJtrvG1utZjzDBvdI8qazOA&s",
        lastUpdated: "10 mins ago",
      },
      {
        name: "Denzel Washinton",
        country: "USA",
        image: "https://i.pinimg.com/474x/e9/c9/8a/e9c98a4cdc0d81cf898390d04506078c.jpg",
        lastUpdated: "17 mins ago",
      },
      {
        name: "Michael Jackson",
        country: "USA",
        image: "https://cdn.pixabay.com/photo/2024/02/02/13/41/michael-jackson-8548204_640.jpg", 
        lastUpdated: "1 min ago",
      },
      {
        name: "Priyanka Chopra ",
        country: "India",
        image: "https://wallpapercave.com/wp/wp5186538.jpg", 
        lastUpdated: "9 mins ago",
      },
      

  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 h-screen p-4 overflow-auto'>
      {
        celebrities.map((celebrity) => <Card celebrity={celebrity} />)
      }
    </div>
  )
}

export default App
