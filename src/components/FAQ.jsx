import FAQItem from "./ui/FAQItem";

const FAQs = [
  {
    question: "What is URLyzer?",
    answer:
      "URLyzer is a web application I created to solve a little problem I have in another project. It simply extracts some URL information but, most importantly in my case, the query parameters, allowing you to quickly copy it to your clipboard!",
  },
  {
    question: "Is my data being tracked?",
    answer:
      "No, I don't even know how to do that! Jokes aside, I am not storing any URL you analyze here. Also, this project is open-source and you can find the source-code on my GitHub (see the footer) and check this for yourself!",
  },
  {
    question: "Will there be more features?",
    answer:
      "To be honest, I am not sure, as it will mostly depend on what I need. However, if anyone suggests / requests a feature, I will definitely work on it!",
  },
];

export default function FAQ() {
  return (
    <>
      <section id="faq">
        <div className="container mx-auto mt-24">
          <h2 className="mb-6 text-3xl text-primary font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-tertiary text-center text-grayishBlue">
            Here are some FAQs. If you have any other questions you would like
            answered please feel free to email me or reach out in any of my
            socials!
          </p>
        </div>
      </section>

      <section id="faq-accordion">
        <div className="container mx-auto px-6 mb-26">
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {FAQs.map((faq, index) => {
              return (
                <FAQItem
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
