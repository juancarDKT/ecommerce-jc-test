// @ts-nocheck
import productsInfo from "../../../../static/products.json";
import { json } from "@sveltejs/kit";
import { errorWrongType, errorNotFound } from "./errorMessage.const.js";

export const GET = async ({ url }) => {
  const imputQuery = url?.searchParams?.get("q") || undefined;
  const regex = /[a-zA-Z]{3,100}/;
  if (!regex.test(imputQuery)) {
    return json(errorWrongType);
  }
  const productsSelected = productsInfo.products.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(imputQuery.toLowerCase())
  );

  return handleResult(productsSelected);
};

const handleResult = (productsResult = []) => {
  if (productsResult.length > 0) {
    return json({
      message: productsResult.length,
      data: productsResult,
    });
  } else {
    return json(errorNotFound);
  }
};
