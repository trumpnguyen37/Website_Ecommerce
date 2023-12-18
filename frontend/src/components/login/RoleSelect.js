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
      <label htmlFor="admin">
        Admin
        <input
          type="radio"
          name="role"
          id="admin"
          value="admin"
          onChange={handleRegisterChange}
        />
      </label>
      <label htmlFor="user">
        User
        <input
          type="radio"
          name="role"
          id="user"
          value="user"
          onChange={handleRegisterChange}
        />
      </label>
      <label htmlFor="guest">
        Guest
        <input
          type="radio"
          name="role"
          id="guest"
          value="guest"
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
