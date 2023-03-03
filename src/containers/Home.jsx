import React, { useState, Fragment, useContext } from 'react'
import Editor from "@monaco-editor/react";
import FilterHtmlContext from '../context/FilterHtml';
import websitesList from '../samsungwebsites';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {

  const {setCode, code, allurls, validateHtml, setallurls} = useContext(FilterHtmlContext);
  const [selectedWebsite, setSelectedWebsite] = useState(websitesList[0]);

  function handleEditorChange(value, event) {
    setCode(value)
  }

  const validateHtmlButton = () =>{
    validateHtml(selectedWebsite);
  }
  
  const clearEditor = () =>{
    setCode('');
    setallurls([]);
  }

  return (

<section className="text-gray-600 body-font">
  <div className="container flex flex-wrap px-4 py-6 mx-auto items-center">
    <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
      <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">Paste your html code below</h1>
      <Editor
          width= "78vh"
          height= "50vh"
          language="html"
          value={code}
          onChange={handleEditorChange}
          theme="vs-dark"
          defaultLanguage="html"
        />
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-12">
    <div className="flex justify-around flex-row">
    <Listbox value={selectedWebsite} onChange={setSelectedWebsite}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-[300px] z-50 cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedWebsite.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {websitesList.map((website,websiteIdx) => (
                <Listbox.Option
                  key={websiteIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900'
                    }`
                  }
                  value={website}
                >
                  {({ selectedWebsite }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selectedWebsite ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {website.name}
                      </span>
                      {selectedWebsite ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
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
      </Listbox>
      {code.length > 2 && <button className="btn " onClick={clearEditor}>Clear</button>}
      <button className="btn btn-primary" onClick={validateHtmlButton}>Validate HTML</button>

      </div>
      <div className="mockup-code z-30 my-4 overflow-y-auto max-h-screen h-96">
        <pre data-prefix="$"><code>yarn start html check</code></pre> 
        {
        // eslint-disable-next-line array-callback-return
        allurls?.map((singlelink, index)=>{
          return(
            <pre key={index} data-prefix=">" className="text-warning text-xs"><code className='text-xs'>{
              <Typewriter
                words={[singlelink]}
                loop={1}
                cursor = "true"
                cursorStyle=''
                typeSpeed={50}
                delaySpeed={500}
              />
          }</code></pre>
          )

        })}
        <pre data-prefix=">" className="text-success text-xs"><code className='text-xs'>Done!</code></pre>
      </div>
    </div>
  </div>
</section>

  )
}

export default Home