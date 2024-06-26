'use client';

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, SparklesIcon} from '@heroicons/react/20/solid'
import { getPaidFeatures } from '../lib/paidFeatures';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function MultiSelect({field, fieldDef, userPdfSettings, setUserPdfSettings, section}) {
  const [selected, setSelected] = useState(fieldDef.options[fieldDef.defaultOption]);

  const handelSelection = ({ id }) => {
    
    setSelected(fieldDef.options[id - 1])
    
    setUserPdfSettings((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section], 
          [field]: fieldDef.options[id - 1].value
        }
      })
    )
  }

  return (
    <Listbox value={selected} onChange={(index) => handelSelection(index)}>
      {({ open }) => (
        <>
          <FieldName field={field}/>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-base-300 py-[5px] pl-3 pr-10 text-left text-secondary shadow-sm ring-1 ring-inset ring-secondary focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
              <span className="block truncate select-none">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-secondary" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-base-100 py-1 text-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {fieldDef.options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-primary text-white' : 'text-secondary',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {option.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-secondary',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}


function FieldName({ field }) {
  const paidFeatures = getPaidFeatures();

  return (
    <>
      {
        paidFeatures.includes(field) ?
          <Listbox.Label className="absolute z-20 -top-2 left-2 inline-block bg-base-300 px-1 text-xs font-medium text-secondary">
            {field}
            <SparklesIcon className={`absolute -top-1 -right-1 text-yellow-400 w-3 h-3`}/>
          </Listbox.Label>
          : 
          <Listbox.Label className="absolute z-20 -top-2 left-2 inline-block bg-base-300 px-1 text-xs font-medium text-secondary">{field}</Listbox.Label>

      }
    </>
  )
}
