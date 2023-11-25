"use client"
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'
import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {PlayIcon} from './PlayIcon';

type Props = {}

export default function Hero({}: Props) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const handleOpen = () => {
    onOpen();
  }
  return (
    <div className='min-h-screen relative'>
        <div className='absolute flex flex-col justify-center h-full z-20 md:left-[15%] md:p-5 p-5'>
        <div className='flex justify-between font-semibold lg:text-[20px] md:text-[15px] text-[10px]'>
          <div>
            <span>Historical Drama</span>
            <span className='pl-10'>Political Thriller</span>
          </div>
          <span className='uppercase text-[#292727] font-bold'>A cinema soul film</span>
        </div>
          <h1 className='text-left lg:text-8xl md:text-6xl text-4xl font-bold max-w-[750px]'>Hasta La Victoria Siempre</h1>
          <div className='text-right mt-8 mb-3 uppercase md:text-2xl font-bold'>
          <span className=' text-[#817e62]'>&quot;The power of the people&quot;</span>
        </div>
        <span className='text-right font-bold [word-spacing:5px] lg:text-[15px] md:[text-12px] text-[10px]'><span className='text-[#292727]'>IN CINEMAS</span> JANUARY 2025</span>
        <div className='flex lg:hidden items-center'>
          <Button radius="full" isIconOnly  size="lg" className=' text-white w-12 h-12 border-3 bo bg-transparent border-[#817e62]' onPress={() => handleOpen()}>
            <PlayIcon/>
          </Button>
          <Modal 
              size="5xl"
              backdrop='blur'
              className='h-[80vh]' 
              isOpen={isOpen} 
              onClose={onClose} 
            >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Trailer</ModalHeader>
                      <ModalBody className=' justify-center items-center '>
                      <div style={{position: "relative", width: "fit-content", height:"fit-content"}}>
                          <a style={{position: "absolute", top:"20px", right: "1rem", opacity: 0.8}} href="https://clipchamp.com/watch/ws2NxOTlYPn?utm_source=embed&utm_medium=embed&utm_campaign=watch">
                              <Image as={NextImage} loading="lazy" style={{height:"24px"}} src="https://clipchamp.com/e.svg" alt="Made with Clipchamp" />
                          </a>
                          <iframe allow="autoplay;" style={{border:"none"}} src="https://clipchamp.com/watch/ws2NxOTlYPn/embed" className='h-full w-full'></iframe>
                      </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Action
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
          </Modal>
          <span className='pl-3 uppercase font-semibold text-[15px]'>Watch Trailer</span>
        </div>
        </div>

        <div className='justify-center absolute z-20 h-full left-[75%] hidden lg:flex flex-col'>

        <div>
          <Button radius="full" isIconOnly  size="lg" className=' text-white w-24 h-24 border-3 bo bg-transparent border-[#817e62]' onPress={() => handleOpen()}>
            <PlayIcon/>
          </Button>
          <Modal 
              size="5xl"
              backdrop='blur'
              className='h-[80vh]' 
              isOpen={isOpen} 
              onClose={onClose} 
            >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Trailer</ModalHeader>
                      <ModalBody className=' justify-center items-center '>
                      <div style={{position: "relative", width: "fit-content", height:"fit-content"}}>
                          <a style={{position: "absolute", top:"20px", right: "1rem", opacity: 0.8}} href="https://clipchamp.com/watch/ws2NxOTlYPn?utm_source=embed&utm_medium=embed&utm_campaign=watch">
                              <Image as={NextImage} loading="lazy" style={{height:"24px"}} src="https://clipchamp.com/e.svg" alt="Made with Clipchamp" />
                          </a>
                          <iframe allow="autoplay;" style={{border:"none"}} src="https://clipchamp.com/watch/ws2NxOTlYPn/embed" className='h-[70vh] w-[55vw]'></iframe>
                      </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Action
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
          </Modal>
              <span className='pl-3 uppercase font-semibold text-[15px]'>Watch Trailer</span>
          </div>
        </div>
        <Image
        src='https://cdn.leonardo.ai/users/c0691b72-2e95-4fa4-b766-08f2ae8c295a/generations/32868e6e-44a8-4509-b0c7-c900456b4d47/PhotoReal_Create_a_compelling_AIgenerated_image_that_depicts_a_0.jpg'
        alt="hero_image"
        className="w-screen object-cover h-screen"
        />
    </div>
  )
}