// app/page.tsx
import {Button} from '@nextui-org/button'; 
import Nav from '@/components/Navbar';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews'

export default function Page() {
  return (
    <div>
     <Nav/>
     <Hero/>
     <Reviews/>
    </div>
  )
}