import grapesController from '@/services/controller/grapes'
import authController from '@/services/controller/auth'
import userController from '@/services/controller/user'

export const API = {
  Grapes: grapesController,
  Auth: authController,
  User: userController,
}
