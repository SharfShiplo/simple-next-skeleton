import { CopyrightIcon } from "../icons/copyright-icon"

const Footer =()=>{
    return (
        <footer className={'h-14 md:h-16'}>
      <div
        className={
          'flex h-14 w-full transform-gpu items-center justify-center md:justify-end border-t border-border-400 bg-gray-800 px-7 py-5 md:h-16 xl:px-16'
        }
      >
        <p className='flex items-center flex-wrap text-red-500'>Copyright&nbsp;<CopyrightIcon className='w-3 h-3 ' />&nbsp;{new Date().getFullYear()}&nbsp;TETON,  All Rights Reserved.</p>
      </div>
    </footer>
    )
}

export default Footer;