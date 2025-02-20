import { lazy, Suspense } from 'react'

// Lazy load BatchOp
export const BatchOp = lazy(() => import('./batch-op'))

// Wrap BatchOp with Suspense
export default function BatchOpEntry (props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BatchOp {...props} />
    </Suspense>
  )
}
