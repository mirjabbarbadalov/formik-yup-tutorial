import { Formik } from "formik";
import { object, string, boolean, number, date } from "yup";

export default function App() {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>Magic Form</h1>
        <p>Build forms in React without the tears</p>
      </div>
      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            agree: false,
            favColor: "",
          }}
          validationSchema={object({
            name: string().required("Name must be filled"),
            email: string().email().required("Email must be filled"),
            agree: boolean().required("You must accept policy"),
            favColor: string()
              .required("Choose one favorite color")
              .oneOf(["red", "blue", "green"]),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleReset,
            dirty,
            isSubmitting,
            touched,
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>Sign in</h3>
              <label htmlFor="name" className="topMargin">
                Name
              </label>
              <input
                type="text"
                placeholder="Mirishh..."
                id="name"
                className="input"
                value={values.name}
                onChange={handleChange}
              />

              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <label htmlFor="email" className="topMargin">
                Email
              </label>
              <input
                type="email"
                placeholder="mirishbedelov08@gmail.com"
                id="email"
                className="input"
                value={values.email}
                onChange={handleChange}
              />

              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="favColor" className="topMargin">
                Favorite color:
              </label>
              <select
                name="favColor"
                id="favColor"
                value={values.favColor}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: 150,
                  padding: "10px 15px ",
                  outline: "none",
                }}
              >
                <option value="" label="Choose color"></option>
                <option value="red" label="Red"></option>
                <option value="blue" label="Blue"></option>
                <option value="green" label="Green"></option>
              </select>

              {errors.favColor && touched.favColor && (
                <div className="input-feedback">{errors.favColor}</div>
              )}

              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label className="checkbox-label" htmlFor="agree">
                  {" "}
                  Accept privacy policy
                </label>
              </div>

              <button type="submit" disabled={!dirty || isSubmitting}>
                Sign In
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
