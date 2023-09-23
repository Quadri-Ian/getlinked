import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from 'components/navbar.js';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">


      {/* Hero div (Mobile) */}
      <div className="relative hero text-white pt-6 pb-0 ">
        <h1 className="relative text-center lg:text-right  px-8 italic md:text-2xl lg:text-4xl">Igniting a revolution in HR innovation</h1>
        <Image
        src="/Vector4.svg"
        alt='underline'
        width={40}
        height={40}
        className='w-[30%]  md:w-[20%] absolute md:right-44 lg:right-10 lg:w-[25%] right-10'
        />
      <div className='space-y-4 lg:flex w-full lg:border-b-[1px]'>
        <div className='px-10 md:px-24 text-center lg:ml-20 xl:ml-36 lg:text-left pt-10 md:pt-16 lg:px-0 w-full space-y-8 xl:space-y-20'>
        <div className=" space-y-4">
          <div className="relative lg:">
          <h2 className='relative text-3xl md:text-5xl lg:text-6xl font-bold xl:text-[80px]'>getlinked Tech
          <Image src="/bulb.png" alt="Lightbulb" width={30} height={30} className="absolute -top-3 right-14 md:right-[135px] lg:right-14 xl:right-[85px] md:-top-8 xl:-top-12 w-4 md:w-8 xl:w-12" /> 
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl flex-nowrap whitespace-nowrap font-bold lg:w-full xl:text-[80px]">
             Hackathon <span className='text-techpurple'>1.0</span>
            <Image src="/chain.png" alt="Clip" width={100} height={100} className="inline w-6 md:w-12 lg:w-16 xl:w-20" /> 
            <Image src="/fire.png" alt="Fire" width={100} height={100} className="inline w-6 md:w-12 lg:w-16 xl:w-20" />
          </h2>
        </div>
        <p className="text-white text-sm md:text-lg lg:text-1xl xl:text-2xl md:px-20 lg:px-0">Participate in getlinked Tech Hackathon 2023, stand a chance to win a Big prize</p>
        <Link className="px-12 rounded-md py-3 bg-gradient-to-r from-techpink to-techpurple text-white" href="/register">
                Register
          </Link>        
          </div> 
      <div className="numberment text-3xl lg:text-7xl  text-white">00<span className='text-sm'>H  </span>00<span className='text-sm'>M  </span>00<span className='text-sm'>S</span></div>                     
        </div>


      <div className="relative text-white flex w-full">
        <div className=" ">
          <Image 
          src="/Hackathonguy.png" 
          alt="Hero Image" 
          width={828} height={715}
          className='object-fit'
          />

          <Image 
          src="/imageover.png" 
          alt="Hero Image" 
          width={500} height={500}
          className='absolute top-0 w-full h-full object-contain'
          />
          
        </div>
      </div> 
      </div>     

      </div>

      <div  className='flex flex-col lg:flex-row w-full my-4 px-10 space-y-8 items-center pb-12 border-b-[1px]'>
        <div className='relative flex-1 '>
            <Image
            src='/bigidea.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-full h-full object-cover'
            />
            <p className='text-white text-sm w-20 text-center absolute top-1/2 left-1/3'>The Big idea!</p>
        </div>
        <div className='text-center flex-1'>
          <div className='text-white text-lg'>
            <h3>Introduction to getlinked <span className='text-techpurple'>techHackathon 1.0</span></h3>
          </div>
          <p className='text-white text-sm'>
                      Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as 
            day: to shape the future. Whether you're 
            a coding genius, a design maverick, or a 
            concept wizard, you'll have the chance to transform your ideas into reality. Solving 
            real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>

      <div  className='flex flex-col lg:flex-row w-full my-4 pb-12 px-10 space-y-8 items-center border-b-[1px]'>
        <div className=' flex-1 '>
            <Image
            src='/lady.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-full h-full object-cover'
            />
        </div>
        <div className='text-center flex-1'>
          <div className='text-white text-lg'>
            <h3>Rule an <br/><span className='text-techpurple'>Guidelines</span></h3>
          </div>
          <p className='text-white text-sm'>
                        Our tech hackathon is a melting pot of 
              visionaries, and its purpose is as clear as day:
              to shape the future. Whether you're a coding
              genius, a design maverick, or a concept 
              wizard, you'll have the chance to transform 
              your ideas into reality. Solving real-world 
              problems, pushing the boundaries of 
              technology, and creating solutions that can 
              change the world, that's what we're all about!
          </p>
        </div>
      </div>

      <div  className='flex flex-col lg:flex-row w-full my-4 pb-12 px-10 space-y-8 items-center border-b-[1px]'>
        <div className=' flex-1 '>
            <Image
            src='/twopersons.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-full h-full object-cover'
            />
        </div>
        <div className='text-center flex-1 text-sm'>
          <div className='text-white text-lg'>
            <h3>Rule an <br/><span className='text-techpurple'>Guidelines</span></h3>
          </div>
          <div className='text-center text-sm space-y-3'>

          <p className='text-white text-sm'>
          <span className='text-techpink'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the 
          solution. Consider whether it addresses a 
          real-world problem in a novel way or introduces innovative features.
          </p>
          
          <p className='text-white text-sm'>
          <span className='text-techpink'>Functionality:</span> Assess how well the solution works. Does it 
          perform its intended functions effectively and without major issues? Judges would consider the 
          completeness and robustness of the solution.
          </p>

          <p className='text-white'>
          <span className='text-techpink'>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a 
          significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
          </p>

          <p className='text-white'>
          <span className='text-techpink'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, 
          the use of advanced technologies or algorithms, and the scalability of the solution.
          </p>

          <p className='text-white'>
          <span className='text-techpink'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any 
              other competition-specific requirements.
          </p>          
          </div>

          <button className="px-12 rounded-md py-3 bg-gradient-to-r from-techpink  to-techpurple text-white">Read More</button>


        </div>
      </div>

      <div  className='flex flex-col lg:flex-row w-full my-4 pb-12 px-10 space-y-8 items-center border-b-[1px]'>

        <div className='text-center flex-1'>
          <div className='text-white text-lg'>
            <h3>Frequently Ask<br/><span className='text-techpurple'>Question</span></h3>
          </div>
          <p className='text-white text-sm'>
          We got answers to the questions that you might
          want to ask about getlinked Hackathon 1.0
          </p>

          <div>
            <p>
            Can I work on a project I started before the hackathon?
            </p>

          </div>
        </div>

        <div className=' flex-1 '>
            <Image
            src='/thinking.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-full h-full object-cover'
            />
        </div>
      </div>

      <div>
        <div className='pb-20 text-white text-center'>
          <h4>Timeline</h4>
          <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
        </div>
        {/* mobile Timeline */}
        <div className='space-y-3 lg:hidden'>

        <div className='flex h-28'>
        <div className='flex flex-col justify-start space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to registerr
          </p>            
          </div>

        <div className=''>
          <p>November 18, 2023</p>
        </div>          
        </div>     
       
        </div>

        <div className='flex h-28'>
        <div className='flex flex-col justify-start space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5>Teams Registration begins</h5>
          <p>
          Interested teams can now show their interest in the
          getlinked tech hackathon 1.0 2023 by proceeding to register
          </p>
           
          </div>
        <div className='pt-4'>
          <p>November 18, 2023</p>
        </div>           
        </div>  

       
        </div>

        <div className='flex h-28'>
        <div className='flex flex-col justify-start space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5>Teams Registration ends</h5>
          <p>
          Interested Participants are no longer Allowed
              to register
          </p>
             
          </div>
        <div className='pt-4'>
          <p>November 18, 2023</p>
        </div>         
        </div>  

       
        </div>

        <div className='flex h28'>
        <div className='flex flex-col justify-start space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5>Announcement of the accepted teams and ideas</h5>
          <p>
          All teams whom idea has been accepted into 
          getlinked tech hackathon 1.0 2023 are formally 
          announced
          </p>            
          </div>

        <div className='pt-4'>
          <p>November 18, 2023</p>
        </div>          
        </div>  

       
        </div>

        <div className='flex h-28'>
        <div className='flex flex-col justify-start space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5>Getlinked Hackathon 1.0 Offically Begins</h5>
          <p>
          Accepted teams can now proceed to build 
their ground breaking skill driven solutions
          </p>            
          </div>

        <div className='pt-4'>
          <p>November 18, 2023</p>
        </div>          
        </div>  

       
        </div>

        <div className='flex h-28'>
        <div className='flex flex-col justify-start space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5>Demo Day</h5>
          <p>
          Teams get the opportunity to pitch their 
          projects to judges. The winner of the 
          hackathon will also be announced on this day
          </p>            
          </div>
        <div className='pt-4'>
          <p>November 18, 2023</p>
        </div>          
        </div>  

       
        </div>          
        </div>


      </div>

        {/* pc timeline */}
      <div className='hidden text-[16px] px-24 space-y-3 lg:block'>

      <div className='flex h-[130px] space-x-12 w-full'>
        <div className=' text-white px-3 flex-1 text-right self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div>
             
        <div className='pt-4 flex-1 text-left text-techpurple self-end '>
          <p>November 18, 2023</p>
        </div> 
        </div>

        <div className='flex h-[130px] space-x-12 w-full'>
        <div className='text-techpurple text-right pt-4 flex-1 self-end mr-12'>
          <p>November 18, 2023</p>
        </div> 

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div>
             
        <div className=' text-white px-3 flex-1 text-left self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>
        </div>
        <div className='flex h-[130px] space-x-12 w-full'>
        <div className=' text-white px-3 flex-1 text-right self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div>
             
        <div className='pt-4 flex-1 text-left text-techpurple self-end '>
          <p>November 18, 2023</p>
        </div> 
        </div>

        <div className='flex h-[130px] space-x-12 w-full'>
        <div className='text-techpurple text-right pt-4 flex-1 self-end mr-12'>
          <p>November 18, 2023</p>
        </div> 

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div>
             
        <div className=' text-white px-3 flex-1 text-left self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>
        </div>

        <div className='flex h-[130px] space-x-12 w-full'>
        <div className=' text-white px-3 flex-1 text-right self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div>
             
        <div className='pt-4 flex-1 text-left text-techpurple self-end '>
          <p>November 18, 2023</p>
        </div> 
        </div>

        <div className='flex h-[130px] space-x-12 w-full'>
        <div className='text-techpurple text-right pt-4 flex-1 self-end mr-12'>
          <p>November 18, 2023</p>
        </div> 

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div>
             
        <div className=' text-white px-3 flex-1 text-left self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>
        </div>
      </div>

      {/* prizes */}
      <div className='mt-10'>
        <div className='text-white text-center lg:text-left items-end px-8 lg:px-24 justify-end'>
          <h5 className='text-[20px] lg:text-[32px]'>Prizes and <br/> <span className='text-techpurple'>Rewards</span></h5>
          <p className='text-lg'>Highlight of the prizes or rewards for winners 
            and for participants.
          </p>
        </div>

      <div className='flex flex-col lg:flex-row px-6 xl:pt-24 lg:space-x-2 space-y-12'>
        <div className='lg:flex-1'>
        <Image
            src='/cup.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-full h-full object-cover'
            />
        </div>

        <div className='flex space-x-6 pt-12 w-full items-center lg:flex-1 justify-end'>
          <div className='card relative h-[125px] w-[90px] lg:w-[110] lg:h-[155px]  xl:w-[212px] xl:h-[296px] flex text-[12px] flex-col justify-center items-center text-white  border rounded-lg border-techpurple'>
          <Image
            src='/silver_medal.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-20 h-20 xl:w-[180px] xl:h-[180px] absolute -top-[40%] object-cover'
            />
          <p className='xl:text-[36px] lg:text-lg'>2nd</p>
          <p className='xl:text-[24px] '>Runner</p>
          <p className='text-techpurple text-sm lg:text-lg xl:text-[36px]'>N300,000</p>
          </div>

          <div className='card relative h-[147px] w-[110px] lg:h-[170px] xl:w-[212px] xl:h-[346px] flex text-[12px] flex-col justify-center items-center text-white  border rounded-lg border-techpurple'>
          <Image
            src='/gold_medal.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-[125px] h-[125px] xl:w-[296px] overflow-visible xl:h-[296px]  absolute  -top-[55%] object-cover'
            />
          <p className='xl:text-[36px] lg:tex-lg'>2nd</p>
          <p className='xl:text-[24px] lg:text-lg'>Runner</p>
          <p className='text-techpurple text-sm lg:text-lg xl:text-[36px]'>N300,000</p>
          </div>

          <div className='card relative h-[125px] w-[90px] lg:w-[110] lg:h-[155px]  xl:w-[212px] xl:h-[296px] flex text-[12px] flex-col justify-center items-center text-white  border rounded-lg border-techpurple'>
          <Image
            src='/bronze_medal.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-20 h-20 xl:w-[180px] xl:h-[180px] absolute -top-[40%] object-cover'
            />
          <p className='xl:text-[36px] lg:text-lg'>2nd</p>
          <p className='xl:text-[24px] '>Runner</p>
          <p className='text-techpurple text-sm lg:text-lg xl:text-[36px]'>N300,000</p>
          </div>
        </div>
      </div>        
      </div>

      <div>
        <div className='text-white'>
        <h5>Partners and Sponsors</h5>
        <p>Getlinked Hackathon 1.0 is honored to have the following major 
              companies as its partners and sponsors</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
  {/* First Row */}
  <div className="logo-container">
    <Image
      src="/logo1.png"
      alt="Logo 1"
      width={100}
      height={100}
      className="w-20 h-20 object-fit"
    />
  </div>

  <div className="logo-container half-border-xx">
    <Image
      src="/logo2.png"
      alt="Logo 2"
      width={100}
      height={100}
      className="w-20 h-20 object-contain"
    />
  </div>

  <div className="logo-container">
    <Image
      src="/logo3.png"
      alt="Logo 3"
      width={100}
      height={100}
      className="w-20 h-20 object-contain"
    />
  </div>

  {/* Second Row */}
  <div className="logo-container half-border-right">
    <Image
      src="/logo4.png"
      alt="Logo 4"
      width={100}
      height={100}
      className="w-20 h-20"
    />
  </div>

  <div className="logo-container half-border-right">
    <Image
      src="/logo5.png"
      alt="Logo 5"
      width={100}
      height={100}
      className="w-20 h-20"
    />
  </div>

  <div className="logo-container half-border-right">
    <Image
      src="/logo6.png"
      alt="Logo 6"
      width={100}
      height={100}
      className="w-20 h-20"
    />
  </div>
</div>
</div>

    {/* prvacy div */}
    <div className='space-y-8 lg:flex items-center'>
        <div className='text-white text-center lg:text-left px-8 space-y-8 pt-6 lg:flex-1'>
          <div> 
            <h5 className='md:text-lg lg:text2xl'>Privacy Policy and <br/> <span className='text-techpurple'>Terms</span></h5>
            <p className='text-[12px]'>Last updated on September 12, 2023</p>
          </div> 
          <div>
            <p className='text-sm'>
            Below are our privacy & policy, which outline a 
              lot of goodies. it’s our aim to always take of our 
              participant
            </p>
          </div>
          <div className='privacy rounded-lg border-[1px] border-techpurple p-4 text-left space-y-6 xl:w-[569px] xl:h-[608px] lg:p-20'> 
            <div className='text-white'>
              <p>
              At getlinked tech Hackathon 1.0, we 
                value your privacy and are committed 
                to protecting your personal information.
                This Privacy Policy outlines how we collect,
                use, disclose, and safeguard your data 
                when you participate in our tech hackathon 
                event. By participating in our event, you 
                consent to the practices described in this 
                policy.
              </p>
            </div>
            <div className='space-y-8'>
                <div>
              <h5 className='text-techpurple'>Licensing Policy</h5>
              <h1>Here are terms of our Standard License:</h1>                    
                </div>

              <div className='text-white space-y-6 text-sm'>
              <div className='flex text-white items-center space-x-4'>
              <FontAwesomeIcon className='text-white bg-green-500 p-[2px] rounded-full' icon="fa-solid fa-check" />
              <p>The Standard License grants you a 
                non-exclusive right to navigate and 
                register for our event
                </p>
              </div>  

                <div className='flex text-white items-center space-x-4'>
              <FontAwesomeIcon className='text-white bg-green-500 p-[2px] rounded-full' icon="fa-solid fa-check" />
              <p>The Standard License grants you a 
                non-exclusive right to navigate and 
                register for our event
                </p>
              </div>               
              </div>
                <div className='flex justify-center '>
                <button className="px-6 rounded-md py-2 bg-gradient-to-r from-techpink ju text-center  to-techpurple text-white">Read More</button>
                </div>
            </div>
          </div>
        </div>


        <div className='privacy2  w-full lg:flex-1 items-center py-4'>
        <div className=''>

            <Image
            src="/lockman.png"
            alt="Logo 6"
            width={500}
            height={500}
            className="w-[262px] h-[351px] pt-28 over overflow-visible top-24 mx-auto lg:w-[559px] lg:h-[749px]  object-cover"
            />
        </div>            
        </div>

    </div>

    {/* footer */}
    <div className='foot p-8 text-sm space-y-12 pt-20 mt-10'>
      <div className='space-y-6 lg:flex space-x-2'>
      <div className='text-white space-y-6 lg:flex-1'>
        {/* logo */}
        <div className="text-md md:text-1xl font-bold">get<span className='text-techpurple'>linked</span></div>
        {/* info */}
        <p className=''>
        Getlinked Tech Hackathon is a technology
        innovation program established by a group 
        of organizations with the aim of showcasing 
        young and talented individuals in the field 
        of technology
        </p>
      {/* terms/privacy */}
      <div className='flex space-x-4 items-center'>
        <p>Terms of use</p>
        <div className='w-1 h-6 bg-techpurple'></div>
        <p>Privacy Policy</p>
      </div>
      </div>

      {/* links */}
      <div className='space-y-2 lg:flex-1'>
        <h5 className='text-techpurple'>Useful Links</h5>
        <ul className='text-white space-y-2'>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li>Register</li>

        </ul>
        <div className='flex space-x-4'>
        <p className='text-techpurple text-sm'>Follow us</p>
        <div className='flex text-white space-x-2'>
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </div>
        </div>
      </div>

        {/* contact */}
      <div className='space-y-2 text-sm lg:flex-1'>
        <h5 className='text-techpurple'>Contact Us</h5>
        <div className='flex space-x-4 text-white'>
          <Image
          src='call.svg'
          alt='call'
          width={12}
          height={12}
          className='text-black'
          />
          <p>+234 679 81819</p>
        </div>

        <div className='flex space-x-4 text-white'>
        <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          <p className='w-2/3'>27,Alara Street
            Yaba 100012
            Lagos State
            </p>
        </div>
      </div>
    </div> 

      <div>
          <p className='text-white text-sm text-center'>
          All rights reserved. © getlinked Ltd.
          </p>
      </div>       
      </div>




    </div>
  );
}

