import React from "react";
import { Alert, Snackbar, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setClose } from "../../../redux/slices/myAlert-slice";
import { useEffect } from "react";

const MyAlert = () => {
    let dispatch = useDispatch()
    let {isOpen, type, text} = useSelector(state => state.myAlert)

  useEffect(() => {
    setTimeout(() => {
      dispatch(setClose());
    }, 5000);
  }, [isOpen])

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={() => setClose()}>
        <Alert onClose={() => dispatch(setClose())} severity={type} sx={{ width: "100%" }}>
          {text}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default MyAlert;
