import type { CreateContactUsInput } from '@/types';
import Button from '@/components/ui/button';
import { Form } from '@/components/ui/forms/form';
import Input from '@/components/ui/forms/input';
import TextArea from '@/components/ui/forms/text-area';
import * as yup from 'yup';
import { useContact } from '@/rest/user';

const contactFormSchema = yup.object().shape({
  name: yup.string().required('You must need to provide your name'),
  email: yup
    .string()
    .email('The provided email address format is not valid')
    .required('You must need to provide your email address'),
  subject: yup.string().required('What subject do you want to discuss with us?'),
  description: yup.string().required('Tell us more about it'),
});
const ContactForm = () => {
  const { mutate, isLoading } = useContact();

  function onSubmit(values: CreateContactUsInput) {
    mutate(values);
  }

  return (
    <Form<CreateContactUsInput>
      onSubmit={onSubmit}
      validationSchema={contactFormSchema}
    >
      {({ register, formState: { errors } }) => (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input
              label={"Name"}
              {...register('name')}
              variant="outline"
              error={errors.name?.message!}
            />
            <Input
              label={"Email"}
              {...register('email')}
              type="email"
              variant="outline"
              error={errors.email?.message!}
            />
          </div>
          <Input
            label={"Subject"}
            {...register('subject')}
            variant="outline"
            className="my-6"
            error={errors.subject?.message!}
          />
          <TextArea
            label={"Description"}
            {...register('description')}
            variant="outline"
            className="my-6"
            error={errors.description?.message!}
          />

          <Button loading={isLoading} disabled={isLoading}>
            Submit
          </Button>
        </>
      )}
    </Form>
  );
};

export default ContactForm;
