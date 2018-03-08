export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      if(action.pet.name && action.pet.species && action.pet.id){
        return {pets: [...state.pets, action.pet]}
      }
    case 'REMOVE_PET':
      let newState = state.pets.filter((pet) => pet.id !== action.id)
      return { pets: newState }
    default:
      return { pets: state.pets  }
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let ul = document.createElement('ul')
  let li = document.createElement('li')
  li.innerText = `Splash`
  ul.appendChild(li)

  const container = document.getElementById('container')
  container.appendChild(ul)
}
