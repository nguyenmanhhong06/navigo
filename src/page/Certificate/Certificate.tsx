import certificate1 from '../../assets/cer.jpg'
export default function Certificate() {
  return (
    <div className='bg-[#eee8cb]'>
      <div className='pt-[80px]'>
        <div className='mx-auto max-w-[1200px] px-4'>
          <div>
            <p className='text-center font-bold text-[30px] text-[#555555] mt-10 pb-14 max-sm:hidden'>CHỨNG NHẬN</p>
          </div>
          <div className='max-sm:hidden lg:grid grid-cols-3 gap-16'>
            <div className='col-span-1'></div>
            <div className='col-span-1'>
              <div className=''>
                <img src={certificate1} alt='' className='' />
              </div>
            </div>
          </div>
          <div className='max-sm:block lg:hidden'>
            <div className='py-8'>
              <img src={certificate1} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
