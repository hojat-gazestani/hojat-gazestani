import { SectionTitleTag } from "./SectionTitleTag";

export const Contact = () => {
  return (
    <section className="text-center">
      <SectionTitleTag text="Contact" />
      <p className="mt-4">
        <a
          href="mailto:Hojat.Gazestani@gmail.com"
          className="text-blue-600 hover:underline"
        >
          Hojat.Gazestani@gmail.com
        </a>
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/hojat-gazestani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/hojat-gazestani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a href="tel:+989138636926" className="text-blue-600 hover:underline">
          (+98) 913 863 6926
        </a>
        <a
          href="https://medium.com/@hojat-gazestani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Medium
        </a>
      </div>
    </section>
  );
};
