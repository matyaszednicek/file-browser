/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NotFoundImport } from './routes/not-found'
import { Route as SplatImport } from './routes/$'

// Create/Update Routes

const NotFoundRoute = NotFoundImport.update({
  id: '/not-found',
  path: '/not-found',
  getParentRoute: () => rootRoute,
} as any)

const SplatRoute = SplatImport.update({
  id: '/$',
  path: '/$',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/$': {
      id: '/$'
      path: '/$'
      fullPath: '/$'
      preLoaderRoute: typeof SplatImport
      parentRoute: typeof rootRoute
    }
    '/not-found': {
      id: '/not-found'
      path: '/not-found'
      fullPath: '/not-found'
      preLoaderRoute: typeof NotFoundImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/$': typeof SplatRoute
  '/not-found': typeof NotFoundRoute
}

export interface FileRoutesByTo {
  '/$': typeof SplatRoute
  '/not-found': typeof NotFoundRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/$': typeof SplatRoute
  '/not-found': typeof NotFoundRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/$' | '/not-found'
  fileRoutesByTo: FileRoutesByTo
  to: '/$' | '/not-found'
  id: '__root__' | '/$' | '/not-found'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  SplatRoute: typeof SplatRoute
  NotFoundRoute: typeof NotFoundRoute
}

const rootRouteChildren: RootRouteChildren = {
  SplatRoute: SplatRoute,
  NotFoundRoute: NotFoundRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/$",
        "/not-found"
      ]
    },
    "/$": {
      "filePath": "$.tsx"
    },
    "/not-found": {
      "filePath": "not-found.tsx"
    }
  }
}
ROUTE_MANIFEST_END */