import { get } from "./get";
import { _delete } from "./delete";
import { create } from "./create";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  delete: _delete,
  create,
};
