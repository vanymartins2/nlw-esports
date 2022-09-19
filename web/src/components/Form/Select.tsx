import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@radix-ui/react-icons'

export const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Root>,
  React.ComponentPropsWithRef<typeof SelectPrimitive.Root>
>(({ children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        ref={forwardedRef}
        className="inline-flex items-center px-3 py-3 gap-3 rounded bg-zinc-900 text-sm "
      >
        <SelectPrimitive.Value placeholder="Selecione o game que deseja jogar" />

        <SelectPrimitive.Icon>
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton>
            <ChevronUpIcon />
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton>
            <ChevronDownIcon />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
})

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Item
      {...props}
      ref={forwardedRef}
      className="flex items-center gap-2 px-3 py-2 bg-zinc-900 text-white text-sm cursor-pointer"
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator>
        <CheckIcon color="green" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
})
