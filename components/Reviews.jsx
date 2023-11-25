"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {StarIcon} from './StarIcon';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { FaSlideshare } from "react-icons/fa";

export default function Reviews() {
    let reviews = [
        {
          title: "Hasta la Victoria Siempre: A Gripping Account of the Cuban Revolution",
          review:  `Hasta la Victoria Siempre" is a captivating film that immerses viewers in the tumultuous era of the Cuban Revolution. Through its compelling narrative, the movie provides a vivid depiction of the main causes that fueled this historic uprising, including social inequality, political corruption, and foreign interference. The film skillfully traces the revolution's course, highlighting pivotal events such as the audacious attack on the Moncada Barracks and the guerrilla warfare tactics employed in the Sierra Maestra mountains. It pays tribute to influential figures such as Fidel Castro and Che Guevara, showcasing their unwavering commitment and visionary leadership. With its thought-provoking exploration of the revolution's consequences, from social reforms to international relations, "Hasta la Victoria Siempre" offers a profound understanding of this transformative period in Cuban history`
        },
        {
          title: "Hasta la Victoria Siempre: A Captivating Journey through the Cuban Revolution",
          review: `Step into history with "Hasta la Victoria Siempre," a film that takes audiences on an enthralling journey through the Cuban Revolution. This captivating movie expertly summarizes the main causes that ignited this momentous uprising, shedding light on the socio-economic disparities, political corruption, and external influences that prompted change. From the audacious attack on the Moncada Barracks to the fierce guerrilla warfare tactics employed in the Sierra Maestra mountains, the film brings key events to life. It pays homage to influential personalities like Fidel Castro and Che Guevara, highlighting their unwavering dedication and strategic brilliance. By examining the revolution's consequences, including social reforms and international relations, "Hasta la Victoria Siempre" leaves a lasting impact, inviting viewers to reflect on the revolution's enduring legacy`
        },
        {
          title: "Hasta la Victoria Siempre: Unveiling the Essence of the Cuban Revolution",
          review: `Unveiling the essence of the Cuban Revolution, "Hasta la Victoria Siempre" is a cinematic masterpiece that captivates audiences with its poignant portrayal of this transformative era. The film succinctly summarizes the main catalysts that propelled the revolution, shedding light on the socio-economic disparities, political corruption, and foreign meddling that ignited a fervor for change. It traces the revolution's trajectory, from the audacious attack on the Moncada Barracks to the guerrilla warfare tactics employed in the Sierra Maestra mountains, culminating in the decisive Battle of Santa Clara. Through its intimate portrayal of influential figures like Fidel Castro and Che Guevara, the film showcases their indomitable spirit and profound impact on shaping history. With its exploration of the revolution's consequences on social reforms and international relations, "Hasta la Victoria Siempre" invites viewers to ponder upon the enduring legacy of this revolutionary period.`
        }
      ];
    let profileImages = [
    
        {
            url: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
        },
        {
            url: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
        },
        {
            url: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
        },
    
    ]
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const newIndex = (currentIndex + 1) % reviews.length;
        setCurrentIndex(newIndex);
    };
    
    
    
  return (
    <div className="flex relative flex-row z-20 bg-zinc-900 justify-center ">
        <div className="  -mt-[10%]  ">
          <Card isFooterBlurred className="max-w-[800px] bg-opacity-50 backdrop-blur-lg bg-black">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src={profileImages[currentIndex].url}
                width={60}
              />
              <div className="flex flex-col">
                <p className="text-lg font-bold capitalize">{reviews[currentIndex].title}</p>
                <div className="flex flex-row text-amber-400 text-2xl">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody className="text-[14px] flex-grow p-56">
              <p>{reviews[currentIndex].review}</p>
            </CardBody>
            <Divider/>
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="flex justify-center text-2xl gap-8 items-center">
                    <button onClick={prevSlide}>
                    <BsChevronCompactLeft />
                    </button>
                    <button onClick={nextSlide}>
                    <BsChevronCompactRight />
                    </button>
                </div>
            </CardFooter>   
          </Card>
          </div>
    </div>
  );}
