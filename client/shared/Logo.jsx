import Link from 'next/link'

export default function Logo() {
  return (
    <div href="/" className="flex justify-between items-center w-fit" passHref>
      <figure className='w-[35px] h-[35px] mr-2'>
        <img src='/blogit.svg' className='' alt="blogit" />
      </figure>
      {/* <Link href="/" passHref>
        <a href="/" className="text-xl font-poppins font-bold text-black">Blogit</a>
      </Link> */}
    </div>
  )
}