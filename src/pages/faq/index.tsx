import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

interface FaqData {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const faqData: FaqData[] = [
    {
      question: 'When is GDSC WOW Pune happening?',
      answer: 'GDSC WOW Pune is scheduled to take place on ##. So do mark your calendars ;)',
    },
    {
      question: 'Who can participate in GDSC WOW Pune?',
      answer: 'GDSC WOW Pune welcomes students, developers, tech enthusiasts, and anyone passionate about technology. All are invited to join this collaborative celebration!',
    },
    {
      question: 'What kind of activities can I expect at GDSC WOW Pune?',
      answer: 'GDSC WOW Pune promises a wide range of activities, including lightning talks by industry experts, networking sessions, and lot more!. ',
    },
    {
      question: 'I am a beginner in programming, can I still register?',
      answer: 'Absolutely yes! GDSC WOW Pune is designed for all levels of expertise. On the other hand, GDSC WOW is an excellent opportunity to get to know about the latest technologies if you are just starting',
    },
    {
      question: 'What will attendees get by participating in the event?',
      answer: 'By participating in GDSC WOW Pune, attendees gain valuable insights from industry leaders, enhance their networking opportunities, and win some cool GDSC merchandise',
    },
    {
      question: 'Is it mandatory to register to participate in the event?',
      answer: 'Yes. Each individual may register for only one ticket.',
    },
    {
      question: 'Where can I receive updates about WOW?',
      answer: 'Follow our social media handles for the latest first hand updates.'
    },
    {
      question: 'How can I get involved with GDSC beyond GDSC WOW?',
      answer: 'Follow our socials and join the WOW community: link'
    },

    // Add more FAQ items as needed
  ];

  const [openItems, setOpenItems] = useState<Array<number>>([]);

  const handleToggle = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((item) => item !== index)
        : [...prevOpenItems, index]
    );
  };

  const colors = ['#0F9D58', '#F4B400', '#4285F4', '#FD3630'];

  return (
    <div id="faq" className='w-full   bg-white flex flex-col items-center justify-center'>
      <h2 className='font-semibold mb-4 text-black text-[64px]'>FAQ</h2>
      <div className='w-full max-w-[1254px]'>
        {faqData.map((item, index) => {
          const borderColor = colors[index % colors.length];
          const textColor = colors[index % colors.length];
          const isOpen = openItems.includes(index);

          return (
            <div
              key={index}
              className={`mb-4 p-4 bg-white shadow-lg w-full transition-all duration-300`}
              style={{ borderLeft: `4px solid ${borderColor}` }}
            >
              <div className='flex justify-between items-center text-black'>
                <div className='text-lg'>{item.question}</div>
                <span
                  className='cursor-pointer ml-2 text-black'
                  onClick={() => handleToggle(index)}
                >
                  {isOpen ? <AiOutlineClose /> : <AiOutlinePlus />}
                </span>
              </div>
              {isOpen && (
                <div className='mt-2'>
                  <div style={{ color: textColor }}>{item.answer}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;