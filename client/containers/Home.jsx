import React from 'react'
import { Blogbox, Blog } from '../components/home'

const people = [
  {
    id: 1,
    image: "/profile-image.svg",
    name: "Adem ilter ✨",
    username: "@ademilter",
    message: "Tam girişimci olucam çocuk ağlıyor",
  },

  {
    id: 1,
    image: "/profile-1.svg",
    name: "Mehmet Doğan",
    username: "@mehmet_doğan",
    message: "Size bir soru. Şimdi dün bunun içindeki ampulü çıkarıp projeksiyon aletine taktım. Bunların işime yaraması artık mümkün değil. Benzer durumlarda direkt atıyor musunuz böyle şeyleri?",
  },
   {
    id: 1,
    image: "/profile-image.svg",
    name: "Adem ilter ✨",
    username: "@ademilter",
    message: "Tam girişimci olucam çocuk ağlıyor",
  },

  {
    id: 1,
    image: "/profile-image.svg",
    name: "Adem ilter ✨",
    username: "@ademilter",
    message: "Nothing to do now!",
  },

  {
    id: 1,
    image: "/profile-2.svg",
    name: "Mehmet Doğan",
    username: "@mehmet_doğan",
    message: "Size bir soru. Şimdi dün bunun içindeki ampulü çıkarıp projeksiyon aletine taktım. Bunların işime yaraması artık mümkün değil. Benzer durumlarda direkt atıyor musunuz böyle şeyleri?",
  },

  {
    id: 1,
    image: "/profile-image.svg",
    name: "Adem ilter ✨",
    username: "@ademilter",
    message: "Nothing to do now!",
  },

  {
    id: 1,
    image: "/profile-2.svg",
    name: "Mehmet Doğan",
    username: "@mehmet_doğan",
    message: "Size bir soru. Şimdi dün bunun içindeki ampulü çıkarıp projeksiyon aletine taktım. Bunların işime yaraması artık mümkün değil. Benzer durumlarda direkt atıyor musunuz böyle şeyleri?",
  },
  {
    id: 1,
    image: "/profile-image.svg",
    name: "Adem ilter ✨",
    username: "@ademilter",
    message: "Tam girişimci olucam çocuk ağlıyor",
  },
]

export default function Home() {
  return (
    <div>
        <Blogbox/>

        <div>
          {
            people.map((person) =>
              <Blog key={person.id} person={person}/>
            )
          }
          
        </div>
    </div>
  )
}
