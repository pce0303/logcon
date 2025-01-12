import { create } from "./create";
import { get } from "./get";
import { _delete } from "./delete";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  create,
  delete: _delete,
};
