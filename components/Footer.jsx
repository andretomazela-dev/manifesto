'use client';
import Image from 'next/image';

export default function Footer(){
  return (
    <footer className='bg-brand text-white mt-16'>
      <div className='container py-10 flex flex-col items-center gap-6'>
        <Image src='/logo-tomazela-br-fundotransp.png' alt='Tomazela (logo branco)' width={400} height={85} className='h-[85px] w-auto' />
        <p className='text-center text-sm'>Santa Cecília | São Paulo SP</p>
        <div className='flex gap-4 text-sm underline'>
          <a href='mailto:andre@andretomazela.com.br'>andre@andretomazela.com.br</a>
          <a href='https://wa.me/5511985443389' target='_blank'>WhatsApp</a>
          <a href='https://www.linkedin.com/in/tomazela/' target='_blank'>LinkedIn</a>
          <a href='https://instagram.com/tomazelacomunica' target='_blank'>Instagram</a>
        </div>
        <p className='text-xs/relaxed mt-2 opacity-90'>© {new Date().getFullYear()} Tomazela | Estratégia & Comunicação</p>
      </div>
    </footer>
  );
}
