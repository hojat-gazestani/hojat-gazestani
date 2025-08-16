import { SectionTitleTag } from "./SectionTitleTag";

export const Contact = () => {
  return (
    <section className="text-center space-y-4">
      <SectionTitleTag text="Contact" />
      
      <div className="space-y-2">
        <p>
          <a
            href="mailto:Hojat.Gazestani@gmail.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Hojat.Gazestani@gmail.com
          </a>
        </p>
        
        <p>
          <a 
            href="tel:+989138636926" 
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            (+98) 913 863 6926
          </a>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <a
          href="https://www.linkedin.com/in/hojat-gazestani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/hojat-gazestani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://medium.com/@hojat-gazestani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Medium
        </a>
      </div>
    </section>
  );
};
