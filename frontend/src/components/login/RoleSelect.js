import { useMediaQuery } from "react-responsive";

export default function RoleSelect({ handleRegisterChange, roleError }) {
  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });
  return (
    <div
      className="reg_grid"
      style={{ marginBottom: `${roleError && !view3 ? "70px" : "0"}` }}
    >
      <label htmlFor="customer">
        Customer
        <input
          type="radio"
          name="role"
          id="customer"
          value="customer"
          onChange={handleRegisterChange}
        />
      </label>
      <label htmlFor="seller">
        Seller
        <input
          type="radio"
          name="role"
          id="seller"
          value="seller"
          onChange={handleRegisterChange}
        />
      </label>
      {roleError && (
        <div
          className={
            !view3 ? "input_error" : "input_error input_error_select_large"
          }
        >
          <div
            className={!view3 ? "error_arrow_bottom" : "error_arrow_left"}
          ></div>
          {roleError}
        </div>
      )}
    </div>
  );
}
