const cities = [
  'Novato',
  'San-Rafael',
  'San-Francisco',
  'Oakland',
  'Richmond',
  'Berkeley',
  'Tampa',
  'Dallas',
  'San-Antonio',
  'San-Jose',
  'Austin',
  'Sacramento',
]

const randomCity = () => {
  const randomIndex = Math.floor(Math.random() * cities.length);
  return cities[randomIndex]
}

export { randomCity };