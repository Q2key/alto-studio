import { AwilixContainer } from 'awilix'
import { createExpressServer, Express } from './api'
import { IServiceCradle } from './interface'

export const createService = (container: AwilixContainer<IServiceCradle>): Express =>
    container.build<Express>(createExpressServer)
