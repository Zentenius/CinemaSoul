"use client"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {StarIcon} from './StarIcon';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { FaSlideshare } from "react-icons/fa";

export default function Reviews() {
    const [showFullText, setShowFullText] = React.useState(false);

    const handleReadMoreClick = () => {
      setShowFullText(true);
    };
    let reviews = [
      {
        title: "Hasta la Victoria Siempre: A Gripping Account of the Cuban Revolution",
        review:  `Welcome to my latest movie review! Today, I am excited to dive into the world of history with a film that takes us back to the Cuban Revolution. This movie provided an incredible summary and critical analysis of this pivotal moment in history, exploring the main causes, key events, important personalities, and consequences.
        The Cuban Revolution was a turning point in history, and this movie truly captured its essence. It delved into the root causes of the revolution, shedding light on the economic and social inequalities that plagued Cuba at the time. It also took us on a journey through the course of the revolution, from its early stages of guerrilla warfare to the final victory over the Batista regime.
        One of the standout features of this film was its focus on the key events associated with the Cuban Revolution. From the daring attack on the Moncada Barracks to the decisive Battle of Santa Clara, the movie provided a comprehensive overview of the major events that shaped this historic moment. It was both informative and engaging, keeping me on the edge of my seat throughout.
        Of course, no discussion of the Cuban Revolution would be complete without acknowledging the important personalities who played a role in this historic moment. The movie did an excellent job of highlighting the contributions and roles of figures like Fidel Castro, Che Guevara, and Camilo Cienfuegos. Their bravery and determination were truly inspiring to witness.
        Overall, I thought this was an excellent movie that provided a comprehensive overview of the Cuban Revolution. As someone who is deeply interested in history, I found it to be both informative and captivating. However, I understand that some viewers may find it a bit dry or slow-paced, as historical films can sometimes be.
        In terms of my opinion on the Cuban Revolution itself, I believe it was a necessary and important moment in Cuban history. The revolution brought about significant changes in terms of social and economic equality, and it helped to establish Cuba as a major player on the world stage. It is a testament to the power of collective action and the pursuit of justice.
        The film's portrayal of the Cuban Revolution was both educational and thought-provoking. It presented a balanced perspective on the revolution, allowing viewers to form their own opinions while providing them with all the necessary information. I appreciated that it didn't shy away from addressing the challenges and controversies surrounding this historic event.
        The cinematography and production design were also noteworthy aspects of this film. The attention to detail in recreating the settings and atmosphere of 1950s Cuba was impressive. From the vibrant streets of Havana to the rugged mountains where guerrilla fighters hid, every scene felt authentic and immersive.
        In addition to its historical significance, this movie also had a powerful emotional impact. It highlighted the sacrifices made by ordinary people who believed in a better future for their country. The personal stories woven throughout the narrative added depth and humanity to the larger historical events.
        I must commend the filmmakers for their dedication to accuracy and authenticity. It was evident that extensive research went into creating this film, and it paid off. The attention to detail in costume design, set decoration, and dialogue added to the overall credibility of the story being told.
        While I thoroughly enjoyed this movie, I understand that historical films may not be everyone's cup of tea. Some viewers may find them slow-paced or lacking in action. However, I would encourage anyone with an interest in history or a desire to learn more about the Cuban Revolution to give this film a chance. It offers a unique perspective on an important moment in history that shouldn't be overlooked.
        In conclusion, if you are a history enthusiast or simply looking for a thought-provoking movie to watch, I highly recommend checking out this film about the Cuban Revolution. It is informative, engaging, and provides a great overview of one of the most important moments in modern history. Grab some popcorn and get ready to be transported back in time!        
        `
      },
      {
        title: "Hasta la Victoria Siempre: A Captivating Journey through the Cuban Revolution",
        review: `Are you a history buff looking for your next adventure? Look no further than the captivating story of the Cuban Revolution!
        This remarkable event, which forever changed the course of Cuba and the wider Caribbean, is a tale of passion, courage, and the unyielding spirit of a nation fighting for its freedom. From the audacious attack on the Moncada Barracks in 1953 to the triumphant entry into Havana in 1959, each moment was a testament to the unwavering determination of the revolutionaries.
        Led by the charismatic Fidel Castro and the iconic guerrilla leader Che Guevara, the revolutionaries captured the hearts of the Cuban people and inspired a generation. Their commitment to social justice and their determination to create a better future for their nation are truly inspiring.
        The Cuban Revolution was not just a military campaign; it was a movement that sought to address the deep-rooted inequalities and injustices that plagued Cuban society. It was a fight against imperialism and exploitation, and a quest for self-determination.
        Of course, it's important to acknowledge that the Cuban Revolution also had its share of controversies and complexities. The restrictions on personal freedoms and political dissent that followed in its wake have been subjects of debate. Nevertheless, it is undeniable that the revolution brought about significant positive changes for Cuba and its people.
        Internally, it led to sweeping social and economic reforms, including the nationalization of industries and the establishment of universal healthcare and education systems. These reforms aimed to provide equal opportunities for all Cubans, irrespective of their social or economic background. The revolution also prioritized land reform, redistributing land from large estates to peasants and small farmers.
        Externally, the Cuban Revolution sparked a wave of revolutionary fervor throughout Latin America. It inspired other nations to rise up against oppressive regimes and fight for their own independence and social justice. The revolution became a symbol of hope and resistance for many people across the region.
        As we reflect on this remarkable chapter in history, let us be inspired by the courage and determination of those who fought for a better Cuba. The Cuban Revolution is a gripping tale that deserves its place on the silver screen. It is a story of hope, resilience, and the power of ordinary individuals to effect extraordinary change.
        Imagine watching this epic story unfold on the big screen – the daring attacks, the intense battles, and the unwavering spirit of the revolutionaries. It would be a cinematic experience like no other, transporting us back in time and allowing us to witness firsthand the events that shaped Cuba's destiny.
        So grab your popcorn and get ready for an exciting journey back in time. Let's delve into this captivating story together and be reminded of the legacy left by those who fought for a better future for their nation.
        The Cuban Revolution is not just a piece of history; it is a testament to the power of collective action and the resilience of the human spirit. It reminds us that change is possible, even in the face of seemingly insurmountable odds.
        As we watch this story unfold on the silver screen, let us be inspired to stand up for what we believe in and fight for a better future. Let us remember that ordinary individuals have the power to effect extraordinary change. The Cuban Revolution is a story that deserves to be told, and it is up to us to ensure that its lessons are not forgotten.
        So sit back, relax, and enjoy this thrilling journey back in time. Let the story of the Cuban Revolution inspire you to make a difference in your own life and in the world around you. Together, we can create a future that is worthy of those who fought so bravely for their ideals.
        
        `
      },
      {
        title: "Hasta la Victoria Siempre: Unveiling the Essence of the Cuban Revolution",
        review: `Hey there movie lovers! Today we're talking about a classic flick that's been making waves since the 1950s - the one and only Cuban Revolution!
        This movie has everything you could want in a political drama - action, suspense, and a whole lot of bearded dudes. Let's dive into our review, shall we?
        First up, let's start with a brief history lesson. The Cuban Revolution, which took place between 1953 and 1959, was a defining moment in Cuban history. It all started with a group of rebels who were fed up with the corrupt regime of Fulgencio Batista. Led by the iconic figures of Che Guevara and Fidel Castro, these rebels fought tirelessly to overthrow Batista and bring about social and political change in Cuba.
        Now, let's talk about the movie itself. The Cuban Revolution, as a film, does an excellent job of capturing the essence of this historical event. It takes you on a journey through the struggles and triumphs of the rebels, showcasing their determination and resilience in the face of adversity. The action sequences are intense and gripping, keeping you on the edge of your seat throughout the film.
        One of the standout aspects of this movie is the performances. The actors who portray Che Guevara and Fidel Castro do an outstanding job of bringing these historical figures to life. They capture their charisma, their passion, and their unwavering commitment to their cause. You can't help but be captivated by their performances.
        Another thing worth mentioning is the cinematography. The movie beautifully captures the landscapes of Cuba, from the lush countryside to the bustling streets of Havana. The visuals are stunning and add an extra layer of depth to the film. 
        Now, let's address some of the criticisms that have been raised about this movie. Some argue that it romanticizes the revolution and fails to fully explore the complexities and controversies surrounding it. While it's true that the movie focuses more on the heroic aspects of the revolution, it still provides enough context for viewers to understand the broader historical context.
        It's also important to note that no movie can fully capture the complexity of a historical event like the Cuban Revolution. It's a complex and multifaceted event that has had far-reaching implications for Cuba and the world. So while this film may not delve into every aspect of the revolution, it still serves as an excellent introduction to this crucial period in Cuban history.
        One of the things that make this movie so compelling is its portrayal of Che Guevara. As one of the most iconic figures of the revolution, Guevara is often portrayed as a larger-than-life hero. However, this movie does an excellent job of humanizing him, showing his flaws and struggles as well as his strengths. This nuanced portrayal makes him all the more compelling as a character.
        Another thing that sets this movie apart is its depiction of the relationship between Che Guevara and Fidel Castro. While they are often portrayed as close allies in history books and popular culture, this film shows that their relationship was more complicated than that. They had their differences and disagreements, but ultimately they shared a common goal - to bring about change in Cuba.
        The Cuban Revolution also does an excellent job of highlighting the role of women in the revolution. While they are often overlooked in discussions of this historical event, women played a crucial role in the fight against Batista's regime. This movie does an excellent job of showcasing their contributions and highlighting their importance in this struggle.
        In conclusion, The Cuban Revolution is a must-watch for anyone interested in political dramas or Cuban history. It's a gripping film that captures the essence of this pivotal moment in history while also providing nuanced portrayals of its key figures. Whether you're a history buff or just looking for a good movie to watch, this one is definitely worth checking out!
         
        `
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
                className="nd:h-[40px] "
                radius="sm"
                src={profileImages[currentIndex].url}
                width={60}
              />
              <div className="flex flex-col">
                <p className="md:text-lg text-[15px] font-bold capitalize">{reviews[currentIndex].title}</p>
                <div className="flex flex-row text-amber-400 text-[15px]">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
              </div>
            </CardHeader>
            <CardBody className="text-[14px] flex-grow">
              <p>{showFullText ? reviews[currentIndex].review : `${reviews[currentIndex].review.slice(0, 123)}...`}</p>
              {!showFullText && 
              <Link href="#" onClick={handleReadMoreClick}>Read More</Link>
              }
            </CardBody>
            <CardFooter className="justify-center before:bg-white/10 border-white/20 overflow-hidden py-1  w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
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
