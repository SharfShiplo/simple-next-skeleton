import { getGeneralLayout } from "@/components/layouts/_general";
import ContactForm from "@/components/ui/forms/contact-form";
import SectionBlock from "@/components/ui/section-block";


export const ContactPage = () => {
  return (
      <SectionBlock>
          <div className="order-1 mb-8 w-full bg-light p-5 md:order-2 md:mb-0 md:p-8 ltr:md:ml-7 rtl:md:mr-7 ltr:lg:ml-9 rtl:lg:mr-9">
            <h1 className="mb-7 font-body text-xl font-bold text-heading md:text-2xl">
            Questions Or Concerns?
            </h1>
            <ContactForm />
          </div>
      </SectionBlock>
  );
};
ContactPage.getLayout = getGeneralLayout;
export default ContactPage;
