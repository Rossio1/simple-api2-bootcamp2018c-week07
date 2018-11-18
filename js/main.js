const submit = document.getElementById('submit')
const select = document.getElementById('pokeName')
fetch("https://api.pokemontcg.io/v1/cards")
  .then(res => res.json())
  .then(response =>{
   pselect(response.cards)
   console.log(response);
 })
  function pselect(pokemons){
    for(let i = 0; i< pokemons.length; i++){
      let text = document.createTextNode(pokemons[i].name)
      let option = document.createElement('option')
      option.appendChild(text)
      select.append(option)
      option.value = pokemons[i].imageUrl
    }
  }
submit.addEventListener('click',function(){
  console.log(select.value)
  if(select.value == null){
    alert('Select A Pokemon From the Drop Down')
  }else{
    document.getElementsByTagName("img")[0].src = select.value
  }
})
