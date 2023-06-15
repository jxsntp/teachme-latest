import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export default function Example() {
  
  const handleSlideChange = () => {
    setActiveCard;
  };
  const [activeCard, setActiveCard] = useState(0);
  
  const cards = [
    {
      image:
        "/images/python1.svg",
      title: "Buudi Sumaker",
      subtitle: "Python programmer with 99 years of experience",
      description:
        "I have studied Python for the longest time. I have also used it in almost of my project, be it a huge collaborative project with big company, or personal side hustle. This mean I have a wide understanding of how to use Python to its fullest.",
      link: "/appointment/buudisumaker",
    },
    {
        image:
          "/images/python2.svg",
        title: "Queenie",
        subtitle: "Lyft launching cross-platform service this week",
        description:
          "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.",
        link: "/appointment/queenie",
      },
      {
        image:
          "/images/python3.svg",
        title: "Lord Bawi",
        subtitle: "Lyft launching cross-platform service this week",
        description:
          "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.",
        link: "/appointment/lordbawi",
      },
    // Add more card objects as needed
  ];

  

  return (
    <div className="">
      <section className="bg-white py-12 h-1/3 md:h-1/2">
        <div className="relative h-full">
          <div className="text-black py-12 px-64 flex items-center">
            <Image
                src="/images/python-original.png"
                width={50}
                height={50}
                alt="python_logo"
                className="object-cover"
            /> 
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-2 px-2"
            >
              Python
            </Typography>
          </div>
          <Carousel
            selectedItem={activeCard}
            onChange={handleSlideChange}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            className="carousel-wrapper"
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div
                  className={`${
                    hasPrev ? 'absolute' : 'hidden'
                  } top-0 bottom-0 left-0 flex justify-center items-center p-10 opacity-50 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <Image 
                    src="/images/leftArrow.svg"
                    width={100}
                    height={100}
                    alt = "leftArrow"
                    className="w-20 h-20 text-white" />
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div
                  className={`${
                    hasNext ? 'absolute' : 'hidden'
                  } top-0 bottom-0 right-0 flex justify-center items-center p-10 opacity-50 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <Image 
                    src="/images/rightArrow.svg"
                    width={100}
                    height={100}
                    alt = "rightArrow"
                    className="w-20 h-20 text-white" />
                </div>
              );
            }}
          >
            {cards.map((card, index) => (
            <div key={index} className="carousel-card flex-col items-center px-64">
              <Card className="bg-purple-200">
                <CardBody className="flex">
                  <div>
                    <Image
                      src={card.image}
                      width={50}
                      height={50}
                      alt="image"
                      className="w-2/5  m-0 rounded-r-none object-cover"
                    />
                  </div>
                  <div>
                    <Typography
                      variant="h6"
                      color="blue"
                      className="uppercase mb-4"
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="h4"
                      color="blue-gray"
                      className="mb-2"
                    >
                      {card.subtitle}
                    </Typography>
                    <Typography color="gray" className="font-normal mb-8">
                      {card.description}
                    </Typography>
                  </div>
                </CardBody>
                <div className="flex-col items-center px-56"><a href={card.link} className="inline-flex justify-center items-center mt-4 py-3 px-5 text-base font-large text-center text-[#4700C6] rounded-xl bg-[#FFE873]">
                    <Button variant="text" className="flex items-center gap-2 text-center">
                      Make an Appointment
                    </Button>
                  </a></div>
                
              </Card>
            </div>
            ))}
          </Carousel>
        </div>
      </section>
      
    </div>
  );
}
