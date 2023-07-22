import { AwilixContainer } from 'awilix'
import { createExpressServer, Express } from './api'
import { IServiceCradle } from './abstractions'

export const createService = (container: AwilixContainer<IServiceCradle>): Express =>
    container.build<Express>(createExpressServer)
