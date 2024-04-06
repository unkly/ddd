'use client'
import { setupServer, SetupServer } from 'msw/node'
import { handlers } from './handler'

export const server: SetupServer = setupServer(...handlers)
