// @ts-nocheck
import productsInfo from "../../../../static/products.json";
import { json } from "@sveltejs/kit";
import { errorWrongType, errorNotFound } from "./errorMessage.const.js";

export const GET = async ({ url }) => {
  const inputQuery = url?.searchParams?.get("q") || undefined;
  const regex = /[a-zA-Z]{3,100}/;
  try {
    if (!regex.test(inputQuery)) {
      return json(errorWrongType);
    }
    const productsSelected = getMatchedProducts(productsInfo, inputQuery);

    return handleResult(productsSelected);
  } catch (error) {
    return json(error.message);
  }
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
const getMatchedProducts = (productsInfo = {}, input = "") => {
  const results = productsInfo.products?.filter((item) => {
    JSON.stringify(item).toLowerCase().includes(input.toLowerCase());
  });
  return results;
};
