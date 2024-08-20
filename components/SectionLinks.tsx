import React from 'react';

const sections = [
  { title: 'Product', items: ['Overview', 'Features', 'Tutorials', 'Pricing', 'Releases'] },
  { title: 'Company', items: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'] },
  { title: 'Resources', items: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'] },
  { title: 'Social', items: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble'] },
  { title: 'Legal', items: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'] },
];

const SectionLinks = () => (
  <div className="flex items-start justify-end w-full gap-8">
    {sections.map(({ title, items }) => (
      <div key={title} className="min-w-[97.6px]">
        <p className="text-[#98A2B3]">{title}</p>
        <ul className="flex flex-col gap-3 pt-4" aria-label={`Links da seção ${title}`}>
          {items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default SectionLinks;