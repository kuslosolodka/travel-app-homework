import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  userSelector,
  fetchUserBytoken,
  clearState,
} from "../../features/UserSlice";
import { Audio } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isFetching, isError } = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem("token") }));
  }, []);

  const { fullName, email } = useSelector(userSelector);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      navigate("/sign-in");
    }
  }, [isError]);

  const onLogOut = () => {
    localStorage.removeItem("token");

    navigate("/sign-in");
  };

  return (
    <div className="container mx-auto">
      {isFetching ? (
        <Audio type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <Fragment>
          <div className="container mx-auto">
            Welcome back{" "}
            <h3>
              {fullName}
              {email}
            </h3>
          </div>

          <button
            onClick={onLogOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Log Out
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
