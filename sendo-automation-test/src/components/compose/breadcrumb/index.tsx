import React, { memo, useMemo, Fragment } from 'react'

import {
  Breadcrumb as BreadcrumbBase,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export interface BreadcrumbProps {
  items: { 
        name: string; 
        href?: string }[]
}
// mảng các đối tượng

export const Breadcrumb = memo(({ items }: BreadcrumbProps) => (
  <BreadcrumbBase>
    <BreadcrumbList>
      {items.map((item, index) => (
        <>
          {index + 1 === items.length ? (
            <BreadcrumbItem key={index}>
              <BreadcrumbPage>{item.name}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          )}
        </>
      ))}
    </BreadcrumbList>
  </BreadcrumbBase>
))
