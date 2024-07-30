import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context'
import { Input } from './Input'

export const AddTodo = () => {
  const [input, setInput] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { addTodo } = useTodo()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() !== '') {
      addTodo(input)
      setInput('')
      toast.success('Todo added successfully!')
    } else {
      toast.error('Todo field cannot be empty!')
    }
  }

  return (
    <form onSubmit={handleSubmission} >
      <div className='flex justify-center w-full h-20'>
        <div className='w-1/3 mr-2'>
          <Input
            ref={inputRef}
            type="text"
            className='bg-gray-50 border border-blue-500 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder="start typing ..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className='text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm w-full sm:w-auto p-2.5 text-center  dark:hover:bg-blue-700 '
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}