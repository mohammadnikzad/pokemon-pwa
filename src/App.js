import React, { useState, useEffect } from 'react'
import { getAllPokemonList } from './api/pokemon'

function App() {
  const [lists, setLists] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPokemonList()
      setLists(data?.results)
    }

    fetchData()
  }, [])

  return (
    <div className='App'>
      <div
        style={{
          marginTop: '40px',
          justifyContent: 'space-around',
          display: 'flex',
          flexWrap: 'wrap',
          width: '90%',
          margin: 'auto',
        }}
      >
        {lists?.map((list, i) => {
          return (
            <div
              key={i}
              style={{
                width: '400px',
                height: '330px',
                border: '2px solid #000',
                margin: '30px 10px',
              }}
            >
              <div style={{ padding: '5px 10px' }}>
                <p style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
                  {list.name}
                </p>
              </div>
              <img
                src={`https://img.pokemondb.net/artwork/large/${list.name}.jpg`}
                alt='pokemon'
                style={{ height: '300px', width: '300px' }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
