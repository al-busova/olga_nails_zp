import { Formik } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";
// import { useAppDispatch, useAppSelector } from "../../utils/hook";
// import { registration } from "../../redux/auth/authOperations";
// import { selectIsLoadingAuth } from "../../redux/auth/selectorsAuth";
import {
  Label,
  Button,
  FormFormik,
  InputFormik,
  ErrorText,
} from "./RegisterPage.styled";

interface IRegister {
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const emailIdReg = nanoid();
  const passwordIdReg = nanoid();
  //   const isLoading = useSelector(selectIsLoadingAuth);
  //   const dispatch = useAppDispatch();
  //   const user = useAppSelector((state) => state.auth.user);
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).max(16).required(),
  });

  const initialValues: IRegister = {
    email: "",
    password: "",
  };

    const handleSubmit = (): void => {
       console.log('sjbfhj');
    };

  return (
      <main>
          <p>hello</p>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormFormik autoComplete="off">
          <Label htmlFor={emailIdReg}>
            <span>Email</span>
            <InputFormik
              id={emailIdReg}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </Label>
          <ErrorText name="email" component="p" />
          <Label htmlFor={passwordIdReg}>
            <span>Password</span>
            <InputFormik
              id={passwordIdReg}
              type="password"
              name="password"
              placeholder="Create password"
            />
          </Label>
          <ErrorText name="password" component="p" />
          <Button type="submit">Register</Button>
        </FormFormik>
      </Formik> */}
    </main>
  );
};
export default RegisterPage;
