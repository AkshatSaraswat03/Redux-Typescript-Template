import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/usedTypedSelector'
import { Actions } from '../Redux'


const PackagesList: React.FC = () => {

  const dispatch = useDispatch()

  const [term, setTerm] = useState('')
  const { data, loading, error } = useTypedSelector((state) => state.NPMListReducer)
  //console.log(state)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(Actions.NPMaction(term))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={onChange} />
        <button>Search</button>
        {error && <h3>{error}</h3>}
        {loading && <h3>{loading}</h3>}
        {data.map((name) => <div key={name}>{name}</div>)}
      </form>
    </div>
  )
}

export default PackagesList
