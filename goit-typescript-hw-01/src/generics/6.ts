type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const newParams: Params = {
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
};

const newParams1: Form = {
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  errors: {
    email: ["", ""],
  },
};