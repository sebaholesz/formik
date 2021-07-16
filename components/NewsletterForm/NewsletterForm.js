import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import RadioGroup from "../RadioGroup/RadioGroup";
import { NewsletterFormStyled, StyledButton } from "./NewsletterForm.style";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().matches(
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    "jméno nemůže obsahovat speciální znaky nebo číslice"
  ),
  email: Yup.string()
    .email("nesprávný formát emailové adresy")
    .required("email je vyžadován"),
  gdprCompliance: Yup.bool().oneOf([true], "souhlas s GDPR je vyžadován"),
  newsletterFrequency: Yup.string().required(
    "je nutno vybrat frekvenci zasílání newsletteru"
  ),
});

const NewsletterForm = (props) => {
  return (
    <NewsletterFormStyled>
      <Formik
        initialValues={{
          email: "",
          fullName: "",
          gdprCompliance: false,
          newsletterFrequency: "weekly",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <Input type="email" name="email" label="Váš email" required={true} />
          <Input
            type="text"
            name="fullName"
            label="Vaše jméno"
            required={false}
          />
          <Checkbox
            name="gdprCompliance"
            label="Souhlasíte s podmínkami GDPR"
            required={true}
          />
          <RadioGroup
            label="Jak často chcete dostávat náš newsletter?"
            required={true}
            options={[
              { value: "weekly", label: "jednou týdně" },
              { value: "monthly", label: "jednou měsíčně" },
            ]}
            name="newsletterFrequency"
          />
          <StyledButton type="submit">Odeslat</StyledButton>
        </Form>
      </Formik>
    </NewsletterFormStyled>
  );
};

export default NewsletterForm;
