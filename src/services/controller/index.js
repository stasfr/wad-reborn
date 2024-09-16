import grapesController from "@/services/controller/grapes";
import userController from "@/services/controller/user";
import userGrapesController from "@/services/controller/userGrapes";

export const API = {
  Grapes: grapesController,
  User: userController,
  UserGrapes: userGrapesController,
};
