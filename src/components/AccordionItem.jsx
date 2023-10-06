import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2 rounded-md shadow-sm transition-all duration-300 ease-in-out">
      <header
        className="cursor-pointer py-3 px-6 bg-gray-100 text-gray-700 rounded-t-md flex justify-between items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{question}</h2>
        <ExpandMoreIcon className={`${isOpen ? 'transform rotate-180' : ''} transition-transform duration-300`} />
      </header>
      <div className={`${isOpen ? 'max-h-96' : 'max-h-0'} transition-max-height duration-300 overflow-hidden`}>
        <article className="p-6 border-t border-gray-200 bg-white text-gray-600 rounded-b-md">
          <p>{answer}</p>
        </article>
      </div>
    </div>
  );
};

export default AccordionItem;
