import { Router } from "express"
import { autenticacaoRouter } from "./route/autenticacaoRouter"
import { enderecoRouter } from "./route/enderecoRouter"
import { ingredienteRouter } from "./route/ingredienteRouter"
import { lancheRouter } from "./route/lancheRouter"
import { pedidoRouter } from "./route/pedidoRouter"

export const routers = Router()
routers.use("/autenticacao", autenticacaoRouter)
routers.use("/pedido", pedidoRouter)
routers.use("/lanche", lancheRouter)
routers.use("/endereco", enderecoRouter)
routers.use("/ingrediente", ingredienteRouter)