'use client'
import { setupServer, SetupServer } from 'msw/node'
import { handlers } from './handler'
import { setupWorker, SetupWorker } from 'msw'

export const server: SetupServer = setupServer(...handlers)

export const worker: SetupWorker = setupWorker(...handlers)
