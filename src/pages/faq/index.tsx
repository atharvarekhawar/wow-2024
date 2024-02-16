import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

interface FaqData {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const faqData: FaqData[] = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How can I install React?',
      answer: 'You can install React using npm or yarn. For example: npm install react',
    },
    {
      question: 'Is React easy to learn?',
      answer: 'Yes, React has a relatively gentle learning curve and is widely used in the industry.',
    },
    {
      question: 'What are React components?',
      answer: 'React components are reusable, self-contained building blocks for a user interface.',
    },
    {
      question: 'How do I pass data between components in React?',
      answer: 'Data can be passed between components using props or by using a state management library.',
    },
    {
      question: 'Can I use React with TypeScript?',
      answer: 'Yes, React has great support for TypeScript, and many projects use them together.',
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe what the UI should look like.',
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