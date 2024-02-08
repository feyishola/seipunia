"use client"
import { useState } from "react";

const Accordion = () => {
  const [sections, setSections] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
  });


  const handleToggle = (section) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <div className="w-full mx-auto">
      {/* Section 1 */}
      <div className="mb-4 rounded-md">
        <input
          type="checkbox"
          id="accordion1"
          className="hidden"
          checked={sections.accordion1}
          onChange={() => handleToggle('accordion1')}
        />
        <label
          htmlFor="accordion1"
          className="cursor-pointer block p-4 bg-[#D42F57] rounded shadow-md"
        >
          <div className="flex justify-between items-center">
            <div className="text-base font-medium text-[#F7F8F9]">
              {/* Click to {sections.accordion1 ? 'close' : 'open'} this one and close others */}
              Claims
            </div>
            <span className="arrow text-[#F7F8F9]">&#9660;</span>
          </div>
        </label>
        {sections.accordion1 && (
          <div className="p-4 bg-white rounded shadow-md">
            <p>Hello, this is the content of the first section.</p>
          </div>
        )}
      </div>

      {/* Section 2 */}
      <div className="mb-4">
        <input
          type="checkbox"
          id="accordion2"
          className="hidden"
          checked={sections.accordion2}
          onChange={() => handleToggle('accordion2')}
        />
        <label
          htmlFor="accordion2"
          className="cursor-pointer block p-4 bg-[#D42F57] rounded shadow-md"
        >
          <div className="flex justify-between items-center">
            <div className="text-base font-medium text-[#F7F8F9]">
              {/* Click to {sections.accordion2 ? 'close' : 'open'} this one and close others */}
              Contribution History
            </div>
            <span className="arrow text-[#F7F8F9]">&#9660;</span>
          </div>
        </label>
        {sections.accordion2 && (
          <div className="p-4 bg-white rounded shadow-md">
            <p>Hello, this is the content of the second section.</p>
          </div>
        )}
      </div>

      {/* Section 3 */}
      <div>
        <input
          type="checkbox"
          id="accordion3"
          className="hidden"
          checked={sections.accordion3}
          onChange={() => handleToggle('accordion3')}
        />
        <label
          htmlFor="accordion3"
          className="cursor-pointer block p-4 bg-[#D42F57] rounded shadow-md"
        >
          <div className="flex justify-between items-center">
            <div className="text-base font-medium text-[#F7F8F9]">
              {/* Click to {sections.accordion3 ? 'close' : 'open'} this one and close others */}
              Contribute
            </div>
            <span className="arrow text-[#F7F8F9]">&#9660;</span>
          </div>
        </label>
        {sections.accordion3 && (
          <div className="p-4 bg-white rounded shadow-md">
            <p>Hello, this is the content of the third section.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
