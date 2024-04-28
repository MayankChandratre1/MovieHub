
let movies1 = [
    {
        name:"Apurva",
        date:"15 November 2023",
        genre:"Thriller/Drama",
        runtime:"1h 35m",
        description:"Kidnapped by a notorious gang of Chambal dacoits while on her way to meet the man of her dreams, Apurva must overcome extraordinary dangers in order to make her escape and survive.",
        cast:"Tara Sutaria; Rajpal Naurang Yadav; Abhishek Banerjee; Dhairya Karwa; Sumit Gulati"
    },
    {
        name:"Bhool Bhulaiyaa 2",
        date:"20 May 2022",
        genre:"Horror/Comedy",
        runtime:"2h 25m",
        description:"After an accident, Ruhan agrees to accompany Reet back home. However, due to a series of untimely incidents, he gets caught up in her family's skirmish.",
        cast:"Tabu, Kartik Aaryan, Kiara Advani, Rajpal Naurang Yadav, Amar Upadhyay"
    },
    {
        name:"Chandigarh Kare Aashiqui",
        date:"10 December 2021",
        genre:"Romance/Drama",
        runtime:"1h 56m",
        description:"Manu and Maanvi's passionate love affair comes to a grinding halt after Manu learns of Maanvi's deeply personal story. Things take a bitter turn when Manu's family members get involved.",
        cast:"Ayushmann Khurrana, Vaani Kapoor, Yograj Singh, Anjan Srivastav,Kanwaljeet Singh"
    },
    {
        name:"Chennai Express",
        date:"8 August 2013 ",
        genre:"Comedy/Action",
        runtime:"2h 21m",
        description:"Rahul, a young man, sets out to immerse his late grandfather's ashes at Rameshwaram. However, when he helps Meena, a runaway bride, board a train, he has to face the ire of her criminal family.",
        cast:" Deepika Padukone, Shah Rukh Khan, Sathyaraj"
    },
    {
        name:"Gadar 2",
        date:"11 August 2023",
        genre:"Action/Thriller",
        runtime:"2h 50m",
        description:"When Tara Singh goes missing during a skirmish and is believed to be captured in Pakistan, his son Jeete sets out to rescue him and enters a labyrinth from which they both must escape at all costs.",
        cast:"Anil Sharma, Kamal Mukut, Sunny Deol, Ameesha Patel, Utkarsh Sharma, Gaurav Chopra, Manish Wadhwa, Nana Patekar"
    },
    {
        name:"Housefull 4",
        date:"25 October 2019",
        genre:"Comedy/Action",
        runtime:"2h 22m",
        description:"Three brothers are set to marry three sisters. However, a peek into the distant past reveals to one of the brothers that their brides have been mixed up in their current reincarnation.",
        cast:"Akshay Kumar · Riteish Deshmukh · Bobby Deol · Kriti Sanon · Pooja Hegde · Kriti Kharbanda · Rana Daggubati · Sharad Kelkar"
    },
    {
        name:"Inside Out 2",
        date:"14 June 2024",
        genre:"Family/Comedy",
        runtime:"1h 40m",
        description:"Joy, Sadness, Anger, Fear and Disgust have been running a successful operation by all accounts. However, when Anxiety shows up, they aren't sure how to feel.",
        cast:" Diane Lane, Amy Poehler, Phyllis Smith"
    },
    {
        name:"Jab We Met",
        date:"26 October 2007",
        genre:"Romance/Comedy",
        runtime:"1h 40m",
        description:"Aditya, a heartbroken business tycoon, aimlessly boards a train to escape his depressing life. He meets Geet, a bubbly Punjabi girl, and gets pulled into her crazy life.",
        cast:"  Shahid Kapoor · Kareena Kapoor · Tarun Arora · Dara Singh Randhawa · Pawan Malhotra · Kamal Tiwari · Kiran Juneja · Divya Seth Shah."
    },
    {
        name:"Jawan",
        date:"7 September 2023",
        genre:" Action/Thriller",
        runtime:"2h 49m",
        description:"A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many.",
        cast:"Shah Rukh Khan, Nayanthara, Vijay Sethupathi, Deepika Padukone, Sanjay Dutt"
    },
    {
        name:"Koi Mil Gaya",
        date:" 8 August 2003",
        genre:" Sci-fi/Romance",
        runtime:" 2h 51m",
        description:"Rohit, a youth with a mental disability, befriends an alien. When the police learn about the alien, they try to capture it while Rohit tries his best to protect his new friend.",
        cast:"Rekha, Hrithik Roshan, Preity G Zinta, Prem Chopra, Beena Banerjee."
    },
    {
        name:"Shershaah",
        date:" 12 August 2021",
        genre:"War/Action",
        runtime:"2h 15m",
        description:"Vikram Batra, a young man, dreams of becoming a soldier and falls in love with Dimple. Soon after his training, he climbs the military ranks and contributes to India's victory in the Kargil war.",
        cast:"Sidharth Malhotra, Kiara Advani, Shiv Panditt, Pranay Pachauri"
    },
    {
        name:"Vikram Vedha",
        date:" 21 July 2017",
        genre:" Thriller/Action",
        runtime:"2h 27m",
        description:"Vikram, a pragmatic policeman, and his partner Simon are on the hunt to capture Vedha. When Vedha voluntarily surrenders, he offers to tell Vikram a story, throwing Vikram's life into disarray.",
        cast:"Madhavan, Vijay Sethupathi, Shraddha Srinath, Kathir,; Varalaxmi Sarathkumar"
    },
    {
        name:"Sanam Teri Kasam",
        date:"5 February 2016",
        genre:"Romance/Musical",
        runtime:"2h 27m",
        description:"When Saraswati's father throws her out of the house, Inder stands with her against all odds and this brings them close to each other. However, destiny has its own plans to separate them.",
        cast:"Aditya Shetty, Ujjwala Raut, Ambika Soni, Payal Bhasin,"
    }
]


// let template = `<section class="info">
// <ul>
//    <li class="kanit-bold">Name: <span class="kanit-extralight">${name}</span></li>
//    <li class="kanit-bold">Release Date: <span class="kanit-extralight">${date}</span></li>
//    <li class="kanit-bold">Genre: <span class="kanit-extralight">${genre}</span></li>
//    <li class="kanit-bold">Time: <span class="kanit-extralight">${runtime}</span></li>
//    <li class="kanit-bold">Description: <span class="kanit-extralight">${description}</span></li>
//    <li class="kanit-bold">Cast: <span class="kanit-extralight">
//       ${cast}</span></li>
// </ul>
// </section>
// `

// movies.forEach( movie => {
//     let {name, date, genre, runtime, description, cast} = movie

//     let htmlContent = `<section class="info">
//     <ul>
//        <li class="kanit-bold">Name: <span class="kanit-extralight">${name}</span></li>
//        <li class="kanit-bold">Release Date: <span class="kanit-extralight">${date}</span></li>
//        <li class="kanit-bold">Genre: <span class="kanit-extralight">${genre}</span></li>
//        <li class="kanit-bold">Time: <span class="kanit-extralight">${runtime}</span></li>
//        <li class="kanit-bold">Description: <span class="kanit-extralight">${description}</span></li>
//        <li class="kanit-bold">Cast: <span class="kanit-extralight">
//           ${cast}</span></li>
//     </ul>
//     </section>
//     `

//     console.log(name);
//     console.log(htmlContent);
//     console.log("\n\n");
// })


// let template2 = ` <div class="card">
// <div class="card-img-container">
//   <img src="./assets/images/${image}" alt="image" class="card-img">
// </div>
// <h4 class="movie-title">${name}</h4>
// <p class="desc kanit-regular">${genre}</p>
// <button class="sec-cta learn-more"><a href="${link}">Learn More..</a></button>
// </div>`

let movies = [
    {
        src:"/assets/images/apurva.webp",
        name:"Apurva",
        genre:"Thriller/Drama",
        link:"/pages/apurva.html"
    },
    {
        src:"/assets/images/bhool_bhuliya2.webp",
        name:"Bhool Bhulaiyaa 2",
        genre:"Horror/Comedy",
        link: "/pages/bhoolbhulaiya2.html"
    },
    {
        src:"/assets/images/chandigarh_kare_aashiqi.webp",
        name:"Chandigarh Kare Aashiqui",
        genre:"Romance/Drama",
        link: "/pages/chandigarhkareashiqui.html"
    },
    {
        src:"../assets/images/chennai_express.webp",
        name:"Chennai Express",
        genre:"Comedy/Action",
        link: "/pages/chennaiexpress.html"
    },
    {
        src:"../assets/images/gadar_2.webp" ,
        name:"Gadar 2",
        genre:"Action/Thriller",
        link: "/pages/gadar2.html" 
    },
    {
        src:"../assets/images/housefull4.webp",
        name:"Housefull 4",
        genre:"Comedy/Action",
        link: "/pages/housefull4.html"
        
    },
    {
        src:"../assets/images/InsideOut2.webp",
        name:"Inside Out 2",
        genre:"Family/Comedy",
        link: "/pages/insideout2.html"
    },
    {
        src:"../assets/images/jab_we_met.webp",
        name:"Jab We Met",
        genre:"Romance/Comedy",
        link: "/pages/jabwemet.html" 
    },
    {
        src:"../assets/images/jawan.webp",
        name:"Jawan",
        genre:" Action/Thriller",
        link: "/pages/jawan.html"
    },
    {
        src:"../assets/images/koi mil gaya.webp",
        name:"Koi Mil Gaya",
        genre:" Sci-fi/Romance",
        link: "/pages/koimilgaya.html" 
    },
    {
        src:"../assets/images/shershah.webp",
        name:"Shershaah",
        genre:"War/Action",
        link: "/pages/shershaah.html"
    },
    {
        src:"../assets/images/vikram_vedha.webp",
        name:"Vikram Vedha",
        genre:" Thriller/Action",
        link: "/pages/vikramvedha.html"
    },
    {
        src:"../assets/images/sanam_teri_kasam.webp",
        name:"Sanam Teri Kasam",
        genre:"Romance/Musical",
        link: "/pages/sanamterikasam.html"
        
    }
]

movies.forEach( movie => {
    let {src, name, genre, link} = movie

    let htmlContent = ` <div class="card">
    <div class="card-img-container">
      <img src="${src}" alt="image" class="card-img">
    </div>
    <h4 class="movie-title">${name}</h4>
    <p class="desc kanit-regular">${genre}</p>
    <button class="sec-cta learn-more"><a href="${link}">Learn More..</a></button>
    </div>`

    console.log(name);
    console.log(htmlContent);
    console.log("\n\n");
})