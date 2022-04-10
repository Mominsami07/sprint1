import React from 'react'

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
        <footer className='w-100 bg-light text-center footer my-5'>
            <p>Copyright &copy; {year}. All Rights Reserves | Terms and Conditions applied</p>
        </footer>
    </>
  )
}

export default Footer