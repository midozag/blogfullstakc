import React from 'react'
import { Navbar, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai' 

export default function Header() {
  return (
    
    <Navbar className='border-b-2 py-2 px-10'>
        <Link to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold'
        >
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
           via-purple-500 to-pink-500 rounded-lg'> Mehdi's</span>
          Blog
        </Link>
      
      <form action="">
      <TextInput
       type='text'
       placeholder='Search..'
       rightIcon={AiOutlineSearch}
      >

      </TextInput>
      </form>
      </Navbar>
  )
}
