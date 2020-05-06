import { ActionTypes } from "../types";

export const toggleAmount = amount => ({
    type: ActionTypes.SELECT,
    payload: amount,

});
