import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer(){
    return (
        <div className="border-t border-slate-700 h-14 flex items-center justify-center">
            <p className="font-mono m-5 text-white text-md">Made by Shobhan Srivastava</p>
            <a className='m-2' target='_blank' href="https://github.com/ShobhanSrivastava">
                <FaGithub size='20px' color='white'/>
            </a>
            <a className='m-2' target='_blank' href="https://www.linkedin.com/in/srishobhan/">
                <FaLinkedin size='20px' color='white'/>
            </a>
            <a className='m-2' target='_blank' href="https://www.instagram.com/_sshobhansrivastava_/">
                <FaInstagram size='20px' color='white'/>
            </a>
        </div>
    );
}