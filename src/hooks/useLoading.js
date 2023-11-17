import { useState } from "react";

export const useLoading = () => {
  const loading = localStorage.getItem("loading")
  return loading
};
