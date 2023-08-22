import { AwilixContainer } from 'awilix'
import { createExpressServer, Express } from './interface-adapters/api'
import { IServiceCradle } from './appication/abstractions'

export const createService = (container: AwilixContainer<IServiceCradle>): Express =>
    container.build<Express>(createExpressServer)
